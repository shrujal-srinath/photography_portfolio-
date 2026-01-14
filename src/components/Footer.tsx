import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/20 bg-[#050505] py-20 px-6 md:px-12">
      <div className="max-w-[1800px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
        
        {/* Left: Call to Action */}
        <div>
          <h2 className="text-3xl md:text-5xl font-serif mb-8">Get in Touch</h2>
          <div className="space-y-2 text-sm md:text-base text-gray-400">
            <p className="uppercase tracking-widest text-xs mb-2 text-white">Direct Line</p>
            <p>+91 7483439386</p>
          </div>
        </div>

        {/* Right: Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-sm">
          <div>
             <p className="uppercase tracking-widest text-xs mb-4 text-white">Social</p>
             <Link href="https://instagram.com/karthikk_somashekar" className="block text-gray-400 hover:text-white transition-colors">
               @karthikk_somashekar
             </Link>
          </div>
          <div>
             <p className="uppercase tracking-widest text-xs mb-4 text-white">Email</p>
             <a href="mailto:karthiksomashekar18@gmail.com" className="block text-gray-400 hover:text-white transition-colors">
               karthiksomashekar18@gmail.com
             </a>
          </div>
        </div>
      </div>
    </footer>
  );
}