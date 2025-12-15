import React, { useState } from 'react';
import { SERVICES } from '../constants';
import { AppointmentData } from '../types';

const Booking: React.FC = () => {
  const [formData, setFormData] = useState<AppointmentData>({
    name: '',
    email: '',
    phone: '',
    date: '',
    serviceType: '',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking requested:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        serviceType: '',
        notes: ''
      });
    }, 5000);
  };

  return (
    <section id="book" className="py-24 bg-legal-900 text-white relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-legal-gold opacity-10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">
          <div className="mb-12 lg:mb-0">
            <h2 className="text-legal-gold font-bold tracking-widest uppercase text-sm mb-4">Consultation</h2>
            <h2 className="text-4xl font-serif text-white mb-6 leading-tight">
              Book an Appointment <br/> with <span className="italic text-legal-gold">Pradeep Sharma</span>
            </h2>
            <p className="text-lg text-legal-100 mb-10 font-light">
              Expert legal advice is just a click away. Secure your slot for property consultation or documentation verification today.
            </p>
            
            <div className="space-y-6">
                <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-legal-800 flex items-center justify-center text-legal-gold border border-legal-gold/20">
                        1
                    </div>
                    <div>
                        <h4 className="font-serif text-lg">Submit Details</h4>
                        <p className="text-sm text-slate-400">Fill out the form with your inquiry.</p>
                    </div>
                </div>
                 <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-legal-800 flex items-center justify-center text-legal-gold border border-legal-gold/20">
                        2
                    </div>
                    <div>
                        <h4 className="font-serif text-lg">Confirmation</h4>
                        <p className="text-sm text-slate-400">We call you to confirm the time.</p>
                    </div>
                </div>
            </div>
          </div>

          <div className="bg-white rounded-none p-8 sm:p-12 text-slate-900 shadow-2xl border-t-4 border-legal-gold">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-green-700">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif text-legal-900">Request Received</h3>
                <p className="mt-2 text-slate-500">We will contact you at {formData.phone}.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-legal-50 border-0 border-b-2 border-legal-100 focus:border-legal-gold focus:ring-0 px-0 py-3 transition-colors bg-transparent placeholder-slate-400"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-legal-50 border-0 border-b-2 border-legal-100 focus:border-legal-gold focus:ring-0 px-0 py-3 transition-colors bg-transparent placeholder-slate-400"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-legal-50 border-0 border-b-2 border-legal-100 focus:border-legal-gold focus:ring-0 px-0 py-3 transition-colors bg-transparent placeholder-slate-400"
                      placeholder="+91 9999..."
                    />
                  </div>
                </div>
                <div>
                    <label htmlFor="serviceType" className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">Service Interest</label>
                    <select
                      name="serviceType"
                      id="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      className="w-full bg-legal-50 border-0 border-b-2 border-legal-100 focus:border-legal-gold focus:ring-0 px-0 py-3 transition-colors bg-transparent text-slate-900"
                    >
                      <option value="">Select a service...</option>
                      {SERVICES.map(s => <option key={s.id} value={s.id}>{s.title}</option>)}
                      <option value="other">Other Inquiry</option>
                    </select>
                </div>
                <div>
                  <label htmlFor="notes" className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">Message</label>
                  <textarea
                    name="notes"
                    id="notes"
                    rows={3}
                    value={formData.notes}
                    onChange={handleChange}
                    className="w-full bg-legal-50 border-0 border-b-2 border-legal-100 focus:border-legal-gold focus:ring-0 px-0 py-3 transition-colors bg-transparent placeholder-slate-400"
                    placeholder="Briefly describe your legal matter..."
                  ></textarea>
                </div>
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full py-4 px-6 bg-legal-900 text-white font-serif text-lg hover:bg-[#2a2a2a] transition-colors"
                  >
                    Submit Request
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;