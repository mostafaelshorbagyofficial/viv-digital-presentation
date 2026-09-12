import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'brand-story', label: 'THE VISION', num: '01' },
  { id: 'concept-pillars', label: 'THE CONCEPT', num: '02' },
  { id: 'menu-architecture', label: 'THE MENU', num: '03' },
  { id: 'sensory-experience', label: 'EXPERIENCE', num: '04' },
  { id: 'growth-50', label: '50-STORE VISION', num: '05' },
  { id: 'team-ecosystem', label: 'THE TEAM', num: '06' },
  { id: 'partnership', label: 'PARTNERSHIP', num: '07' }
];

export const TopNavigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setIsScrolled(scrollPos > 50);

      const winHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (winHeight > 0) {
        setScrollProgress((scrollPos / winHeight) * 100);
      }

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
            ? 'bg-viv-burgundy-deep/95 backdrop-blur-xl border-b border-viv-yellow/20 py-3 shadow-2xl'
            : 'bg-gradient-to-b from-viv-burgundy-deep/90 via-viv-burgundy-deep/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* VIV Brand Identity Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-3 text-left group"
          >
            <div className="h-9 px-3 rounded-lg bg-viv-yellow text-viv-chocolate font-serif font-black text-xl tracking-tighter flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              VIV
            </div>
            <div>
              <span className="text-xs font-mono tracking-widest text-viv-cream group-hover:text-viv-yellow transition-colors uppercase font-bold block">
                CROISSANTS
              </span>
              <span className="text-[10px] font-serif italic text-viv-yellow/80">
                Good Food Brighter Days
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1 bg-viv-burgundy-dark/80 p-1.5 rounded-full border border-viv-yellow/20 backdrop-blur-md">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all duration-300 relative ${
                    isActive
                      ? 'bg-viv-yellow text-viv-chocolate font-bold shadow-lg shadow-viv-yellow/20'
                      : 'text-viv-cream/80 hover:text-viv-yellow hover:bg-white/5'
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
              onClick={() => scrollToSection('partnership')}
              className="hidden sm:flex items-center gap-2 px-5 py-2 rounded-full text-xs font-mono tracking-widest uppercase bg-viv-yellow text-viv-chocolate font-bold hover:bg-viv-yellow-light transition-all duration-300 shadow-md"
            >
              <span>Partner With VIV</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-viv-cream hover:text-viv-yellow bg-viv-burgundy-dark border border-viv-yellow/20 rounded-full"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Scroll Progress Bar in Butter Yellow */}
        <div className="absolute bottom-0 inset-x-0 h-[2px] bg-viv-burgundy-dark">
          <div
            className="h-full bg-gradient-to-r from-viv-yellow via-viv-cream to-viv-yellow transition-all duration-150"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-viv-burgundy-deep/98 backdrop-blur-2xl xl:hidden pt-24 px-6 pb-8 flex flex-col justify-between animate-fadeIn">
          <div className="space-y-2">
            <p className="text-xs font-mono tracking-widest uppercase text-viv-yellow mb-4 px-2">
              VIV Brand Presentation
            </p>
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full flex items-center justify-between p-3.5 rounded-xl text-left font-serif text-lg tracking-wide transition-colors ${
                  activeSection === item.id
                    ? 'bg-viv-yellow text-viv-chocolate font-semibold'
                    : 'text-viv-cream hover:bg-white/5'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-viv-yellow">{item.num}</span>
                  <span>{item.label}</span>
                </div>
                <ArrowUpRight className="w-4 h-4 opacity-50" />
              </button>
            ))}
          </div>

          <div className="pt-6 border-t border-viv-yellow/20">
            <button
              onClick={() => scrollToSection('partnership')}
              className="w-full py-4 rounded-xl text-sm font-mono tracking-widest uppercase bg-viv-yellow text-viv-chocolate font-bold text-center"
            >
              Mall Placement & Partnership
            </button>
          </div>
        </div>
      )}
    </>
  );
};
