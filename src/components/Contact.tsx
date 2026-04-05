import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent! We will get back to you soon.');
  };

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-orange-600 font-bold tracking-widest uppercase mb-4">Contact Us</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Let's Discuss Your Next Big Project
            </h3>
            <p className="text-slate-600 mb-10">
              Ready to start your construction journey with Kesma? Visit our office in Bungoma or reach out via phone or email for a detailed quote.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-lg shadow-sm text-orange-600">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Location</h4>
                  <p className="text-sm text-slate-600 leading-tight">Moi Ave, Bungoma, Kenya</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-lg shadow-sm text-orange-600">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Phone</h4>
                  <p className="text-sm text-slate-600 leading-tight">0722 838336</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-lg shadow-sm text-orange-600">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Email</h4>
                  <p className="text-sm text-slate-600 leading-tight">info@kesma.co.ke</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-lg shadow-sm text-orange-600">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Hours</h4>
                  <p className="text-sm text-slate-600 leading-tight">Mon-Sat: 8am-6pm</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg h-64 relative">
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/8a41814c-0756-4486-a8ac-b27f8957e66b/contact-img-e07ef862-1775367826461.webp" 
                alt="Expert construction contractor" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-orange-600/10 mix-blend-multiply"></div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-slate-100 h-full">
              <h4 className="text-2xl font-bold text-slate-900 mb-8 text-center">Send us a Message</h4>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Full Name</label>
                    <Input placeholder="John Doe" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Phone Number</label>
                    <Input placeholder="07XX XXX XXX" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Project Type</label>
                  <Input placeholder="Residential Building, Renovation, etc." required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Message</label>
                  <Textarea placeholder="Tell us more about your vision..." className="min-h-[120px]" required />
                </div>
                <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white h-14 text-lg">
                  Send Message
                  <Send className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;