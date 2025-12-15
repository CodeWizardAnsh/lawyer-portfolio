import React from 'react';
import { LAWYER_DETAILS, Icons } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-start">
          
          <div className="lg:col-span-5 relative mb-12 lg:mb-0">
             <div className="border border-legal-100 p-4">
                <div className="aspect-[3/4] overflow-hidden bg-legal-100 relative">
                     <img
                        className="object-cover w-full h-full filter sepia-[.2]"
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        alt="Legal Office"
                      />
                </div>
             </div>
             <div className="absolute -bottom-6 -right-6 bg-legal-900 text-white p-8 shadow-xl max-w-xs">
                 <p className="font-serif text-3xl mb-2">{LAWYER_DETAILS.name}</p>
                 <p className="text-legal-gold text-sm uppercase tracking-wider">{LAWYER_DETAILS.title}</p>
             </div>
          </div>
          
          <div className="lg:col-span-7">
            <h2 className="text-legal-gold font-bold tracking-widest uppercase text-sm mb-4">About Pradeep Sharma</h2>
            <h3 className="text-4xl font-serif text-legal-900 mb-8 leading-tight">
                Trusted Legal Adviser for <br/>
                <span className="italic text-legal-gold">Property & Civil Matters</span>
            </h3>
            
            <div className="prose prose-lg text-slate-600 mb-10">
              <p className="mb-4">{LAWYER_DETAILS.bio}</p>
              <p>
                Operating from the <strong>Document Center</strong> in South Anarkali, Delhi, we handle complex registry procedures, sale deeds, and High Court litigation with precision.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-legal-100 pt-8">
               <div className="flex flex-col">
                  <div className="flex items-center text-legal-gold mb-2"><Icons.Phone /></div>
                  <span className="text-xs text-slate-400 uppercase tracking-wide">Call Us</span>
                  <span className="font-serif text-xl text-legal-900">{LAWYER_DETAILS.phone}</span>
               </div>
               <div className="flex flex-col">
                  <div className="flex items-center text-legal-gold mb-2"><Icons.Email /></div>
                   <span className="text-xs text-slate-400 uppercase tracking-wide">Email Us</span>
                  <span className="font-serif text-xl text-legal-900 break-all">{LAWYER_DETAILS.email}</span>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;