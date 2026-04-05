import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Samuel Wekesa",
    role: "Homeowner",
    content: "Kesma Contractor's exceeded my expectations. They built our family home in Bungoma with such precision and stayed within the budget. Highly recommended!",
    rating: 5,
  },
  {
    name: "Brenda Nabwire",
    role: "Business Owner",
    content: "We contracted Kesma for our retail shop renovation on Moi Ave. Their material supplies are top-notch and their team is incredibly professional.",
    rating: 5,
  },
  {
    name: "David Simiyu",
    role: "Real Estate Developer",
    content: "Finding a reliable general contractor can be difficult. Kesma stands out for their honesty, quality of work, and ability to meet tight deadlines.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
      {/* Decorative quotes icon */}
      <div className="absolute top-10 right-10 opacity-5">
        <Quote size={200} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-orange-500 font-bold tracking-widest uppercase mb-4"
          >
            Testimonials
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            What Our Clients Say
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 backdrop-blur-sm"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="text-orange-500 fill-orange-500 w-5 h-5" />
                ))}
              </div>
              <p className="text-gray-300 italic mb-8 leading-relaxed">
                "{t.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center font-bold text-orange-500">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h5 className="font-bold">{t.name}</h5>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;