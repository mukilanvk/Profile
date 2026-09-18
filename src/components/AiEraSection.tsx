import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Copy, Check, Terminal, ArrowRight, Layers, Sparkles } from 'lucide-react';

export const AiEraSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const codeSnippet = `const product = {
  frontend: "React",
  backend: "FastAPI",
  database: "PostgreSQL",
  ai: "Gemini"
};`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const accelerators = ['Cursor', 'Windsurf', 'Codex', 'Antigravity'];

  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 overflow-visible" id="ai-era">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-[#FF6B2C]/8 rounded-full blur-[140px] pointer-events-none -z-10"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8 }}
        className="glass-card rounded-2xl p-6 sm:p-10 border border-slate-800 shadow-2xl relative overflow-hidden"
      >
        
        {/* Header */}
        <div className="mb-8">
          <div className="text-[11px] font-mono tracking-widest text-[#FF6B2C] uppercase mb-1 font-semibold">
            — DEVELOPMENT IN THE AI ERA
          </div>
          <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
            AI-Assisted Development Tools
          </h3>
          <p className="text-slate-400 text-xs font-mono mt-1.5 flex items-center gap-2 flex-wrap">
            <span>IDE</span>
            <span className="text-[#FF6B2C]">→</span>
            <span>AI Assistance</span>
            <span className="text-[#FF6B2C]">→</span>
            <span>Code</span>
            <span className="text-[#FF6B2C]">→</span>
            <span>Component</span>
            <span className="text-[#FF6B2C]">→</span>
            <span className="text-white font-semibold">Product</span>
          </p>

          {/* Badges with Staggered Hover Motion */}
          <div className="flex flex-wrap gap-2 mt-3.5 text-xs font-mono">
            {accelerators.map((tool, idx) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ scale: 1.08, borderColor: "rgba(255,107,44,0.5)" }}
                className="px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 shadow-sm cursor-default"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Content: Left Code Box + Arrow + Right 3D Isometric Overlapping Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Code Box (lg:col-span-5) */}
          <motion.div
            whileHover={{ borderColor: "rgba(255,107,44,0.4)" }}
            className="lg:col-span-5 rounded-xl border border-slate-800 bg-[#07070A] p-4 font-mono text-xs shadow-2xl relative"
          >
            <div className="flex items-center justify-between pb-2 border-b border-slate-800/80 mb-3 text-slate-500 text-[10px]">
              <div className="flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-[#FF6B2C]" />
                <span className="text-slate-300">stack.config.ts</span>
              </div>
              <button
                onClick={handleCopy}
                className="text-slate-400 hover:text-white transition-colors cursor-pointer p-1 rounded hover:bg-slate-800"
                title="Copy code"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            <pre className="text-slate-200 leading-relaxed text-xs">
              <code>
                <span className="text-purple-400">const</span>{' '}
                <span className="text-amber-300">product</span> = &#123;{'\n'}
                {'  '}frontend: <span className="text-emerald-400">"React"</span>,{'\n'}
                {'  '}backend: <span className="text-emerald-400">"FastAPI"</span>,{'\n'}
                {'  '}database: <span className="text-emerald-400">"PostgreSQL"</span>,{'\n'}
                {'  '}ai: <span className="text-[#FF6B2C]">"Gemini"</span>{'\n'}
                &#125;;
              </code>
            </pre>
          </motion.div>

          {/* Center Transition Arrow (lg:col-span-2) */}
          <div className="lg:col-span-2 flex justify-center py-2 text-slate-600">
            <motion.div
              animate={{ x: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="hidden lg:flex items-center gap-1 text-[#FF6B2C]"
            >
              <span className="w-12 h-0.5 bg-gradient-to-r from-slate-700 to-[#FF6B2C]"></span>
              <ArrowRight className="w-5 h-5" />
            </motion.div>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="lg:hidden text-[#FF6B2C] text-lg font-bold"
            >
              ↓
            </motion.div>
          </div>

          {/* Right: 3D Isometric Stack with Overlapping Levitation Animation (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center py-4 relative group">
            
            {/* Ambient stack glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#FF6B2C]/10 via-purple-500/5 to-transparent rounded-full blur-2xl pointer-events-none"></div>

            {/* Overlapping Isometric Stack Container */}
            <div className="relative w-72 sm:w-80 h-48 flex flex-col items-center justify-center">
              
              {/* Top Layer: Code (Cyan/Blue Glass) */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                  scale: [1, 1.02, 1]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ y: -16, scale: 1.05 }}
                className="absolute top-2 w-64 py-3 px-4 rounded-xl bg-blue-950/70 border border-blue-400/60 text-center text-xs font-mono font-bold text-blue-200 shadow-[0_15px_30px_rgba(59,130,246,0.3)] backdrop-blur-md z-30 cursor-pointer transform -skew-x-12"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-blue-400">01</span>
                  <span>Code</span>
                  <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                </div>
              </motion.div>

              {/* Middle Layer: Component (Purple/Violet Glass, overlapping below Code) */}
              <motion.div
                animate={{
                  y: [0, -5, 0],
                  scale: [1, 1.02, 1]
                }}
                transition={{ duration: 4, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ y: -6, scale: 1.05 }}
                className="absolute top-14 w-72 py-3 px-4 rounded-xl bg-purple-950/70 border border-purple-400/60 text-center text-xs font-mono font-bold text-purple-200 shadow-[0_15px_30px_rgba(168,85,247,0.3)] backdrop-blur-md z-20 cursor-pointer transform -skew-x-12"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-purple-400">02</span>
                  <span>Component</span>
                  <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
                </div>
              </motion.div>

              {/* Bottom Layer: Application (Warm Amber/Orange Glowing Glass, overlapping below Component) */}
              <motion.div
                animate={{
                  y: [0, -2, 0],
                  scale: [1, 1.02, 1]
                }}
                transition={{ duration: 4, delay: 1, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ y: 2, scale: 1.05 }}
                className="absolute top-26 w-80 py-3.5 px-4 rounded-xl bg-[#FF6B2C]/25 border border-[#FF6B2C]/70 text-center text-xs font-mono font-bold text-[#FFB86B] shadow-[0_20px_40px_rgba(255,107,44,0.4)] backdrop-blur-md z-10 cursor-pointer transform -skew-x-12"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-[#FFA439]">03</span>
                  <span className="text-sm text-white">Application</span>
                  <span className="w-2 h-2 rounded-full bg-[#FF6B2C] animate-ping"></span>
                </div>
              </motion.div>

            </div>

            {/* REAL APPLICATION label */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-6 text-[11px] font-mono tracking-widest uppercase text-[#FF6B2C] font-semibold flex items-center gap-2"
            >
              <Layers className="w-4 h-4 text-[#FFA439]" />
              <span>REAL APPLICATION</span>
              <Sparkles className="w-3.5 h-3.5 text-[#FFB86B]" />
            </motion.div>

          </div>

        </div>

      </motion.div>
    </section>
  );
};
