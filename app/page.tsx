"use client";
import { motion } from 'framer-motion';
import { Store } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="pt-16">
      <section className="relative h-[80vh] flex items-center justify-center px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-4 md:inset-10 rounded-[3rem] overflow-hidden z-0"
        >
          <div className="w-full h-full bg-stone-300 dark:bg-stone-900 bg-cover bg-center"
               style={{ backgroundImage: `url('https://images.unsplash.com/photo-1545239351-ef35f43d514b?q=80&w=2000')` }}>
            <div className="absolute inset-0 bg-black/20 dark:bg-black/40" />
          </div>
        </motion.div>

        <div className="relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-4xl sm:text-6xl md:text-[12rem] font-bold tracking-tighter text-white"
          >
            Palindrome Projects
          </motion.h1>
        </div>
      </section>

      <section className="max-w-3xl mx-auto py-20 md:py-40 px-6">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl md:text-5xl font-light leading-tight tracking-tight text-stone-500"
        >
          Hello from the team at Palindrome Projects! We are a family-owned small business based in Chicago, IL.
          <br></br>We specialize in providing high-quality services to our customers—specifically rental housing and short-term stays.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-16"
        >
          <Link
            href="https://www.etsy.com/shop/PalindromeProj"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--border)] text-sm font-semibold tracking-widest uppercase hover:bg-[var(--fg)] hover:text-[var(--bg)] transition-all"
          >
            Visit us on Etsy <Store size={14} />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}