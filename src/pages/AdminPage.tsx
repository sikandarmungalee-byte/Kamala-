import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Lock, Calendar, ShoppingBag, Clock, Trash2, Edit2, Plus, Image, Upload, Search, Check, X, Sparkles } from 'lucide-react';
import { BookingRequest, Product } from '../types';
import { toast } from 'sonner';
import {
  subscribeBookingsFromDb,
  updateBookingStatusInDb,
  deleteBookingFromDb
} from '../lib/firebase';
import { useProductsList } from '../lib/useProducts';

const PRESET_IMAGES = [
  { name: 'Drops / Tincture', url: 'https://images.unsplash.com/photo-1608248597282-cb89d97bfb21?auto=format&fit=crop&q=80&w=600' },
  { name: 'Capsules / Bottle', url: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=600' },
  { name: 'Powder / Shake', url: 'https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?auto=format&fit=crop&q=80&w=600' },
  { name: 'Cream / Serum', url: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=600' },
  { name: 'Ampoules / Injection', url: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=600' },
];

export const AdminPage: React.FC = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [activeTab, setActiveTab] = useState<'bookings' | 'products'>('bookings');
  
  const [bookings, setBookings] = useState<BookingRequest[]>([]);
  const { products, updateProduct, addProduct } = useProductsList();

  const [productSearch, setProductSearch] = useState('');
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [editPrice, setEditPrice] = useState<string>('');
  const [editImage, setEditImage] = useState<string>('');
  const [editName, setEditName] = useState<string>('');
  const [editUnit, setEditUnit] = useState<string>('');
  const [editDescription, setEditDescription] = useState<string>('');

  const [isAddingNew, setIsAddingNew] = useState(false);
  const [newProd, setNewProd] = useState({
    name: '',
    category: 'Drops',
    price: 350,
    unit: '50ml',
    description: '',
    image: ''
  });

  useEffect(() => {
    // Read cached bookings from localStorage as instant fallback
    const saved = localStorage.getItem('ka_admin_bookings');
    if (saved) {
      try {
        setBookings(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }

    // Subscribe to Firestore database live updates
    const unsubscribe = subscribeBookingsFromDb((dbBookings) => {
      if (dbBookings && dbBookings.length > 0) {
        setBookings(dbBookings);
        localStorage.setItem('ka_admin_bookings', JSON.stringify(dbBookings));
      }
    });

    return () => unsubscribe();
  }, []);

  const handleStartEdit = (prod: Product) => {
    setEditingProduct(prod);
    setEditPrice(String(prod.price));
    setEditImage(prod.image || '');
    setEditName(prod.name);
    setEditUnit(prod.unit);
    setEditDescription(prod.description);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, isNew = false) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 3 * 1024 * 1024) {
      toast.error('Image file size should be less than 3MB');
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64Url = reader.result as string;
      if (isNew) {
        setNewProd(prev => ({ ...prev, image: base64Url }));
      } else {
        setEditImage(base64Url);
      }
      toast.success('Image uploaded and previewed!');
    };
    reader.readAsDataURL(file);
  };

  const handleSaveEdit = async () => {
    if (!editingProduct) return;

    const numPrice = parseFloat(editPrice);
    if (isNaN(numPrice) || numPrice < 0) {
      toast.error('Please enter a valid price');
      return;
    }

    await updateProduct(editingProduct.id, {
      name: editName,
      price: numPrice,
      image: editImage,
      unit: editUnit,
      description: editDescription
    });

    toast.success(`Saved updates for ${editName}!`);
    setEditingProduct(null);
  };

  const handleCreateProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProd.name || !newProd.price) {
      toast.error('Product name and price are required');
      return;
    }

    const created = await addProduct({
      name: newProd.name,
      category: newProd.category,
      price: Number(newProd.price),
      unit: newProd.unit,
      description: newProd.description,
      image: newProd.image
    });

    toast.success(`Created product: ${created.name}`);
    setIsAddingNew(false);
    setNewProd({ name: '', category: 'Drops', price: 350, unit: '50ml', description: '', image: '' });
  };

  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(productSearch.toLowerCase()) ||
    p.category.toLowerCase().includes(productSearch.toLowerCase())
  );

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode.toLowerCase() === 'kamala' || passcode === 'admin' || passcode === '1234') {
      setAuthenticated(true);
      toast.success('Admin access granted');
    } else {
      toast.error('Invalid admin passcode. Try "kamala" or "admin".');
    }
  };

  const toggleBookingStatus = async (id: string) => {
    const booking = bookings.find(b => b.id === id);
    if (!booking) return;

    const nextStatus = booking.status === 'confirmed' ? 'pending' : 'confirmed';
    
    // Update local state
    const updated = bookings.map(b => b.id === id ? { ...b, status: nextStatus as 'pending' | 'confirmed' } : b);
    setBookings(updated);
    localStorage.setItem('ka_admin_bookings', JSON.stringify(updated));

    // Update Firestore
    await updateBookingStatusInDb(id, nextStatus);
    toast.success('Booking status updated in database');
  };

  const deleteBooking = async (id: string) => {
    const updated = bookings.filter(b => b.id !== id);
    setBookings(updated);
    localStorage.setItem('ka_admin_bookings', JSON.stringify(updated));

    await deleteBookingFromDb(id);
    toast.success('Booking removed from database');
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen pt-24 pb-20 bg-cream flex items-center justify-center px-6">
        <div className="max-w-md w-full bg-white p-8 border border-border shadow-md">
          <div className="w-12 h-12 rounded-full bg-sage-light flex items-center justify-center mx-auto mb-4">
            <Lock className="w-6 h-6 text-sage" />
          </div>
          <h1 className="font-serif text-3xl text-center text-foreground mb-2">Admin Dashboard</h1>
          <p className="text-xs text-center text-muted-foreground mb-6">
            Enter admin passcode to manage session bookings and product inventory.
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-1.5">
                Passcode
              </label>
              <input
                type="password"
                placeholder="Enter 'kamala' or 'admin'"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                className="w-full h-11 px-4 bg-cream border border-border text-sm focus:outline-none focus:border-sage"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-sage text-white text-sm font-sans hover:bg-sage-dark transition-colors"
            >
              Unlock Dashboard
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 bg-cream pb-20">
      {/* Header */}
      <div className="bg-sage text-white py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <p className="text-xs uppercase tracking-widest text-white/70 mb-1">
              Kamala Wellness
            </p>
            <h1 className="font-serif text-4xl text-white">Management Dashboard</h1>
          </div>
          <button
            onClick={() => setAuthenticated(false)}
            className="text-xs bg-white/20 hover:bg-white/30 text-white px-4 py-2 transition-colors"
          >
            Lock Dashboard
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10">
        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          <div className="bg-white border border-border p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-sage-light flex items-center justify-center shrink-0">
              <Calendar className="w-6 h-6 text-sage" />
            </div>
            <div>
              <p className="text-2xl font-serif font-bold text-foreground">{bookings.length}</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Total Bookings</p>
            </div>
          </div>

          <div className="bg-white border border-border p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-sage-light flex items-center justify-center shrink-0">
              <ShoppingBag className="w-6 h-6 text-sage" />
            </div>
            <div>
              <p className="text-2xl font-serif font-bold text-foreground">{products.length}</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Gfrag® Products</p>
            </div>
          </div>

          <div className="bg-white border border-border p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-sage-light flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6 text-sage" />
            </div>
            <div>
              <p className="text-2xl font-serif font-bold text-foreground">
                {bookings.filter(b => b.status === 'pending').length}
              </p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Pending Confirmation</p>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-border mb-8 bg-white">
          <button
            onClick={() => setActiveTab('bookings')}
            className={`px-6 py-3 text-sm font-sans font-medium transition-colors border-b-2 ${
              activeTab === 'bookings'
                ? 'border-sage text-sage'
                : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            Session Bookings ({bookings.length})
          </button>
          <button
            onClick={() => setActiveTab('products')}
            className={`px-6 py-3 text-sm font-sans font-medium transition-colors border-b-2 ${
              activeTab === 'products'
                ? 'border-sage text-sage'
                : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            Product Catalog & Prices ({products.length})
          </button>
        </div>

        {/* Tab 1: Bookings List */}
        {activeTab === 'bookings' && (
          <div className="bg-white border border-border overflow-x-auto shadow-xs">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-cream border-b border-border text-[11px] uppercase tracking-wider text-muted-foreground">
                  <th className="p-4">ID / Date</th>
                  <th className="p-4">Client</th>
                  <th className="p-4">Service</th>
                  <th className="p-4">Preferred Slot</th>
                  <th className="p-4">Status</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-xs">
                {bookings.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="p-8 text-center text-muted-foreground">
                      No session requests recorded yet.
                    </td>
                  </tr>
                ) : (
                  bookings.map((booking) => (
                    <tr key={booking.id} className="hover:bg-cream/50 transition-colors">
                      <td className="p-4 font-mono font-medium text-foreground">
                        {booking.id}
                        <br />
                        <span className="text-[10px] text-muted-foreground font-sans">
                          {booking.created_at ? new Date(booking.created_at).toLocaleDateString() : ''}
                        </span>
                      </td>
                      <td className="p-4">
                        <p className="font-semibold text-foreground">{booking.name}</p>
                        <p className="text-muted-foreground">{booking.email}</p>
                        <p className="text-muted-foreground">{booking.phone}</p>
                      </td>
                      <td className="p-4 font-medium text-sage-dark">{booking.service}</td>
                      <td className="p-4 text-foreground">
                        {booking.preferred_date || 'Flexible'}
                        {booking.preferred_time && ` at ${booking.preferred_time}`}
                      </td>
                      <td className="p-4">
                        <span
                          className={`inline-block px-2.5 py-1 text-[10px] uppercase tracking-wider rounded-full font-semibold ${
                            booking.status === 'confirmed'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-amber-100 text-amber-800'
                          }`}
                        >
                          {booking.status}
                        </span>
                      </td>
                      <td className="p-4 text-right space-x-2">
                        <button
                          onClick={() => toggleBookingStatus(booking.id!)}
                          className="px-2.5 py-1 text-[11px] bg-sage-light text-sage-dark hover:bg-sage hover:text-white transition-colors"
                        >
                          {booking.status === 'confirmed' ? 'Mark Pending' : 'Confirm'}
                        </button>
                        <button
                          onClick={() => deleteBooking(booking.id!)}
                          className="p-1 text-muted-foreground hover:text-red-600 transition-colors"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4 inline" />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}

        {/* Tab 2: Products Catalog & Management */}
        {activeTab === 'products' && (
          <div className="bg-white border border-border p-6 shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-serif text-2xl text-foreground">Gfrag® Product Management</h3>
                <p className="text-xs text-muted-foreground">
                  Update prices, upload photos, or add new products. Changes sync instantly to Firestore database.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="relative flex-1 sm:w-64">
                  <Search className="w-4 h-4 absolute left-3 top-2.5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search product name or category..."
                    value={productSearch}
                    onChange={(e) => setProductSearch(e.target.value)}
                    className="w-full h-9 pl-9 pr-3 text-xs bg-cream border border-border focus:outline-none focus:border-sage"
                  />
                </div>
                <button
                  onClick={() => setIsAddingNew(true)}
                  className="px-4 py-2 bg-sage text-white text-xs font-sans font-medium flex items-center gap-1.5 hover:bg-sage-dark transition-colors shrink-0"
                >
                  <Plus className="w-4 h-4" /> Add Product
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[650px] overflow-y-auto pr-2">
              {filteredProducts.map((prod) => (
                <div key={prod.id} className="p-4 border border-border bg-cream flex flex-col justify-between gap-3 group hover:border-sage transition-colors">
                  <div className="flex gap-3 items-start">
                    {/* Thumbnail Image */}
                    <div className="w-16 h-16 bg-white border border-border rounded shrink-0 overflow-hidden flex items-center justify-center relative">
                      {prod.image ? (
                        <img
                          src={prod.image}
                          alt={prod.name}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <Image className="w-6 h-6 text-muted-foreground/40" />
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <span className="text-[10px] text-sage font-semibold uppercase tracking-wider block">{prod.category}</span>
                      <h4 className="font-serif text-sm font-semibold text-foreground truncate">{prod.name}</h4>
                      <p className="text-[11px] text-muted-foreground">{prod.unit}</p>
                      <p className="font-serif text-base font-bold text-sage mt-1">R{prod.price}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => handleStartEdit(prod)}
                    className="w-full py-2 bg-white border border-border hover:border-sage text-sage-dark text-xs font-medium flex items-center justify-center gap-1.5 transition-colors shadow-2xs"
                  >
                    <Edit2 className="w-3.5 h-3.5" /> Edit Price & Photo
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Edit Product Modal */}
        {editingProduct && (
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white border border-border max-w-lg w-full p-6 shadow-xl space-y-5 max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between border-b border-border pb-3">
                <h3 className="font-serif text-xl text-foreground">Edit Price & Details</h3>
                <button
                  onClick={() => setEditingProduct(null)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Live Image Preview & Upload Controls */}
              <div className="space-y-3">
                <label className="block text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                  Product Image
                </label>
                <div className="flex gap-4 items-center">
                  <div className="w-24 h-24 bg-cream border border-border rounded flex items-center justify-center overflow-hidden shrink-0">
                    {editImage ? (
                      <img
                        src={editImage}
                        alt="Preview"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="text-center p-2 text-muted-foreground">
                        <Image className="w-8 h-8 mx-auto mb-1 opacity-50" />
                        <span className="text-[9px]">No photo</span>
                      </div>
                    )}
                  </div>

                  <div className="flex-1 space-y-2">
                    {/* File Upload Button */}
                    <label className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-2 bg-sage text-white text-xs font-medium hover:bg-sage-dark transition-colors">
                      <Upload className="w-3.5 h-3.5" /> Upload Photo File
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handleFileUpload(e, false)}
                      />
                    </label>

                    {/* Image URL Input */}
                    <div>
                      <input
                        type="text"
                        placeholder="Or paste Image URL (https://...)"
                        value={editImage}
                        onChange={(e) => setEditImage(e.target.value)}
                        className="w-full h-8 px-2.5 text-xs bg-cream border border-border focus:outline-none focus:border-sage"
                      />
                    </div>
                  </div>
                </div>

                {/* Preset Suggestions */}
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1.5 flex items-center gap-1 font-semibold">
                    <Sparkles className="w-3 h-3 text-gold" /> Or pick a quick photo preset:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {PRESET_IMAGES.map((preset) => (
                      <button
                        key={preset.name}
                        type="button"
                        onClick={() => setEditImage(preset.url)}
                        className="px-2 py-1 text-[10px] bg-cream border border-border hover:border-sage hover:bg-sage-light text-foreground transition-colors"
                      >
                        {preset.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Form Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1">
                    Price (ZAR R)
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-2 text-sm text-sage font-bold">R</span>
                    <input
                      type="number"
                      value={editPrice}
                      onChange={(e) => setEditPrice(e.target.value)}
                      className="w-full h-10 pl-8 pr-3 text-sm font-bold bg-cream border border-border focus:outline-none focus:border-sage text-foreground"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1">
                    Pack Size / Unit
                  </label>
                  <input
                    type="text"
                    value={editUnit}
                    onChange={(e) => setEditUnit(e.target.value)}
                    className="w-full h-10 px-3 text-xs bg-cream border border-border focus:outline-none focus:border-sage"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1">
                  Product Name
                </label>
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  className="w-full h-9 px-3 text-xs bg-cream border border-border focus:outline-none focus:border-sage font-semibold"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1">
                  Description
                </label>
                <textarea
                  rows={3}
                  value={editDescription}
                  onChange={(e) => setEditDescription(e.target.value)}
                  className="w-full p-2.5 text-xs bg-cream border border-border focus:outline-none focus:border-sage"
                />
              </div>

              {/* Save Controls */}
              <div className="flex justify-end gap-3 pt-3 border-t border-border">
                <button
                  type="button"
                  onClick={() => setEditingProduct(null)}
                  className="px-4 py-2 border border-border text-xs font-medium hover:bg-cream"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSaveEdit}
                  className="px-5 py-2 bg-sage text-white text-xs font-medium hover:bg-sage-dark flex items-center gap-1.5 shadow-xs"
                >
                  <Check className="w-4 h-4" /> Save Changes
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Add New Product Modal */}
        {isAddingNew && (
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
            <form onSubmit={handleCreateProduct} className="bg-white border border-border max-w-lg w-full p-6 shadow-xl space-y-4 max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between border-b border-border pb-3">
                <h3 className="font-serif text-xl text-foreground">Add New Gfrag® Product</h3>
                <button
                  type="button"
                  onClick={() => setIsAddingNew(false)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-1 font-semibold">
                    Category
                  </label>
                  <select
                    value={newProd.category}
                    onChange={(e) => setNewProd(p => ({ ...p, category: e.target.value }))}
                    className="w-full h-9 px-2 text-xs bg-cream border border-border focus:outline-none focus:border-sage"
                  >
                    <option value="Drops">Drops</option>
                    <option value="Oral Injections">Oral Injections</option>
                    <option value="Injections">Injections</option>

                    <option value="Sprays">Sprays</option>
                    <option value="Shakes">Shakes</option>
                    <option value="Syrups & Tonics">Syrups & Tonics</option>
                    <option value="Combo Kits">Combo Kits</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-1 font-semibold">
                    Price (R) *
                  </label>
                  <input
                    type="number"
                    required
                    value={newProd.price}
                    onChange={(e) => setNewProd(p => ({ ...p, price: Number(e.target.value) }))}
                    className="w-full h-9 px-3 text-xs bg-cream border border-border focus:outline-none focus:border-sage font-bold"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-1 font-semibold">
                  Product Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Gfrag® Advanced Slimming Drops"
                  value={newProd.name}
                  onChange={(e) => setNewProd(p => ({ ...p, name: e.target.value }))}
                  className="w-full h-9 px-3 text-xs bg-cream border border-border focus:outline-none focus:border-sage font-semibold"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-1 font-semibold">
                  Pack Size / Format
                </label>
                <input
                  type="text"
                  placeholder="e.g. 50ml bottle"
                  value={newProd.unit}
                  onChange={(e) => setNewProd(p => ({ ...p, unit: e.target.value }))}
                  className="w-full h-9 px-3 text-xs bg-cream border border-border focus:outline-none focus:border-sage"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-1 font-semibold">
                  Photo URL or File Upload
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Image URL..."
                    value={newProd.image}
                    onChange={(e) => setNewProd(p => ({ ...p, image: e.target.value }))}
                    className="flex-1 h-9 px-3 text-xs bg-cream border border-border focus:outline-none"
                  />
                  <label className="cursor-pointer px-3 py-2 bg-sage text-white text-xs font-medium flex items-center gap-1 hover:bg-sage-dark">
                    <Upload className="w-3.5 h-3.5" /> Upload
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => handleFileUpload(e, true)}
                    />
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-1 font-semibold">
                  Description
                </label>
                <textarea
                  rows={2}
                  placeholder="Short description..."
                  value={newProd.description}
                  onChange={(e) => setNewProd(p => ({ ...p, description: e.target.value }))}
                  className="w-full p-2.5 text-xs bg-cream border border-border focus:outline-none focus:border-sage"
                />
              </div>

              <div className="flex justify-end gap-3 pt-3 border-t border-border">
                <button
                  type="button"
                  onClick={() => setIsAddingNew(false)}
                  className="px-4 py-2 border border-border text-xs font-medium hover:bg-cream"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-sage text-white text-xs font-medium hover:bg-sage-dark flex items-center gap-1.5"
                >
                  <Plus className="w-4 h-4" /> Create Product
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
