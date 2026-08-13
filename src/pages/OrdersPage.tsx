import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowRight } from 'lucide-react';

export const OrdersPage: React.FC = () => {
  return (
    <div className="pt-28 pb-20 bg-cream min-h-screen">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <h1 className="font-serif text-4xl text-foreground mb-4">Your Orders</h1>
        <p className="text-sm text-muted-foreground mb-8">
          Orders are placed via email or WhatsApp and tracked directly with our support team.
        </p>

        <div className="bg-white border border-border p-8 text-center">
          <ShoppingBag className="w-12 h-12 text-sage/40 mx-auto mb-3" />
          <p className="font-serif text-xl text-foreground mb-2">No active online web sessions</p>
          <p className="text-xs text-muted-foreground mb-6">
            To inquire about a pending dispatch, contact us on +27 61 512 4727 or info@kamala-wellness.co.za.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 bg-sage text-white px-6 py-3 text-sm hover:bg-sage-dark transition-colors"
          >
            Browse Gfrag® Collection <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
