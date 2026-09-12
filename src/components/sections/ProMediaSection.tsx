import React, { useState } from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { promediaData } from '../../data/promediaData';
import { MediaItem, FeaturedWork } from '../../types/presentation';
import { 
  Tv, Film, Sparkles, Radio, Users, Video, 
  GraduationCap, Globe, Phone, Mail, MapPin, 
  Building2, CheckCircle2, ArrowRight, Play, ExternalLink
} from 'lucide-react';

interface ProMediaSectionProps {
  onOpenLightbox: (media: MediaItem) => void;
  onOpenFeaturedWork: (work: FeaturedWork) => void;
}

const SERVICE_ICONS = [
  Tv, Sparkles, Radio, Film, Video, Users, Video, GraduationCap
];

export const ProMediaSection: React.FC<ProMediaSectionProps> = ({
  onOpenLightbox,
  onOpenFeaturedWork
}) => {
  const [selectedClientCategory, setSelectedClientCategory] = useState<number>(0);

  return (
    <section id="promedia" className="py-24 sm:py-36 px-4 sm:px-8 lg:px-16 bg-noir border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto">
        {/* Chapter Header */}
        <SectionHeader
          numeral="01"
          category="Production & Creative Foundation"
          title="ProMedia Production House"
          subtitle="The creative and cinematic engine driving premier commercial broadcasts, cultural documentaries, and high-impact digital IP."
        />

        {/* Hero Narrative Block with Padded White Logo Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
          {/* Logo Showcase with Generous Clean White Padding as instructed */}
          <div className="lg:col-span-5">
            <div 
              onClick={() => onOpenLightbox({
                id: 'promedia-logo-modal',
                type: 'image',
                title: 'ProMedia Production House',
                subtitle: 'Official Brand Identity',
                src: '/assets/promedia/pro-media-logo.png',
                caption: 'Make your vision PRO — Middle East · Europe · USA'
              })}
              className="relative p-10 sm:p-14 bg-white rounded-2xl shadow-2xl border border-white/20 flex flex-col items-center justify-center cursor-pointer group transition-all duration-300 hover:shadow-gold-500/10"
            >
              <img
                src="/assets/promedia/pro-media-logo.png"
                alt="ProMedia Logo"
                className="w-full max-w-[260px] h-auto object-contain transition-transform duration-500 group-hover:scale-105"
              />
              <span className="mt-6 text-[11px] font-mono tracking-widest text-noir/60 uppercase flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Click to view brand asset</span>
                <ExternalLink className="w-3 h-3" />
              </span>
            </div>

            {/* Tagline Card */}
            <div className="mt-6 p-6 rounded-2xl bg-noir-card border border-white/10">
              <span className="text-xs font-mono uppercase tracking-widest text-gold-400 block mb-1">
                Official Tagline
              </span>
              <p className="text-2xl sm:text-3xl font-serif text-ivory tracking-wide font-normal italic">
                “{promediaData.tagline}”
              </p>
            </div>
          </div>

          {/* Description & Scale */}
          <div className="lg:col-span-7 space-y-8">
            <p className="text-xl sm:text-2xl font-serif text-ivory font-light leading-relaxed">
              “{promediaData.shortDescription}”
            </p>

            {/* Scale Milestone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
              <div className="p-6 rounded-xl bg-noir-card border border-gold-500/20">
                <span className="text-3xl sm:text-4xl font-serif font-semibold text-gold-300 block">
                  {promediaData.scale.creatorsManaged}
                </span>
                <p className="text-xs font-mono uppercase tracking-wider text-ivory/70 mt-2">
                  {promediaData.scale.creatorsDescription}
                </p>
              </div>

              <div className="p-6 rounded-xl bg-noir-card border border-white/10">
                <span className="text-3xl sm:text-4xl font-serif font-semibold text-ivory block">
                  3 Continents
                </span>
                <p className="text-xs font-mono uppercase tracking-wider text-ivory/70 mt-2">
                  Integrated active production hubs across Egypt, France & USA
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 08 Core Services — Editorial Split */}
        <div className="mb-28">
          <div className="mb-10">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold-400 block mb-2">
              Capabilities & Offerings
            </span>
            <h3 className="text-2xl sm:text-4xl font-serif text-ivory">
              Approved Production Services
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {promediaData.services.map((srv, index) => {
              const IconComp = SERVICE_ICONS[index % SERVICE_ICONS.length];
              return (
                <div
                  key={srv.title}
                  className="p-6 rounded-xl bg-noir-card border border-white/10 hover:border-gold-500/40 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-gold-500/10 border border-gold-500/20 text-gold-300 flex items-center justify-center mb-4 group-hover:bg-gold-500 group-hover:text-noir transition-colors">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h4 className="text-lg font-serif text-ivory mb-2 font-medium">
                      {srv.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-ivory-muted/70 font-light leading-relaxed">
                      {srv.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Prestigious Client Roster */}
        <div className="mb-28 p-8 sm:p-12 rounded-3xl bg-noir-card border border-white/10">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold-400 block mb-2">
              Trusted By Global Leaders
            </span>
            <h3 className="text-2xl sm:text-4xl font-serif text-ivory">
              Prestige Client Network
            </h3>
          </div>

          {/* Client category selector tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {promediaData.clientCategories.map((cat, idx) => (
              <button
                key={cat.category}
                onClick={() => setSelectedClientCategory(idx)}
                className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all ${
                  selectedClientCategory === idx
                    ? 'bg-gold-500 text-noir font-bold'
                    : 'bg-white/5 text-ivory/70 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>

          {/* Active Category Brands Display */}
          <div className="p-6 sm:p-8 rounded-2xl bg-noir-elevated border border-white/5">
            <p className="text-sm font-light text-ivory-muted/80 mb-6">
              {promediaData.clientCategories[selectedClientCategory].description}
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {promediaData.clientCategories[selectedClientCategory].clients.map((client) => (
                <div
                  key={client}
                  className="px-5 py-3 rounded-xl bg-noir border border-gold-500/20 text-ivory font-serif text-base sm:text-lg tracking-wide hover:border-gold-500/50 hover:bg-gold-500/5 transition-all shadow-sm"
                >
                  {client}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Creators & Personalities */}
        <div className="mb-28">
          <div className="mb-10">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold-400 block mb-2">
              Talent & Cultural Influence
            </span>
            <h3 className="text-2xl sm:text-4xl font-serif text-ivory">
              Renowned Creators & Personalities
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {promediaData.creators.map((creator) => (
              <div
                key={creator.name}
                className="p-5 rounded-xl bg-noir-card border border-white/10 hover:border-gold-500/30 transition-colors"
              >
                <h5 className="font-serif text-lg text-ivory font-medium">
                  {creator.name}
                </h5>
                <p className="text-xs font-mono text-gold-300 mt-1 uppercase tracking-wider">
                  {creator.role}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Work — ProMedia */}
        <div className="mb-28">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold-400 block mb-2">
                Portfolio Showcase
              </span>
              <h3 className="text-2xl sm:text-4xl font-serif text-ivory">
                ProMedia Featured Work
              </h3>
            </div>
            <p className="text-xs font-mono text-ivory/50">
              Click any project to inspect full production credits
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {promediaData.works.map((work) => (
              <div
                key={work.id}
                onClick={() => onOpenFeaturedWork(work)}
                className="p-6 rounded-2xl bg-noir-card border border-white/10 hover:border-gold-500/50 transition-all duration-300 cursor-pointer flex flex-col justify-between group hover:shadow-xl hover:shadow-gold-500/5"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono uppercase tracking-widest px-2.5 py-1 rounded bg-gold-500/10 text-gold-300 border border-gold-500/20">
                      {work.category}
                    </span>
                    <ArrowRight className="w-4 h-4 text-ivory/40 group-hover:text-gold-400 group-hover:translate-x-1 transition-all" />
                  </div>
                  <h4 className="text-xl font-serif text-ivory mb-2 group-hover:text-gold-200 transition-colors">
                    {work.title}
                  </h4>
                  {work.clientOrRole && (
                    <p className="text-xs font-sans text-gold-400/80 mb-3 uppercase tracking-wider">
                      {work.clientOrRole}
                    </p>
                  )}
                  <p className="text-xs sm:text-sm text-ivory-muted/70 font-light line-clamp-3">
                    {work.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono text-ivory/50">
                  <span>View Details</span>
                  <span className="text-gold-400">Production Specs →</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Global Hubs & Contact Footprint */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-noir-card to-noir-elevated border border-gold-500/20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {promediaData.contact.locations.map((loc) => (
              <div key={loc.country} className="space-y-3">
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-gold-400" />
                  <span className="font-serif text-xl text-ivory font-medium">
                    {loc.country}
                  </span>
                </div>
                <div className="flex items-start gap-2 text-xs font-sans text-ivory/70">
                  <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                  <span>{loc.address}</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-gold-300">
                  <Phone className="w-3.5 h-3.5 text-gold-400" />
                  <span>{loc.phone}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-ivory/60">
            <div className="flex items-center gap-4">
              <span>Web: <strong className="text-ivory">{promediaData.contact.website}</strong></span>
              <span>Email: <strong className="text-ivory">{promediaData.contact.email}</strong></span>
            </div>
            <span className="text-gold-400">ProMedia Global Production Network</span>
          </div>
        </div>
      </div>
    </section>
  );
};
