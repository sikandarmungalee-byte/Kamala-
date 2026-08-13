import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Heart, ShieldCheck, Sparkles, UserCheck } from 'lucide-react';
import { CORE_VALUES } from '../data/services';

export const AboutPage: React.FC = () => {
  return (
    <div className="bg-cream pt-20">
      {/* Hero */}
      <section className="relative bg-sage-dark pt-24 pb-20 overflow-hidden text-white">
        <div className="absolute inset-0 opacity-15">
          <img
            src="https://media.base44.com/images/public/6a0d9aad8c03a00156e79326/48420a678_generated_image.png"
            alt="Kamala Wellness"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-sage-light mb-3">
              Our Story
            </p>
            <h1 className="font-serif text-5xl md:text-6xl text-white">
              About Kamala Wellness
            </h1>
            <p className="mt-4 text-white/80 max-w-xl leading-relaxed text-sm md:text-base">
              Founded on the belief that true health is a harmonious balance of mind, body and spirit — and that every person deserves access to the most effective, natural healing technologies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="https://media.base44.com/images/public/6a0d9aad8c03a00156e79326/7ddb96098_generated_image.png"
              alt="Kamala Wellness interior"
              className="w-full aspect-[4/3] object-cover shadow-sm"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-sage mb-4">Vision</p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-5">
              A Sanctuary for Healing
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
              Our vision at Kamala Wellness is to generate a friendly environment and calming experience where you feel better from the moment you walk in. We focus on treating a person as a whole — not just on individual symptoms — treating the mind, body and spirit together.
            </p>

            <p className="text-xs uppercase tracking-[0.3em] text-sage mb-2 font-semibold">Mission</p>
            <p className="text-muted-foreground leading-relaxed text-sm">
              We are committed to the wellness of our clients — offering treatments and helping them change their lifestyle for the better. Our overall goal is to be a wellness centre that offers invaluable services, increases clients' knowledge about positive lifestyle changes, keeps up with the latest trends and provides quality treatments with a truly holistic approach.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-white py-20 border-y border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-sage mb-3">What Guides Us</p>
            <h2 className="font-serif text-4xl text-foreground">Our Core Values</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {CORE_VALUES.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center p-6 bg-cream border border-border"
              >
                <div className="w-12 h-12 rounded-full bg-sage-light flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-5 h-5 text-sage" />
                </div>
                <h3 className="font-serif text-xl text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-sage text-white py-20">
        <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
          <h2 className="font-serif text-4xl text-white mb-4">
            Begin Your Wellness Journey Today
          </h2>
          <p className="text-white/80 mb-8 text-sm leading-relaxed">
            Book a consultation and discover which treatments are right for you. We are here to guide and support every step of the way.
          </p>
          <Link
            to="/booking"
            className="inline-flex items-center gap-2 bg-white text-sage px-8 py-4 font-sans text-sm hover:bg-sage-light transition-colors"
          >
            Book a Session <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};
