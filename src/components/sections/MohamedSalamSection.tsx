import React, { useState } from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { salamData } from '../../data/salamData';
import { MediaItem, FeaturedWork } from '../../types/presentation';
import { Film, Tv, Theater, Sparkles, Eye, ArrowRight, Star, Calendar, Clapperboard } from 'lucide-react';

interface MohamedSalamSectionProps {
  onOpenLightbox: (media: MediaItem) => void;
  onOpenFeaturedWork: (work: FeaturedWork) => void;
}

export const MohamedSalamSection: React.FC<MohamedSalamSectionProps> = ({
  onOpenLightbox,
  onOpenFeaturedWork
}) => {
  const [activeTab, setActiveTab] = useState<'film' | 'television' | 'theatre'>('television');

  return (
    <section id="salam" className="py-24 sm:py-36 px-4 sm:px-8 lg:px-16 bg-noir-rich border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto space-y-28">
        {/* Chapter Header */}
        <SectionHeader
          numeral="05"
          category="Cinema & Cultural Entertainment"
          title={salamData.name}
          subtitle={salamData.title}
        />

        {/* Narrative & Real Approved Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Portrait */}
          <div className="lg:col-span-5">
            <div
              onClick={() => onOpenLightbox({
                id: 'salam-portrait',
                type: 'image',
                title: salamData.name,
                subtitle: salamData.title,
                src: salamData.portrait,
                caption: 'Acclaimed Pan-Arab Actor · Cinema, Drama & Stage'
              })}
              className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-noir-card cursor-pointer group"
            >
              <img
                src={salamData.portrait}
                alt={salamData.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-noir via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-6 inset-x-6 flex items-center justify-between text-xs font-mono text-ivory">
                <span className="font-semibold text-gold-300">Mohamed Salam</span>
                <span className="text-gold-400 flex items-center gap-1">
                  <Eye className="w-3.5 h-3.5" />
                  Expand Portrait
                </span>
              </div>
            </div>

            <div className="mt-4 p-5 rounded-xl bg-noir-card border border-white/10 text-xs font-mono text-ivory/70 space-y-1">
              <div>Birth: <strong className="text-ivory">{salamData.background.birthYear} — {salamData.background.birthPlace}</strong></div>
              <div>Faculty: <strong className="text-ivory">{salamData.background.education}</strong></div>
            </div>
          </div>

          {/* Bio & Origins */}
          <div className="lg:col-span-7 space-y-8">
            <p className="text-xl sm:text-2xl font-serif text-ivory font-light leading-relaxed">
              “{salamData.bio}”
            </p>

            <div className="p-8 rounded-3xl bg-noir-card border border-gold-500/20 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-gold-400 block">
                Artistic Genesis
              </span>
              <p className="text-sm sm:text-base text-ivory-muted/90 font-light leading-relaxed">
                {salamData.background.artisticRoots}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
                {salamData.background.debuts.map((d) => (
                  <div key={d.work} className="p-4 rounded-xl bg-noir-elevated border border-white/5">
                    <span className="text-xs font-mono text-gold-400">{d.year} · {d.role}</span>
                    <h5 className="font-serif text-lg text-ivory mt-1">{d.work}</h5>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Milestone Lead Spotlight: Karset Tabeia */}
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-br from-noir-card via-noir-elevated to-noir border border-gold-500/40">
          <div className="max-w-4xl space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3.5 py-1.5 rounded-full bg-gold-500 text-noir font-mono text-xs font-bold uppercase tracking-wider">
                {salamData.leadSpotlight.tag}
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-white/10 text-ivory font-mono text-xs uppercase tracking-wider border border-white/10">
                {salamData.leadSpotlight.platform}
              </span>
              <span className="text-xs font-mono text-gold-300 font-semibold flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {salamData.leadSpotlight.premiereDate}
              </span>
            </div>

            <h3 className="text-3xl sm:text-5xl font-serif text-ivory font-normal">
              {salamData.leadSpotlight.title}
            </h3>

            <p className="text-lg text-ivory-muted/90 font-light leading-relaxed">
              {salamData.leadSpotlight.summary}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10 text-xs font-mono">
              <div>
                <span className="text-ivory/50 block mb-1">Lead Character</span>
                <span className="text-gold-300 font-serif text-base">{salamData.leadSpotlight.character}</span>
              </div>
              <div>
                <span className="text-ivory/50 block mb-1">Writer & Director</span>
                <span className="text-ivory font-serif text-sm">
                  {salamData.leadSpotlight.credits.writer} · Dir. {salamData.leadSpotlight.credits.director}
                </span>
              </div>
              <div>
                <span className="text-ivory/50 block mb-1">Co-Starring Cast</span>
                <span className="text-ivory/80 text-xs leading-relaxed block">
                  {salamData.leadSpotlight.credits.coStars.join(', ')}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Selected Filmography Tabs */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold-400 block mb-2">
                Curated Works
              </span>
              <h3 className="text-2xl sm:text-4xl font-serif text-ivory">
                Filmography & Theatre
              </h3>
            </div>

            {/* Tabs */}
            <div className="flex items-center gap-2 bg-noir-card p-1.5 rounded-full border border-white/10">
              <button
                onClick={() => setActiveTab('television')}
                className={`px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                  activeTab === 'television' ? 'bg-gold-500 text-noir font-bold' : 'text-ivory/70 hover:text-white'
                }`}
              >
                Television ({salamData.filmography.television.length})
              </button>
              <button
                onClick={() => setActiveTab('film')}
                className={`px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                  activeTab === 'film' ? 'bg-gold-500 text-noir font-bold' : 'text-ivory/70 hover:text-white'
                }`}
              >
                Cinema ({salamData.filmography.film.length})
              </button>
              <button
                onClick={() => setActiveTab('theatre')}
                className={`px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                  activeTab === 'theatre' ? 'bg-gold-500 text-noir font-bold' : 'text-ivory/70 hover:text-white'
                }`}
              >
                Theatre ({salamData.filmography.theatre.length})
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {salamData.filmography[activeTab].map((work) => (
              <div
                key={work}
                className="p-4 rounded-xl bg-noir-card border border-white/5 hover:border-gold-500/30 transition-colors"
              >
                <span className="font-serif text-sm sm:text-base text-ivory/90 block">
                  {work}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Work — Mohamed Salam */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold-400 block mb-2">
                Portfolio Showcase
              </span>
              <h3 className="text-2xl sm:text-4xl font-serif text-ivory">
                Featured Acting Milestones
              </h3>
            </div>
            <p className="text-xs font-mono text-ivory/50">
              Click to view project details
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {salamData.works.map((work) => (
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
                  {work.clientOrRole && (
                    <p className="text-xs font-sans text-gold-400/80 mb-3 uppercase tracking-wider">
                      {work.clientOrRole}
                    </p>
                  )}
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
