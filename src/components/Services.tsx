import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Home, Layout, Truck, Paintbrush, Ruler } from 'lucide-react';

const services = [
  {
    title: 'General Contracting',
    description: 'Comprehensive management of your construction project from site preparation to final handover.',
    icon: Building2,
  },
  {
    title: 'Residential Building',
    description: 'Crafting luxury homes and affordable housing solutions with precision and care.',
    icon: Home,
  },
  {
    title: 'Commercial Projects',
    description: 'Specialized construction for offices, retail spaces, and industrial facilities in Bungoma.',
    icon: Layout,
  },
  {
    title: 'Material Supply',
    description: 'We supply high-grade cement, steel, bricks, and finishing materials at competitive rates.',
    icon: Truck,
  },
  {
    title: 'Interior Design',
    description: 'Modernizing spaces with expert painting, flooring, and custom interior finishes.',
    icon: Paintbrush,
  },
  {
    title: 'Project Estimation',
    description: 'Accurate cost analysis and budgeting services to keep your project on track.',
    icon: Ruler,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-orange-600 font-bold tracking-widest uppercase mb-4"
          >
            Our Services
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-6"
          >
            Building Excellence Across Every Dimension
          </motion.h3>
          <p className="text-slate-600">
            From foundation to finishing, Kesma Contractor's and Suppliers offers a full suite of construction and supply services tailored to meet your unique needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all group"
            >
              <div className="bg-orange-100 w-16 h-16 rounded-xl flex items-center justify-center mb-8 group-hover:bg-orange-600 transition-colors">
                <service.icon className="text-orange-600 w-8 h-8 group-hover:text-white" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;