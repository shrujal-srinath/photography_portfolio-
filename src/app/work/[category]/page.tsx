import { projects } from "../../../data/projects";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

type Props = {
  params: Promise<{ category: string }>;
};

// 1. Generate Static Pages for all genres (SEO)
export async function generateStaticParams() {
  const genres = ["corporate", "product", "concerts", "sports", "wildlife", "food", "motorsport"];
  return genres.map((category) => ({ category }));
}

export default async function CategoryPage({ params }: Props) {
  const resolvedParams = await params;
  const category = resolvedParams.category; // e.g., "motorsport"

  // 2. Filter projects (Case insensitive)
  const categoryProjects = projects.filter(
    (p) => p.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <div className="min-h-screen pt-40 pb-20 px-6 md:px-12 max-w-[1800px] mx-auto">
      
      {/* Header */}
      <div className="mb-12 flex items-center gap-6">
        <Link href="/" className="p-2 border border-white/20 rounded-full hover:bg-white hover:text-black transition-colors">
          <ArrowLeft size={20} />
        </Link>
        <h1 className="text-4xl md:text-6xl font-serif font-light capitalize text-white">
          {category}
        </h1>
        <span className="text-gray-500 text-lg relative top-2">
          ({categoryProjects.length})
        </span>
      </div>

      {/* The Grid */}
      {categoryProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryProjects.map((project) => (
            <Link key={project.id} href={`/project/${project.id}`} className="group block">
              <div className="relative aspect-[4/5] bg-gray-900 mb-4 overflow-hidden">
                <Image
                  src={project.src}
                  alt={project.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
              </div>
              <h3 className="text-xl text-white font-light group-hover:underline decoration-1 underline-offset-4">
                {project.title}
              </h3>
            </Link>
          ))}
        </div>
      ) : (
        <div className="py-20 text-center border border-dashed border-white/20 text-gray-500">
          <p>No photos uploaded for {category} yet.</p>
        </div>
      )}
    </div>
  );
}