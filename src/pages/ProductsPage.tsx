import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, ShoppingBag, Plus, Image as ImageIcon } from 'lucide-react';
import { PRODUCT_CATEGORIES } from '../data/products';
import { Product, CartItem } from '../types';
import { CartDrawer } from '../components/CartDrawer';
import { CONTACT_INFO } from '../data/services';
import { toast } from 'sonner';
import { useProductsList } from '../lib/useProducts';

export const ProductsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  const { products } = useProductsList();

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch =
      !searchQuery ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product_id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product_id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          product_id: product.id,
          product_name: product.name,
          price: product.price,
          unit: product.unit,
          qty: 1
        }
      ];
    });
    toast.success(`${product.name} added to cart`);
  };

  const handleRemoveFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const handleQtyChange = (id: number, qty: number) => {
    if (qty <= 0) {
      handleRemoveFromCart(id);
    } else {
      setCart((prev) =>
        prev.map((item) => (item.id === id ? { ...item, qty } : item))
      );
    }
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <div className="pt-20 bg-cream min-h-screen">
      {/* Header Banner */}
      <section className="bg-sage-light py-16 md:py-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-sage mb-3">
              Gfrag® Collection
            </p>
            <h1 className="font-serif text-5xl md:text-6xl text-foreground">
              Health Products
            </h1>
            <p className="text-muted-foreground mt-4 max-w-xl leading-relaxed text-sm">
              Premium wellness supplements and health products. All orders are processed via email or WhatsApp with delivery of R{CONTACT_INFO.deliveryFee} nationwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sticky Search & Filter Bar */}
      <div className="sticky top-16 z-30 bg-white/95 backdrop-blur border-b border-border shadow-xs">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-3 flex items-center gap-4">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3 top-2.5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-9 pl-9 pr-3 border border-border text-sm bg-cream focus:outline-none focus:border-sage font-sans"
            />
          </div>

          <button
            onClick={() => setCartOpen(true)}
            className="relative flex items-center gap-2 bg-sage text-white px-4 py-2 text-sm font-sans hover:bg-sage-dark transition-colors shrink-0"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="hidden sm:inline font-medium">Cart</span>
            {totalCartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-gold text-white text-[10px] rounded-full w-5 h-5 flex items-center justify-center font-bold">
                {totalCartCount}
              </span>
            )}
          </button>
        </div>

        {/* Category Tabs */}
        <div className="max-w-7xl mx-auto px-6 md:px-10 pb-3 overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            {PRODUCT_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-sans whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? "bg-sage text-white"
                    : "bg-sage-light/60 text-sage hover:bg-sage/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-10">
        <p className="font-sans text-xs text-muted-foreground mb-6">
          Showing {filteredProducts.length} products
        </p>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-white border border-border p-8">
            <p className="text-muted-foreground font-sans text-sm">
              No products found matching your search criteria.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                className="bg-white border border-border flex flex-col justify-between hover:shadow-md transition-shadow group overflow-hidden"
              >
                {/* Product Image Header */}
                <div className="w-full h-52 bg-slate-100 border-b border-border relative overflow-hidden flex items-center justify-center">
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="text-center p-4 text-muted-foreground/50">
                      <ImageIcon className="w-10 h-10 mx-auto mb-1 opacity-40" />
                      <span className="text-[10px] uppercase tracking-wider block font-semibold">{product.category}</span>
                    </div>
                  )}
                  <span className="absolute top-2.5 left-2.5 bg-sage text-white text-[9px] uppercase tracking-wider px-2 py-0.5 font-bold shadow-2xs">
                    {product.category}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-lg text-foreground leading-snug mb-1 group-hover:text-sage transition-colors">
                      {product.name}
                    </h3>
                    <p className="font-sans text-xs text-sage-dark font-medium mb-2">
                      {product.unit}
                    </p>
                    <p className="font-sans text-xs text-muted-foreground leading-relaxed line-clamp-2 mb-4">
                      {product.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-auto pt-3 border-t border-border">
                    <span className="font-serif text-xl font-bold text-foreground">
                      R{product.price}
                    </span>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="flex items-center gap-1.5 bg-sage text-white px-3.5 py-2 text-xs font-sans hover:bg-sage-dark transition-colors"
                    >
                      <Plus className="w-3.5 h-3.5" /> Add to Cart
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* Delivery Banner */}
      <section className="bg-white border-t border-border mt-12 py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
          <p className="font-sans text-xs uppercase tracking-widest text-sage mb-2 font-semibold">
            Ordering & Delivery
          </p>
          <h3 className="font-serif text-3xl text-foreground mb-3">
            Nationwide Delivery · R{CONTACT_INFO.deliveryFee}
          </h3>
          <p className="text-muted-foreground text-sm max-w-lg mx-auto leading-relaxed">
            Add products to your cart, then send your order by email to{" "}
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="text-sage underline underline-offset-2"
            >
              {CONTACT_INFO.email}
            </a>{" "}
            or directly via WhatsApp with proof of payment. We will confirm and dispatch your order promptly.
          </p>
        </div>
      </section>

      {/* Cart Drawer */}
      {cartOpen && (
        <CartDrawer
          cart={cart}
          onClose={() => setCartOpen(false)}
          onRemove={handleRemoveFromCart}
          onQtyChange={handleQtyChange}
          onClear={() => setCart([])}
        />
      )}
    </div>
  );
};
