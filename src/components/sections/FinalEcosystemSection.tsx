import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { ecosystemData } from '../../data/ecosystemData';
import { Sparkles, Layers, ShieldCheck, ArrowUpRight } from 'lucide-react';

export const FinalEcosystemSection: React.FC = () => {
  return (
    <section id="ecosystem" className="py-24 sm:py-36 px-4 sm:px-8 lg:px-16 bg-noir-rich border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto space-y-28">
        {/* Chapter Header */}
        <SectionHeader
          numeral="07"
          category="Strategic Synthesis"
          title={ecosystemData.headline}
          subtitle={ecosystemData.subtitle}
        />

        {/* 8 Integrated Dimensions Grid */}
        <div>
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold-400 block mb-3">
              The 8 Convergent Dimensions
            </span>
            <h3 className="text-3xl sm:text-5xl font-serif text-ivory font-normal">
              An Unrivaled Value Engine
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ecosystemData.dimensions.map((dim, idx) => (
              <div
                key={dim.name}
                className="p-8 rounded-3xl bg-noir-card border border-white/5 hover:border-gold-500/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <span className="text-xs font-mono text-gold-400 font-bold block mb-4">
                    0{idx + 1}
                  </span>
                  <h4 className="text-xl font-serif text-ivory mb-2 group-hover:text-gold-200 transition-colors">
                    {dim.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-ivory-muted/70 font-light leading-relaxed">
                    {dim.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Pillars Unified Summary */}
        <div className="p-8 sm:p-14 rounded-3xl bg-noir-card border border-gold-500/20 space-y-10">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold-400 block mb-2">
              Founding Coalitions
            </span>
            <h3 className="text-2xl sm:text-4xl font-serif text-ivory">
              {ecosystemData.tagline}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ecosystemData.pillars.map((p) => (
              <div key={p.role} className="p-6 rounded-2xl bg-noir-elevated border border-white/5 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-gold-400 font-bold block mb-1">
                    {p.role}
                  </span>
                  <h5 className="font-serif text-lg text-ivory mb-1">{p.person}</h5>
                  <p className="text-xs font-mono text-ivory/50 mb-3">{p.title}</p>
                  <p className="text-xs text-ivory-muted/70 font-light leading-relaxed">{p.strength}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Synthesis Monument */}
        <div className="p-12 sm:p-20 rounded-3xl bg-gradient-to-r from-noir-card via-noir-elevated to-noir-card border border-gold-500/30 text-center max-w-4xl mx-auto space-y-6">
          <Sparkles className="w-8 h-8 text-gold-400 mx-auto" />
          <p className="text-lg sm:text-2xl font-serif text-ivory font-light leading-relaxed italic">
            “{ecosystemData.synthesisStatement}”
          </p>
        </div>
      </div>
    </section>
  );
};
