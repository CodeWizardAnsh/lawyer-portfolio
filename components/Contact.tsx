import React from 'react';
import { LAWYER_DETAILS, Icons } from '../constants';
import Reveal from './Reveal';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-slate-50">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Reveal>
            <h2 className="text-base text-legal-gold font-semibold tracking-wide uppercase">Location</h2>
            <p className="mt-2 text-3xl leading-8 font-serif font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Visit Our Office
            </p>
          </Reveal>
        </div>

        <Reveal>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden lg:grid lg:grid-cols-2 hover:shadow-2xl transition-shadow duration-500">
              {/* Contact Info */}
              <div className="p-8 lg:p-12">
                  <h3 className="text-2xl font-serif font-bold text-slate-900 mb-8">Get In Touch</h3>
                  
                  <div className="space-y-6">
                      <div className="flex items-start group">
                          <div className="flex-shrink-0 text-legal-gold mt-1 group-hover:scale-125 transition-transform duration-300">
                              <Icons.MapPin />
                          </div>
                          <div className="ml-4">
                              <p className="text-sm font-medium text-slate-900">Our Address</p>
                              <p className="text-base text-slate-500 mt-1">{LAWYER_DETAILS.address}</p>
                          </div>
                      </div>

                      <div className="flex items-start group">
                          <div className="flex-shrink-0 text-legal-gold mt-1 group-hover:scale-125 transition-transform duration-300">
                              <Icons.Phone />
                          </div>
                          <div className="ml-4">
                              <p className="text-sm font-medium text-slate-900">Phone</p>
                              <p className="text-base text-slate-500 mt-1">{LAWYER_DETAILS.phone}</p>
                          </div>
                      </div>

                      <div className="flex items-start group">
                          <div className="flex-shrink-0 text-legal-gold mt-1 group-hover:scale-125 transition-transform duration-300">
                               <Icons.Email />
                          </div>
                          <div className="ml-4">
                              <p className="text-sm font-medium text-slate-900">Email</p>
                              <p className="text-base text-slate-500 mt-1">{LAWYER_DETAILS.email}</p>
                          </div>
                      </div>
                      
                       <div className="pt-6 border-t border-slate-100">
                           <h4 className="text-sm font-bold text-slate-900 mb-2">Office Hours</h4>
                           <p className="text-slate-500">{LAWYER_DETAILS.officeHours}</p>
                           <p className="text-slate-500">Sat - Sun: Closed</p>
                       </div>
                  </div>
              </div>

              {/* Google Map Embed */}
              <div className="relative h-96 lg:h-full bg-slate-200">
                 {/* 
                   Ideally, we'd use a real API key or embed URL here.
                   Using a generic embed for New York Court District as a placeholder since exact address is generic.
                 */}
                 <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.2384918282366!2d-74.00392332356763!3d40.73479003621988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2599665555555%3A0x6a0487019803157d!2sNew%20York%20City%20Civil%20Court!5e0!3m2!1sen!2sus!4v1709405265538!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{border:0}} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location Map"
                  className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                 ></iframe>
              </div>
          </div>
        </Reveal>
       </div>
    </section>
  );
};

export default Contact;