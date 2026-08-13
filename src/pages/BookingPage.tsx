import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, Clock, CheckCircle2 } from 'lucide-react';
import { BOOKING_SERVICES, TIME_SLOTS, CONTACT_INFO } from '../data/services';
import { BookingRequest } from '../types';
import { createBookingInDb } from '../lib/firebase';

export const BookingPage: React.FC = () => {
  const [form, setForm] = useState<BookingRequest>({
    name: '',
    email: '',
    phone: '',
    service: BOOKING_SERVICES[0],
    preferred_date: '',
    preferred_time: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (field: keyof BookingRequest, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.service) {
      alert("Please fill in required fields (Name, Email, Service).");
      return;
    }

    setSubmitting(true);
    try {
      const newBooking: BookingRequest = {
        ...form,
        status: 'pending',
        created_at: new Date().toISOString()
      };

      // Save to Firestore Database
      const firestoreId = await createBookingInDb(newBooking);

      // Also sync to local storage cache for immediate admin view
      const existingBookings = JSON.parse(localStorage.getItem('ka_admin_bookings') || '[]');
      localStorage.setItem('ka_admin_bookings', JSON.stringify([{ ...newBooking, id: firestoreId }, ...existingBookings]));

      setSubmitted(true);
    } catch (err) {
      console.error('Error creating booking:', err);
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-cream pt-20">
      {/* Hero Header */}
      <section className="bg-sage pt-24 pb-16 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-white/60 mb-3">
              Let's Get Started
            </p>
            <h1 className="font-serif text-5xl md:text-6xl text-white">
              Book a Session
            </h1>
            <p className="mt-4 text-white/80 max-w-lg leading-relaxed text-sm">
              Complete the form and we'll reach out within 24 hours to confirm your appointment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Contact Details */}
          <div className="space-y-8">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-sage mb-5 font-semibold">
                Get In Touch
              </p>
              <ul className="space-y-5">
                <li className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-sage-light flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4 text-sage" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground mb-0.5">Phone</p>
                    <p className="text-sm text-muted-foreground">{CONTACT_INFO.phones[0]}</p>
                    <p className="text-sm text-muted-foreground">{CONTACT_INFO.phones[1]}</p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-sage-light flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4 text-sage" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground mb-0.5">Email</p>
                    <p className="text-sm text-muted-foreground">{CONTACT_INFO.email}</p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-sage-light flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4 text-sage" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground mb-0.5">Opening Hours</p>
                    <p className="text-sm text-muted-foreground">{CONTACT_INFO.hours.weekdays}</p>
                    <p className="text-sm text-muted-foreground">{CONTACT_INFO.hours.saturday}</p>
                    <p className="text-sm text-muted-foreground">{CONTACT_INFO.hours.sunday}</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-sage-light p-6 border border-border">
              <p className="font-serif text-lg text-foreground mb-2 font-semibold">Not sure which service?</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Book a general wellness consultation and we'll guide you to the right treatment.
              </p>
            </div>
          </div>

          {/* Booking Form Card */}
          <div className="lg:col-span-2 bg-white p-8 md:p-12 border border-border shadow-xs">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-16"
              >
                <CheckCircle2 className="w-16 h-16 text-sage mx-auto mb-4" />
                <h3 className="font-serif text-3xl text-foreground mb-2">Booking Received!</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  We'll confirm your appointment within 24 hours.<br />
                  A summary has been recorded for <strong>{form.email}</strong>.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({
                      name: '',
                      email: '',
                      phone: '',
                      service: BOOKING_SERVICES[0],
                      preferred_date: '',
                      preferred_time: '',
                      message: ''
                    });
                  }}
                  className="text-sage text-sm font-medium underline underline-offset-4 hover:text-sage-dark"
                >
                  Book another session
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="font-serif text-3xl text-foreground mb-6">
                  Request an Appointment
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-1.5 font-semibold">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      placeholder="Your full name"
                      className="w-full h-12 px-4 bg-cream border border-border text-sm text-foreground focus:outline-none focus:border-sage"
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
                      onChange={(e) => handleChange('email', e.target.value)}
                      placeholder="you@example.com"
                      className="w-full h-12 px-4 bg-cream border border-border text-sm text-foreground focus:outline-none focus:border-sage"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-1.5 font-semibold">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      placeholder="+27 ..."
                      className="w-full h-12 px-4 bg-cream border border-border text-sm text-foreground focus:outline-none focus:border-sage"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-1.5 font-semibold">
                      Service *
                    </label>
                    <select
                      value={form.service}
                      onChange={(e) => handleChange('service', e.target.value)}
                      className="w-full h-12 px-4 bg-cream border border-border text-sm text-foreground focus:outline-none focus:border-sage"
                    >
                      {BOOKING_SERVICES.map((srv) => (
                        <option key={srv} value={srv}>
                          {srv}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-1.5 font-semibold">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={form.preferred_date}
                      min={new Date().toISOString().split('T')[0]}
                      onChange={(e) => handleChange('preferred_date', e.target.value)}
                      className="w-full h-12 px-4 bg-cream border border-border text-sm text-foreground focus:outline-none focus:border-sage"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-1.5 font-semibold">
                      Preferred Time Slot
                    </label>
                    <select
                      value={form.preferred_time}
                      onChange={(e) => handleChange('preferred_time', e.target.value)}
                      className="w-full h-12 px-4 bg-cream border border-border text-sm text-foreground focus:outline-none focus:border-sage"
                    >
                      <option value="">Select time slot</option>
                      {TIME_SLOTS.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-1.5 font-semibold">
                    Message / Notes
                  </label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    placeholder="Describe any specific health concerns or requirements..."
                    className="w-full p-4 bg-cream border border-border text-sm text-foreground focus:outline-none focus:border-sage"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 bg-sage text-white text-sm font-sans font-medium hover:bg-sage-dark transition-colors shadow-sm disabled:opacity-50"
                >
                  {submitting ? 'Sending Request...' : 'Submit Appointment Request'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
