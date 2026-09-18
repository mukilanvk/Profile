import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Shield, UserCheck, GraduationCap, BookOpen, Monitor, Sparkles, Activity } from 'lucide-react';
import { FEATURED_EXPERIENCE } from '../data/portfolioData';

interface FeaturedExperienceProps {
  onViewProject: (projectId: string) => void;
}

export const FeaturedExperience: React.FC<FeaturedExperienceProps> = ({ onViewProject }) => {
  const [selectedRole, setSelectedRole] = useState<'Admin' | 'Superadmin' | 'Tutor' | 'Student' | 'Online Tutoring'>('Admin');

  // Dynamic stats per role
  const roleMetrics = {
    Admin: [
      { label: 'Total Students', value: '512', growth: '↑ 12% Growth', color: 'text-emerald-400' },
      { label: 'Active Tutors', value: '48', growth: '100% Online', color: 'text-slate-400' },
      { label: 'Exams Taken', value: '1,240', growth: 'Verified', color: 'text-[#FFB86B]' },
      { label: 'Pass Rate', value: '96%', growth: '+3.4% pts', color: 'text-emerald-400' }
    ],
    Superadmin: [
      { label: 'Institutions', value: '18', growth: '↑ 4 this mo', color: 'text-cyan-400' },
      { label: 'System Uptime', value: '99.98%', growth: 'SLA Met', color: 'text-emerald-400' },
      { label: 'Data Throughput', value: '4.2TB', growth: 'High Sync', color: 'text-[#FFB86B]' },
      { label: 'Security Alerts', value: '0', growth: 'All Normal', color: 'text-emerald-400' }
    ],
    Tutor: [
      { label: 'My Batches', value: '6', growth: '3 Active', color: 'text-amber-400' },
      { label: 'Assigned Tests', value: '28', growth: '12 Graded', color: 'text-slate-400' },
      { label: 'Doubt Tickets', value: '4', growth: '2 Pending', color: 'text-[#FFB86B]' },
      { label: 'Avg Rating', value: '4.9/5', growth: 'Top 5%', color: 'text-emerald-400' }
    ],
    Student: [
      { label: 'Completed Tests', value: '42', growth: 'Rank #3', color: 'text-emerald-400' },
      { label: 'Upcoming Exams', value: '3', growth: 'In 2 days', color: 'text-amber-400' },
      { label: 'Study Hours', value: '68h', growth: '+14h this wk', color: 'text-cyan-400' },
      { label: 'Attendance', value: '98%', growth: 'Excellent', color: 'text-emerald-400' }
    ],
    'Online Tutoring': [
      { label: 'Active Streams', value: '14', growth: 'Low Latency', color: 'text-emerald-400' },
      { label: 'Connected Peers', value: '186', growth: 'WebRTC Live', color: 'text-cyan-400' },
      { label: 'Bandwidth', value: '1.8 Gbps', growth: 'Optimized', color: 'text-[#FFB86B]' },
      { label: 'Recording Uptime', value: '100%', growth: 'Cloud Saved', color: 'text-emerald-400' }
    ]
  };

  const currentMetrics = roleMetrics[selectedRole];

  const roleButtons = [
    { name: 'Admin' as const, icon: Shield },
    { name: 'Superadmin' as const, icon: UserCheck },
    { name: 'Tutor' as const, icon: GraduationCap },
    { name: 'Student' as const, icon: BookOpen },
    { name: 'Online Tutoring' as const, icon: Monitor }
  ];

  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 overflow-visible" id="experience">
      
      {/* Ambient background blur */}
      <div className="absolute top-1/3 -left-20 w-80 h-80 bg-[#FF6B2C]/8 rounded-full blur-[100px] pointer-events-none -z-10"></div>

      {/* Section Tag Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <div className="text-[11px] font-mono tracking-widest text-[#FF6B2C] uppercase mb-1 font-semibold">
          — FEATURED EXPERIENCE
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
            {FEATURED_EXPERIENCE.company}
            <span className="text-slate-400 text-sm font-normal font-mono ml-2">
              {FEATURED_EXPERIENCE.period}
            </span>
          </h3>
          <span className="px-3 py-1 text-xs font-mono rounded-full bg-[#FF6B2C]/15 text-[#FFB86B] border border-[#FF6B2C]/30">
            {FEATURED_EXPERIENCE.role}
          </span>
        </div>
      </motion.div>

      {/* Featured Project 01 Detailed Card with Overlapping Layers */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8 }}
        whileHover={{ borderColor: "rgba(255,107,44,0.4)" }}
        className="glass-card rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-[0_15px_50px_rgba(0,0,0,0.8)] border border-slate-800"
      >
        {/* Giant Overlapping Watermark Number "01" */}
        <div className="absolute -top-10 -left-6 font-display font-black text-9xl sm:text-[14rem] text-slate-800/25 pointer-events-none select-none -z-10 leading-none">
          01
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Left Column: Info, 01, Description, Tags, CTA (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-5 relative z-10">
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#FF6B2C] block font-semibold">
                {FEATURED_EXPERIENCE.project.category}
              </span>
              <h4 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
                {FEATURED_EXPERIENCE.project.title}
              </h4>
            </div>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
              {FEATURED_EXPERIENCE.project.description}
            </p>

            {/* Tech Stack Tags with Micro-animations */}
            <div className="flex flex-wrap gap-1.5 text-[10px] font-mono">
              {FEATURED_EXPERIENCE.project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded bg-slate-900/90 border border-slate-800 text-slate-300 hover:border-[#FF6B2C]/40 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* View Project Button */}
            <div className="pt-2">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(255,107,44,0.5)" }}
                whileTap={{ scale: 0.96 }}
                onClick={() => onViewProject(FEATURED_EXPERIENCE.project.id)}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#FF6B2C] to-[#FF5500] text-white hover:brightness-110 shadow-[0_4px_20px_rgba(255,107,44,0.35)] transition-all text-xs font-semibold uppercase tracking-wider cursor-pointer"
                id="featured-view-project-btn"
              >
                <span>View Project</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>

          {/* Center Column: Interactive Live Dashboard Simulation (lg:col-span-6) */}
          <div className="lg:col-span-6 relative z-10">
            <div className="rounded-xl border border-slate-800/90 bg-[#08080C]/95 p-4 shadow-2xl space-y-3 backdrop-blur-md">
              
              {/* Dashboard Header inside preview */}
              <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#FF6B2C]" />
                  <span className="text-xs font-semibold text-white">Everest Tutoring</span>
                  <span className="text-[10px] text-slate-500 font-mono">/ {selectedRole} Portal</span>
                </div>
                <div className="flex items-center gap-1.5 text-[9px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                  <span>Live System</span>
                </div>
              </div>

              {/* Welcome message */}
              <div className="text-xs text-slate-300 font-medium flex items-center justify-between">
                <span>Welcome back, {selectedRole}</span>
                <span className="text-[10px] text-slate-500 font-mono">Real-time Telemetry</span>
              </div>

              {/* 4 Stats Cards with Smooth Transition Animation */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <AnimatePresence mode="wait">
                  {currentMetrics.map((item, idx) => (
                    <motion.div
                      key={`${selectedRole}-${item.label}`}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.25, delay: idx * 0.04 }}
                      className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-colors"
                    >
                      <div className="text-[9px] text-slate-400 truncate">{item.label}</div>
                      <div className="text-base font-bold text-white mt-0.5">{item.value}</div>
                      <div className={`text-[8px] font-mono ${item.color}`}>{item.growth}</div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Chart & Recent Activity columns */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 pt-1">
                {/* Animated Chart Preview */}
                <div className="sm:col-span-7 p-2.5 rounded-lg bg-slate-900/50 border border-slate-800/70">
                  <div className="text-[10px] font-mono text-slate-300 mb-1 flex justify-between">
                    <span className="flex items-center gap-1">
                      <Activity className="w-3 h-3 text-[#FFA439]" />
                      <span>Student Growth</span>
                    </span>
                    <span className="text-[#FF6B2C] text-[9px] font-medium">+18.4%</span>
                  </div>
                  <svg className="w-full h-20 overflow-visible" viewBox="0 0 240 70">
                    <defs>
                      <linearGradient id="featured-chart-grad" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#FFA439" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#FFA439" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0,55 Q40,50 70,38 T140,25 T190,12 T240,18 L240,70 L0,70 Z"
                      fill="url(#featured-chart-grad)"
                    />
                    <path
                      d="M0,55 Q40,50 70,38 T140,25 T190,12 T240,18"
                      fill="none"
                      stroke="#FFA439"
                      strokeWidth="2.5"
                    />
                    <circle cx="70" cy="38" fill="#FFF" r="2.5" />
                    <circle cx="140" cy="25" fill="#FFF" r="2.5" />
                    <circle cx="190" cy="12" fill="#FF6B2C" r="3.5" stroke="#FFF" strokeWidth="1" />
                  </svg>
                  <div className="flex justify-between text-[8px] font-mono text-slate-500 mt-1">
                    <span>Jan</span>
                    <span>Mar</span>
                    <span>May</span>
                    <span>Jul</span>
                    <span>Sep</span>
                    <span>Nov</span>
                  </div>
                </div>

                {/* Recent Activity Feed */}
                <div className="sm:col-span-5 p-2.5 rounded-lg bg-slate-900/50 border border-slate-800/70 space-y-1.5">
                  <div className="text-[10px] font-mono text-slate-300">Recent Activity</div>
                  <div className="space-y-1 text-[9px] text-slate-400">
                    <div className="flex items-center justify-between border-b border-slate-800/60 pb-1">
                      <span className="truncate pr-1 text-slate-300">New student enrolled</span>
                      <span className="text-slate-500 shrink-0 font-mono text-[8px]">2m ago</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-slate-800/60 pb-1">
                      <span className="truncate pr-1 text-slate-300">Exam submitted</span>
                      <span className="text-slate-500 shrink-0 font-mono text-[8px]">14m ago</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="truncate pr-1 text-slate-300">Study notes added</span>
                      <span className="text-slate-500 shrink-0 font-mono text-[8px]">1h ago</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Vertical Role Selector Buttons with Spring Click Feedback (lg:col-span-2) */}
          <div className="lg:col-span-2 flex lg:flex-col flex-wrap gap-2 justify-center relative z-10">
            {roleButtons.map((btn) => {
              const Icon = btn.icon;
              const isActive = selectedRole === btn.name;
              return (
                <motion.button
                  key={btn.name}
                  whileHover={{ scale: 1.04, x: 2 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setSelectedRole(btn.name)}
                  className={`w-full py-2.5 px-3 rounded-lg flex items-center gap-2 text-xs font-mono transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#FF6B2C] text-white shadow-[0_0_18px_rgba(255,107,44,0.45)] font-semibold'
                      : 'bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 hover:bg-slate-800'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span className="truncate">{btn.name}</span>
                </motion.button>
              );
            })}
          </div>

        </div>
      </motion.div>
    </section>
  );
};
