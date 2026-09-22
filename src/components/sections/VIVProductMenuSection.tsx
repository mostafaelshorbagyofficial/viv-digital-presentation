import React, { useState } from 'react';
import { vivData } from '../../data/vivData';
import { Sparkles, UtensilsCrossed, Coffee, HeartHandshake, CheckCircle2, Eye, ZoomIn } from 'lucide-react';
import { MediaItem } from '../../types/presentation';

interface VIVProductMenuSectionProps {
  onOpenLightbox?: (media: MediaItem) => void;
}

export const VIVProductMenuSection: React.FC<VIVProductMenuSectionProps> = ({ onOpenLightbox }) => {
  const [activeCategory, setActiveCategory] = useState<number>(0);

  return (
    <section id="concept-pillars" className="py-24 sm:py-36 px-4 sm:px-8 lg:px-16 bg-viv-burgundy text-viv-cream relative">
      <div className="max-w-7xl mx-auto space-y-28">
        {/* Section Lead */}
        <div>
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-viv-yellow font-bold block mb-3">
            Product Architecture & Culinary Strategy
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-viv-cream font-normal leading-tight">
            {vivData.product.coreIdea}
          </h2>
        </div>

        {/* 6 Strategy Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vivData.product.strategy.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl bg-viv-burgundy-dark/60 border border-viv-yellow/20 hover:border-viv-yellow/60 transition-all group backdrop-blur-sm"
            >
              <span className="text-xs font-mono uppercase tracking-widest text-viv-yellow block mb-2 font-bold">
                {item.title}
              </span>
              <p className="text-sm font-light text-viv-cream/90 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* 5 Product Categories — Editorial Display */}
        <div className="p-8 sm:p-14 rounded-3xl bg-viv-burgundy-deep border border-viv-yellow/30 shadow-2xl">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-viv-yellow block mb-2 font-bold">
              Menu Segmentation
            </span>
            <h3 className="text-2xl sm:text-4xl font-serif text-viv-cream">
              Five Core Culinary Categories
            </h3>
          </div>

          <div className="flex flex-wrap gap-2.5 mb-8">
            {vivData.product.categories.map((cat, idx) => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(idx)}
                className={`px-6 py-2.5 rounded-full text-xs font-mono tracking-wider uppercase transition-all ${
                  activeCategory === idx
                    ? 'bg-viv-yellow text-viv-chocolate font-bold shadow-lg shadow-viv-yellow/20'
                    : 'bg-white/10 text-viv-cream hover:bg-white/20 hover:text-viv-yellow'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className="p-8 rounded-2xl bg-viv-burgundy-dark border border-viv-yellow/20">
            <span className="text-xs font-mono uppercase tracking-widest text-viv-yellow block mb-1 font-bold">
              {vivData.product.categories[activeCategory].subtitle}
            </span>
            <h4 className="text-2xl sm:text-3xl font-serif text-viv-cream mb-4">
              {vivData.product.categories[activeCategory].name} Croissants
            </h4>
            <p className="text-base sm:text-lg text-viv-cream-soft font-light max-w-3xl leading-relaxed">
              {vivData.product.categories[activeCategory].description}
            </p>
          </div>
        </div>

        {/* The 3 Pillars */}
        <div>
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-viv-yellow block mb-2 font-bold">
              The Three Pillars
            </span>
            <h3 className="text-3xl sm:text-4xl font-serif text-viv-cream">
              Croissants + Coffee + Experience
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {vivData.threePillars.map((pillar) => (
              <div
                key={pillar.number}
                className="p-8 rounded-3xl bg-viv-burgundy-dark/80 border border-viv-yellow/20 hover:border-viv-yellow/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl sm:text-4xl font-serif font-bold text-viv-yellow block mb-4">
                    {pillar.number}
                  </span>
                  <h4 className="text-xl font-serif text-viv-cream mb-3 font-medium">
                    {pillar.name}
                  </h4>
                  <p className="text-sm font-light text-viv-cream-soft leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Focused Menu Architecture & Signature */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-16 border-t border-viv-yellow/20">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-viv-yellow font-bold block">
              Menu Architecture
            </span>
            <h3 className="text-3xl sm:text-5xl font-serif text-viv-cream font-normal">
              {vivData.menuArchitecture.title}
            </h3>
            <p className="text-base text-viv-cream/80 font-light">
              {vivData.menuArchitecture.subtitle}
            </p>

            <div className="space-y-3">
              {vivData.menuArchitecture.sections.map((sec) => (
                <div key={sec.name} className="p-4 rounded-xl bg-viv-burgundy-dark border border-viv-yellow/15 flex items-center justify-between">
                  <span className="font-serif text-viv-cream text-base">{sec.name}</span>
                  <span className="text-xs font-mono text-viv-yellow">{sec.detail}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-viv-burgundy-deep to-viv-chocolate border border-viv-yellow/40 shadow-2xl">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-viv-yellow block mb-2 font-bold">
              The Brand Anchor
            </span>
            <h3 className="text-3xl sm:text-4xl font-serif text-viv-cream mb-4">
              {vivData.signature.title}
            </h3>
            <p className="text-base text-viv-cream-soft font-light italic mb-8">
              “{vivData.signature.subtitle}”
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {vivData.signature.attributes.map((attr) => (
                <span
                  key={attr}
                  className="px-4 py-2 rounded-full bg-viv-yellow/20 text-viv-yellow border border-viv-yellow/40 text-xs font-mono tracking-widest uppercase font-bold"
                >
                  {attr}
                </span>
              ))}
            </div>

            <div className="pt-6 border-t border-viv-yellow/20 text-xs font-mono text-viv-cream/80">
              {vivData.signature.note}
            </div>
          </div>
        </div>

        {/* ===================================================
            OFFICIAL VIV CROISSANTS MENU — OPENABLE HIGH-RES SHEETS
        =================================================== */}
        <div className="pt-16 border-t border-viv-yellow/20 space-y-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-viv-yellow font-bold block mb-3">
              Official Printed Menu
            </span>
            <h3 className="text-3xl sm:text-5xl font-serif text-viv-cream font-normal leading-tight">
              Explore The Full VIV Menu
            </h3>
            <p className="mt-4 text-sm sm:text-base text-viv-cream-soft font-light">
              Click any menu sheet below to open and zoom in high resolution.
            </p>
          </div>

          <div className="flex justify-center">
            {/* Menu Sheet 1 — Only */}
            <div
              onClick={() => onOpenLightbox && onOpenLightbox({
                id: 'viv-menu-sheet-1',
                type: 'image',
                title: 'VIV Croissants — Official Menu (Originals, Savory & Drinks)',
                subtitle: 'Freshly Baked Always · All-Day Café Selection',
                src: '/assets/viv/viv-menu-1.jpg',
                caption: 'VIV Croissants complete menu offering: The Originals, Savory Breakfast & Beef Croissants, VIV Bites, Sides, and Coffee.'
              })}
              className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-viv-yellow/30 bg-viv-burgundy-dark cursor-pointer group hover:border-viv-yellow/70 transition-all duration-500 w-full max-w-md"
            >
              <div className="relative aspect-[1/1.45] w-full overflow-hidden bg-viv-chocolate">
                <img
                  src="/assets/viv/viv-menu-1.jpg"
                  alt="VIV Croissants Menu"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                <div className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 text-viv-yellow backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 text-xs font-mono">
                  <Eye className="w-4 h-4" />
                  <span>Click to Expand</span>
                </div>
              </div>
              <div className="p-5 flex items-center justify-between border-t border-viv-yellow/20 bg-viv-burgundy-deep">
                <div>
                  <h4 className="text-base font-serif text-viv-cream font-medium">VIV Croissants — Full Menu</h4>
                  <p className="text-xs font-mono text-viv-yellow">Originals, Savory, Bites & Coffee</p>
                </div>
                <button className="px-4 py-2 rounded-full bg-viv-yellow/15 text-viv-yellow border border-viv-yellow/40 text-xs font-mono font-bold flex items-center gap-1.5 group-hover:bg-viv-yellow group-hover:text-viv-chocolate transition-colors">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Open Menu</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
