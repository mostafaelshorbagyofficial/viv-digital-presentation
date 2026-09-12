import React from 'react';
import { vivData } from '../../data/vivData';
import { Sparkles, ArrowRight, ShieldCheck, Box, MessageSquare, Smartphone, Smile, Store } from 'lucide-react';

const TOUCHPOINT_ICONS = [
  Sparkles, Store, Box, Smile, Smartphone, MessageSquare
];

export const VIVPositioningExperienceSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-36 px-4 sm:px-8 lg:px-16 bg-noir border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto space-y-28">
        {/* Positioning Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold-400 block">
              Market Positioning
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-ivory font-normal leading-tight">
              {vivData.positioning.headline}
            </h2>

            <div className="space-y-4 pt-4 border-t border-white/10">
              {vivData.positioning.tenets.map((tenet, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                  <p className="text-base sm:text-lg font-light text-ivory-muted/90">
                    {tenet}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-noir-card border border-gold-500/20">
              <span className="text-xs font-mono uppercase tracking-widest text-ivory/50 block mb-1">
                Strategic Ambition
              </span>
              <p className="text-2xl font-serif text-gold-300 font-bold">
                {vivData.positioning.ambition}
              </p>
            </div>
          </div>

          {/* Spectrum Visual */}
          <div className="lg:col-span-6 p-8 sm:p-12 rounded-3xl bg-noir-card border border-white/10">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold-400 block mb-8 text-center">
              Market Positioning Axis
            </span>

            <div className="relative py-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-y border-white/10">
              <div className="p-4 rounded-xl bg-noir border border-white/5 text-center w-full sm:w-1/3">
                <span className="text-xs font-mono text-ivory/50 block mb-1">Low Energy</span>
                <span className="text-sm font-serif text-ivory/80">Traditional Bakery</span>
              </div>

              <div className="p-5 rounded-xl bg-gold-500/20 border border-gold-500 text-center w-full sm:w-1/3 shadow-lg shadow-gold-500/10">
                <span className="text-xs font-mono text-gold-300 font-bold block mb-1">The Sweet Spot</span>
                <span className="text-base font-serif font-bold text-ivory">VIV CROISSANTS</span>
              </div>

              <div className="p-4 rounded-xl bg-noir border border-white/5 text-center w-full sm:w-1/3">
                <span className="text-xs font-mono text-ivory/50 block mb-1">High Price</span>
                <span className="text-sm font-serif text-ivory/80">Modern Lifestyle Café</span>
              </div>
            </div>

            <p className="mt-8 text-xs font-mono text-ivory/50 text-center">
              Elevated culinary craft without intimidating pricing; high-energy aesthetic with daily accessibility.
            </p>
          </div>
        </div>

        {/* 6 Touchpoints Experience */}
        <div className="pt-16 border-t border-white/10">
          <div className="mb-12">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold-400 block mb-3">
              Holistic Brand Architecture
            </span>
            <h3 className="text-3xl sm:text-5xl font-serif text-ivory font-normal">
              A Brand You Can See, Taste & Remember
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vivData.experienceTouchpoints.map((tp, idx) => {
              const IconComp = TOUCHPOINT_ICONS[idx % TOUCHPOINT_ICONS.length];
              return (
                <div
                  key={tp.touchpoint}
                  className="p-8 rounded-2xl bg-noir-card border border-white/5 hover:border-gold-500/30 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-gold-500/10 text-gold-400 flex items-center justify-center mb-6 group-hover:bg-gold-500 group-hover:text-noir transition-colors">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono uppercase tracking-widest text-gold-400 block mb-2">
                      0{idx + 1} · {tp.touchpoint}
                    </span>
                    <p className="text-sm sm:text-base font-light text-ivory-muted/80 leading-relaxed">
                      {tp.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
