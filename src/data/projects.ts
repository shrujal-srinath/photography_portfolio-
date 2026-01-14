export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const projects: Project[] = [
  // CORPORATE
  {
    id: "c1",
    title: "Executive Summit",
    category: "Corporate",
    year: "2025",
    src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1600&auto=format&fit=crop",
    alt: "Corporate meeting",
    width: 1600, height: 900
  },
  // PRODUCT
  {
    id: "p1",
    title: "Minimalist Watch",
    category: "Product",
    year: "2024",
    src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop",
    alt: "Product photography",
    width: 1000, height: 1000
  },
  // MOTORSPORT
  {
    id: "m1",
    title: "Track Day",
    category: "Motorsport",
    year: "2024",
    src: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=1600&auto=format&fit=crop",
    alt: "Racing car on track",
    width: 1600, height: 900
  },
  // WILDLIFE
  {
    id: "w1",
    title: "Silent Hunter",
    category: "Wildlife",
    year: "2023",
    src: "https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=1000&auto=format&fit=crop",
    alt: "Wild animal portrait",
    width: 1000, height: 1200
  },
  // CONCERTS
  {
    id: "co1",
    title: "Live at the Arena",
    category: "Concerts",
    year: "2024",
    src: "https://images.unsplash.com/photo-1459749411177-287ce51261df?q=80&w=1600&auto=format&fit=crop",
    alt: "Concert crowd and lights",
    width: 1600, height: 900
  },
  // FOOD
  {
    id: "f1",
    title: "Culinary Art",
    category: "Food",
    year: "2025",
    src: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?q=80&w=1000&auto=format&fit=crop",
    alt: "Plated food",
    width: 1000, height: 1000
  },
  // SPORTS
  {
    id: "s1",
    title: "The Sprint",
    category: "Sports",
    year: "2024",
    src: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1600&auto=format&fit=crop",
    alt: "Runner in motion",
    width: 1600, height: 900
  }
];