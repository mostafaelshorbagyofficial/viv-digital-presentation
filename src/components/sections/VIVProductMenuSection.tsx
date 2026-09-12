import React, { useState } from 'react';
import { vivData } from '../../data/vivData';
import { Sparkles, UtensilsCrossed, Coffee, HeartHandshake, CheckCircle2 } from 'lucide-react';

export const VIVProductMenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<number>(0);

  return (
    <section className="py-24 sm:py-36 px-4 sm:px-8 lg:px-16 bg-noir border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto space-y-28">
        {/* Section Lead */}
        <div>
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold-400 block mb-3">
            Product Architecture & Culinary Strategy
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-ivory font-normal leading-tight">
            {vivData.product.coreIdea}
          </h2>
        </div>

        {/* 6 Strategy Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vivData.product.strategy.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl bg-noir-card border border-white/5 hover:border-gold-500/30 transition-all group"
            >
              <span className="text-xs font-mono uppercase tracking-widest text-gold-400 block mb-2">
                {item.title}
              </span>
              <p className="text-sm font-light text-ivory/80 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* 5 Product Categories — Editorial Display */}
        <div className="p-8 sm:p-14 rounded-3xl bg-noir-card border border-white/10">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold-400 block mb-2">
              Menu Segmentation
            </span>
            <h3 className="text-2xl sm:text-4xl font-serif text-ivory">
              Five Core Culinary Categories
            </h3>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {vivData.product.categories.map((cat, idx) => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(idx)}
                className={`px-5 py-2.5 rounded-full text-xs font-mono tracking-wider uppercase transition-all ${
                  activeCategory === idx
                    ? 'bg-gold-500 text-noir font-bold'
                    : 'bg-white/5 text-ivory/70 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className="p-8 rounded-2xl bg-noir-elevated border border-gold-500/20">
            <span className="text-xs font-mono uppercase tracking-widest text-gold-300 block mb-1">
              {vivData.product.categories[activeCategory].subtitle}
            </span>
            <h4 className="text-2xl sm:text-3xl font-serif text-ivory mb-4">
              {vivData.product.categories[activeCategory].name} Croissants
            </h4>
            <p className="text-base sm:text-lg text-ivory-muted/90 font-light max-w-3xl leading-relaxed">
              {vivData.product.categories[activeCategory].description}
            </p>
          </div>
        </div>

        {/* The 3 Pillars */}
        <div>
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold-400 block mb-2">
              The Holy Trinity of VIV
            </span>
            <h3 className="text-3xl sm:text-4xl font-serif text-ivory">
              Croissants + Coffee + Experience
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {vivData.threePillars.map((pillar) => (
              <div
                key={pillar.number}
                className="p-8 rounded-3xl bg-noir-card border border-white/10 hover:border-gold-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl sm:text-4xl font-serif font-bold text-gold-400/80 block mb-4">
                    {pillar.number}
                  </span>
                  <h4 className="text-xl font-serif text-ivory mb-3">
                    {pillar.name}
                  </h4>
                  <p className="text-sm font-light text-ivory-muted/80 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Focused Menu Architecture & Signature */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-16 border-t border-white/10">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold-400 block">
              Menu Architecture
            </span>
            <h3 className="text-3xl sm:text-5xl font-serif text-ivory font-normal">
              {vivData.menuArchitecture.title}
            </h3>
            <p className="text-base text-ivory-muted/80 font-light">
              {vivData.menuArchitecture.subtitle}
            </p>

            <div className="space-y-3">
              {vivData.menuArchitecture.sections.map((sec) => (
                <div key={sec.name} className="p-4 rounded-xl bg-noir-card border border-white/5 flex items-center justify-between">
                  <span className="font-serif text-ivory text-base">{sec.name}</span>
                  <span className="text-xs font-mono text-gold-300/80">{sec.detail}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-noir-card to-noir-elevated border border-gold-500/30">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold-400 block mb-2">
              The Brand Anchor
            </span>
            <h3 className="text-3xl sm:text-4xl font-serif text-ivory mb-4">
              {vivData.signature.title}
            </h3>
            <p className="text-base text-ivory-muted/90 font-light italic mb-8">
              “{vivData.signature.subtitle}”
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {vivData.signature.attributes.map((attr) => (
                <span
                  key={attr}
                  className="px-4 py-2 rounded-full bg-gold-500/10 text-gold-300 border border-gold-500/30 text-xs font-mono tracking-widest uppercase font-semibold"
                >
                  {attr}
                </span>
              ))}
            </div>

            <div className="pt-6 border-t border-white/10 text-xs font-mono text-ivory/70">
              {vivData.signature.note}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
