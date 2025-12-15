import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-legal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-legal-gold font-bold tracking-widest uppercase text-sm mb-3">Practice Areas</h2>
          <h2 className="text-4xl font-serif text-legal-900 leading-tight">
            Comprehensive Legal & <br/> Documentation Services
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <div key={service.id} className="group relative bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-transparent hover:border-legal-gold">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity text-legal-gold">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              
              <div className="text-legal-900 mb-6 group-hover:text-legal-gold transition-colors">
                 {service.icon}
              </div>
              
              <h3 className="text-xl font-serif text-legal-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              
              <a href="#book" className="text-xs font-bold uppercase tracking-wider text-legal-900 hover:text-legal-gold flex items-center gap-2 mt-auto">
                Learn More <span className="text-lg">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;