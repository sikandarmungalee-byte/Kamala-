import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Activity, ShieldCheck, Sparkles } from 'lucide-react';
import { SERVICES } from '../data/services';

export const ServicesPage: React.FC = () => {
  return (
    <div className="bg-cream pt-20">
      {/* Header */}
      <section className="bg-white py-16 md:py-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-sage mb-3">What We Offer</p>
            <h1 className="font-serif text-5xl md:text-6xl text-foreground">Our Services</h1>
            <p className="mt-4 text-muted-foreground max-w-xl leading-relaxed text-sm">
              Powerful holistic healing modalities designed to support your body's natural ability to restore balance, cellular health, and vitality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 space-y-20">
        {SERVICES.map((service, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                isEven ? "" : "lg:grid-flow-col-dense"
              }`}
            >
              <div className={`relative overflow-hidden ${isEven ? "" : "lg:col-start-2"}`}>
                <div className="aspect-[4/3] overflow-hidden bg-sage-light">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                </div>
                <div className="absolute top-4 left-4 w-10 h-10 bg-sage rounded-full flex items-center justify-center shadow-md">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
              </div>

              <div className={isEven ? "" : "lg:col-start-1 lg:row-start-1"}>
                <p className="text-xs uppercase tracking-[0.3em] text-sage mb-3">
                  Service {String(idx + 1).padStart(2, '0')}
                </p>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
                  {service.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4 text-sm font-medium">
                  {service.description}
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm mb-6">
                  {service.long_description}
                </p>

                <div className="grid grid-cols-2 gap-3 mb-8">
                  {service.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-2 text-sm text-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-sage shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/booking"
                  className="inline-flex items-center gap-2 bg-sage text-white px-6 py-3.5 text-sm font-sans hover:bg-sage-dark transition-colors"
                >
                  Book This Service <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Consult Banner */}
      <section className="bg-sage text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">
            Not Sure Which Treatment You Need?
          </h2>
          <p className="text-white/80 text-sm mb-8 max-w-xl mx-auto">
            Book a general holistic wellness consultation with our team and we'll guide you toward the ideal treatment plan for your body.
          </p>
          <Link
            to="/booking"
            className="inline-flex items-center gap-2 bg-white text-sage px-8 py-4 text-sm font-sans hover:bg-sage-light transition-colors"
          >
            Book a Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};
