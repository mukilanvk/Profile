import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Github, Send, CheckCircle2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setSubmitted(true);
  };

  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 py-24 text-center border-t border-slate-800/60 overflow-visible" id="contact">
      <div className="max-w-3xl mx-auto space-y-7">
        
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[11px] font-mono tracking-widest text-[#FF6B2C] uppercase font-semibold"
        >
          — HAVE AN IDEA?
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display font-black text-4xl sm:text-6xl uppercase tracking-tight text-white leading-tight select-none"
        >
          HAVE AN IDEA? <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B2C] via-[#FFA439] to-[#FFB86B]">
            LET'S BUILD IT.
          </span>
          <span className="inline-block w-3 h-3 rounded-full bg-[#FF6B2C] ml-2 animate-pulse shadow-[0_0_12px_#FF6B2C]"></span>
        </motion.h2>

        {/* Action Links & Social Pills with Micro-bounce */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-3.5 pt-2"
        >
          <motion.a
            whileHover={{ scale: 1.06, boxShadow: "0 0 30px rgba(255,107,44,0.6)" }}
            whileTap={{ scale: 0.95 }}
            href="mailto:vkmukilan@gmail.com"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-[#FF6B2C] to-[#FF5500] text-white text-xs font-semibold uppercase tracking-wider hover:brightness-110 shadow-[0_4px_25px_rgba(255,107,44,0.4)] transition-all flex items-center gap-2 cursor-pointer"
            id="contact-email-btn"
          >
            <Mail className="w-4 h-4" />
            <span>Email Me</span>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.06, borderColor: "rgba(255,107,44,0.6)" }}
            whileTap={{ scale: 0.95 }}
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full border border-slate-700 bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer"
            id="contact-linkedin-btn"
          >
            <span>LinkedIn</span>
            <span className="font-mono text-[#FF6B2C] font-bold">[in]</span>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.06, borderColor: "rgba(255,107,44,0.6)" }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full border border-slate-700 bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer"
            id="contact-github-btn"
          >
            <span>GitHub</span>
            <Github className="w-4 h-4" />
          </motion.a>
        </motion.div>

        {/* Interactive Direct Message Form */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="pt-6 max-w-xl mx-auto"
        >
          {submitted ? (
            <div className="p-6 rounded-2xl glass-card border border-emerald-500/40 text-center space-y-2.5 shadow-2xl">
              <CheckCircle2 className="w-9 h-9 text-emerald-400 mx-auto" />
              <h4 className="text-white font-semibold text-sm">Message Sent Successfully!</h4>
              <p className="text-slate-300 text-xs">
                Thanks for reaching out, {name}. Mukil will review your note and respond at {email} shortly.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setName('');
                  setEmail('');
                  setMessage('');
                }}
                className="mt-3 text-xs font-mono text-[#FFB86B] hover:underline cursor-pointer"
              >
                Send another message →
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-6 text-left space-y-4 border border-slate-800 shadow-xl">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center justify-between">
                <span>Direct Message</span>
                <span className="text-[10px] text-emerald-400">● Available for opportunities</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[10px] font-mono text-slate-400 block mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jane Doe"
                    className="w-full bg-[#08080C] text-white text-xs px-3 py-2 rounded-lg border border-slate-800 focus:outline-none focus:border-[#FF6B2C]"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-mono text-slate-400 block mb-1">Your Email</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jane@example.com"
                    className="w-full bg-[#08080C] text-white text-xs px-3 py-2 rounded-lg border border-slate-800 focus:outline-none focus:border-[#FF6B2C]"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-mono text-slate-400 block mb-1">Message or Project Brief</label>
                <textarea
                  required
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Hey Mukil, I'd like to discuss a project..."
                  className="w-full bg-[#08080C] text-white text-xs px-3 py-2 rounded-lg border border-slate-800 focus:outline-none focus:border-[#FF6B2C] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-[#FF6B2C] hover:brightness-110 text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-98 shadow-[0_4px_18px_rgba(255,107,44,0.3)]"
              >
                <span>Send Message</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </motion.div>

      </div>
    </section>
  );
};
