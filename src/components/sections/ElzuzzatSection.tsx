import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { elzuzzatData } from '../../data/elzuzzatData';
import { MediaItem, FeaturedWork } from '../../types/presentation';
import { Users, Sparkles, Coffee, TrendingUp, Eye, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ElzuzzatSectionProps {
  onOpenLightbox: (media: MediaItem) => void;
  onOpenFeaturedWork: (work: FeaturedWork) => void;
}

export const ElzuzzatSection: React.FC<ElzuzzatSectionProps> = ({
  onOpenLightbox,
  onOpenFeaturedWork
}) => {
  return (
    <section id="elzuzzat" className="py-24 sm:py-36 px-4 sm:px-8 lg:px-16 bg-noir-rich border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto space-y-28">
        {/* Chapter Header */}
        <SectionHeader
          numeral="03"
          category="Digital Influence & Hospitality"
          title={elzuzzatData.headline}
          subtitle={elzuzzatData.subtitle}
        />

        {/* Narrative & Real Approved Portrait (Two Visionary Brothers) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Approved Portrait of Mazen & Moaz El-Zoz */}
          <div className="lg:col-span-5">
            <div
              onClick={() => onOpenLightbox({
                id: 'elzuzzat-portrait',
                type: 'image',
                title: 'Mazen & Moaz El-Zoz (Elzuzzat)',
                subtitle: 'Content Creators, Influencers & Hospitality Founders',
                src: elzuzzatData.portrait,
                caption: '+9.7M Community · Blue View Cafe Founders'
              })}
              className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-noir-card cursor-pointer group"
            >
              <img
                src={elzuzzatData.portrait}
                alt="Elzuzzat — Mazen and Moaz"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-noir via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-6 inset-x-6 flex items-center justify-between text-xs font-mono text-ivory">
                <span className="font-semibold text-gold-300">Mazen & Moaz El-Zoz</span>
                <span className="text-gold-400 flex items-center gap-1">
                  <Eye className="w-3.5 h-3.5" />
                  Expand Portrait
                </span>
              </div>
            </div>

            <div className="mt-4 p-4 rounded-xl bg-gold-500/10 border border-gold-500/20 text-center text-xs font-mono text-gold-300">
              {elzuzzatData.duoNote}
            </div>
          </div>

          {/* Description & Audience Numbers */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold-400 block mb-2">
                Audience & Cultural Reach
              </span>
              <p className="text-xl sm:text-2xl font-serif text-ivory font-light leading-relaxed">
                {elzuzzatData.summary}
              </p>
            </div>

            {/* Audience Stats Grid */}
            <div className="p-8 rounded-3xl bg-noir-card border border-white/10 space-y-6">
              <div className="flex items-baseline justify-between border-b border-white/10 pb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-ivory/60">
                  {elzuzzatData.audience.label}
                </span>
                <span className="text-3xl sm:text-5xl font-serif font-bold text-gold-300">
                  {elzuzzatData.audience.total}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {elzuzzatData.audience.platforms.map((p) => (
                  <div key={p.name} className="p-4 rounded-xl bg-noir-elevated border border-white/5">
                    <span className="text-xs font-mono text-gold-400 block mb-1">{p.name}</span>
                    <span className="text-2xl font-serif font-semibold text-ivory block mb-1">{p.followers}</span>
                    <p className="text-[11px] text-ivory-muted/60 font-light">{p.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Core Strengths */}
        <div>
          <div className="mb-10">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold-400 block mb-2">
              Competitive Edge
            </span>
            <h3 className="text-2xl sm:text-4xl font-serif text-ivory">
              Distinctive Capabilities
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {elzuzzatData.strengths.map((str) => (
              <div
                key={str.title}
                className="p-6 rounded-2xl bg-noir-card border border-white/5 hover:border-gold-500/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <h4 className="font-serif text-lg text-ivory mb-2 font-medium">
                    {str.title}
                  </h4>
                  <p className="text-xs sm:text-sm font-light text-ivory-muted/70 leading-relaxed">
                    {str.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hospitality Highlight — Blue View Cafe */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-noir-card via-noir-elevated to-noir border border-gold-500/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <Coffee className="w-5 h-5 text-gold-400" />
                <span className="px-3 py-1 rounded-full text-xs font-mono tracking-widest uppercase bg-gold-500/10 text-gold-300 border border-gold-500/30">
                  {elzuzzatData.hospitality.badge}
                </span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-serif text-ivory">
                {elzuzzatData.hospitality.title}
              </h3>
              <p className="text-base text-ivory-muted/90 font-light leading-relaxed">
                {elzuzzatData.hospitality.description}
              </p>
            </div>

            <div className="lg:col-span-5 space-y-3">
              {elzuzzatData.hospitality.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-ivory/80">
                  <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Work — Elzuzzat */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold-400 block mb-2">
                Portfolio Showcase
              </span>
              <h3 className="text-2xl sm:text-4xl font-serif text-ivory">
                Elzuzzat Featured Work
              </h3>
            </div>
            <p className="text-xs font-mono text-ivory/50">
              Click to view project details
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {elzuzzatData.works.map((work) => (
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
