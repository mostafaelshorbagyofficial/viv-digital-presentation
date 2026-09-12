import React from 'react';
import { vivData } from '../../data/vivData';
import { Share2, Repeat, ShoppingBag, ArrowRight, Building, Sparkles } from 'lucide-react';

export const VIVMarketingBusinessSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-36 px-4 sm:px-8 lg:px-16 bg-viv-cream text-viv-chocolate relative">
      <div className="max-w-7xl mx-auto space-y-28">
        {/* 01 Social & Marketing Engine */}
        <div>
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-viv-burgundy font-bold block mb-3">
              Organic Growth & Viral Engine
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-viv-burgundy font-normal leading-tight">
              {vivData.marketingEngine.headline}
            </h2>
            <p className="mt-4 text-lg text-viv-chocolate/80 font-light">
              Social media is an organic extension of the VIV sensory experience, driving continuous brand trial and cultural relevance.
            </p>
          </div>

          {/* Social Channels Tags */}
          <div className="flex flex-wrap gap-2.5 mb-14">
            {vivData.marketingEngine.channels.map((ch) => (
              <span
                key={ch}
                className="px-4 py-2 rounded-full bg-white text-viv-burgundy border border-viv-burgundy/15 text-xs font-mono tracking-wider font-semibold shadow-sm hover:border-viv-yellow transition-colors"
              >
                #{ch}
              </span>
            ))}
          </div>

          {/* Flywheel Progression */}
          <div className="p-8 sm:p-12 rounded-3xl bg-viv-burgundy text-viv-cream border border-viv-yellow/30 shadow-xl">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-viv-yellow font-bold block mb-8">
              The 8-Step Marketing Flywheel
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {vivData.marketingEngine.flywheel.map((step, idx) => (
                <div
                  key={step.step}
                  className="p-5 rounded-xl bg-viv-burgundy-dark border border-viv-yellow/15 flex flex-col justify-between"
                >
                  <span className="text-xs font-mono text-viv-yellow font-bold mb-2">
                    0{idx + 1}
                  </span>
                  <div>
                    <h5 className="font-serif text-base text-viv-cream mb-1 font-medium">
                      {step.step}
                    </h5>
                    <p className="text-xs font-sans text-viv-cream-soft">
                      → {step.outcome}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-viv-yellow/20 text-center">
              <span className="text-xs font-mono tracking-widest uppercase text-viv-yellow font-bold">
                {vivData.marketingEngine.cycleRule}
              </span>
            </div>
          </div>
        </div>

        {/* 02 Multi-Channel Business Model */}
        <div className="pt-16 border-t border-viv-burgundy/15">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-viv-burgundy font-bold block mb-3">
              Revenue Streams
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-viv-burgundy font-normal leading-tight">
              {vivData.businessModel.headline}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {vivData.businessModel.channels.map((channel) => (
              <div
                key={channel.name}
                className="p-6 rounded-2xl bg-white border border-viv-burgundy/10 shadow-sm hover:shadow-md hover:border-viv-burgundy/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-viv-burgundy font-bold block mb-2">
                    {channel.name}
                  </span>
                  <p className="text-sm font-light text-viv-chocolate/80 leading-relaxed">
                    {channel.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 03 VIV + Malls & Repeat Traffic */}
        <div className="pt-16 border-t border-viv-burgundy/15">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-viv-burgundy font-bold block">
                Commercial Venue Alignment
              </span>
              <h3 className="text-3xl sm:text-5xl font-serif text-viv-burgundy font-normal">
                Why VIV Works in Malls
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {vivData.malls.whyWorks.map((item) => (
                  <div key={item.title} className="p-4 rounded-xl bg-white border border-viv-burgundy/10 shadow-sm">
                    <h5 className="font-serif text-viv-burgundy text-base mb-1 font-semibold">{item.title}</h5>
                    <p className="text-xs text-viv-chocolate/70 font-light">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 p-8 sm:p-10 rounded-3xl bg-viv-burgundy text-viv-cream border border-viv-yellow/30 shadow-xl">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-viv-yellow font-bold block mb-2">
                Habitual Frequency
              </span>
              <h4 className="text-2xl sm:text-3xl font-serif text-viv-cream mb-6">
                Why VIV Creates Repeat Traffic
              </h4>

              <div className="space-y-3">
                {vivData.malls.repeatTrafficCycle.map((cycle) => (
                  <div key={cycle.day} className="p-3.5 rounded-xl bg-viv-burgundy-dark border border-viv-yellow/15 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-viv-yellow font-bold w-24">
                        {cycle.day}
                      </span>
                      <span className="font-serif text-viv-cream text-sm font-medium">
                        {cycle.ritual}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-viv-cream-soft/70">
                      {cycle.mood}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-viv-yellow/20 text-center text-xs font-mono text-viv-yellow font-bold uppercase tracking-widest">
                Objective: {vivData.malls.goal}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
