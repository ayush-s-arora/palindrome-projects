"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';

const PROPERTIES = [
  {
    id: 'nashville',
    name: 'Nashville',
    description: 'Modern living in the heart of Music City.',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1000', // Potted plant/interior vibe
  },
];

export default function PropertiesPage() {
  return (
    <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      {/* Intro Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-24 max-w-2xl"
      >
        <span className="text-xs tracking-[0.3em] uppercase opacity-50 mb-4 block">Our Portfolio</span>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">
          Local stays, curated for you.
        </h1>
        <p className="text-xl text-stone-500 leading-relaxed">
          We provide more than just a place to sleep. Every property is hand-selected and 
          maintained to the highest standards, ensuring a seamless experience from check-in to checkout.
        </p>
      </motion.section>

      {/* Property Collage/Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROPERTIES.map((prop, idx) => (
          <motion.div
            key={prop.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <Link href={`/properties/${prop.id}`} className="group block">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-stone-200 dark:bg-stone-900 mb-6">
                {/* Image Wrapper for Hover Effect */}
                <motion.div 
                  className="w-full h-full bg-cover bg-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                  style={{ backgroundImage: `url(${prop.image})` }}
                />
                
                {/* Overlay for "View" text on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center">
                   <span className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-500">
                     View Guidebook
                   </span>
                </div>
              </div>
              
              <div className="space-y-1">
                <h3 className="text-2xl font-semibold tracking-tight">{prop.name}</h3>
                <p className="text-stone-500 text-sm">{prop.description}</p>
              </div>
            </Link>
          </motion.div>
        ))}

        {/* Placeholder for "Coming Soon" - Keeps the collage look balanced */}
        <div className="border-2 border-dashed border-stone-200 dark:border-stone-800 rounded-[2rem] aspect-[4/5] flex flex-col items-center justify-center p-8 text-center opacity-50">
          <p className="text-sm font-medium uppercase tracking-widest mb-2">Expanding Soon</p>
          <p className="text-xs text-stone-400">We are currently curating new locations for 2026.</p>
        </div>
      </section>
    </main>
  );
}