import React from 'react';
import { motion } from 'motion/react';

export const TimelineSection: React.FC = () => {
  const milestones = [
    {
      year: '2023',
      title: 'Early Development Experience',
      subtitle: 'Frontend & Web Fundamentals',
      highlight: false
    },
    {
      year: '2024',
      title: 'React / Full-Stack Development',
      subtitle: 'Component Architecture & APIs',
      highlight: false
    },
    {
      year: '2025',
      title: 'Aagnia Technology',
      subtitle: 'Full Stack Developer',
      highlight: true
    },
    {
      year: '2026',
      title: 'Full Stack + AI',
      subtitle: 'Google Cloud & LLMs',
      highlight: false
    }
  ];

  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 border-t border-slate-800/60 overflow-visible" id="experience-timeline">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-14"
      >
        <div className="text-[11px] font-mono tracking-widest text-[#FF6B2C] uppercase mb-1 font-semibold">
          — MY JOURNEY
        </div>
        <h3 className="text-3xl font-display font-bold text-white">Experience Timeline</h3>
      </motion.div>

      {/* Horizontal Connected Timeline Grid with Animated Pulse Beam */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Connecting Line Background for Large Displays */}
        <div className="hidden lg:block absolute top-3.5 left-6 right-6 h-0.5 bg-slate-800 -z-10 overflow-hidden">
          <motion.div
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1/3 h-full bg-gradient-to-r from-transparent via-[#FF6B2C] to-transparent"
          ></motion.div>
        </div>

        {milestones.map((m, idx) => (
          <motion.div
            key={m.year}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.12 }}
            className="space-y-3 relative group"
          >
            {/* Dot indicator */}
            {m.highlight ? (
              <div className="w-7 h-7 rounded-full bg-[#FF6B2C]/25 border-2 border-[#FF6B2C] flex items-center justify-center shadow-[0_0_20px_rgba(255,107,44,0.8)]">
                <motion.div
                  animate={{ scale: [1, 1.4, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-2.5 h-2.5 rounded-full bg-[#FF6B2C]"
                ></motion.div>
              </div>
            ) : (
              <div className="w-7 h-7 rounded-full bg-slate-900 border-2 border-slate-700 flex items-center justify-center group-hover:border-[#FF6B2C] transition-colors">
                <div className="w-2 h-2 rounded-full bg-slate-500 group-hover:bg-[#FF6B2C] transition-colors"></div>
              </div>
            )}

            {/* Year */}
            <div
              className={`font-display font-bold text-2xl ${
                m.highlight ? 'text-[#FF6B2C]' : 'text-slate-200'
              }`}
            >
              {m.year}
            </div>

            {/* Title & Subtitle */}
            <div>
              <h4 className={`text-sm font-semibold ${m.highlight ? 'text-[#FFB86B]' : 'text-white'}`}>
                {m.title}
              </h4>
              <p className="text-xs text-slate-400 font-light mt-0.5">
                {m.subtitle}
              </p>
            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
};
