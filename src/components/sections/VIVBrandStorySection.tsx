import React from 'react';
import { vivData } from '../../data/vivData';
import { MediaItem } from '../../types/presentation';
import { Sparkles, ArrowRight, Layers, Eye } from 'lucide-react';

interface VIVBrandStorySectionProps {
  onOpenLightbox: (media: MediaItem) => void;
}

export const VIVBrandStorySection: React.FC<VIVBrandStorySectionProps> = ({ onOpenLightbox }) => {
  return (
    <section className="py-24 sm:py-36 px-4 sm:px-8 lg:px-16 bg-noir-rich border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto space-y-28">
        {/* 01 Vision Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold-400 block">
              Core Brand Vision
            </span>
            <h3 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-ivory font-normal leading-tight">
              {vivData.vision.headline}
            </h3>
            <p className="text-lg sm:text-xl text-ivory-muted/90 font-light leading-relaxed">
              {vivData.vision.lead} <strong className="text-gold-300 font-semibold">{vivData.vision.coreProduct}</strong>.
            </p>

            <div className="p-6 rounded-2xl bg-noir-card border border-gold-500/20">
              <span className="text-xs font-mono uppercase tracking-widest text-ivory/50 block mb-1">
                National Ambition
              </span>
              <span className="text-3xl sm:text-4xl font-serif text-gold-300 font-bold tracking-wider">
                {vivData.vision.ambition}
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {vivData.vision.pillars.map((pillar) => (
              <div
                key={pillar.name}
                className="p-6 rounded-2xl bg-noir-card border border-white/5 hover:border-gold-500/30 transition-colors"
              >
                <span className="text-xs font-mono uppercase tracking-widest text-gold-400 block mb-2">
                  {pillar.name}
                </span>
                <p className="text-sm font-light text-ivory/80 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 02 The Core Concept — Editorial Split with Real Croissant Photography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center pt-16 border-t border-white/10">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div 
              onClick={() => onOpenLightbox({
                id: 'viv-hero-croissant',
                type: 'image',
                title: 'The Iconic VIV Croissant',
                subtitle: 'Flakiness, Honeycomb Crumb & Butter Balance',
                src: vivData.hero.heroImage,
                caption: 'Hand-laminated pure butter dough, baked to crisp golden perfection.'
              })}
              className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-noir-card cursor-pointer group"
            >
              <img
                src={vivData.hero.heroImage}
                alt="VIV Croissant"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-noir via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-6 inset-x-6 flex items-center justify-between text-xs font-mono text-ivory">
                <span>VIV Artisanal Hero</span>
                <span className="text-gold-400 flex items-center gap-1">
                  <Eye className="w-3.5 h-3.5" />
                  Expand Image
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 space-y-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold-400 block mb-3">
                The Transformative Concept
              </span>
              <h3 className="text-3xl sm:text-5xl font-serif text-ivory leading-tight">
                {vivData.concept.question}
              </h3>
            </div>

            <p className="text-xl sm:text-2xl font-serif font-light text-ivory-muted/90 leading-relaxed">
              {vivData.concept.description}
            </p>

            <div className="space-y-3 py-4 border-y border-white/10">
              {vivData.concept.flow.map((step, idx) => (
                <div key={idx} className="flex items-center gap-4 text-base sm:text-lg font-serif text-ivory/90">
                  <span className="w-2 h-2 rounded-full bg-gold-400" />
                  <span>{step}</span>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-gold-500/10 border border-gold-500/30">
              <p className="text-xl sm:text-2xl font-serif text-gold-300 font-medium tracking-wide">
                {vivData.concept.coreClimax}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
