import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface HeaderProps {
  onContactClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onContactClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Work', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'AI', href: '#ai-era' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <header className="relative z-50 w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between" id="main-header">
      {/* Logo Monogram */}
      <a href="#hero" className="flex items-center gap-2 group">
        <span className="font-display font-extrabold text-2xl tracking-tighter text-white group-hover:text-[#FFB86B] transition-colors">
          MK
        </span>
      </a>

      {/* Desktop Navigation Links */}
      <nav className="hidden md:flex items-center gap-8 text-xs font-medium tracking-wider uppercase text-slate-400">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="hover:text-white transition-colors duration-200"
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Header CTA Button & Mobile Toggle */}
      <div className="flex items-center gap-3">
        <button
          onClick={onContactClick}
          className="px-5 py-2 rounded-full border border-[#FF6B2C]/60 bg-[#FF6B2C]/10 text-[#FFB86B] hover:bg-[#FF6B2C] hover:text-white transition-all text-xs font-medium tracking-wide flex items-center gap-1.5 shadow-[0_0_15px_rgba(255,107,44,0.2)] cursor-pointer active:scale-95"
          id="header-connect-btn"
        >
          <span>Let's Connect</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-slate-400 hover:text-white"
          aria-label="Toggle Navigation Menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 px-6 py-5 bg-[#0D0D11]/95 border-b border-slate-800 backdrop-blur-xl flex flex-col gap-4 shadow-2xl z-50">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sm font-medium tracking-wider uppercase text-slate-300 hover:text-[#FFB86B] py-1 border-b border-slate-800/40"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
