import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { elhaganData } from '../../data/elhaganData';
import { MediaItem, FeaturedWork } from '../../types/presentation';
import { Sparkles, Film, Globe, Eye, ArrowRight, Video, Award } from 'lucide-react';

interface MohamedElhaganSectionProps {
  onOpenLightbox: (media: MediaItem) => void;
  onOpenFeaturedWork: (work: FeaturedWork) => void;
}

export const MohamedElhaganSection: React.FC<MohamedElhaganSectionProps> = ({
  onOpenLightbox,
  onOpenFeaturedWork
}) => {
  return (
    <section id="elhagan" className="py-24 sm:py-36 px-4 sm:px-8 lg:px-16 bg-noir border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto space-y-28">
        {/* Chapter Header */}
        <SectionHeader
          numeral="04"
          category="Creative Direction & Strategic Leadership"
          title={elhaganData.name}
          subtitle={`${elhaganData.title} · ${elhaganData.companyRole}`}
        />

        {/* Narrative & Real Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Approved Portrait */}
          <div className="lg:col-span-5">
            <div
              onClick={() => onOpenLightbox({
                id: 'elhagan-portrait',
                type: 'image',
                title: elhaganData.name,
                subtitle: `${elhaganData.title} — ${elhaganData.companyRole}`,
                src: elhaganData.portrait,
                caption: '20+ Years in Media Production · Creative Director & Founder'
              })}
              className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-noir-card cursor-pointer group"
            >
              <img
                src={elhaganData.portrait}
                alt={elhaganData.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-noir via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-6 inset-x-6 flex items-center justify-between text-xs font-mono text-ivory">
                <span className="font-semibold text-gold-300">Mohamed Elhagan</span>
                <span className="text-gold-400 flex items-center gap-1">
                  <Eye className="w-3.5 h-3.5" />
                  Expand Portrait
                </span>
              </div>
            </div>

            <div className="mt-4 p-5 rounded-xl bg-noir-card border border-gold-500/20 text-center">
              <span className="text-xs font-mono uppercase tracking-widest text-gold-400 block mb-1">
                Career Tenure
              </span>
              <p className="font-serif text-lg text-ivory">
                {elhaganData.experience}
              </p>
            </div>
          </div>

          {/* Biography & Impact */}
          <div className="lg:col-span-7 space-y-8">
            <p className="text-xl sm:text-2xl font-serif text-ivory font-light leading-relaxed">
              “{elhaganData.bio}”
            </p>

            {/* Social Impact Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-6 rounded-2xl bg-noir-card border border-white/10">
                <span className="text-3xl font-serif font-bold text-gold-300 block mb-1">
                  {elhaganData.socialImpact.followers}
                </span>
                <p className="text-xs font-mono uppercase tracking-wider text-ivory/60">
                  {elhaganData.socialImpact.followersLabel}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-noir-card border border-white/10">
                <span className="text-3xl font-serif font-bold text-gold-300 block mb-1">
                  {elhaganData.socialImpact.views}
                </span>
                <p className="text-xs font-mono uppercase tracking-wider text-ivory/60">
                  {elhaganData.socialImpact.viewsLabel}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-noir-card border border-white/10">
                <span className="text-3xl font-serif font-bold text-gold-300 block mb-1">
                  {elhaganData.socialImpact.likes}
                </span>
                <p className="text-xs font-mono uppercase tracking-wider text-ivory/60">
                  {elhaganData.socialImpact.likesLabel}
                </p>
              </div>
            </div>

            {/* International Footprint */}
            <div className="p-6 rounded-2xl bg-noir-elevated border border-white/5 space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-gold-400 flex items-center gap-2">
                <Globe className="w-4 h-4" />
                International Directing Footprint
              </span>
              <div className="flex flex-wrap gap-2">
                {elhaganData.internationalFootprint.map((country) => (
                  <span
                    key={country}
                    className="px-3.5 py-1.5 rounded-full bg-noir text-ivory/90 border border-white/10 text-xs font-mono"
                  >
                    {country}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Core Expertise Areas */}
        <div>
          <div className="mb-10">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold-400 block mb-2">
              Creative Mastery
            </span>
            <h3 className="text-2xl sm:text-4xl font-serif text-ivory">
              Fields of Expertise
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {elhaganData.expertise.map((exp) => (
              <div
                key={exp.title}
                className="p-6 rounded-2xl bg-noir-card border border-white/5 hover:border-gold-500/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <h4 className="font-serif text-lg text-ivory mb-2 font-medium">
                    {exp.title}
                  </h4>
                  <p className="text-xs sm:text-sm font-light text-ivory-muted/70 leading-relaxed">
                    {exp.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Work — Mohamed Elhagan */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold-400 block mb-2">
                Portfolio Showcase
              </span>
              <h3 className="text-2xl sm:text-4xl font-serif text-ivory">
                Featured Directorial Work
              </h3>
            </div>
            <p className="text-xs font-mono text-ivory/50">
              Click to view project details
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {elhaganData.works.map((work) => (
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
