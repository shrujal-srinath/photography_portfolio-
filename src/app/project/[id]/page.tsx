import Image from "next/image";
import Link from "next/link";
import { projects } from "../../../data/projects"; // Checks your data file
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

// This helps Next.js know which pages to build in advance (Great for SEO)
export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ProjectPage({ params }: Props) {
  // 1. Unwrap the params (required in Next.js 15+)
  const resolvedParams = await params;
  const id = resolvedParams.id;

  // 2. Find the specific project in your data file
  const project = projects.find((p) => p.id === id);

  // 3. If the ID doesn't exist, show a 404 page
  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20">
      
      {/* Back Navigation */}
      <div className="max-w-[1400px] mx-auto px-6 mb-12">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors uppercase tracking-widest"
        >
          <ArrowLeft size={16} /> Back to Work
        </Link>
      </div>

      <article className="max-w-[1400px] mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 border-b border-white/10 pb-12">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-8xl font-serif font-light mb-6 leading-tight">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-light">
              {project.alt}
            </p>
          </div>
          
          <div className="flex flex-col gap-4 text-right min-w-[200px]">
            <div>
              <span className="block text-xs text-gray-600 uppercase tracking-widest mb-1">Category</span>
              <span className="text-lg">{project.category}</span>
            </div>
            <div>
              <span className="block text-xs text-gray-600 uppercase tracking-widest mb-1">Year</span>
              <span className="text-lg">{project.year}</span>
            </div>
          </div>
        </div>

        {/* Main Hero Image */}
        <div className="relative w-full aspect-video md:aspect-[21/9] mb-20 bg-gray-900 rounded-sm overflow-hidden">
          <Image
            src={project.src}
            alt={project.alt}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Story / Context Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h3 className="text-sm text-gray-500 uppercase tracking-widest mb-4">The Concept</h3>
          </div>
          <div className="md:col-span-8">
            <p className="text-lg md:text-xl font-light leading-relaxed text-gray-300">
              {/* Note: In the future, we can add a 'description' field to your projects.ts file */}
              This project explores the relationship between light and shadow. 
              The goal was to capture raw emotion without relying on artificial staging. 
              Shot on location using natural light to preserve the authenticity of the moment.
            </p>
          </div>
        </div>

      </article>
    </div>
  );
}