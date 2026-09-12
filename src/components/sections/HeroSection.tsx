import React from 'react';
import { ArrowDown, Sparkles, Play, Coffee } from 'lucide-react';
import { MediaItem } from '../../types/presentation';

interface HeroSectionProps {
  onOpenVideo: (media: MediaItem) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenVideo }) => {
  const handleScrollToNext = () => {
    const nextEl = document.getElementById('brand-story');
    if (nextEl) nextEl.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-14 px-4 sm:px-8 lg:px-16 overflow-hidden bg-viv-burgundy-deep"
    >
      {/* Background Brand Image & Atmospheric Warm Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/viv/viv-brand-hero-banner.png"
          alt="VIV Croissants Brand Hero"
          className="w-full h-full object-cover object-center opacity-75 transform scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-viv-burgundy-deep via-viv-burgundy-deep/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-viv-burgundy-deep/90 via-transparent to-viv-burgundy-deep/70" />
      </div>

      {/* Top Meta Tag */}
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between z-10 pt-4">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono tracking-widest uppercase bg-viv-yellow/15 text-viv-yellow border border-viv-yellow/30 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-viv-yellow animate-ping" />
            VIV Croissants · Brand Presentation
          </span>
        </div>
        <div className="text-right hidden sm:block">
          <span className="text-xs font-serif italic tracking-wider text-viv-cream/80">
            “Good Food Brighter Days”
          </span>
        </div>
      </div>

      {/* Central Typographic Monument */}
      <div className="max-w-7xl mx-auto w-full my-auto py-10 sm:py-16 z-10">
        <div className="max-w-4xl space-y-6">
          {/* Script Accent */}
          <div className="flex items-center gap-3">
            <span className="text-lg sm:text-2xl font-serif italic text-viv-yellow">
              Croissants Make Life Better.
            </span>
          </div>

          <h1 className="text-4xl sm:text-7xl lg:text-8xl font-serif font-normal tracking-tight text-viv-cream leading-[1.05]">
            MORE THAN A <br />
            <span className="text-viv-yellow italic font-medium">CROISSANT.</span>
          </h1>

          <div className="max-w-2xl pt-2">
            <p className="text-lg sm:text-2xl text-viv-cream-soft font-light leading-relaxed">
              A new generation of croissant cafés, built around a simple product, a powerful brand and a <strong className="text-viv-yellow font-semibold">50-location vision</strong>.
            </p>
          </div>

          {/* Quick Action Buttons */}
          <div className="pt-6 flex flex-wrap items-center gap-4">
            <button
              onClick={() => onOpenVideo({
                id: 'hero-brand-film',
                type: 'video',
                title: 'VIV Croissants — The Artisanal Film',
                subtitle: 'Craft, Butter & Lamination',
                src: '/assets/vid/croissant-video-1.mp4',
                caption: 'Watch the delicate flakiness, pure cultured French butter lamination, and sensory café baking.'
              })}
              className="px-8 py-4 rounded-full bg-viv-yellow text-viv-chocolate font-mono text-xs tracking-widest uppercase font-bold hover:bg-viv-yellow-light transition-all duration-300 shadow-xl shadow-viv-yellow/20 flex items-center gap-3 group transform hover:scale-105"
            >
              <Play className="w-4 h-4 fill-current ml-0.5" />
              <span>Watch Brand Film</span>
            </button>

            <button
              onClick={handleScrollToNext}
              className="px-8 py-4 rounded-full bg-viv-burgundy/60 hover:bg-viv-burgundy text-viv-cream font-mono text-xs tracking-widest uppercase border border-viv-yellow/30 transition-all duration-300 flex items-center gap-2 backdrop-blur-md"
            >
              <span>Explore The Concept</span>
              <ArrowDown className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Footer Brand Pillars */}
      <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-viv-yellow/20 z-10 gap-4">
        <div className="flex flex-wrap items-center gap-6 sm:gap-10 text-xs font-mono tracking-widest text-viv-cream/70 uppercase">
          <span className="text-viv-yellow font-semibold">01 THE PRODUCT</span>
          <span>02 THE COFFEE</span>
          <span>03 THE EXPERIENCE</span>
          <span className="text-viv-yellow font-semibold">50 LOCATIONS</span>
        </div>

        <button
          onClick={handleScrollToNext}
          className="flex items-center gap-2 text-xs font-mono tracking-widest text-viv-yellow hover:text-viv-yellow-light transition-colors uppercase animate-bounce"
        >
          <span>Scroll to enter café</span>
          <ArrowDown className="w-3.5 h-3.5" />
        </button>
      </div>
    </section>
  );
};
