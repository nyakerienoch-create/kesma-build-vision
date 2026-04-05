import React from 'react';
import { Hammer, Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-orange-600 p-2 rounded-md">
                <Hammer className="text-white w-6 h-6" />
              </div>
              <span className="font-bold text-2xl tracking-tight">KESMA</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Your trusted partner for high-end construction and quality material supplies in Bungoma. Building excellence since 2008.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-orange-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-orange-600 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-orange-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-orange-600 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-slate-400 hover:text-orange-500 transition-colors">About Us</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-orange-500 transition-colors">Our Services</a></li>
              <li><a href="#gallery" className="text-slate-400 hover:text-orange-500 transition-colors">Project Gallery</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-orange-500 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8">Our Services</h4>
            <ul className="space-y-4">
              <li className="text-slate-400">General Contracting</li>
              <li className="text-slate-400">Residential Building</li>
              <li className="text-slate-400">Commercial Renovation</li>
              <li className="text-slate-400">Material Supply</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8">Newsletter</h4>
            <p className="text-slate-400 mb-6">Subscribe to get latest news and project updates.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-slate-800 border-none rounded-md px-4 py-3 flex-grow focus:ring-1 focus:ring-orange-600 outline-none"
              />
              <button className="bg-orange-600 hover:bg-orange-700 px-4 py-3 rounded-md font-bold transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Kesma Contractor's and Suppliers. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="bg-slate-800 p-3 rounded-full hover:bg-orange-600 transition-colors flex items-center gap-2 group"
          >
            <span className="text-sm font-bold hidden group-hover:block transition-all">Back to Top</span>
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;