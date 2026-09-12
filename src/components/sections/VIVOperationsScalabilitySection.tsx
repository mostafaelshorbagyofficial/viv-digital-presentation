import React from 'react';
import { vivData } from '../../data/vivData';
import { Store, Layers, TrendingUp, Calculator, MapPin, CheckCircle2, ShieldAlert } from 'lucide-react';

export const VIVOperationsScalabilitySection: React.FC = () => {
  return (
    <section className="py-24 sm:py-36 px-4 sm:px-8 lg:px-16 bg-noir-rich border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto space-y-28">
        {/* 01 Store Formats */}
        <div>
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold-400 block mb-3">
              Retail Engineering
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-ivory font-normal leading-tight">
              One Brand. Multiple Formats.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {vivData.storeFormats.map((fmt) => (
              <div
                key={fmt.format}
                className="p-8 rounded-2xl bg-noir-card border border-white/5 hover:border-gold-500/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-gold-500/10 text-gold-400 flex items-center justify-center mb-4">
                    <Store className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-widest text-gold-400 block mb-1">
                    {fmt.format}
                  </span>
                  <h4 className="font-serif text-lg text-ivory mb-2 font-medium">
                    {fmt.role}
                  </h4>
                  <p className="text-xs sm:text-sm font-light text-ivory-muted/70 leading-relaxed">
                    {fmt.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 02 Scalability & Operational Model */}
        <div className="pt-16 border-t border-white/10">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold-400 block mb-3">
              Operational Standard
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-ivory font-normal leading-tight">
              {vivData.scalability.headline}
            </h2>
            <p className="mt-4 text-lg text-ivory-muted/80 font-light">
              {vivData.scalability.subheadline}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {vivData.scalability.pillars.map((pil) => (
              <div
                key={pil.title}
                className="p-6 rounded-2xl bg-noir-card border border-white/5 hover:border-gold-500/20 transition-colors"
              >
                <h5 className="font-serif text-base text-ivory mb-1 font-medium">
                  {pil.title}
                </h5>
                <p className="text-xs text-ivory-muted/70 font-light leading-relaxed">
                  {pil.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 rounded-xl bg-gold-500/10 border border-gold-500/20 text-center text-xs font-mono text-gold-300">
            {vivData.scalability.promise}
          </div>
        </div>

        {/* 03 Centralized Production & Supply Chain */}
        <div className="pt-16 border-t border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6 p-8 sm:p-12 rounded-3xl bg-noir-card border border-white/10">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold-400 block mb-3">
                Commissary Power
              </span>
              <h3 className="text-2xl sm:text-4xl font-serif text-ivory mb-6">
                Centralized Production
              </h3>
              <ul className="space-y-3">
                {vivData.centralizedProduction.productionBenefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-ivory/80">
                    <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-6 p-8 sm:p-12 rounded-3xl bg-noir-card border border-gold-500/20">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold-400 block mb-3">
                Logistics & Procurement
              </span>
              <h3 className="text-2xl sm:text-4xl font-serif text-ivory mb-6">
                Supply Chain Architecture
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {vivData.centralizedProduction.supplyChainPillars.map((scp) => (
                  <div key={scp.name} className="p-4 rounded-xl bg-noir-elevated border border-white/5">
                    <h5 className="font-serif text-sm text-ivory font-medium mb-1">{scp.name}</h5>
                    <p className="text-xs text-ivory-muted/70 font-light">{scp.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 04 Unit Economics & Financial Framework */}
        <div className="pt-16 border-t border-white/10">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold-400 block mb-3">
              Financial Rigor
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-ivory font-normal leading-tight">
              {vivData.unitEconomics.title}
            </h2>
          </div>

          {/* Formulas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {vivData.unitEconomics.formulas.map((f) => (
              <div key={f.metric} className="p-6 rounded-2xl bg-noir-card border border-gold-500/30">
                <span className="text-xs font-mono uppercase tracking-widest text-gold-400 block mb-1">
                  {f.metric}
                </span>
                <p className="text-sm sm:text-base font-serif text-ivory font-medium">
                  {f.equation}
                </p>
              </div>
            ))}
          </div>

          {/* Approved KPIs Grid (TBD for unprovided data as instructed) */}
          <div className="p-8 rounded-2xl bg-noir-elevated border border-white/10">
            <span className="text-xs font-mono uppercase tracking-widest text-ivory/50 block mb-4">
              Approved Benchmark KPI Structure
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {vivData.unitEconomics.kpis.map((kpi) => (
                <div key={kpi.label} className="p-4 rounded-xl bg-noir border border-white/5 text-center">
                  <span className="text-xs font-mono text-ivory/60 block mb-1">{kpi.label}</span>
                  <span className="text-lg font-mono text-gold-300 font-bold">{kpi.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 05 Location Strategy & First Store Blueprint */}
        <div className="pt-16 border-t border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold-400 block">
                Site Selection Criteria
              </span>
              <h3 className="text-3xl sm:text-4xl font-serif text-ivory">
                {vivData.locationStrategy.headline}
              </h3>
              <div className="flex flex-wrap gap-2 pt-2">
                {vivData.locationStrategy.criteria.map((c) => (
                  <span key={c} className="px-3.5 py-1.5 rounded-full bg-noir-card text-ivory/80 border border-white/10 text-xs font-mono">
                    ✓ {c}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 p-8 sm:p-12 rounded-3xl bg-noir-card border border-gold-500/20">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold-400 block mb-2">
                Strategic Anchor
              </span>
              <h4 className="text-2xl sm:text-3xl font-serif text-ivory mb-6">
                {vivData.locationStrategy.firstLocation.headline}
              </h4>
              <div className="space-y-4">
                {vivData.locationStrategy.firstLocation.roles.map((r) => (
                  <div key={r.role} className="border-b border-white/5 pb-3">
                    <span className="text-xs font-mono uppercase tracking-widest text-gold-300 block mb-1">
                      {r.role}
                    </span>
                    <p className="text-xs sm:text-sm font-light text-ivory-muted/80">
                      {r.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
