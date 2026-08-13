import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const OrderConfirmationPage: React.FC = () => {
  return (
    <div className="pt-28 pb-20 bg-cream min-h-screen flex items-center justify-center px-6">
      <div className="max-w-md w-full bg-white border border-border p-8 text-center shadow-md">
        <CheckCircle2 className="w-16 h-16 text-sage mx-auto mb-4" />
        <h1 className="font-serif text-3xl text-foreground mb-2">Order Submitted</h1>
        <p className="text-sm text-muted-foreground leading-relaxed mb-6">
          Thank you for ordering with Kamala Wellness. Please check your email or WhatsApp for confirmation and payment details.
        </p>
        <Link
          to="/products"
          className="inline-flex items-center gap-2 bg-sage text-white px-6 py-3 text-sm hover:bg-sage-dark transition-colors"
        >
          Continue Shopping <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};
