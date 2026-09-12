import React, { useState } from 'react';
import { vivData } from '../../data/vivData';
import { Share2, Repeat, ShoppingBag, ArrowRight, Building, Sparkles } from 'lucide-react';

export const VIVMarketingBusinessSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-36 px-4 sm:px-8 lg:px-16 bg-noir border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto space-y-28">
        {/* 01 Social & Marketing Engine */}
        <div>
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold-400 block mb-3">
              Organic Growth & Viral Engine
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-ivory font-normal leading-tight">
              {vivData.marketingEngine.headline}
            </h2>
            <p className="mt-4 text-lg text-ivory-muted/80 font-light">
              Social media is an organic extension of the VIV sensory experience, driving continuous brand trial and cultural relevance.
            </p>
          </div>

          {/* Social Channels Tags */}
          <div className="flex flex-wrap gap-2.5 mb-14">
            {vivData.marketingEngine.channels.map((ch) => (
              <span
                key={ch}
                className="px-4 py-2 rounded-full bg-noir-card text-ivory/90 border border-white/10 text-xs font-mono tracking-wider hover:border-gold-500/40 transition-colors"
              >
                #{ch}
              </span>
            ))}
          </div>

          {/* Flywheel Progression */}
          <div className="p-8 sm:p-12 rounded-3xl bg-noir-card border border-gold-500/20">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold-400 block mb-8">
              The 8-Step Marketing Flywheel
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {vivData.marketingEngine.flywheel.map((step, idx) => (
                <div
                  key={step.step}
                  className="p-5 rounded-xl bg-noir-elevated border border-white/5 flex flex-col justify-between"
                >
                  <span className="text-xs font-mono text-gold-400 font-bold mb-2">
                    0{idx + 1}
                  </span>
                  <div>
                    <h5 className="font-serif text-base text-ivory mb-1">
                      {step.step}
                    </h5>
                    <p className="text-xs font-sans text-ivory-muted/70">
                      → {step.outcome}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 text-center">
              <span className="text-xs font-mono tracking-widest uppercase text-gold-300 font-bold">
                {vivData.marketingEngine.cycleRule}
              </span>
            </div>
          </div>
        </div>

        {/* 02 Multi-Channel Business Model */}
        <div className="pt-16 border-t border-white/10">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold-400 block mb-3">
              Revenue Streams
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-ivory font-normal leading-tight">
              {vivData.businessModel.headline}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {vivData.businessModel.channels.map((channel) => (
              <div
                key={channel.name}
                className="p-6 rounded-2xl bg-noir-card border border-white/5 hover:border-gold-500/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-gold-400 block mb-2">
                    {channel.name}
                  </span>
                  <p className="text-sm font-light text-ivory-muted/80 leading-relaxed">
                    {channel.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 03 VIV + Malls & Repeat Traffic */}
        <div className="pt-16 border-t border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold-400 block">
                Commercial Venue Alignment
              </span>
              <h3 className="text-3xl sm:text-5xl font-serif text-ivory font-normal">
                Why VIV Works in Malls
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {vivData.malls.whyWorks.map((item) => (
                  <div key={item.title} className="p-4 rounded-xl bg-noir-card border border-white/5">
                    <h5 className="font-serif text-ivory text-base mb-1 font-medium">{item.title}</h5>
                    <p className="text-xs text-ivory-muted/70 font-light">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 p-8 sm:p-10 rounded-3xl bg-noir-card border border-gold-500/20">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold-400 block mb-2">
                Habitual Frequency
              </span>
              <h4 className="text-2xl sm:text-3xl font-serif text-ivory mb-6">
                Why VIV Creates Repeat Traffic
              </h4>

              <div className="space-y-3">
                {vivData.malls.repeatTrafficCycle.map((cycle) => (
                  <div key={cycle.day} className="p-3.5 rounded-xl bg-noir-elevated border border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-gold-300 font-semibold w-24">
                        {cycle.day}
                      </span>
                      <span className="font-serif text-ivory text-sm">
                        {cycle.ritual}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-ivory/50">
                      {cycle.mood}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 text-center text-xs font-mono text-gold-300 font-bold uppercase tracking-widest">
                Objective: {vivData.malls.goal}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
