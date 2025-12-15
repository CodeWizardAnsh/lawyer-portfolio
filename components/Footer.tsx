import React from 'react';
import { PSLogo } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-legal-50 border-t border-legal-100 text-legal-900 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                <div className="col-span-1 md:col-span-2">
                    <div className="flex items-center gap-3 mb-6">
                        <PSLogo className="h-12 w-auto" />
                        <div>
                            <span className="text-2xl font-serif font-bold block leading-none">Pradeep Sharma</span>
                            <span className="text-xs uppercase tracking-widest text-legal-gold">Advocate • Delhi High Court</span>
                        </div>
                    </div>
                    <p className="text-slate-600 max-w-sm mb-6">
                        Dedicated "Document Center" providing legal advisory for properties and civil litigation. Excellence in every deed.
                    </p>
                </div>
                
                <div>
                    <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-legal-gold">Navigate</h4>
                    <ul className="space-y-3 text-sm text-slate-600">
                        <li><a href="#home" className="hover:text-legal-900 transition-colors">Home</a></li>
                        <li><a href="#about" className="hover:text-legal-900 transition-colors">About</a></li>
                        <li><a href="#services" className="hover:text-legal-900 transition-colors">Practice Areas</a></li>
                        <li><a href="#contact" className="hover:text-legal-900 transition-colors">Contact</a></li>
                    </ul>
                </div>
                
                <div>
                     <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-legal-gold">Legal</h4>
                     <ul className="space-y-3 text-sm text-slate-600">
                        <li><a href="#" className="hover:text-legal-900 transition-colors">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-legal-900 transition-colors">Terms of Use</a></li>
                        <li><a href="#" className="hover:text-legal-900 transition-colors">Disclaimer</a></li>
                    </ul>
                </div>
            </div>
            
            <div className="border-t border-legal-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
                <p>&copy; {new Date().getFullYear()} Pradeep Sharma. All rights reserved.</p>
                <p className="mt-2 md:mt-0">119, South Anarkali, Som Bazar Road, Delhi - 110051</p>
            </div>
        </div>
    </footer>
  );
};

export default Footer;