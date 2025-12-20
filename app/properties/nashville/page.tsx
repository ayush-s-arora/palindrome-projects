"use client";
import { motion } from 'framer-motion';

const CONTENT = [
  { id: 'wifi', title: 'High-Speed Wifi', body: 'Network: [Name]_Guest \nPass: [Password]' },
  { id: 'entry', title: 'Keyless Entry', body: 'Your code is the last 4 digits of your phone number.' },
  { id: 'transport', title: 'Getting Around', body: 'The nearest metro station is a 5-minute walk north.' }
];

export default function CityPage() {
  return (
    <main className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <h1 className="text-5xl font-bold tracking-tight mb-4">City Guidebook</h1>
          <p className="text-stone-500 text-lg">Everything you need for a perfect stay.</p>
        </motion.div>

        <div className="space-y-12">
          {CONTENT.map((item, idx) => (
            <motion.section 
              key={item.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="group"
            >
              <div className="flex gap-8 p-8 rounded-[2rem] bg-stone-100 dark:bg-stone-900/50 border border-transparent hover:border-[var(--border)] transition-all">
                <span className="text-sm font-mono opacity-20">0{idx + 1}</span>
                <div>
                  <h2 className="text-2xl font-semibold mb-3">{item.title}</h2>
                  <p className="text-stone-600 dark:text-stone-400 whitespace-pre-line leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </main>
  );
}