import React from 'react';
import { vivData } from '../../data/vivData';
import { Sparkles, ShieldCheck, Box, MessageSquare, Smartphone, Smile, Store } from 'lucide-react';

const TOUCHPOINT_ICONS = [
  Sparkles, Store, Box, Smile, Smartphone, MessageSquare
];

export const VIVPositioningExperienceSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-36 px-4 sm:px-8 lg:px-16 bg-viv-burgundy text-viv-cream relative">
      <div className="max-w-7xl mx-auto space-y-28">
        {/* Positioning Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-viv-yellow font-bold block">
              Market Positioning
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-viv-cream font-normal leading-tight">
              {vivData.positioning.headline}
            </h2>

            <div className="space-y-4 pt-4 border-t border-viv-yellow/20">
              {vivData.positioning.tenets.map((tenet, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-viv-yellow shrink-0 mt-0.5" />
                  <p className="text-base sm:text-lg font-light text-viv-cream-soft">
                    {tenet}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-viv-burgundy-dark border border-viv-yellow/30">
              <span className="text-xs font-mono uppercase tracking-widest text-viv-yellow/70 block mb-1 font-bold">
                Strategic Ambition
              </span>
              <p className="text-2xl font-serif text-viv-yellow font-bold">
                {vivData.positioning.ambition}
              </p>
            </div>
          </div>

          {/* Spectrum Visual */}
          <div className="lg:col-span-6 p-8 sm:p-12 rounded-3xl bg-viv-burgundy-deep border border-viv-yellow/30 shadow-2xl">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-viv-yellow font-bold block mb-8 text-center">
              Market Positioning Axis
            </span>

            <div className="relative py-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-y border-viv-yellow/20">
              <div className="p-4 rounded-xl bg-viv-burgundy-dark border border-white/5 text-center w-full sm:w-1/3">
                <span className="text-xs font-mono text-viv-cream/60 block mb-1">Low Energy</span>
                <span className="text-sm font-serif text-viv-cream">Traditional Bakery</span>
              </div>

              <div className="p-5 rounded-xl bg-viv-yellow text-viv-chocolate font-bold text-center w-full sm:w-1/3 shadow-xl shadow-viv-yellow/20">
                <span className="text-xs font-mono block mb-1 uppercase tracking-wider">The Sweet Spot</span>
                <span className="text-base font-serif font-black">VIV CROISSANTS</span>
              </div>

              <div className="p-4 rounded-xl bg-viv-burgundy-dark border border-white/5 text-center w-full sm:w-1/3">
                <span className="text-xs font-mono text-viv-cream/60 block mb-1">High Price</span>
                <span className="text-sm font-serif text-viv-cream">Lifestyle Café</span>
              </div>
            </div>

            <p className="mt-8 text-xs font-mono text-viv-cream/70 text-center">
              Elevated culinary craft without intimidating pricing; high-energy aesthetic with daily accessibility.
            </p>
          </div>
        </div>

        {/* 6 Touchpoints Experience */}
        <div className="pt-16 border-t border-viv-yellow/20">
          <div className="mb-12">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-viv-yellow font-bold block mb-3">
              Holistic Brand Architecture
            </span>
            <h3 className="text-3xl sm:text-5xl font-serif text-viv-cream font-normal">
              A Brand You Can See, Taste & Remember
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vivData.experienceTouchpoints.map((tp, idx) => {
              const IconComp = TOUCHPOINT_ICONS[idx % TOUCHPOINT_ICONS.length];
              return (
                <div
                  key={tp.touchpoint}
                  className="p-8 rounded-2xl bg-viv-burgundy-dark/80 border border-viv-yellow/20 hover:border-viv-yellow/50 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-viv-yellow/15 text-viv-yellow flex items-center justify-center mb-6 group-hover:bg-viv-yellow group-hover:text-viv-chocolate transition-colors">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono uppercase tracking-widest text-viv-yellow font-bold block mb-2">
                      0{idx + 1} · {tp.touchpoint}
                    </span>
                    <p className="text-sm sm:text-base font-light text-viv-cream-soft leading-relaxed">
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
