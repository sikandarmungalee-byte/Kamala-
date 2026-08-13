import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingBag, Truck, Image as ImageIcon } from 'lucide-react';
import { CONTACT_INFO } from '../data/services';
import { toast } from 'sonner';
import { useProductsList } from '../lib/useProducts';

export const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { products } = useProductsList();
  const product = products.find((p) => p.id === Number(id)) || products[0];
  const [qty, setQty] = useState(1);

  const handleAddToCart = () => {
    toast.success(`Added ${qty}x ${product.name} to cart`);
  };

  return (
    <div className="pt-24 pb-20 bg-cream min-h-screen">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-sage text-sm mb-8 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Products
        </Link>

        <div className="bg-white border border-border p-8 md:p-12 shadow-xs grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-sage-light aspect-square flex items-center justify-center p-4 text-center border border-border overflow-hidden relative">
            {product.image ? (
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            ) : (
              <div>
                <ImageIcon className="w-12 h-12 text-sage opacity-40 mx-auto mb-2" />
                <p className="font-sans text-xs uppercase tracking-widest text-sage mb-2">{product.category}</p>
                <h2 className="font-serif text-3xl text-foreground mb-2">{product.name}</h2>
                <p className="text-sm font-sans text-sage-dark font-medium">{product.unit}</p>
              </div>
            )}
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <p className="text-xs uppercase tracking-widest text-sage font-semibold mb-1">
                {product.category}
              </p>
              <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-3">
                {product.name}
              </h1>
              <p className="font-serif text-3xl font-bold text-sage mb-4">
                R{product.price}
              </p>
              <p className="text-xs text-muted-foreground mb-6">
                Pack Size / Format: <strong>{product.unit}</strong>
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                {product.description}
              </p>
            </div>

            <div className="space-y-6 pt-6 border-t border-border">
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-border bg-cream">
                  <button
                    onClick={() => setQty(Math.max(1, qty - 1))}
                    className="px-3 py-2 text-sm hover:bg-sage-light"
                  >
                    -
                  </button>
                  <span className="px-4 text-sm font-medium">{qty}</span>
                  <button
                    onClick={() => setQty(qty + 1)}
                    className="px-3 py-2 text-sm hover:bg-sage-light"
                  >
                    +
                  </button>
                </div>

                <Link
                  to="/products"
                  onClick={handleAddToCart}
                  className="flex-1 py-3 bg-sage text-white text-sm text-center font-medium hover:bg-sage-dark transition-colors flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" /> Add to Cart (R{product.price * qty})
                </Link>
              </div>

              <div className="bg-cream p-4 border border-border text-xs text-muted-foreground space-y-1">
                <p className="font-semibold text-foreground flex items-center gap-1.5">
                  <Truck className="w-4 h-4 text-sage" /> Nationwide Delivery: R{CONTACT_INFO.deliveryFee}
                </p>
                <p>Orders are dispatched via courier upon receipt of proof of payment.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
