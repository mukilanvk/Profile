import React from 'react';
import { motion } from 'motion/react';
import philosophyImg from '../assets/images/philosophy_horizon_1789720911491.jpg';

export const PhilosophySection: React.FC = () => {
  const points = [
    "It's about performance.",
    "It's about usability.",
    "It's about architecture.",
    "It's about solving real problems."
  ];

  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 border-t border-slate-800/60 overflow-visible" id="philosophy">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Left Column: Heading (lg:col-span-4) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-4 space-y-4"
        >
          <div className="text-[11px] font-mono tracking-widest text-[#FF6B2C] uppercase font-semibold">
            — DEVELOPMENT PHILOSOPHY
          </div>

          <h2 className="font-display font-black text-4xl sm:text-5xl uppercase tracking-tight text-white leading-[0.95] select-none">
            GOOD UI <br />
            ISN'T JUST <br />
            <span className="text-white">ABOUT LOOKS.</span>
          </h2>
        </motion.div>

        {/* Middle Column: 4 Key Statements (lg:col-span-4) */}
        <div className="lg:col-span-4 space-y-4 py-2">
          {points.map((pt, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="flex items-center gap-3 text-slate-200 text-sm sm:text-base font-light"
            >
              <span className="w-2 h-2 rounded-full bg-[#FF6B2C] shadow-[0_0_10px_#FF6B2C] shrink-0"></span>
              <span>{pt}</span>
            </motion.div>
          ))}
        </div>

        {/* Right Column: Cinematic Card - Developer Gazing at Horizon (lg:col-span-4) */}
        <div className="lg:col-span-4 relative flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.03 }}
            className="relative w-full h-80 rounded-2xl overflow-hidden border border-slate-800 bg-[#06060A] shadow-2xl group"
          >
            {/* Photorealistic Developer Silhouette overlooking sunset */}
            <img
              src={philosophyImg}
              alt="Developer overlooking mountain horizon at sunset"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center filter brightness-95 group-hover:scale-105 transition-transform duration-700"
            />

            {/* Subtle MK back monogram indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center pointer-events-none z-10">
              <span className="font-display font-extrabold text-slate-300 text-xs tracking-widest select-none bg-black/50 px-2.5 py-1 rounded border border-white/10 backdrop-blur-xs shadow-lg">
                MK
              </span>
            </div>

            {/* Handwritten Floating Script with Bobbing Motion: Some Better Solutions */}
            <motion.div
              animate={{
                y: [0, -6, 0],
                rotate: [-6, -4, -6]
              }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-6 right-6 font-script text-[#FFB86B] text-2xl sm:text-3xl drop-shadow-[0_2px_14px_rgba(255,107,44,0.8)] select-none z-10"
            >
              Some Better Solutions
            </motion.div>

            {/* Ambient edge ring */}
            <div className="absolute inset-0 pointer-events-none rounded-2xl ring-1 ring-inset ring-white/10"></div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
