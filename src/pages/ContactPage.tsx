import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, Clock, MapPin, Send } from 'lucide-react';
import { CONTACT_INFO } from '../data/services';
import { toast } from 'sonner';

export const ContactPage: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all required fields.");
      return;
    }

    const emailSubject = encodeURIComponent(`Inquiry from Website - ${form.name}`);
    const emailBody = encodeURIComponent(
      `Name: ${form.name}\n` +
      `Email: ${form.email}\n` +
      `Phone: ${form.phone}\n\n` +
      `Message:\n${form.message}`
    );

    window.location.href = `mailto:${CONTACT_INFO.email}?subject=${emailSubject}&body=${emailBody}`;
    toast.success("Opening email application with your message!");
    setForm({ name: '', email: '', phone: '', message: '' });
  };

  const contactCards = [
    {
      Icon: Phone,
      title: "Phone",
      lines: CONTACT_INFO.phones
    },
    {
      Icon: Mail,
      title: "Email",
      lines: [CONTACT_INFO.email]
    },
    {
      Icon: Clock,
      title: "Opening Hours",
      lines: [
        CONTACT_INFO.hours.weekdays,
        CONTACT_INFO.hours.saturday,
        CONTACT_INFO.hours.sunday
      ]
    },
    {
      Icon: MapPin,
      title: "Location",
      lines: [CONTACT_INFO.location]
    }
  ];

  return (
    <div className="bg-cream pt-20">
      {/* Header */}
      <section className="bg-white pt-24 pb-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-sage mb-3">
              Reach Out
            </p>
            <h1 className="font-serif text-5xl md:text-6xl text-foreground">
              Contact Us
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20">
        {/* 4 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactCards.map(({ Icon, title, lines }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white border border-border p-6"
            >
              <div className="w-10 h-10 rounded-full bg-sage-light flex items-center justify-center mb-4">
                <Icon className="w-4 h-4 text-sage" />
              </div>
              <h3 className="font-serif text-lg text-foreground mb-3">{title}</h3>
              {lines.map((line) => (
                <p key={line} className="text-sm text-muted-foreground leading-relaxed">
                  {line}
                </p>
              ))}
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto bg-white border border-border p-8 md:p-12 shadow-xs">
          <h2 className="font-serif text-3xl text-foreground mb-6">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-1.5 font-semibold">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full h-12 px-4 bg-cream border border-border text-sm focus:outline-none focus:border-sage"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-1.5 font-semibold">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full h-12 px-4 bg-cream border border-border text-sm focus:outline-none focus:border-sage"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-1.5 font-semibold">
                Phone Number
              </label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="+27 ..."
                className="w-full h-12 px-4 bg-cream border border-border text-sm focus:outline-none focus:border-sage"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-1.5 font-semibold">
                Message *
              </label>
              <textarea
                rows={5}
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="How can we assist you?"
                className="w-full p-4 bg-cream border border-border text-sm focus:outline-none focus:border-sage"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-sage text-white text-sm font-sans font-medium flex items-center justify-center gap-2 hover:bg-sage-dark transition-colors"
            >
              <Send className="w-4 h-4" /> Send Message
            </button>
          </form>
        </div>

        {/* Ready Banner */}
        <div className="mt-16 bg-sage text-white p-12 text-center rounded-xs">
          <h2 className="font-serif text-3xl mb-3">Ready to Start Your Healing Journey?</h2>
          <p className="text-white/80 text-sm mb-6 max-w-lg mx-auto">
            Our team is here to answer any questions and help you find the right treatment.
          </p>
          <a
            href="https://wa.me/27615124727"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-sage px-8 py-3.5 text-sm font-sans font-medium hover:bg-sage-light transition-colors"
          >
            Chat with Us on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};
