import React from 'react';
import { motion } from 'motion/react';
import mountainSunsetImg from '../assets/images/mountain_sunset_banner_1789720872041.jpg';

export const ImpactMetric: React.FC = () => {
  return (
    <section className="relative w-full py-28 my-6 overflow-hidden select-none" id="impact">
      {/* Background Image of Mountain Sunset with Seamless Vignette & Parallax motion */}
      <div className="absolute inset-0 -z-10 bg-[#050507] overflow-hidden">
        <motion.img
          src={mountainSunsetImg}
          alt="Mountain Sunset Horizon"
          referrerPolicy="no-referrer"
          initial={{ scale: 1.05 }}
          animate={{ scale: [1.05, 1.08, 1.05], y: [0, -6, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="w-full h-full object-cover object-center opacity-75 filter contrast-125 brightness-95"
        />
        {/* Soft edge blend overlays so mountain horizon blends seamlessly with dark page */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-[#050507]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#050507] via-transparent to-[#050507] opacity-60"></div>
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#050507] to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 py-4">
          
          {/* Left: 500+ and DAILY USERS with animated glow shimmer */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="space-y-1 text-center md:text-left"
          >
            <motion.h2
              animate={{
                textShadow: [
                  "0 0 40px rgba(255,107,44,0.5)",
                  "0 0 70px rgba(255,164,57,0.8)",
                  "0 0 40px rgba(255,107,44,0.5)"
                ]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="font-display font-black text-7xl sm:text-8xl lg:text-9xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B2C] via-[#FFA439] to-[#FFB86B] drop-shadow-[0_0_50px_rgba(255,107,44,0.7)]"
            >
              500+
            </motion.h2>
            <div className="text-xl sm:text-3xl lg:text-4xl font-black font-display tracking-widest uppercase text-white drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)]">
              DAILY USERS
            </div>
          </motion.div>

          {/* Right: Floating Glass Description pill */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.03, borderColor: "rgba(255,107,44,0.4)" }}
            className="max-w-md text-center md:text-left p-5 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 shadow-2xl transition-all"
          >
            <p className="text-slate-200 text-sm sm:text-base font-light leading-relaxed">
              Production e-learning platform supporting 500+ students using exams and practice features daily.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
