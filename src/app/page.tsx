"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    // MAIN CONTAINER: Centers content vertically (min-h-screen) and horizontally
    <div className="min-h-screen flex items-center justify-center pt-24 pb-12 px-6 md:px-12 max-w-[1800px] mx-auto">
      
      {/* GRID LAYOUT: Splits screen into 2 columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center w-full">
        
        {/* LEFT COLUMN: The Photo */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full aspect-[4/5] md:aspect-square bg-gray-900 rounded-sm overflow-hidden"
        >
          {/* REPLACE THIS SRC WITH YOUR UPLOADED IMAGE: e.g., src="/my-photo.jpg" */}
          <Image
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
            alt="Karthik Somashekar"
            fill
            className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
            priority
          />
        </motion.div>

        {/* RIGHT COLUMN: The Bio */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col justify-center"
        >
          <h2 className="text-xs md:text-sm text-gray-500 uppercase tracking-[0.3em] mb-6">
            The Engineer Photographer
          </h2>
          
          <div className="space-y-6 text-lg md:text-xl font-light leading-relaxed text-gray-200">
            <p>
              I’m <span className="text-white font-medium">Karthik Somashekar</span>, a Bangalore-based engineering student who’s spent four years proving that 
              "giving life to pictures" is more fun than solving for <span className="italic font-serif">x</span>.
            </p>
            <p>
              My philosophy is simple: I don’t just click shots; I document the <span className="text-white">"how"</span> and <span className="text-white">"why"</span> to make sure 
              every frame tells a living story.
            </p>
            <p>
              I’m versatile, adaptable, and—unlike Silk Board traffic—I actually move fast when it comes to delivering your work.
            </p>
          </div>

          <div className="mt-12 w-16 h-[2px] bg-white/20"></div>
        </motion.div>

      </div>
    </div>
  );
}