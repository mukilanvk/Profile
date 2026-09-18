import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Sparkles, User, BookOpen, GraduationCap, FileText, Calendar, BarChart3, Settings, Maximize2, ExternalLink } from 'lucide-react';
import celestialOrbImg from '../assets/images/celestial_planet_orb_1789720841871.jpg';
import heroLaptopImg from '../assets/images/hero_laptop_desk_1789720807909.jpg';

interface HeroSectionProps {
  onExploreWork: () => void;
  onConnect: () => void;
  onSelectSkill: (skill: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreWork,
  onConnect,
  onSelectSkill
}) => {
  const [activeChartPoint, setActiveChartPoint] = useState<number | null>(3);
  const [showLiveDashboardModal, setShowLiveDashboardModal] = useState(false);
  const [activeMiddleSkill, setActiveMiddleSkill] = useState('React');

  const chartPoints = [
    { x: 20, y: 58, label: "Jan", val: "320" },
    { x: 70, y: 48, label: "Feb", val: "380" },
    { x: 120, y: 38, label: "Mar", val: "425" },
    { x: 170, y: 24, label: "Apr", val: "512" },
    { x: 220, y: 30, label: "May", val: "490" },
    { x: 270, y: 18, label: "Jun", val: "540" }
  ];

  const middleSkills = [
    { name: "React" },
    { name: "Next.js" },
    { name: "Python" },
    { name: "FastAPI" },
    { name: "PostgreSQL" },
    { name: "Generative AI" }
  ];

  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-2 pb-16 lg:pt-6 lg:pb-24 overflow-visible" id="hero">
      
      {/* Background Ambient Overlapping Glow */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#FF6B2C]/15 to-transparent rounded-full blur-[140px] pointer-events-none -z-20"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center relative">
        
        {/* LEFT COLUMN: Hero Greeting, Overlapping Celestial Orb & Name (lg:col-span-5) */}
        <div className="lg:col-span-5 space-y-6 relative z-10">
          
          {/* Overlapping Celestial Planet Orb positioned directly behind the Name */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{
              opacity: [0.7, 0.9, 0.7],
              scale: [1, 1.04, 1],
              y: [0, -10, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -top-14 -left-12 sm:-top-20 sm:-left-16 w-[360px] h-[360px] sm:w-[460px] sm:h-[460px] rounded-full overflow-hidden pointer-events-none -z-10 mix-blend-screen select-none drop-shadow-[0_0_80px_rgba(255,107,44,0.45)]"
          >
            <img
              src={celestialOrbImg}
              alt="Celestial Horizon Orb"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover rounded-full filter brightness-110"
            />
          </motion.div>

          {/* Hello, I'm with blinking orange dot */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 text-slate-300 text-sm font-mono tracking-wider"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF6B2C] shadow-[0_0_12px_#FF6B2C] animate-pulse"></span>
            <span>Hello, I'm</span>
          </motion.div>

          {/* Name in large bold uppercase display */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display font-black text-5xl sm:text-6xl lg:text-7xl leading-[0.92] tracking-tight uppercase select-none relative"
          >
            <span className="block text-white drop-shadow-[0_4px_25px_rgba(0,0,0,0.8)]">
              MUKIL
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B2C] via-[#FFA439] to-[#FFB86B] drop-shadow-[0_0_40px_rgba(255,107,44,0.6)]">
              KARUPUSAMY
            </span>
          </motion.h1>

          {/* Role subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-2 pt-1"
          >
            <div className="text-xs sm:text-sm font-mono tracking-widest text-slate-300 font-semibold uppercase leading-snug">
              REACT.JS | NEXT.JS<br />
              FULL-STACK DEVELOPER
            </div>
            <p className="text-slate-400 text-sm max-w-md leading-relaxed font-light">
              I build modern, scalable web applications and interactive digital experiences.
            </p>
          </motion.div>

          {/* Buttons: View My Work & Let's Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap items-center gap-3.5 pt-2"
          >
            <motion.button
              whileHover={{ scale: 1.04, boxShadow: "0 0 30px rgba(255,107,44,0.6)" }}
              whileTap={{ scale: 0.96 }}
              onClick={onExploreWork}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-[#FF6B2C] to-[#FF5500] text-white text-xs font-semibold uppercase tracking-wider flex items-center gap-2 shadow-[0_4px_25px_rgba(255,107,44,0.45)] transition-all cursor-pointer"
              id="hero-view-work-btn"
            >
              <span>View My Work</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.04, backgroundColor: "rgba(30, 41, 59, 0.9)" }}
              whileTap={{ scale: 0.96 }}
              onClick={onConnect}
              className="px-6 py-3 rounded-full border border-slate-700 bg-slate-900/70 text-slate-200 hover:text-white text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer"
              id="hero-connect-btn"
            >
              Let's Connect
            </motion.button>
          </motion.div>

          {/* Mouse Scroll indicator with bouncing element */}
          <div className="pt-3 flex items-center gap-3 text-slate-400 text-xs font-mono">
            <a href="#about" className="flex items-center gap-3 hover:text-white transition-colors group">
              <div className="w-4 h-7 rounded-full border border-slate-600 flex justify-center pt-1.5 group-hover:border-[#FF6B2C] transition-colors">
                <motion.span
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                  className="w-1 h-1.5 rounded-full bg-[#FF6B2C]"
                ></motion.span>
              </div>
              <span className="tracking-widest uppercase text-[10px]">Scroll to explore</span>
            </a>
          </div>
        </div>

        {/* MIDDLE COLUMN: Vertical Tech Badges Column with Overlapping Stagger Animation (lg:col-span-2) */}
        <div className="lg:col-span-2 hidden lg:flex flex-col items-center justify-center gap-3.5 py-4 z-10">
          {middleSkills.map((s, idx) => {
            const isActive = activeMiddleSkill === s.name;
            return (
              <motion.button
                key={s.name}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.15 + idx * 0.08 }}
                whileHover={{ scale: 1.08, x: 4 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setActiveMiddleSkill(s.name);
                  onSelectSkill(s.name);
                }}
                className={`w-36 py-2.5 px-3 rounded-full text-center text-xs font-mono tracking-wide transition-all cursor-pointer ${
                  isActive
                    ? 'bg-slate-900/90 text-white border-2 border-[#FF6B2C] shadow-[0_0_20px_rgba(255,107,44,0.5)] font-semibold'
                    : 'bg-slate-950/80 text-slate-300 border border-slate-800 hover:border-slate-600 hover:text-white hover:bg-slate-900'
                }`}
              >
                {s.name}
              </motion.button>
            );
          })}
        </div>

        {/* RIGHT COLUMN: MacBook Workstation Setup with Floating & Overlapping Elements (lg:col-span-5) */}
        <div className="lg:col-span-5 relative mt-6 lg:mt-0">
          
          {/* Floating Handwritten Chalk on the Wall: Build Learn Improve Repeat */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{
              opacity: [0.85, 1, 0.85],
              y: [0, -5, 0]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 right-4 sm:-top-12 sm:right-6 font-script text-[#FFB86B] text-2xl sm:text-3xl leading-snug text-right pointer-events-none z-20 select-none drop-shadow-[0_2px_12px_rgba(255,107,44,0.6)] rotate-[-4deg]"
          >
            Build<br />
            Learn<br />
            Improve<br />
            Repeat
          </motion.div>

          {/* Main Photorealistic Hero Scene Container with 3D Float */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -8, 0]
            }}
            transition={{
              opacity: { duration: 0.8 },
              scale: { duration: 0.8 },
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
            }}
            whileHover={{ y: -12, transition: { duration: 0.3 } }}
            className="relative rounded-2xl overflow-hidden border border-slate-800/90 shadow-[0_25px_70px_rgba(0,0,0,0.95)] group"
          >
            {/* The Photorealistic Laptop Workstation Render */}
            <img
              src={heroLaptopImg}
              alt="MacBook Pro on Desk with Everest Tutoring Dashboard"
              referrerPolicy="no-referrer"
              className="w-full h-auto object-cover rounded-2xl transition-transform duration-700 group-hover:scale-[1.03]"
            />

            {/* Overlapping Interactive Hotspot 1: Everest Tutoring Screen Tag */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              onClick={() => setShowLiveDashboardModal(true)}
              className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/80 hover:bg-[#FF6B2C] border border-white/20 text-white text-[10px] font-mono px-3 py-1.5 rounded-full backdrop-blur-md flex items-center gap-1.5 shadow-xl cursor-pointer transition-all z-20 opacity-0 group-hover:opacity-100"
            >
              <Sparkles className="w-3 h-3 text-[#FFB86B]" />
              <span>Everest Tutoring Live</span>
              <ExternalLink className="w-3 h-3" />
            </motion.div>

            {/* Overlapping Interactive Hotspot 2: Notebook "Ideas to Impact" Tag */}
            <div className="absolute bottom-6 left-6 z-20 pointer-events-none">
              <span className="font-script text-[#FFA439] text-base sm:text-lg bg-black/60 px-2 py-0.5 rounded border border-white/10 backdrop-blur-xs shadow-md">
                Ideas to Impact ✎
              </span>
            </div>

            {/* Overlapping Interactive Hotspot 3: Coffee Mug "Good Code Better Future" */}
            <div className="absolute bottom-6 right-6 z-20 pointer-events-none">
              <span className="font-script text-slate-300 text-xs sm:text-sm bg-black/60 px-2 py-0.5 rounded border border-white/10 backdrop-blur-xs shadow-md">
                Good Code Better Future ☕
              </span>
            </div>

            {/* Corner Button: Test Interactive Dashboard */}
            <div className="absolute bottom-3 right-3 z-30">
              <button
                onClick={() => setShowLiveDashboardModal(true)}
                className="px-3 py-1.5 rounded-lg bg-black/80 hover:bg-[#FF6B2C] text-white text-[11px] font-mono border border-slate-700 backdrop-blur-md flex items-center gap-1.5 transition-all shadow-lg cursor-pointer"
                title="Open Live Interactive Dashboard"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Interact with Dashboard</span>
              </button>
            </div>

            {/* Ambient inner rim glow */}
            <div className="absolute inset-0 pointer-events-none rounded-2xl ring-1 ring-inset ring-white/15"></div>
          </motion.div>

        </div>

      </div>

      {/* Modal: Interactive Live Everest Tutoring Simulator */}
      <AnimatePresence>
        {showLiveDashboardModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative w-full max-w-4xl bg-[#08080C] border border-slate-700 rounded-2xl overflow-hidden shadow-2xl p-6 space-y-4"
            >
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                  <span className="text-sm font-bold text-white ml-2 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-[#FF6B2C]" />
                    Everest Tutoring • Live Interactive System
                  </span>
                </div>
                <button
                  onClick={() => setShowLiveDashboardModal(false)}
                  className="text-slate-400 hover:text-white text-xs font-mono px-3 py-1 rounded bg-slate-900 border border-slate-800 cursor-pointer"
                >
                  Close ✕
                </button>
              </div>

              <div className="grid grid-cols-12 gap-4">
                {/* Sidebar */}
                <div className="col-span-3 border-r border-slate-800 p-2 space-y-2 text-xs font-mono">
                  <div className="px-2 py-1.5 rounded bg-[#FF6B2C]/20 text-[#FFB86B] font-semibold flex items-center gap-2">
                    <BarChart3 className="w-3.5 h-3.5" />
                    <span>Dashboard</span>
                  </div>
                  <div className="px-2 py-1 text-slate-400 hover:text-white flex items-center gap-2">
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span>Students</span>
                  </div>
                  <div className="px-2 py-1 text-slate-400 hover:text-white flex items-center gap-2">
                    <User className="w-3.5 h-3.5" />
                    <span>Tutors</span>
                  </div>
                  <div className="px-2 py-1 text-slate-400 hover:text-white flex items-center gap-2">
                    <FileText className="w-3.5 h-3.5" />
                    <span>Exams</span>
                  </div>
                  <div className="px-2 py-1 text-slate-400 hover:text-white flex items-center gap-2">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Materials</span>
                  </div>
                  <div className="px-2 py-1 text-slate-400 hover:text-white flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Calendar</span>
                  </div>
                  <div className="px-2 py-1 text-slate-400 hover:text-white flex items-center gap-2">
                    <Settings className="w-3.5 h-3.5" />
                    <span>Settings</span>
                  </div>
                </div>

                {/* Main Display */}
                <div className="col-span-9 space-y-4">
                  <div className="grid grid-cols-3 gap-3">
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                      <div className="text-xs text-slate-400">Enrolled Students</div>
                      <div className="text-2xl font-bold text-white mt-1">512</div>
                      <div className="text-[10px] text-emerald-400 font-mono mt-0.5">↑ 12% vs last month</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                      <div className="text-xs text-slate-400">Active Tutors</div>
                      <div className="text-2xl font-bold text-white mt-1">48</div>
                      <div className="text-[10px] text-emerald-400 font-mono mt-0.5">100% Online status</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                      <div className="text-xs text-slate-400">Exams Processed</div>
                      <div className="text-2xl font-bold text-white mt-1">1,240</div>
                      <div className="text-[10px] text-[#FFB86B] font-mono mt-0.5">+3.4% accuracy rate</div>
                    </div>
                  </div>

                  {/* SVG Chart */}
                  <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                    <div className="flex justify-between items-center text-xs font-mono text-slate-300">
                      <span>Student Activity &amp; Live Tests</span>
                      <span className="text-[#FF6B2C]">Interactive Metric</span>
                    </div>
                    <svg className="w-full h-28 overflow-visible" viewBox="0 0 290 65">
                      <defs>
                        <linearGradient id="hero-modal-chart-grad" x1="0" x2="0" y1="0" y2="1">
                          <stop offset="0%" stopColor="#FF6B2C" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="#FF6B2C" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M 20,58 Q 45,55 70,48 T 120,38 T 170,24 T 220,30 T 270,18"
                        fill="none"
                        stroke="#FF6B2C"
                        strokeWidth="2.5"
                      />
                      <path
                        d="M 20,58 Q 45,55 70,48 T 120,38 T 170,24 T 220,30 T 270,18 L 270,65 L 20,65 Z"
                        fill="url(#hero-modal-chart-grad)"
                      />
                      {chartPoints.map((pt, idx) => (
                        <circle
                          key={idx}
                          cx={pt.x}
                          cy={pt.y}
                          r={activeChartPoint === idx ? 5 : 3}
                          fill={activeChartPoint === idx ? "#FF6B2C" : "#FFFFFF"}
                          stroke="#FFFFFF"
                          strokeWidth="1.2"
                          className="cursor-pointer transition-all"
                          onMouseEnter={() => setActiveChartPoint(idx)}
                        />
                      ))}
                    </svg>
                    <div className="flex justify-between text-[10px] font-mono text-slate-400">
                      {chartPoints.map((p, i) => (
                        <span key={i} className={activeChartPoint === i ? "text-[#FF6B2C] font-bold" : ""}>
                          {p.label} ({p.val})
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
