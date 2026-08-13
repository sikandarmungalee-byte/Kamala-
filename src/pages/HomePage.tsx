import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Clock, Phone, Star, Sparkles, Activity, ShieldCheck } from 'lucide-react';
import { SERVICES, TESTIMONIALS, CONTACT_INFO } from '../data/services';

export const HomePage: React.FC = () => {
  return (
    <div className="bg-cream">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://media.base44.com/images/public/6a0d9aad8c03a00156e79326/041633b7f_generated_image.png"
            alt="Kamala Wellness"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-sage-dark/55" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-16 py-32 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl"
          >
            <p className="text-sage-light text-xs uppercase tracking-[0.35em] mb-6">
              Holistic Wellness Centre · South Africa
            </p>
            <h1 className="font-serif text-6xl md:text-8xl text-white leading-[1.05] mb-8">
              Heal from
              <br />
              <span className="text-sage-light italic">Within</span>
            </h1>
            <p className="text-white/80 text-base md:text-lg leading-relaxed mb-10 max-w-md">
              We focus on the <strong className="text-white">proactive strengthening</strong> of your natural immune system — treating mind, body and spirit as a whole.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/booking"
                className="inline-flex items-center justify-center gap-2 bg-sage text-white px-8 py-4 font-sans text-sm hover:bg-sage-dark transition-colors duration-300 shadow-md"
              >
                Book a Session <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 border border-white/50 text-white px-8 py-4 font-sans text-sm hover:bg-white/10 transition-colors duration-300"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Hero Bottom Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/20 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 md:px-16 py-5 grid grid-cols-3 divide-x divide-white/20">
            {[
              ["10+", "Years Experience"],
              ["3", "Healing Technologies"],
              ["100%", "Holistic Approach"]
            ].map(([num, label]) => (
              <div key={label} className="px-4 md:px-8 text-center">
                <p className="font-serif text-3xl text-white">{num}</p>
                <p className="text-white/60 text-xs mt-1 tracking-widest uppercase">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Banner */}
      <section className="bg-sage text-white py-5">
        <div className="max-w-7xl mx-auto px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3 text-sm">
            <Clock className="w-4 h-4 opacity-70" />
            <span>{CONTACT_INFO.hours.weekdays} &nbsp;·&nbsp; {CONTACT_INFO.hours.saturday}</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Phone className="w-4 h-4 opacity-70" />
            <span>{CONTACT_INFO.phones[0]} &nbsp;·&nbsp; {CONTACT_INFO.phones[1]}</span>
          </div>
          <Link to="/booking" className="text-sm underline underline-offset-4 hover:opacity-80">
            Book Now →
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-sage mb-3">What We Offer</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">Our Healing Services</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-white border border-border p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300"
            >
              <div>
                <div className="aspect-[16/10] overflow-hidden mb-6 bg-sage-light">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-serif text-2xl text-foreground mb-3 group-hover:text-sage transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-sage text-sm font-sans font-medium group-hover:gap-3 transition-all"
              >
                Discover More <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Vision / Sanctuary Section */}
      <section className="bg-white border-y border-border py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
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
                className="w-full aspect-[4/3] object-cover rounded-xs"
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
              <p className="text-muted-foreground leading-relaxed mb-8 text-sm">
                With advanced frequency scanning and Gfrag® nutraceutical health products, we equip your body with the tools to restore vitality naturally.
              </p>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-sage text-white px-7 py-3.5 text-sm hover:bg-sage-dark transition-colors"
              >
                Learn More About Us <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 py-24">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-sage mb-3">Client Stories</p>
          <h2 className="font-serif text-4xl text-foreground">What Our Clients Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white border border-border p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-4 text-gold">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-foreground italic leading-relaxed mb-6">
                  "{item.text}"
                </p>
              </div>
              <div>
                <p className="font-serif text-lg text-foreground font-medium">{item.name}</p>
                <p className="text-xs text-sage">{item.service}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="bg-sage text-white py-20">
        <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
          <h2 className="font-serif text-4xl text-white mb-4">
            Ready to Begin Your Healing Journey?
          </h2>
          <p className="text-white/80 mb-8 text-sm leading-relaxed max-w-xl mx-auto">
            Book a session today or reach out to discover how our holistic technologies and Gfrag® supplements can support your health.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/booking"
              className="inline-flex items-center gap-2 bg-white text-sage px-8 py-4 font-sans text-sm hover:bg-sage-light transition-colors"
            >
              Book a Session <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 border border-white/50 text-white px-8 py-4 font-sans text-sm hover:bg-white/10 transition-colors"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
