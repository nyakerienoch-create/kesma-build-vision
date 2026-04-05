import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Clock, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://storage.googleapis.com/dala-prod-public-storage/generated-images/8a41814c-0756-4486-a8ac-b27f8957e66b/hero-bg-c87165ab-1775367825356.webp')` 
        }}
      />

      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Building Your Vision <br /> 
            <span className="text-orange-500">With Excellence</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light">
            Kesma Contractor's and Suppliers: Bungoma's premier general contractor providing high-end residential and commercial construction solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg h-auto">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-6 text-lg h-auto">
              View Our Work
            </Button>
          </div>
        </motion.div>

        {/* Features row */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 text-white">
            <div className="bg-orange-600/20 p-3 rounded-full border border-orange-500/30">
              <ShieldCheck className="text-orange-500 w-6 h-6" />
            </div>
            <div className="text-left">
              <p className="font-bold">Quality Assured</p>
              <p className="text-sm text-gray-400">Certified professionals</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-white">
            <div className="bg-orange-600/20 p-3 rounded-full border border-orange-500/30">
              <Clock className="text-orange-500 w-6 h-6" />
            </div>
            <div className="text-left">
              <p className="font-bold">On-Time Delivery</p>
              <p className="text-sm text-gray-400">Efficient project management</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-white">
            <div className="bg-orange-600/20 p-3 rounded-full border border-orange-500/30">
              <Award className="text-orange-500 w-6 h-6" />
            </div>
            <div className="text-left">
              <p className="font-bold">Expert Craftsmanship</p>
              <p className="text-sm text-gray-400">Years of experience</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;