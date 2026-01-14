"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-40 pb-20 px-6 md:px-12 max-w-[1800px] mx-auto flex flex-col md:flex-row gap-20">
      
      {/* LEFT: Big Title */}
      <div className="w-full md:w-1/3">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-serif font-light leading-tight text-white"
        >
          Behind <br />
          The <span className="text-gray-500 italic">Lens.</span>
        </motion.h1>
      </div>

      {/* RIGHT: The Bio */}
      <div className="w-full md:w-2/3 max-w-2xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8 text-gray-400 font-light leading-relaxed text-lg"
        >
          <p>
            I am Karthik, a photographer defined not just by the images I take, but by the stories I choose to tell. 
            My work is a study of presence—capturing the weight of a moment before it evaporates.
          </p>
          <p>
            Specializing in a diverse range of disciplines from <span className="text-white">Motorsport</span> to <span className="text-white">Wildlife</span>, 
            I bring the same level of narrative planning and intentionality to every shoot. Whether it is the high-speed 
            blur of a race track or the silence of a plated dish, my goal is the same: to document the truth.
          </p>
          
          <div className="pt-8 border-t border-white/10 grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-xs uppercase tracking-widest text-white mb-2">Experience</h3>
              <p className="text-sm">5+ Years Professional</p>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-widest text-white mb-2">Base</h3>
              <p className="text-sm">Available Worldwide</p>
            </div>
          </div>
        </motion.div>
      </div>

    </div>
  );
}