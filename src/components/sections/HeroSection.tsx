import React from 'react';
import { ArrowDown, Sparkles, Compass, Play } from 'lucide-react';
import { MediaItem } from '../../types/presentation';

interface HeroSectionProps {
  onOpenVideo?: (media: MediaItem) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenVideo }) => {
  const handleScrollToNext = () => {
    const nextEl = document.getElementById('promedia');
    if (nextEl) nextEl.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex flex-col justify-between pt-32 pb-16 px-4 sm:px-8 lg:px-16 overflow-hidden bg-noir bg-radial-top"
    >
      {/* Ambient background subtle lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-20 right-10 w-[400px] h-[400px] bg-espresso/30 rounded-full blur-[100px] pointer-events-none" />

      {/* Top Meta Tag */}
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between z-10">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono tracking-widest uppercase bg-gold-500/10 text-gold-300 border border-gold-500/20 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
            Executive Ecosystem Presentation
          </span>
        </div>
        <div className="text-right hidden sm:block">
          <span className="text-xs font-mono tracking-widest text-ivory/50 uppercase">
            Middle East · Europe · USA
          </span>
        </div>
      </div>

      {/* Central Typographic Monument */}
      <div className="max-w-7xl mx-auto w-full my-auto py-12 sm:py-20 z-10">
        <div className="max-w-5xl">
          <p className="text-xs sm:text-sm font-mono tracking-[0.3em] uppercase text-gold-400 mb-6 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-gold-400" />
            Unified Media, Entertainment & F&B Architecture
          </p>

          <h1 className="text-4xl sm:text-7xl lg:text-8xl font-serif font-normal tracking-tight text-ivory leading-[1.05] sm:leading-[1.02]">
            Where Cinematic Production Meets Culinary Craft & Cultural Influence.
          </h1>

          <div className="mt-8 sm:mt-12 max-w-2xl">
            <p className="text-lg sm:text-2xl text-ivory-muted/90 font-light leading-relaxed">
              A bespoke digital journey through the collaborative power of <span className="text-ivory font-medium">ProMedia</span>, <span className="text-ivory font-medium">VIV Croissants</span>, and leading industry visionaries.
            </p>
          </div>

          {/* Quick Ecosystem Pills */}
          <div className="mt-10 flex flex-wrap items-center gap-3 sm:gap-4">
            <button
              onClick={handleScrollToNext}
              className="px-6 py-3.5 rounded-full bg-gold-500 text-noir font-mono text-xs tracking-widest uppercase font-bold hover:bg-gold-400 transition-all duration-300 shadow-xl shadow-gold-500/20 flex items-center gap-2 group"
            >
              <span>Explore Presentation</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </button>

            {onOpenVideo && (
              <button
                onClick={() => onOpenVideo({
                  id: 'hero-teaser',
                  type: 'video',
                  title: 'VIV Croissants — Sensory Cinema',
                  subtitle: 'Artisanal Craft & Flakiness',
                  src: '/assets/vid/croissant-video-1.mp4'
                })}
                className="px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-ivory font-mono text-xs tracking-widest uppercase border border-white/15 transition-all flex items-center gap-2 backdrop-blur-sm"
              >
                <Play className="w-3.5 h-3.5 fill-current text-gold-400" />
                <span>Watch Brand Reel</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Footer Navigation Cue */}
      <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-white/10 z-10 gap-4">
        <div className="flex items-center gap-6 sm:gap-10 text-xs font-mono tracking-widest text-ivory/60 uppercase">
          <span>01 ProMedia</span>
          <span>02 VIV</span>
          <span>03 Elzuzzat</span>
          <span>04 Elhagan</span>
          <span>05 Salam</span>
          <span>06 5 Roosters</span>
        </div>

        <button
          onClick={handleScrollToNext}
          className="flex items-center gap-2 text-xs font-mono tracking-widest text-gold-300 hover:text-gold-200 transition-colors uppercase animate-bounce"
        >
          <span>Scroll to begin</span>
          <ArrowDown className="w-3.5 h-3.5" />
        </button>
      </div>
    </section>
  );
};
