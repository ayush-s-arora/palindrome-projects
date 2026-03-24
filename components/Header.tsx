"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const [showProps, setShowProps] = useState(false);

  // Prevents hydration mismatch (flashing)
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <header className="fixed top-0 w-full z-50 border-b border-[var(--border)] bg-[var(--bg)]/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Left: Branding */}
        <Link href="/" className="font-bold tracking-tighter text-xl">Palindrome Projects</Link>

        {/* Right: Navigation */}
        <nav className="flex items-center">
          <div
            className="relative py-4"
            onMouseEnter={() => setShowProps(true)}
            onMouseLeave={() => setShowProps(false)}
          >
            {/* Main Link is now clickable */}
            <Link
              href="/properties"
              className="flex items-center gap-1 text-sm font-medium opacity-70 hover:opacity-100 transition"
            >
              Properties <ChevronDown size={14} className={`transition-transform duration-200 ${showProps ? 'rotate-180' : ''}`} />
            </Link>

            <AnimatePresence>
              {showProps && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  className="absolute top-full right-0 mt-2 w-48 bg-[var(--bg)] border border-[var(--border)] rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.12)] p-2 z-[999] overflow-hidden"
                >
                  <div className="flex flex-col">
                    <Link
                      href="/properties/nashville"
                      className="px-4 py-3 text-sm hover:bg-[var(--fg)]/8 rounded-xl transition-colors font-medium flex justify-between items-center group/item"
                    >
                      Nashville
                      <span className="opacity-0 group-hover/item:opacity-100 transition-opacity text-xs">→</span>
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>
      </div>
    </header>
  );
}