import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, Send } from 'lucide-react';
import { CartItem, Order } from '../types';
import { CONTACT_INFO } from '../data/services';
import { toast } from 'sonner';
import { createOrderInDb } from '../lib/firebase';

interface CartDrawerProps {
  cart: CartItem[];
  onClose: () => void;
  onRemove: (id: number) => void;
  onQtyChange: (id: number, qty: number) => void;
  onClear: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  cart,
  onClose,
  onRemove,
  onQtyChange,
  onClear
}) => {
  const [customer, setCustomer] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    city: ''
  });

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const deliveryFee = cart.length > 0 ? CONTACT_INFO.deliveryFee : 0;
  const grandTotal = subtotal + deliveryFee;

  const handleInputChange = (field: string, val: string) => {
    setCustomer(prev => ({ ...prev, [field]: val }));
  };

  const saveOrderToDb = async () => {
    const newOrder: Order = {
      order_number: `ORD-${Date.now().toString(36).toUpperCase()}`,
      customer_name: customer.name,
      email: customer.email,
      phone: customer.phone,
      shipping_address: customer.address,
      city: customer.city,
      items: cart,
      total: grandTotal,
      status: 'pending',
      created_at: new Date().toISOString()
    };

    await createOrderInDb(newOrder);
  };

  const handleEmailOrder = async () => {
    if (!customer.name || !customer.email || !customer.phone || !customer.address) {
      toast.error('Please fill in your contact and shipping details.');
      return;
    }

    await saveOrderToDb();

    const itemsSummary = cart
      .map(item => `• ${item.product_name} (${item.unit}) x${item.qty} = R${item.price * item.qty}`)
      .join('\n');

    const emailSubject = encodeURIComponent(`Gfrag® Order Request - ${customer.name}`);
    const emailBody = encodeURIComponent(
      `Hello Kamala Wellness Team,\n\n` +
      `I would like to place an order for the following Gfrag® products:\n\n` +
      `${itemsSummary}\n\n` +
      `Subtotal: R${subtotal}\n` +
      `Nationwide Delivery: R${deliveryFee}\n` +
      `Total Amount: R${grandTotal}\n\n` +
      `--- Customer Details ---\n` +
      `Name: ${customer.name}\n` +
      `Phone: ${customer.phone}\n` +
      `Email: ${customer.email}\n` +
      `Delivery Address: ${customer.address}, ${customer.city}\n\n` +
      `Please reply with banking details for payment confirmation.\n\n` +
      `Thank you!`
    );

    window.location.href = `mailto:${CONTACT_INFO.email}?subject=${emailSubject}&body=${emailBody}`;
    toast.success('Order recorded! Opening email application...');
  };

  const handleWhatsAppOrder = async () => {
    if (!customer.name || !customer.phone || !customer.address) {
      toast.error('Please fill in required name, phone, and address fields.');
      return;
    }

    await saveOrderToDb();

    const itemsSummary = cart
      .map(item => `• ${item.product_name} (${item.unit}) x${item.qty} = R${item.price * item.qty}`)
      .join('\n');

    const text = encodeURIComponent(
      `*Gfrag® Order Request*\n\n` +
      `Name: ${customer.name}\n` +
      `Phone: ${customer.phone}\n` +
      `Email: ${customer.email}\n` +
      `Address: ${customer.address}, ${customer.city}\n\n` +
      `*Items:*\n${itemsSummary}\n\n` +
      `Subtotal: R${subtotal}\n` +
      `Delivery: R${deliveryFee}\n` +
      `*Total: R${grandTotal}*`
    );

    window.open(`https://wa.me/${CONTACT_INFO.whatsapp}?text=${text}`, '_blank');
    toast.success('Order recorded! Opening WhatsApp...');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-xs transition-opacity" 
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-6 bg-sage text-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5" />
              <h2 className="font-serif text-2xl font-normal">Your Cart</h2>
            </div>
            <button 
              onClick={onClose} 
              className="text-white/80 hover:text-white p-1"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Cart Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {cart.length === 0 ? (
              <div className="text-center py-20 text-muted-foreground">
                <ShoppingBag className="w-12 h-12 mx-auto mb-3 opacity-30" />
                <p className="font-serif text-xl text-foreground mb-1">Your cart is empty</p>
                <p className="text-xs font-sans">Browse our Gfrag® collection and add products to start.</p>
              </div>
            ) : (
              <>
                <div className="divide-y divide-border">
                  {cart.map((item) => (
                    <div key={item.id} className="py-4 flex items-center justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <h4 className="font-serif text-base text-foreground leading-snug truncate">
                          {item.product_name}
                        </h4>
                        <p className="text-xs text-muted-foreground mb-1">{item.unit}</p>
                        <p className="font-serif text-sm font-semibold text-sage">
                          R{item.price * item.qty}
                        </p>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="flex items-center border border-border bg-cream">
                          <button
                            onClick={() => onQtyChange(item.id, item.qty - 1)}
                            className="px-2 py-1 text-xs hover:bg-sage-light"
                          >
                            -
                          </button>
                          <span className="px-2 text-xs font-sans font-medium">{item.qty}</span>
                          <button
                            onClick={() => onQtyChange(item.id, item.qty + 1)}
                            className="px-2 py-1 text-xs hover:bg-sage-light"
                          >
                            +
                          </button>
                        </div>

                        <button
                          onClick={() => onRemove(item.id)}
                          className="text-muted-foreground hover:text-red-500 p-1"
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Delivery Notice */}
                <div className="bg-sage-light p-4 rounded-sm border border-border text-xs text-foreground space-y-1">
                  <p className="font-semibold text-sage-dark">🚚 Delivery & Order Process</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Nationwide Courier: <strong>R150</strong>. Orders are processed via email or WhatsApp and dispatched upon proof of payment.
                  </p>
                </div>

                {/* Customer Details Form */}
                <div className="space-y-3 pt-4 border-t border-border">
                  <h3 className="font-serif text-lg text-foreground">Delivery & Contact Details</h3>
                  
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-muted-foreground mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Jane Doe"
                      value={customer.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full h-9 px-3 text-xs bg-cream border border-border focus:outline-none focus:border-sage"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-muted-foreground mb-1">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        placeholder="+27 ..."
                        value={customer.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="w-full h-9 px-3 text-xs bg-cream border border-border focus:outline-none focus:border-sage"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-muted-foreground mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        placeholder="jane@example.com"
                        value={customer.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full h-9 px-3 text-xs bg-cream border border-border focus:outline-none focus:border-sage"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-muted-foreground mb-1">
                      Delivery Address *
                    </label>
                    <input
                      type="text"
                      placeholder="Street address, suburb"
                      value={customer.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      className="w-full h-9 px-3 text-xs bg-cream border border-border focus:outline-none focus:border-sage"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-muted-foreground mb-1">
                      City / Postal Code
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Mbombela, 1200"
                      value={customer.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      className="w-full h-9 px-3 text-xs bg-cream border border-border focus:outline-none focus:border-sage"
                    />
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Footer Totals & Checkout Actions */}
          {cart.length > 0 && (
            <div className="p-6 bg-cream border-t border-border space-y-4">
              <div className="space-y-1.5 text-xs text-muted-foreground">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-serif text-sm font-semibold text-foreground">R{subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>Nationwide Courier Fee</span>
                  <span className="font-serif text-sm font-semibold text-foreground">R{deliveryFee}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-border text-foreground font-semibold text-sm">
                  <span>Total Due</span>
                  <span className="font-serif text-xl text-sage">R{grandTotal}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <button
                  onClick={handleEmailOrder}
                  className="w-full py-3 bg-sage text-white text-xs font-sans flex items-center justify-center gap-1.5 hover:bg-sage-dark transition-colors"
                >
                  <Send className="w-3.5 h-3.5" /> Order via Email
                </button>
                <button
                  onClick={handleWhatsAppOrder}
                  className="w-full py-3 bg-green-600 text-white text-xs font-sans flex items-center justify-center gap-1.5 hover:bg-green-700 transition-colors"
                >
                  Order via WhatsApp
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
