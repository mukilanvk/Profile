import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Layout, Server, Database, Cpu, Wrench, CheckCircle2 } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'frontend':
        return <Layout className="w-5 h-5 text-cyan-400" />;
      case 'backend':
        return <Server className="w-5 h-5 text-emerald-400" />;
      case 'database':
        return <Database className="w-5 h-5 text-blue-400" />;
      case 'ai':
        return <Cpu className="w-5 h-5 text-purple-400" />;
      case 'tools':
      default:
        return <Wrench className="w-5 h-5 text-amber-400" />;
    }
  };

  const getCardTheme = (color: string) => {
    switch (color) {
      case 'cyan':
        return 'bg-cyan-950/60 border-cyan-800/50 text-cyan-400';
      case 'emerald':
        return 'bg-emerald-950/60 border-emerald-800/50 text-emerald-400';
      case 'blue':
        return 'bg-blue-950/60 border-blue-800/50 text-blue-400';
      case 'purple':
        return 'bg-purple-950/60 border-purple-800/50 text-purple-400';
      case 'amber':
      default:
        return 'bg-amber-950/60 border-amber-800/50 text-amber-400';
    }
  };

  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 border-t border-slate-800/60 overflow-visible" id="skills">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Heading (lg:col-span-4) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-4 space-y-4"
        >
          <div className="text-[11px] font-mono tracking-widest text-[#FF6B2C] uppercase font-semibold">
            — SKILLS & TECHNOLOGIES
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl uppercase tracking-tight text-white leading-[0.95] select-none">
            BUILT <br />
            FOR <br />
            WHAT'S <br />
            <span className="text-white">NEXT.</span>
          </h2>
        </motion.div>

        {/* Right Column: 5 Skill Category Cards with Stagger (lg:col-span-8) */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const isSelected = activeCategory === cat.title;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -6, borderColor: "rgba(255,107,44,0.6)" }}
                onMouseEnter={() => setActiveCategory(cat.title)}
                onMouseLeave={() => setActiveCategory(null)}
                className={`glass-card rounded-xl p-5 space-y-3 transition-all cursor-pointer border border-slate-800 shadow-lg ${
                  isSelected
                    ? 'border-[#FF6B2C]/70 shadow-[0_10px_30px_rgba(255,107,44,0.25)] bg-[#12121A]'
                    : ''
                }`}
              >
                <div className="flex items-center justify-between">
                  <div
                    className={`w-9 h-9 rounded-lg border flex items-center justify-center ${getCardTheme(
                      cat.color
                    )}`}
                  >
                    {getIcon(cat.icon)}
                  </div>
                  {isSelected && <CheckCircle2 className="w-4 h-4 text-[#FFB86B]" />}
                </div>

                <div>
                  <h4 className="font-display font-bold text-white text-base">
                    {cat.title}
                  </h4>
                  <p className="text-slate-400 text-xs mt-1 leading-relaxed font-light">
                    {cat.technologies.join(', ')}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
