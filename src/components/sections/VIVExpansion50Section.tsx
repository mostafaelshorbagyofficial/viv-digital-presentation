import React from 'react';
import { vivData } from '../../data/vivData';
import { TrendingUp, ArrowRight, Compass, Sparkles } from 'lucide-react';

export const VIVExpansion50Section: React.FC = () => {
  return (
    <section className="py-24 sm:py-36 px-4 sm:px-8 lg:px-16 bg-noir-rich border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto space-y-28">
        {/* 01 Expansion Phased Roadmap */}
        <div>
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold-400 block mb-3">
              Growth Methodology
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-ivory font-normal leading-tight">
              Prove → Replicate → Scale
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {vivData.expansionRoadmap.phases.map((phase) => (
              <div
                key={phase.number}
                className="p-8 rounded-3xl bg-noir-card border border-white/10 hover:border-gold-500/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl sm:text-4xl font-serif font-bold text-gold-400/70 block mb-4">
                    {phase.number}
                  </span>
                  <h4 className="text-2xl font-serif text-ivory mb-6 font-medium">
                    {phase.name}
                  </h4>
                  <ul className="space-y-3">
                    {phase.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-ivory-muted/80 font-light">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-400 shrink-0 mt-1.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 02 The Monumental 50-Location Progression Timeline */}
        <div className="pt-16 border-t border-white/10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold-400 block mb-3">
              Multi-Year Scaling Trajectory
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-ivory font-normal leading-tight">
              {vivData.fiftyLocationVision.headline}
            </h2>
            <p className="mt-4 text-base sm:text-xl text-ivory-muted/80 font-light">
              A structured progression from single-unit proof of concept to nationwide market leadership.
            </p>
          </div>

          {/* Stepped Visual Progression */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {vivData.fiftyLocationVision.steps.map((step, idx) => (
              <div
                key={step.count}
                className={`p-6 sm:p-8 rounded-3xl border flex flex-col justify-between transition-all duration-300 ${
                  idx === 4
                    ? 'bg-gradient-to-b from-gold-500/20 to-noir-card border-gold-500/60 shadow-xl shadow-gold-500/10'
                    : 'bg-noir-card border-white/10 hover:border-gold-500/30'
                }`}
              >
                <div>
                  <span className={`text-4xl sm:text-6xl font-serif font-bold block mb-4 ${
                    idx === 4 ? 'text-gold-300' : 'text-ivory/90'
                  }`}>
                    {step.count}
                  </span>
                  <h4 className="font-serif text-base sm:text-lg text-ivory mb-2 font-medium">
                    {step.stage}
                  </h4>
                  <p className="text-xs text-ivory-muted/70 font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 text-[10px] font-mono text-gold-400/80 uppercase">
                  Phase 0{idx + 1} Milestone
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 03 The Bigger Vision: Today, Tomorrow, Future */}
        <div className="pt-16 border-t border-white/10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold-400 block mb-3">
              Strategic Horizons
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-ivory font-normal">
              {vivData.biggerVision.headline}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {vivData.biggerVision.timeline.map((era) => (
              <div
                key={era.era}
                className="p-8 sm:p-10 rounded-3xl bg-noir-card border border-white/10 hover:border-gold-500/40 transition-all text-center flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono tracking-widest uppercase px-4 py-1.5 rounded-full bg-gold-500/10 text-gold-300 border border-gold-500/30 inline-block mb-6">
                    {era.era}
                  </span>
                  <div className="space-y-2 py-4">
                    {era.items.map((item, i) => (
                      <p key={i} className={`font-serif text-lg sm:text-xl ${
                        item === '+' ? 'text-gold-400 text-sm font-sans' : 'text-ivory font-light'
                      }`}>
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg sm:text-2xl font-serif text-gold-300 italic">
              “{vivData.biggerVision.takeaway}”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
