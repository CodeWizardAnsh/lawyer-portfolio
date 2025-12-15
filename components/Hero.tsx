import React from 'react';
import { LAWYER_DETAILS, SERVICES } from '../constants';

const Hero: React.FC = () => {
  return (
    <div id="home" className="relative bg-legal-50 min-h-screen flex flex-col pt-20 overflow-hidden">
      
      <div className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="z-10 py-12 lg:py-0">
          <p className="text-legal-900 font-bold tracking-widest uppercase text-sm mb-4">Our Services</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif text-legal-900 leading-[1.1]">
            We are specialists <br/>
            <span className="font-normal italic">in the legal field</span>
          </h1>
          <p className="mt-8 text-xl text-slate-600 max-w-lg font-light leading-relaxed">
            Let us guide you with expertise in every legal area that matters most to your business and property.
          </p>
          
          <div className="mt-10">
            <a
              href="#book"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-[#0f2820] hover:bg-legal-900 transition-colors shadow-lg"
            >
              Free Consultation
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative h-full w-full min-h-[500px] lg:min-h-[calc(100vh-80px)]">
           <div className="absolute inset-0 bg-legal-gold/10 rounded-t-full transform translate-x-4 translate-y-4 hidden lg:block"></div>
           <div className="absolute inset-0 rounded-t-[100px] lg:rounded-none overflow-hidden">
             <img
                className="w-full h-full object-cover object-top"
                src={LAWYER_DETAILS.imageUrl}
                alt="Advocate Pradeep Sharma"
              />
              {/* Gradient Overlay for Text Visibility on smaller screens if needed */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent lg:hidden"></div>
           </div>
           
           {/* Floater Card */}
           <div className="absolute bottom-10 left-4 sm:left-10 bg-white/90 backdrop-blur-md p-6 border-l-4 border-legal-gold shadow-2xl max-w-xs">
              <p className="font-serif text-2xl text-legal-900 font-bold">"{LAWYER_DETAILS.cases}"</p>
              <p className="text-sm text-slate-600 mt-1 uppercase tracking-wider">{LAWYER_DETAILS.subtitle}</p>
           </div>
        </div>
      </div>

      {/* Bottom Ticker */}
      <div className="bg-[#0f2820] py-6 relative overflow-hidden whitespace-nowrap">
        <div className="animate-marquee inline-block">
          {[...SERVICES, ...SERVICES].map((service, index) => (
            <span key={index} className="mx-8 text-white/90 font-serif text-xl sm:text-2xl inline-flex items-center">
               <span className="text-legal-gold text-sm mr-4">✱</span>
               {service.title}
            </span>
          ))}
        </div>
        <div className="animate-marquee inline-block absolute top-6" aria-hidden="true">
          {[...SERVICES, ...SERVICES].map((service, index) => (
            <span key={index} className="mx-8 text-white/90 font-serif text-xl sm:text-2xl inline-flex items-center">
               <span className="text-legal-gold text-sm mr-4">✱</span>
               {service.title}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default Hero;