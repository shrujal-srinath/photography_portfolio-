"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-40 px-6 md:px-12 max-w-[1800px] mx-auto">
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="border-b border-white/10 pb-20 mb-20"
      >
        <h1 className="text-5xl md:text-8xl font-serif font-light mb-8 text-white">
          Let's Work.
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl font-light">
          Currently accepting bookings for the upcoming season. 
          Please include specific dates and project details in your inquiry.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Contact Details */}
        <div className="space-y-12">
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">Direct Email</p>
            <a href="mailto:karthiksomashekar18@gmail.com" className="text-2xl md:text-3xl text-white hover:text-gray-300 transition-colors block">
              karthiksomashekar18@gmail.com
            </a>
          </div>
          
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">Phone</p>
            <p className="text-2xl md:text-3xl text-white">
              +91 7483439386
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">Socials</p>
            <a href="https://instagram.com/karthikk_somashekar" className="text-xl text-white hover:underline decoration-1 underline-offset-4">
              Instagram
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}