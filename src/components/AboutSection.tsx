import React from 'react';
import { motion } from 'motion/react';
import aboutGlobeImg from '../assets/images/about_mk_globe_1789720894666.jpg';

export const AboutSection: React.FC = () => {
  const stackBadges = [
    { label: 'React', icon: '⚛', color: 'text-cyan-400' },
    { label: 'Next.js', icon: 'N', color: 'text-white' },
    { label: 'Python', icon: '🐍', color: 'text-yellow-400' },
    { label: 'FastAPI', icon: '⚡', color: 'text-emerald-400' },
    { label: 'PostgreSQL', icon: '🐘', color: 'text-blue-400' },
    { label: 'AI', icon: '🧠', color: 'text-purple-400' }
  ];

  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 border-t border-slate-800/60 overflow-visible" id="about">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-96 h-96 bg-[#FF6B2C]/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-center">
        
        {/* Column 1: Heading & Tech Pills (md:col-span-4) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="md:col-span-4 space-y-6"
        >
          <div className="text-[11px] font-mono tracking-widest text-[#FF6B2C] uppercase font-semibold">
            — ABOUT ME
          </div>

          <h2 className="font-display font-black text-4xl sm:text-5xl uppercase tracking-tight text-white leading-[0.95] select-none">
            I BUILD <br />
            DIGITAL <br />
            <span className="text-white">EXPERIENCES.</span>
          </h2>

          {/* 6 Tech Badges Stack with Stagger Hover */}
          <div className="flex flex-wrap gap-2 pt-2">
            {stackBadges.map((badge, idx) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ scale: 1.08, borderColor: "rgba(255,107,44,0.6)" }}
                className="glass-pill px-3 py-1.5 rounded-full flex items-center gap-1.5 text-xs text-slate-300 transition-colors cursor-default"
              >
                <span className={`text-xs ${badge.color}`}>{badge.icon}</span>
                <span className="font-mono text-[11px]">{badge.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Column 2: Bio Paragraphs (md:col-span-4) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="md:col-span-4 space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed font-light"
        >
          <p>
            I'm <strong className="text-white font-medium">Mukil Karupusamy</strong>, a React.js and Next.js full-stack developer with 2.5+ years of experience building modern web applications.
          </p>
          <p>
            My experience spans frontend engineering, backend APIs, databases, testing and AI-powered applications.
          </p>
        </motion.div>

        {/* Column 3: Photorealistic 3D Orbital Sphere with Overlapping Animated Rings (md:col-span-4) */}
        <div className="md:col-span-4 flex justify-center items-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center group"
          >
            {/* Outer Concentric Animated Ring 1 */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-18px] rounded-full border border-dashed border-[#FF6B2C]/30 pointer-events-none"
            >
              {/* Floating stardust bead on ring */}
              <div className="w-2.5 h-2.5 rounded-full bg-[#FFB86B] shadow-[0_0_12px_#FF6B2C] absolute -top-1 left-1/2 -translate-x-1/2"></div>
            </motion.div>

            {/* Inner Concentric Animated Ring 2 (Counter-clockwise) */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-6px] rounded-full border border-[#FFA439]/20 pointer-events-none"
            >
              <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_#FFF] absolute bottom-2 right-1/4"></div>
            </motion.div>

            {/* Photorealistic 3D Globe with Rings and Golden Light Trails */}
            <motion.div
              animate={{
                y: [0, -6, 0],
                scale: [1, 1.02, 1]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.06, transition: { duration: 0.3 } }}
              className="relative w-full h-full rounded-full overflow-hidden flex items-center justify-center shadow-[0_0_60px_rgba(255,107,44,0.35)] cursor-pointer"
            >
              <img
                src={aboutGlobeImg}
                alt="3D Holographic Orbit Globe with MK Monogram"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-full filter brightness-105"
              />
              
              {/* Overlay Center Sphere with MK Monogram */}
              <div className="absolute z-10 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-black/60 border border-[#FF6B2C]/70 backdrop-blur-sm shadow-[0_0_35px_rgba(255,107,44,0.6)] flex flex-col items-center justify-center text-center">
                <span className="font-display font-black text-2xl sm:text-3xl tracking-wider text-white">MK</span>
                <div className="w-5 h-0.5 bg-[#FF6B2C] mt-0.5"></div>
              </div>
            </motion.div>

            {/* Bottom Right Overlapping Label: TURNING IDEAS INTO REAL PRODUCTS */}
            <motion.div
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-5 -right-2 text-right select-none pointer-events-none z-20"
            >
              <span className="text-[9px] font-mono tracking-widest text-[#FFB86B] uppercase block">TURNING IDEAS</span>
              <span className="text-[11px] font-mono font-bold tracking-widest text-white uppercase block drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                INTO REAL PRODUCTS
              </span>
            </motion.div>

          </motion.div>
        </div>

      </div>
    </section>
  );
};
