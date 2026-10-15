import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'Product Inquiry',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email';
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      errs.message = 'Message must be at least 10 characters long';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          topic: 'Product Inquiry',
          message: ''
        });
      }, 500);
    }
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-[#FAF7F2] border-t border-[#EAE0D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          
          {/* Left Details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#8C6D58]">
                Get in Touch
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2A1D17] mt-1 tracking-tight">
                Connect with Our Spice Masters
              </h2>
              <p className="text-sm text-[#5A4333] mt-2 leading-relaxed">
                Have questions regarding spice grinding methods, wholesale requirements, or custom culinary blends? We are here to help.
              </p>
            </div>

            <div className="space-y-5 text-sm text-[#4A3525]">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-[#F4EFEA] border border-[#EAE0D5] flex items-center justify-center text-[#991B1B] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-semibold text-[#2A1D17]">Estate & Workshop</p>
                  <p className="text-xs text-[#5A4333] mt-0.5">
                    Plot 42, Spice Industrial Estate, Ramganj Mandi, Rajasthan 326519
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-[#F4EFEA] border border-[#EAE0D5] flex items-center justify-center text-[#991B1B] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-semibold text-[#2A1D17]">Email Inquiries</p>
                  <p className="text-xs text-[#5A4333] mt-0.5">
                    care@vedamasala.in · orders@vedamasala.in
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-[#F4EFEA] border border-[#EAE0D5] flex items-center justify-center text-[#991B1B] shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-semibold text-[#2A1D17]">Customer Care Helpline</p>
                  <p className="text-xs text-[#5A4333] mt-0.5">
                    +91 1800 266 8332 (Toll Free)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-[#F4EFEA] border border-[#EAE0D5] flex items-center justify-center text-[#991B1B] shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-semibold text-[#2A1D17]">Operating Hours</p>
                  <p className="text-xs text-[#5A4333] mt-0.5">
                    Monday to Saturday, 9:00 AM – 6:30 PM IST
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right: Functional Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-[#EAE0D5] shadow-xs">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-[#2A1D17]">
                    Thank You for Your Note
                  </h3>
                  <p className="text-sm text-[#5A4333] max-w-md mx-auto">
                    Our spice master team will review your inquiry and get back to you within 24 business hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FAF7F2] hover:bg-[#EFE6DC] border border-[#D4C5B9] text-xs font-semibold text-[#2A1D17] rounded-lg mt-4"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A3525] mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: null });
                        }}
                        placeholder="e.g. Priya Sharma"
                        className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-[#FAF7F2]/40 text-[#2A1D17] placeholder-[#9E8B7E] focus:outline-none focus:ring-1 ${
                          errors.name
                            ? 'border-red-500 focus:ring-red-500'
                            : 'border-[#D4C5B9] focus:ring-[#991B1B] focus:border-[#991B1B]'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-xs text-red-600 mt-1">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A3525] mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: null });
                        }}
                        placeholder="priya@example.com"
                        className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-[#FAF7F2]/40 text-[#2A1D17] placeholder-[#9E8B7E] focus:outline-none focus:ring-1 ${
                          errors.email
                            ? 'border-red-500 focus:ring-red-500'
                            : 'border-[#D4C5B9] focus:ring-[#991B1B] focus:border-[#991B1B]'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-600 mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A3525] mb-1.5">
                      Topic / Nature of Inquiry
                    </label>
                    <select
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#D4C5B9] bg-[#FAF7F2]/40 text-[#2A1D17] focus:outline-none focus:ring-1 focus:ring-[#991B1B]"
                    >
                      <option value="Product Inquiry">Product Inquiry & Curcumin Content</option>
                      <option value="Order Tracking">Order Tracking & Shipping</option>
                      <option value="Wholesale / Culinary Bulk">Wholesale / Culinary Bulk (Hotels & Restaurants)</option>
                      <option value="Recipe Suggestion">Recipe Suggestion or Feedback</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A3525] mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: null });
                      }}
                      placeholder="Tell us what you are looking for..."
                      className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-[#FAF7F2]/40 text-[#2A1D17] placeholder-[#9E8B7E] focus:outline-none focus:ring-1 ${
                        errors.message
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-[#D4C5B9] focus:ring-[#991B1B] focus:border-[#991B1B]'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-600 mt-1">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 w-full py-3.5 bg-[#991B1B] hover:bg-[#7F1D1D] text-white text-xs font-semibold uppercase tracking-wider rounded-lg shadow-sm hover:shadow transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
