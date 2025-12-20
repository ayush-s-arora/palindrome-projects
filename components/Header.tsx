"use client";
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Monitor, ChevronDown } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  const { theme, setTheme } = useTheme();
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

        {/* Right: Navigation + Theme Group */}
        <div className="flex items-center gap-8">
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
                    // Use !bg-white and !dark:bg-stone-950 to override any inherited transparency
                    className="absolute top-full right-0 mt-2 w-48 !bg-white dark:!bg-stone-950 border border-stone-200 dark:border-stone-800 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] p-2 z-[999] overflow-hidden"
                  >
                    <div className="flex flex-col">
                      <Link
                        href="/properties/nashville"
                        className="px-4 py-3 text-sm hover:bg-stone-100 dark:hover:bg-stone-900 rounded-xl transition-colors font-medium flex justify-between items-center group/item"
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

          {/* Theme Switcher Group */}
          <div className="flex items-center gap-1 bg-stone-100 dark:bg-stone-800/50 p-1 rounded-full border border-[var(--border)]">
            {[
              { id: 'light', icon: Sun },
              { id: 'dark', icon: Moon },
              { id: 'system', icon: Monitor }
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => setTheme(t.id)}
                className={`p-1.5 rounded-full transition-all ${theme === t.id
                    ? 'bg-white dark:bg-stone-700 shadow-sm opacity-100'
                    : 'opacity-40 hover:opacity-100'
                  }`}
                title={`${t.id} mode`}
              >
                <t.icon size={14} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}