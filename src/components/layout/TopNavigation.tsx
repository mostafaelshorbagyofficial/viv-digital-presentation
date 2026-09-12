import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Compass, Sparkles } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'promedia', label: 'PRO MEDIA', num: '01' },
  { id: 'viv-croissants', label: 'VIV CROISSANTS', num: '02' },
  { id: 'elzuzzat', label: 'ELZUZZAT', num: '03' },
  { id: 'elhagan', label: 'M. ELHAGAN', num: '04' },
  { id: 'salam', label: 'M. SALAM', num: '05' },
  { id: 'five-roosters', label: '5 ROOSTERS', num: '06' },
  { id: 'ecosystem', label: 'ECOSYSTEM', num: '07' },
  { id: 'contact', label: 'CONTACT', num: '08' }
];

export const TopNavigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setIsScrolled(scrollPos > 60);

      // Compute total scroll progress percentage
      const winHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (winHeight > 0) {
        setScrollProgress((scrollPos / winHeight) * 100);
      }

      // Check current section
      const sections = ['hero', ...NAV_ITEMS.map(item => item.id)];
      for (const sectionId of sections.reverse()) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-noir/90 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl shadow-black/50'
            : 'bg-gradient-to-b from-noir/90 via-noir/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Brand Anchor */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-3 text-left group"
          >
            <div className="w-8 h-8 rounded bg-white p-1 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              <img
                src="/assets/promedia/pro-media-logo.png"
                alt="Pro Media"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <span className="text-xs font-mono tracking-widest text-ivory/90 group-hover:text-gold-300 transition-colors uppercase font-semibold">
                PROMEDIA × VIV
              </span>
              <span className="block text-[10px] font-mono tracking-widest text-ivory/50">
                MASTER PRESENTATION
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1 bg-noir-card/60 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all duration-300 relative ${
                    isActive
                      ? 'bg-gold-500 text-noir font-bold shadow-lg shadow-gold-500/20'
                      : 'text-ivory/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="opacity-60 text-[10px] mr-1.5">{item.num}</span>
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Quick Action Button & Mobile Trigger */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollToSection('contact')}
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono tracking-widest uppercase bg-gold-500/10 text-gold-300 hover:bg-gold-500 hover:text-noir border border-gold-500/30 transition-all duration-300"
            >
              <span>Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-ivory/80 hover:text-white bg-white/5 border border-white/10 rounded-full"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Scroll Progress Bar */}
        <div className="absolute bottom-0 inset-x-0 h-[2px] bg-white/5">
          <div
            className="h-full bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 transition-all duration-150"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-noir/95 backdrop-blur-2xl xl:hidden pt-24 px-6 pb-8 flex flex-col justify-between animate-fadeIn">
          <div className="space-y-2">
            <p className="text-xs font-mono tracking-widest uppercase text-gold-400 mb-4 px-2">
              Presentation Chapters
            </p>
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full flex items-center justify-between p-3.5 rounded-xl text-left font-serif text-lg tracking-wide transition-colors ${
                  activeSection === item.id
                    ? 'bg-gold-500/10 text-gold-300 border border-gold-500/30'
                    : 'text-ivory hover:bg-white/5'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-gold-400/80">{item.num}</span>
                  <span>{item.label}</span>
                </div>
                <ArrowUpRight className="w-4 h-4 opacity-50" />
              </button>
            ))}
          </div>

          <div className="pt-6 border-t border-white/10">
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full py-4 rounded-xl text-sm font-mono tracking-widest uppercase bg-gold-500 text-noir font-bold text-center"
            >
              Get in Touch & Locations
            </button>
          </div>
        </div>
      )}
    </>
  );
};
