"use client";

import Link from "next/link";

const genres = [
  "Corporate", "Product", "Concerts", 
  "Sports", "Wildlife", "Food", "Motorsport"
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/90 backdrop-blur-sm border-b border-white/10">
      <div className="w-full max-w-[1800px] mx-auto px-6 py-8 flex justify-between items-start">
        
        {/* LEFT: Name */}
        <Link href="/" className="group">
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase font-serif text-white hover:text-gray-300 transition-colors">
            KARTHIK
          </h1>
        </Link>

        {/* RIGHT: Navigation Stack */}
        <div className="text-right flex flex-col items-end gap-6">
          
          {/* 1. The Genres (Clickable Links) */}
          <div className="flex flex-wrap justify-end gap-x-4 gap-y-2 max-w-lg">
            {genres.map((genre) => (
              <Link 
                key={genre}
                href={`/work/${genre.toLowerCase()}`}
                className="text-xs md:text-sm font-medium uppercase tracking-widest text-gray-500 hover:text-white transition-colors"
              >
                {genre} <span className="text-gray-700 mx-1">/</span>
              </Link>
            ))}
          </div>

          {/* 2. Main Menu (About & Contact) */}
          <div className="flex gap-6 text-sm font-bold uppercase tracking-widest text-white">
            <Link href="/about" className="hover:text-gray-400 transition-colors">About</Link>
            <Link href="/contact" className="hover:text-gray-400 transition-colors">Contact</Link>
          </div>
        </div>

      </div>
    </nav>
  );
}