import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, ExternalLink, ShieldCheck, Award } from 'lucide-react';

interface CertificationsResearchProps {
  onViewCertificate: () => void;
  onViewResearch: () => void;
}

export const CertificationsResearch: React.FC<CertificationsResearchProps> = ({
  onViewCertificate,
  onViewResearch
}) => {
  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 overflow-visible" id="certifications-research">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left: Google Cloud Gen AI Certification (lg:col-span-6) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          whileHover={{ y: -6, borderColor: "rgba(255,107,44,0.5)" }}
          className="lg:col-span-6 glass-card rounded-2xl p-6 sm:p-8 space-y-5 border border-slate-800 shadow-xl transition-all relative overflow-hidden group"
        >
          <div className="text-[11px] font-mono tracking-widest text-[#FF6B2C] uppercase font-semibold">
            — GENERATIVE AI
          </div>

          <div className="flex items-center gap-4">
            {/* Google Cloud Icon */}
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 shadow-md">
              <svg className="w-7 h-7" viewBox="0 0 24 24">
                <path
                  d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"
                  fill="#4285F4"
                />
              </svg>
            </div>

            <div>
              <h4 className="font-display font-bold text-xl text-white">Google Cloud</h4>
              <p className="text-xs text-slate-400 font-mono">Gen AI Academy • APAC Edition Cohort 3</p>
            </div>
          </div>

          {/* Certificate White Preview Card with Genuine Holographic Sheen */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            onClick={onViewCertificate}
            className="rounded-xl bg-white text-slate-900 p-4 shadow-2xl space-y-2 border border-slate-200 cursor-pointer relative overflow-hidden"
          >
            {/* Holographic light gradient bar on certificate */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#4285F4] via-[#EA4335] to-[#FBBC05]"></div>

            <div className="flex items-center justify-between border-b border-slate-200 pb-2">
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                <span className="text-[#4285F4]">Google</span>
                <span className="text-[#EA4335]">Cloud</span>
              </div>
              <span className="text-[9px] font-mono text-slate-500 uppercase flex items-center gap-1">
                <Award className="w-3 h-3 text-[#FBBC05]" />
                <span>Certificate of Completion</span>
              </span>
            </div>

            <div className="py-1">
              <div className="text-[10px] text-slate-500">Presented to:</div>
              <div className="text-sm font-bold text-slate-900">Mukil Karupusamy</div>
              <div className="text-[10px] text-slate-600 mt-0.5">Gen AI Academy • APAC Edition Cohort 3 (2026)</div>
            </div>

            <div className="flex items-center justify-between pt-1 border-t border-slate-100 text-[9px] font-mono text-slate-500">
              <span>Google Cloud Training</span>
              <span className="text-emerald-600 font-semibold flex items-center gap-1">
                <ShieldCheck className="w-3 h-3" />
                <span>Verified Credential</span>
              </span>
            </div>
          </motion.div>

          {/* Certificate ID & View Link */}
          <div className="flex items-center justify-between text-xs font-mono pt-1">
            <div className="text-slate-400">
              <span>Certificate ID: </span>
              <span className="text-slate-300">2026MK298APACI3-P0186</span>
            </div>
            <button
              onClick={onViewCertificate}
              className="text-[#FFB86B] hover:text-[#FF6B2C] flex items-center gap-1 cursor-pointer font-medium hover:underline"
            >
              <span>View Certificate</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>

        {/* Right: Research Paper / Publication (lg:col-span-6) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          whileHover={{ y: -6, borderColor: "rgba(255,107,44,0.5)" }}
          className="lg:col-span-6 glass-card rounded-2xl p-6 sm:p-8 space-y-5 border border-slate-800 shadow-xl transition-all flex flex-col justify-between"
        >
          <div>
            <div className="text-[11px] font-mono tracking-widest text-[#FF6B2C] uppercase font-semibold mb-4">
              — RESEARCH
            </div>

            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#FF6B2C]/10 border border-[#FF6B2C]/30 flex items-center justify-center text-[#FFB86B] shrink-0">
                <BookOpen className="w-6 h-6" />
              </div>

              <div>
                <h4 className="font-display font-bold text-xl text-white">Conference Paper / Publication</h4>
                <p className="text-xs text-slate-400 font-mono">Peer Reviewed Research</p>
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              onClick={onViewResearch}
              className="p-4 rounded-xl bg-[#08080C] border border-slate-800 space-y-2 hover:border-slate-700 transition-colors cursor-pointer group"
            >
              <p className="text-xs sm:text-sm text-slate-200 font-medium group-hover:text-white transition-colors leading-relaxed">
                "Deep-Feature Multimodal Fusion for Automated Semantic Document Parsing in Distributed Cloud Topologies"
              </p>
              <p className="text-[11px] text-slate-500 font-mono">
                Indexed in IEEE Xplore / Peer Reviewed Conference Proceedings • 2024
              </p>
            </motion.div>
          </div>

          <div className="flex justify-end pt-2">
            <button
              onClick={onViewResearch}
              className="text-xs font-mono text-[#FFB86B] hover:text-[#FF6B2C] flex items-center gap-1 cursor-pointer font-medium hover:underline"
            >
              <span>View Abstract →</span>
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
