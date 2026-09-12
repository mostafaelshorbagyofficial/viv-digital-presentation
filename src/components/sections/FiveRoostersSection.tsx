import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { fiveRoostersData } from '../../data/fiveRoostersData';
import { MediaItem, FeaturedWork } from '../../types/presentation';
import { UtensilsCrossed, Eye, ArrowRight, Cog, TrendingUp, CheckCircle2 } from 'lucide-react';

interface FiveRoostersSectionProps {
  onOpenLightbox: (media: MediaItem) => void;
  onOpenFeaturedWork: (work: FeaturedWork) => void;
}

export const FiveRoostersSection: React.FC<FiveRoostersSectionProps> = ({
  onOpenLightbox,
  onOpenFeaturedWork
}) => {
  return (
    <section id="five-roosters" className="py-24 sm:py-36 px-4 sm:px-8 lg:px-16 bg-noir border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto space-y-28">
        {/* Chapter Header */}
        <SectionHeader
          numeral="06"
          category="Culinary Operations & Scaling Engineering"
          title={fiveRoostersData.brand.name}
          subtitle={`“${fiveRoostersData.brand.tagline}”`}
        />

        {/* Brand Showcase & Real Asset */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <div
              onClick={() => onOpenLightbox({
                id: 'five-roosters-brand-img',
                type: 'image',
                title: fiveRoostersData.brand.name,
                subtitle: fiveRoostersData.brand.tagline,
                src: fiveRoostersData.brand.image,
                caption: '5 Roosters Fried Chicken — Brand Powerhouse'
              })}
              className="relative aspect-[4/5] sm:aspect-square rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-noir-card cursor-pointer group"
            >
              <img
                src={fiveRoostersData.brand.image}
                alt={fiveRoostersData.brand.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-noir via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-6 inset-x-6 flex items-center justify-between text-xs font-mono text-ivory">
                <span className="font-semibold text-gold-300">5 Roosters Fried Chicken</span>
                <span className="text-gold-400 flex items-center gap-1">
                  <Eye className="w-3.5 h-3.5" />
                  Expand Asset
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold-400 block">
              Culinary Powerhouse
            </span>
            <h3 className="text-3xl sm:text-5xl font-serif text-ivory font-normal leading-tight">
              {fiveRoostersData.brand.tagline}
            </h3>
            <p className="text-lg text-ivory-muted/90 font-light leading-relaxed">
              {fiveRoostersData.brand.description}
            </p>

            <div className="space-y-3 pt-4 border-t border-white/10">
              {fiveRoostersData.brandPillars.map((p) => (
                <div key={p.title} className="p-4 rounded-xl bg-noir-card border border-white/5">
                  <h5 className="font-serif text-base text-ivory font-medium mb-1">{p.title}</h5>
                  <p className="text-xs text-ivory-muted/70 font-light">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Founder Section: Eng. Ahmed Hassan (Exact title required) */}
        <div className="pt-16 border-t border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Portrait */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div
                onClick={() => onOpenLightbox({
                  id: 'ahmed-hassan-portrait',
                  type: 'image',
                  title: fiveRoostersData.founder.name,
                  subtitle: `${fiveRoostersData.founder.title} — ${fiveRoostersData.founder.company}`,
                  src: fiveRoostersData.founder.portrait,
                  caption: 'Operations Mastermind · Kitchen Engineering & Scaling'
                })}
                className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-noir-card cursor-pointer group"
              >
                <img
                  src={fiveRoostersData.founder.portrait}
                  alt={fiveRoostersData.founder.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-noir via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-6 inset-x-6 flex items-center justify-between text-xs font-mono text-ivory">
                  <span className="font-semibold text-gold-300">Eng. Ahmed Hassan</span>
                  <span className="text-gold-400 flex items-center gap-1">
                    <Eye className="w-3.5 h-3.5" />
                    Expand Portrait
                  </span>
                </div>
              </div>
            </div>

            {/* Narrative */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold-400 block mb-2">
                  Founder & Operational Architect
                </span>
                <h3 className="text-3xl sm:text-5xl font-serif text-ivory font-normal">
                  {fiveRoostersData.founder.name}
                </h3>
                <p className="text-sm font-mono text-gold-300 font-semibold tracking-wider mt-1 uppercase">
                  {fiveRoostersData.founder.title} — {fiveRoostersData.founder.company}
                </p>
              </div>

              <p className="text-xl font-serif text-ivory font-light leading-relaxed">
                “{fiveRoostersData.founder.bio}”
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
                {fiveRoostersData.strengths.map((str) => (
                  <div key={str.title} className="p-4 rounded-xl bg-noir-card border border-white/5">
                    <h5 className="font-serif text-base text-ivory font-medium mb-1">{str.title}</h5>
                    <p className="text-xs text-ivory-muted/70 font-light">{str.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Featured Work — 5 Roosters / Ahmed Hassan */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold-400 block mb-2">
                Operations Showcase
              </span>
              <h3 className="text-2xl sm:text-4xl font-serif text-ivory">
                5 Roosters Featured Execution
              </h3>
            </div>
            <p className="text-xs font-mono text-ivory/50">
              Click to view project details
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {fiveRoostersData.works.map((work) => (
              <div
                key={work.id}
                onClick={() => onOpenFeaturedWork(work)}
                className="p-6 rounded-2xl bg-noir-card border border-white/10 hover:border-gold-500/40 transition-all cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded bg-gold-500/10 text-gold-300 border border-gold-500/20 inline-block mb-3">
                    {work.category}
                  </span>
                  <h4 className="text-xl font-serif text-ivory mb-2 group-hover:text-gold-200 transition-colors">
                    {work.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-ivory-muted/70 font-light mb-4 leading-relaxed">
                    {work.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-gold-400">
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
