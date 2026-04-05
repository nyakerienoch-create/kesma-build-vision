import React from 'react';
import { motion } from 'framer-motion';

const images = [
  {
    url: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/8a41814c-0756-4486-a8ac-b27f8957e66b/gallery-1-973e8c79-1775367826338.webp',
    title: 'Modern Living Space',
    category: 'Residential',
  },
  {
    url: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/8a41814c-0756-4486-a8ac-b27f8957e66b/gallery-2-0b62f7c8-1775367825062.webp',
    title: 'Luxury Villa Exterior',
    category: 'Architecture',
  },
  {
    url: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/8a41814c-0756-4486-a8ac-b27f8957e66b/gallery-3-349b5ba2-1775367826105.webp',
    title: 'Commercial Complex',
    category: 'Commercial',
  },
  {
    url: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/8a41814c-0756-4486-a8ac-b27f8957e66b/hero-bg-c87165ab-1775367825356.webp',
    title: 'Ongoing Construction Site',
    category: 'Project Site',
  },
  {
    url: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/8a41814c-0756-4486-a8ac-b27f8957e66b/about-img-73117e63-1775367825941.webp',
    title: 'Office Renovation',
    category: 'Interior',
  },
  {
    url: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/8a41814c-0756-4486-a8ac-b27f8957e66b/services-img-201b62c4-1775367825903.webp',
    title: 'Material Inventory',
    category: 'Supplies',
  },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-orange-600 font-bold tracking-widest uppercase mb-4"
            >
              Our Portfolio
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-slate-900"
            >
              Showcasing Our Commitment to Quality
            </motion.h3>
          </div>
          <button className="mt-8 md:mt-0 text-orange-600 font-bold hover:underline">
            View All Projects →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl h-80"
            >
              <img 
                src={image.url} 
                alt={image.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-orange-500 text-sm font-semibold mb-1 uppercase tracking-widest">{image.category}</span>
                <h4 className="text-white text-xl font-bold">{image.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;