import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Send, Trophy, Newspaper, Sparkles, BookOpen, HeartHandshake, Eye, FileText, Activity, Sprout } from 'lucide-react';
import { OTHER_PROJECTS, SECONDARY_PROJECTS } from '../data/portfolioData';
import { SecondaryProject } from '../types';
import moneypeechuImg from '../assets/images/moneypeechu_preview_1789720931908.jpg';

interface OtherProjectsProps {
  onViewProject: (projectId: string) => void;
  onSelectSecondary: (project: SecondaryProject) => void;
}

export const OtherProjects: React.FC<OtherProjectsProps> = ({
  onViewProject,
  onSelectSecondary
}) => {
  // Interactive states for project preview mockups
  const [teamAScore, setTeamAScore] = useState(15);
  const [teamBScore, setTeamBScore] = useState(12);
  const [journalInput, setJournalInput] = useState('');
  const [journalResponse, setJournalResponse] = useState<string | null>(null);
  const [isJournalThinking, setIsJournalThinking] = useState(false);

  const handleJournalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!journalInput.trim()) return;
    setIsJournalThinking(true);
    setTimeout(() => {
      setIsJournalThinking(false);
      setJournalResponse(
        `"Thank you for sharing. Reflecting on this shows deep resilience. What was the most impactful takeaway for you?"`
      );
    }, 600);
  };

  const getSecondaryIcon = (domain: string) => {
    switch (domain) {
      case 'Web Application':
        return <HeartHandshake className="w-4 h-4 text-pink-400" />;
      case 'Computer Vision':
        return <Eye className="w-4 h-4 text-cyan-400" />;
      case 'Machine Learning':
        return <FileText className="w-4 h-4 text-amber-400" />;
      case 'Data Analysis':
        return <Activity className="w-4 h-4 text-emerald-400" />;
      case 'AI / IoT':
      default:
        return <Sprout className="w-4 h-4 text-lime-400" />;
    }
  };

  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 overflow-visible" id="projects">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 w-96 h-96 bg-[#FFA439]/5 rounded-full blur-[140px] pointer-events-none -z-10"></div>

      {/* Section Tag Header */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <div className="text-[11px] font-mono tracking-widest text-[#FF6B2C] uppercase mb-1 font-semibold">
          — OTHER PROJECTS
        </div>
      </motion.div>

      {/* 3-Column Project Grid: 02, 03, 04 with Overlapping Depth */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
        
        {/* Project 02: Moneypeechu */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ y: -8, borderColor: "rgba(255,107,44,0.5)" }}
          className="glass-card rounded-2xl p-6 flex flex-col justify-between space-y-6 relative overflow-hidden border border-slate-800 shadow-xl group"
        >
          {/* Giant Overlapping Number Watermark "02" */}
          <div className="absolute -top-4 -right-2 font-display font-black text-8xl text-slate-800/30 pointer-events-none select-none -z-10 leading-none group-hover:text-[#FF6B2C]/10 transition-colors">
            02
          </div>

          <div className="space-y-4 relative z-10">
            <div className="flex items-baseline justify-between">
              <span className="font-display font-black text-5xl text-slate-700 select-none">
                02
              </span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#FF6B2C] font-semibold">
                NEXT.JS WEBSITE
              </span>
            </div>

            <h4 className="font-display font-bold text-2xl text-white group-hover:text-[#FFB86B] transition-colors">
              Moneypeechu
            </h4>

            <p className="text-slate-400 text-xs leading-relaxed font-light">
              A dynamic news and blog website built with Next.js with a focus on content management, performance and SEO.
            </p>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-1.5 text-[10px] font-mono">
              {OTHER_PROJECTS[0].tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Webpage Mockup: Insights for a Better Tomorrow with Image */}
          <div className="rounded-xl border border-slate-800 bg-[#08080C] p-3 space-y-2.5 overflow-hidden relative z-10">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-1.5">
              <div className="text-[11px] font-bold text-white flex items-center gap-1.5">
                <Newspaper className="w-3.5 h-3.5 text-[#FFB86B]" />
                <span>Moneypeechu</span>
              </div>
              <span className="text-[8px] font-mono text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded">
                SEO 100
              </span>
            </div>

            {/* Hero Article banner with Generated UI preview image */}
            <div className="relative rounded-lg overflow-hidden border border-slate-800 h-28 group/img">
              <img
                src={moneypeechuImg}
                alt="Insights for a Better Tomorrow - Moneypeechu"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent p-2 flex flex-col justify-end">
                <span className="text-[8px] text-[#FF6B2C] font-mono uppercase tracking-wider block font-semibold">Featured Story</span>
                <div className="text-[11px] font-semibold text-white truncate">Insights for a Better Tomorrow</div>
              </div>
            </div>

            {/* Mini 3 articles grid */}
            <div className="grid grid-cols-3 gap-1.5 text-[8px] font-mono text-slate-400">
              <div className="p-1 rounded bg-slate-900/60 border border-slate-800/60 truncate">FinTech 2026</div>
              <div className="p-1 rounded bg-slate-900/60 border border-slate-800/60 truncate">Next.js Edge</div>
              <div className="p-1 rounded bg-slate-900/60 border border-slate-800/60 truncate">SEO Strategy</div>
            </div>
          </div>

          {/* View Project Button */}
          <div className="relative z-10">
            <button
              onClick={() => onViewProject('moneypeechu')}
              className="inline-flex items-center gap-2 text-xs font-mono font-medium text-[#FFB86B] hover:text-[#FF6B2C] transition-colors cursor-pointer group/btn"
            >
              <span>View Project</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>

        {/* Project 03: Personal Gemini Journal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ y: -8, borderColor: "rgba(255,107,44,0.5)" }}
          className="glass-card rounded-2xl p-6 flex flex-col justify-between space-y-6 relative overflow-hidden border border-slate-800 shadow-xl group"
        >
          {/* Giant Overlapping Number Watermark "03" */}
          <div className="absolute -top-4 -right-2 font-display font-black text-8xl text-slate-800/30 pointer-events-none select-none -z-10 leading-none group-hover:text-[#FF6B2C]/10 transition-colors">
            03
          </div>

          <div className="space-y-4 relative z-10">
            <div className="flex items-baseline justify-between">
              <span className="font-display font-black text-5xl text-slate-700 select-none">
                03
              </span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#FF6B2C] font-semibold">
                GENERATIVE AI
              </span>
            </div>

            <h4 className="font-display font-bold text-2xl text-white group-hover:text-[#FFB86B] transition-colors">
              Personal Gemini Journal
            </h4>

            <p className="text-slate-400 text-xs leading-relaxed font-light">
              An authenticated AI journaling application where users can write reflections and have multi-turn conversations with Gemini.
            </p>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-1.5 text-[10px] font-mono">
              {OTHER_PROJECTS[1].tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* AI Journal Interface Mockup */}
          <div className="rounded-xl border border-slate-800 bg-[#08080C] p-3 space-y-2.5 relative z-10">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-1.5">
              <div className="text-[10px] font-mono text-[#FFB86B] flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-[#FFA439]" />
                <span>Good Evening,</span>
              </div>
              <span className="text-[8px] font-mono text-purple-400 bg-purple-950/60 px-1.5 py-0.5 rounded">
                Gemini API
              </span>
            </div>

            <AnimatePresence>
              {journalResponse ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-[9px] text-slate-300 font-light italic bg-slate-900/80 p-2 rounded border border-slate-800"
                >
                  {journalResponse}
                </motion.div>
              ) : (
                <div className="text-[10px] text-slate-300 font-light italic">
                  "How are you feeling today?"
                </div>
              )}
            </AnimatePresence>

            <form onSubmit={handleJournalSubmit} className="flex gap-1.5">
              <input
                type="text"
                value={journalInput}
                onChange={(e) => setJournalInput(e.target.value)}
                placeholder="Log a reflection..."
                className="w-full bg-slate-900 text-white text-[9px] px-2 py-1.5 rounded border border-slate-800 focus:outline-none focus:border-[#FF6B2C]"
              />
              <button
                type="submit"
                disabled={isJournalThinking}
                className="bg-[#FF6B2C] text-white px-2.5 py-1 rounded text-[9px] hover:brightness-110 cursor-pointer disabled:opacity-50 flex items-center justify-center"
              >
                {isJournalThinking ? (
                  <span className="animate-spin text-[8px]">●</span>
                ) : (
                  <Send className="w-3 h-3" />
                )}
              </button>
            </form>

            <div className="space-y-1">
              <div className="flex justify-between text-[7px] font-mono text-slate-500">
                <span>Sentiment Equilibrium</span>
                <span className="text-[#FF6B2C]">Positive</span>
              </div>
              <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: "40%" }}
                  animate={{ width: "78%" }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                  className="bg-gradient-to-r from-[#FF6B2C] to-[#FFA439] h-full"
                ></motion.div>
              </div>
            </div>
          </div>

          {/* View Project Button */}
          <div className="relative z-10">
            <button
              onClick={() => onViewProject('gemini-journal')}
              className="inline-flex items-center gap-2 text-xs font-mono font-medium text-[#FFB86B] hover:text-[#FF6B2C] transition-colors cursor-pointer group/btn"
            >
              <span>View Project</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>

        {/* Project 04: Badminton Scorer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ y: -8, borderColor: "rgba(255,107,44,0.5)" }}
          className="glass-card rounded-2xl p-6 flex flex-col justify-between space-y-6 relative overflow-hidden border border-slate-800 shadow-xl group"
        >
          {/* Giant Overlapping Number Watermark "04" */}
          <div className="absolute -top-4 -right-2 font-display font-black text-8xl text-slate-800/30 pointer-events-none select-none -z-10 leading-none group-hover:text-[#FF6B2C]/10 transition-colors">
            04
          </div>

          <div className="space-y-4 relative z-10">
            <div className="flex items-baseline justify-between">
              <span className="font-display font-black text-5xl text-slate-700 select-none">
                04
              </span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#FF6B2C] font-semibold">
                WEB APPLICATION
              </span>
            </div>

            <h4 className="font-display font-bold text-2xl text-white group-hover:text-[#FFB86B] transition-colors">
              Badminton Scorer
            </h4>

            <p className="text-slate-400 text-xs leading-relaxed font-light">
              A simple and interactive badminton scoring application with real-time score updates and match tracking.
            </p>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-1.5 text-[10px] font-mono">
              {OTHER_PROJECTS[2].tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Digital Scoreboard Mockup with Spring Pulse on Score Change */}
          <div className="rounded-xl border border-slate-800 bg-[#08080C] p-3 text-center space-y-2.5 relative z-10">
            <div className="text-[9px] font-mono text-slate-500 uppercase flex items-center justify-center gap-1 border-b border-slate-800/80 pb-1.5">
              <Trophy className="w-3 h-3 text-[#FFA439]" />
              <span>Game 1 • Live Match</span>
            </div>

            <div className="flex items-center justify-around font-mono">
              <div className="text-left">
                <span className="text-[9px] text-slate-400 block">Team A</span>
                <motion.span
                  key={teamAScore}
                  initial={{ scale: 1.3, color: "#FFFFFF" }}
                  animate={{ scale: 1, color: "#34D399" }}
                  className="text-2xl font-bold inline-block"
                >
                  {teamAScore}
                </motion.span>
                <div className="flex gap-1 mt-1">
                  <button
                    onClick={() => setTeamAScore((prev) => prev + 1)}
                    className="px-2 py-0.5 bg-emerald-950/80 text-emerald-400 text-[8px] rounded border border-emerald-800 hover:bg-emerald-900 cursor-pointer active:scale-90 transition-transform"
                  >
                    +1
                  </button>
                  <button
                    onClick={() => setTeamAScore((prev) => Math.max(0, prev - 1))}
                    className="px-2 py-0.5 bg-slate-800 text-slate-400 text-[8px] rounded hover:bg-slate-700 cursor-pointer active:scale-90 transition-transform"
                  >
                    -1
                  </button>
                </div>
              </div>

              <span className="text-slate-600 font-bold text-lg">:</span>

              <div className="text-right">
                <span className="text-[9px] text-slate-400 block">Team B</span>
                <motion.span
                  key={teamBScore}
                  initial={{ scale: 1.3, color: "#FFFFFF" }}
                  animate={{ scale: 1, color: "#FFB86B" }}
                  className="text-2xl font-bold inline-block"
                >
                  {teamBScore}
                </motion.span>
                <div className="flex gap-1 justify-end mt-1">
                  <button
                    onClick={() => setTeamBScore((prev) => prev + 1)}
                    className="px-2 py-0.5 bg-amber-950/80 text-[#FFB86B] text-[8px] rounded border border-amber-800 hover:bg-amber-900 cursor-pointer active:scale-90 transition-transform"
                  >
                    +1
                  </button>
                  <button
                    onClick={() => setTeamBScore((prev) => Math.max(0, prev - 1))}
                    className="px-2 py-0.5 bg-slate-800 text-slate-400 text-[8px] rounded hover:bg-slate-700 cursor-pointer active:scale-90 transition-transform"
                  >
                    -1
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* View Project Button */}
          <div className="relative z-10">
            <button
              onClick={() => onViewProject('badminton-scorer')}
              className="inline-flex items-center gap-2 text-xs font-mono font-medium text-[#FFB86B] hover:text-[#FF6B2C] transition-colors cursor-pointer group/btn"
            >
              <span>View Project</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>

      </div>

      {/* MORE PROJECTS Section Header & 5 Horizontal Cards */}
      <div className="space-y-4">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold flex items-center gap-2"
        >
          <BookOpen className="w-3.5 h-3.5 text-[#FF6B2C]" />
          <span>MORE PROJECTS</span>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
          {SECONDARY_PROJECTS.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              whileHover={{ y: -5, borderColor: "rgba(255,107,44,0.6)", backgroundColor: "#13131D" }}
              onClick={() => onSelectSecondary(project)}
              className="p-3.5 rounded-xl bg-[#0B0B10] border border-slate-800/90 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-2">
                {getSecondaryIcon(project.domain)}
                <span className="text-[9px] font-mono text-slate-500 group-hover:text-[#FFB86B] transition-colors">
                  Details →
                </span>
              </div>
              <div>
                <div className="text-xs font-semibold text-white group-hover:text-[#FFB86B] transition-colors leading-snug">
                  {project.title}
                </div>
                <div className="text-[10px] text-slate-400 font-mono mt-1">
                  {project.domain}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
