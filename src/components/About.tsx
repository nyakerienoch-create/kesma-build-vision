import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/8a41814c-0756-4486-a8ac-b27f8957e66b/about-img-73117e63-1775367825941.webp" 
                alt="Construction team at work" 
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-orange-100 -z-0 rounded-2xl hidden md:block"></div>
            <div className="absolute top-1/2 -left-8 transform -translate-y-1/2 bg-slate-900 text-white p-8 rounded-xl hidden lg:block">
              <p className="text-4xl font-bold text-orange-500 mb-2">15+</p>
              <p className="text-sm font-medium uppercase tracking-widest">Years of Experience</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-orange-600 font-bold tracking-widest uppercase mb-4">Who We Are</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Kesma Contractor's and Suppliers: Reliable Building Partners in Bungoma
            </h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Located on Moi Ave, Bungoma, Kesma Contractor's and Suppliers has established itself as a cornerstone of the construction industry in Western Kenya. As general contractors, we provide end-to-end solutions for both residential and commercial projects.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              We don't just build structures; we build relationships. Our commitment to using high-quality materials and employing skilled craftsmen ensures that every project we undertake stands the test of time.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                'High-end Construction',
                'General Contracting',
                'Quality Material Supply',
                'Project Consultation',
                'Interior & Exterior Finishes',
                'Timely Project Delivery'
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="text-orange-500 w-5 h-5 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <button className="bg-slate-900 text-white px-8 py-4 rounded-md font-bold hover:bg-slate-800 transition-colors">
              Learn More About Us
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;