import React from 'react';
import { MediaItem } from '../../types/presentation';
import { elhaganData } from '../../data/elhaganData';
import { salamData } from '../../data/salamData';
import { fiveRoostersData } from '../../data/fiveRoostersData';
import { elzuzzatData } from '../../data/elzuzzatData';
import { promediaData } from '../../data/promediaData';
import { 
  Play, Eye, Sparkles, ExternalLink, Coffee, 
  Tv, Film, Globe, Users, UtensilsCrossed 
} from 'lucide-react';

interface VIVEcosystemTeamSectionProps {
  onOpenLightbox: (media: MediaItem) => void;
  onOpenVideo: (media: MediaItem) => void;
}

const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const TEAM_PILLARS = [
  {
    name: 'AHMED HASSAN SELIM',
    role: 'Restaurant Operations',
    pillar: 'OPERATIONS',
    affiliation: 'CEO & Co-Founder — 5 Roosters',
    image: '/assets/five-roosters/ahmed-hassan-portrait.jpg'
  },
  {
    name: 'MOHAMED SALAM',
    role: 'Entertainment & Visibility',
    pillar: 'AUDIENCE',
    affiliation: 'Acclaimed Pan-Arab Actor',
    image: '/assets/salam/mohamed-salam-portrait.jpg'
  },
  {
    name: 'ELZUZZAT (MAZEN & MOAZ)',
    role: 'Business & Hospitality',
    pillar: 'BUSINESS',
    affiliation: 'Elzuzzat / Blue View Cafe (+9.7M Community)',
    image: '/assets/elzuzzat/elzuzzat-portrait.jpg'
  },
  {
    name: 'MOHAMED ELHAGAN',
    role: 'Brand & Marketing',
    pillar: 'MARKETING',
    affiliation: 'Founder & CEO — ProMedia',
    image: '/assets/elhagan/mohamed-elhagan-portrait.jpg'
  }
];

export const VIVEcosystemTeamSection: React.FC<VIVEcosystemTeamSectionProps> = ({
  onOpenLightbox,
  onOpenVideo
}) => {
  return (
    <section id="team-ecosystem" className="py-24 sm:py-36 px-4 sm:px-8 lg:px-16 bg-viv-burgundy-deep text-viv-cream relative">
      <div className="max-w-7xl mx-auto space-y-32">
        {/* ===================================================
            01 — THE TEAM OVERVIEW
        =================================================== */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-viv-yellow font-bold block mb-3">
              The Founding Coalition
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-viv-cream font-normal leading-tight">
              The People Behind VIV
            </h2>
            <p className="mt-4 text-base sm:text-lg text-viv-cream-soft font-light">
              Four distinct industry strengths united in service of building a national 50-location croissant brand.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM_PILLARS.map((m) => (
              <div
                key={m.name}
                className="p-6 rounded-3xl bg-viv-burgundy-dark/90 border border-viv-yellow/20 hover:border-viv-yellow/60 transition-all flex flex-col justify-between group shadow-lg"
              >
                <div>
                  <div
                    onClick={() => onOpenLightbox({
                      id: `team-${m.name}`,
                      type: 'image',
                      title: m.name,
                      subtitle: `${m.pillar} · ${m.role}`,
                      src: m.image,
                      caption: m.affiliation
                    })}
                    className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4 bg-viv-chocolate border border-white/10 cursor-pointer"
                  >
                    <img
                      src={m.image}
                      alt={m.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-viv-burgundy-deep via-transparent to-transparent opacity-60" />
                    <div className="absolute top-2 right-2 p-1.5 rounded-full bg-black/60 backdrop-blur-md text-viv-yellow opacity-0 group-hover:opacity-100 transition-opacity">
                      <Eye className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded bg-viv-yellow/20 text-viv-yellow border border-viv-yellow/40 inline-block mb-2 font-bold">
                    {m.pillar}
                  </span>
                  <h4 className="text-lg font-serif text-viv-cream font-medium mb-1">
                    {m.name}
                  </h4>
                  <p className="text-xs font-mono text-viv-yellow/90 mb-2">
                    {m.role}
                  </p>
                </div>
                <div className="pt-3 border-t border-viv-yellow/15 text-[11px] font-mono text-viv-cream/60">
                  {m.affiliation}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 rounded-2xl bg-viv-burgundy/60 border border-viv-yellow/20 text-center max-w-3xl mx-auto">
            <p className="text-sm font-serif italic text-viv-cream">
              “Operations + Hospitality + Audience + Marketing = <strong className="text-viv-yellow font-semibold">A Complete Ecosystem Around VIV.</strong>”
            </p>
          </div>
        </div>

        {/* ===================================================
            02 — ENG. AHMED HASSAN SELIM + 5 ROOSTERS
        =================================================== */}
        <div className="p-8 sm:p-14 rounded-3xl bg-viv-burgundy-dark border border-viv-yellow/20 shadow-2xl space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-4">
              <div
                onClick={() => onOpenLightbox({
                  id: 'ahmed-hassan-portrait-team',
                  type: 'image',
                  title: fiveRoostersData.founder.name,
                  subtitle: `${fiveRoostersData.founder.title} — ${fiveRoostersData.founder.company}`,
                  src: fiveRoostersData.founder.portrait,
                  caption: 'Operations Mastermind · Kitchen Engineering & Scaling'
                })}
                className="relative aspect-[3/4] rounded-2xl overflow-hidden border-2 border-viv-yellow/30 bg-viv-chocolate cursor-pointer group shadow-xl"
              >
                <img
                  src={fiveRoostersData.founder.portrait}
                  alt={fiveRoostersData.founder.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-3 right-3 p-2 rounded-full bg-black/60 text-viv-yellow">
                  <Eye className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-viv-yellow block mb-1 font-bold">
                  Restaurant Operations & Scaling Lead
                </span>
                <h3 className="text-2xl sm:text-4xl font-serif text-viv-cream">
                  {fiveRoostersData.founder.name}
                </h3>
                <p className="text-sm font-mono text-viv-yellow uppercase font-semibold">
                  {fiveRoostersData.founder.title} — {fiveRoostersData.founder.company}
                </p>
              </div>

              <p className="text-base text-viv-cream-soft font-light leading-relaxed">
                {fiveRoostersData.founder.bio}
              </p>

              <div className="flex flex-wrap gap-4 pt-2 text-xs font-mono text-viv-cream/80">
                <span>✓ Multi-Store Operating Systems</span>
                <span>✓ Commissary Scaling</span>
                <span>✓ Quality Control</span>
              </div>
            </div>
          </div>

          {/* Dedicated 5 Roosters Subsection */}
          <div className="pt-8 border-t border-viv-yellow/20">
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-mono uppercase tracking-widest text-viv-yellow font-bold">
                5 Roosters Fried Chicken Brand
              </span>
              <span className="text-xs font-mono text-viv-cream/50">
                “We Crust, You Crunch”
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              {/* 5 Roosters Brand Logo & Links */}
              <div className="md:col-span-5 space-y-3">
                <div 
                  onClick={() => onOpenLightbox({
                    id: 'five-roosters-brand-contained',
                    type: 'image',
                    title: '5 Roosters Fried Chicken',
                    subtitle: 'WE CRUST, YOU CRUNCH',
                    src: fiveRoostersData.brand.image,
                    caption: '5 Roosters Fried Chicken — Fast-casual operations powerhouse'
                  })}
                  className="relative aspect-video rounded-2xl overflow-hidden shadow-xl border border-viv-yellow/20 bg-viv-chocolate cursor-pointer group hover:scale-[1.02] transition-transform"
                >
                  <img
                    src={fiveRoostersData.brand.image}
                    alt="5 Roosters Brand"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-xs font-mono text-viv-yellow font-bold">5 Roosters Official Logo</span>
                  </div>
                </div>
                <div className="flex items-center justify-between px-1">
                  <a
                    href="https://www.instagram.com/reel/DHZHs-JSv4z/?stkn=ZzR4MTZpcWh0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-viv-yellow hover:underline"
                  >
                    <InstagramIcon className="w-3.5 h-3.5" />
                    <span>5 Roosters Instagram</span>
                    <ExternalLink className="w-3 h-3 opacity-70" />
                  </a>
                  <span className="text-[11px] font-mono text-viv-cream/50">Culinary Operations</span>
                </div>
              </div>

              {/* 5 Roosters Direct Embedded Video Player */}
              <div className="md:col-span-7 space-y-3">
                <div>
                  <h4 className="text-xl font-serif text-viv-cream mb-1">
                    5 Roosters Culinary Operations Video
                  </h4>
                  <p className="text-xs sm:text-sm text-viv-cream-soft/80 font-light leading-relaxed">
                    {fiveRoostersData.brand.description}
                  </p>
                </div>

                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border-2 border-viv-yellow/30 bg-black">
                  <video
                    src="/assets/five-roosters/five-roosters-video.mp4"
                    poster="/assets/five-roosters/five-roosters-brand.jpg"
                    controls
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===================================================
            03 — MOHAMED SALAM + SELECTED WORK VIDEO
        =================================================== */}
        <div className="p-8 sm:p-14 rounded-3xl bg-viv-burgundy-dark border border-viv-yellow/20 shadow-2xl space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-4">
              <div
                onClick={() => onOpenLightbox({
                  id: 'salam-portrait-team',
                  type: 'image',
                  title: salamData.name,
                  subtitle: salamData.title,
                  src: salamData.portrait,
                  caption: 'Acclaimed Pan-Arab Actor · Cinema, Television & Theatre'
                })}
                className="relative aspect-[3/4] rounded-2xl overflow-hidden border-2 border-viv-yellow/30 bg-viv-chocolate cursor-pointer group shadow-xl"
              >
                <img
                  src={salamData.portrait}
                  alt={salamData.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-3 right-3 p-2 rounded-full bg-black/60 text-viv-yellow">
                  <Eye className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-viv-yellow block mb-1 font-bold">
                  Entertainment & Cultural Visibility Lead
                </span>
                <h3 className="text-2xl sm:text-4xl font-serif text-viv-cream">
                  {salamData.name}
                </h3>
                <p className="text-sm font-mono text-viv-cream/70 uppercase">
                  {salamData.title}
                </p>
              </div>

              <p className="text-base text-viv-cream-soft font-light leading-relaxed">
                {salamData.bio}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="https://www.instagram.com/p/Dc6zLHcxQyN/?stkn=YWN2OW1tZHdiODZ0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-viv-yellow/15 hover:bg-viv-yellow/25 text-viv-yellow border border-viv-yellow/30 text-xs font-mono transition-colors"
                >
                  <InstagramIcon className="w-4 h-4" />
                  <span>Mohamed Salam Instagram</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>
              </div>

              <div className="flex flex-wrap gap-4 pt-1 text-xs font-mono text-viv-cream/80">
                <span>✓ El Kabeer Awy</span>
                <span>✓ Karset Tabeia (WATCH IT Lead)</span>
                <span>✓ 20+ Landmark Egyptian Feature Films</span>
              </div>
            </div>
          </div>

          {/* Dedicated Selected Work Video Player */}
          <div className="pt-8 border-t border-viv-yellow/20">
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-mono uppercase tracking-widest text-viv-yellow font-bold">
                Selected Work Video
              </span>
              <span className="text-xs font-mono text-viv-cream/50">
                Official Cinematic Reel
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 space-y-4">
                <h4 className="text-xl font-serif text-viv-cream font-medium">
                  Mohamed Salam — Selected Works & Highlights
                </h4>
                <p className="text-xs sm:text-sm text-viv-cream-soft/80 font-light leading-relaxed">
                  Curated highlight of Mohamed Salam's landmark cinematic and dramatic achievements across Egyptian television and cinema.
                </p>
                <div className="pt-2">
                  <a
                    href="https://youtu.be/szOPQ44Cllg?si=MJHN8l_z0vjmGlf4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-viv-yellow border border-viv-yellow/30 text-xs font-mono transition-colors"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Watch on YouTube</span>
                    <ExternalLink className="w-3 h-3 opacity-70" />
                  </a>
                </div>
              </div>

              <div className="md:col-span-7">
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border-2 border-viv-yellow/30 bg-black">
                  <iframe
                    src="https://www.youtube.com/embed/szOPQ44Cllg?rel=0"
                    title="Mohamed Salam — Selected Works"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===================================================
            04 — BLUE VIEW / ELZUZZAT (MAZEN & MOAZ)
        =================================================== */}
        <div className="p-8 sm:p-14 rounded-3xl bg-viv-burgundy-dark border border-viv-yellow/20 shadow-2xl space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-4">
              <div
                onClick={() => onOpenLightbox({
                  id: 'elzuzzat-portrait-team',
                  type: 'image',
                  title: elzuzzatData.subtitle,
                  subtitle: 'Elzuzzat (+9.7M Followers)',
                  src: elzuzzatData.portrait,
                  caption: 'Mazen and Moaz El-Zoz — Creators, Influencers & Hospitality Founders'
                })}
                className="relative aspect-[3/4] rounded-2xl overflow-hidden border-2 border-viv-yellow/30 bg-viv-chocolate cursor-pointer group shadow-xl"
              >
                <img
                  src={elzuzzatData.portrait}
                  alt={elzuzzatData.subtitle}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-3 right-3 p-2 rounded-full bg-black/60 text-viv-yellow">
                  <Eye className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-viv-yellow block mb-1 font-bold">
                  Business & Hospitality Ecosystem
                </span>
                <h3 className="text-2xl sm:text-4xl font-serif text-viv-cream">
                  {elzuzzatData.headline}
                </h3>
                <p className="text-sm font-mono text-viv-cream/70 uppercase">
                  {elzuzzatData.subtitle} · +9.7M Combined Community
                </p>
              </div>

              <p className="text-base text-viv-cream-soft font-light leading-relaxed">
                {elzuzzatData.summary}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="https://www.instagram.com/p/DS8iPn-DMBX/?img_index=9&stkn=MTAwamNjNWRjMmhyeA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-viv-yellow/15 hover:bg-viv-yellow/25 text-viv-yellow border border-viv-yellow/30 text-xs font-mono transition-colors"
                >
                  <InstagramIcon className="w-4 h-4" />
                  <span>Elzuzzat Instagram (+9.7M Community)</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>
              </div>

              <div className="flex flex-wrap gap-4 pt-1 text-xs font-mono text-viv-cream/80">
                <span>TikTok: 3.7M</span>
                <span>Facebook: 4.6M</span>
                <span>Instagram: 1.4M</span>
              </div>
            </div>
          </div>

          {/* Dedicated Blue View Subsection with Official Logo & Embedded Video Player */}
          <div className="pt-8 border-t border-viv-yellow/20">
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-mono uppercase tracking-widest text-viv-yellow font-bold">
                Hospitality Portfolio: Blue View Cafe
              </span>
              <span className="text-xs font-mono text-viv-cream/50">
                Physical Hospitality Concept
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              {/* Official Blue View Brand Logo & Links */}
              <div className="md:col-span-5 space-y-3">
                <div 
                  onClick={() => onOpenLightbox({
                    id: 'blue-view-brand-contained',
                    type: 'image',
                    title: 'Blue View Cafe & Restaurant',
                    subtitle: 'Official Hospitality Brand Logo',
                    src: '/assets/elzuzzat/blue-view-logo.jpg',
                    caption: 'Blue View Cafe and Restaurant — Nile View Hospitality Destination'
                  })}
                  className="relative aspect-video rounded-2xl overflow-hidden shadow-xl border border-viv-yellow/20 bg-viv-chocolate cursor-pointer group hover:scale-[1.02] transition-transform"
                >
                  <img
                    src="/assets/elzuzzat/blue-view-logo.jpg"
                    alt="Blue View Cafe Official Logo"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-xs font-mono text-viv-yellow font-bold">Blue View Official Logo</span>
                  </div>
                </div>
                <div className="flex items-center justify-between px-1">
                  <a
                    href="https://www.instagram.com/reel/DdLo3hgtetO/?stkn=MWYzazdkbWUxNnF0eQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-viv-yellow hover:underline"
                  >
                    <InstagramIcon className="w-3.5 h-3.5" />
                    <span>Blue View Cafe Instagram</span>
                    <ExternalLink className="w-3 h-3 opacity-70" />
                  </a>
                  <span className="text-[11px] font-mono text-viv-cream/50">Nile Corniche</span>
                </div>
              </div>

              {/* Blue View Direct Embedded Video Player */}
              <div className="md:col-span-7 space-y-3">
                <div>
                  <h4 className="text-xl font-serif text-viv-cream mb-1">
                    Blue View Hospitality Experience
                  </h4>
                  <p className="text-xs sm:text-sm text-viv-cream-soft/80 font-light leading-relaxed">
                    {elzuzzatData.hospitality.description}
                  </p>
                </div>

                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border-2 border-viv-yellow/30 bg-black">
                  <video
                    src="/assets/elzuzzat/blue-view-video.mp4"
                    poster="/assets/elzuzzat/blue-view-logo.jpg"
                    controls
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===================================================
            05 — MOHAMED ELHAGAN + PROMEDIA
        =================================================== */}
        <div className="p-8 sm:p-14 rounded-3xl bg-viv-burgundy-dark border border-viv-yellow/20 shadow-2xl space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-4">
              <div
                onClick={() => onOpenLightbox({
                  id: 'elhagan-portrait-team',
                  type: 'image',
                  title: elhaganData.name,
                  subtitle: `${elhaganData.title} — ${elhaganData.companyRole}`,
                  src: elhaganData.portrait,
                  caption: '20+ Years in Media Production · Creative Director & Founder'
                })}
                className="relative aspect-square rounded-2xl overflow-hidden border-2 border-viv-yellow/30 bg-viv-chocolate cursor-pointer group shadow-xl"
              >
                <img
                  src={elhaganData.portrait}
                  alt={elhaganData.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-3 right-3 p-2 rounded-full bg-black/60 text-viv-yellow">
                  <Eye className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-viv-yellow block mb-1 font-bold">
                  Brand, Production & Marketing Lead
                </span>
                <h3 className="text-2xl sm:text-4xl font-serif text-viv-cream">
                  {elhaganData.name}
                </h3>
                <p className="text-sm font-mono text-viv-cream/70 uppercase">
                  {elhaganData.title} · {elhaganData.companyRole}
                </p>
              </div>

              <p className="text-base text-viv-cream-soft font-light leading-relaxed">
                {elhaganData.bio}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="https://www.instagram.com/p/Dc6zLHcxQyN/?stkn=YWN2OW1tZHdiODZ0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-viv-yellow/15 hover:bg-viv-yellow/25 text-viv-yellow border border-viv-yellow/30 text-xs font-mono transition-colors"
                >
                  <InstagramIcon className="w-4 h-4" />
                  <span>Mohamed Elhagan Instagram</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>
              </div>

              <div className="flex flex-wrap gap-4 pt-1 text-xs font-mono text-viv-yellow/80">
                <span>✓ 20+ Years Experience</span>
                <span>✓ 1B+ Views</span>
                <span>✓ Directing Across 5 Countries</span>
              </div>
            </div>
          </div>

          {/* Dedicated Contained ProMedia Subsection */}
          <div className="pt-8 border-t border-viv-yellow/20">
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-mono uppercase tracking-widest text-viv-yellow font-bold">
                Supporting Creative & Production House
              </span>
              <span className="text-xs font-mono text-viv-cream/50">
                Ecosystem Partner
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              {/* ProMedia Clean White Logo Box & Links */}
              <div className="md:col-span-5 space-y-3">
                <div 
                  onClick={() => onOpenLightbox({
                    id: 'promedia-logo-contained',
                    type: 'image',
                    title: 'ProMedia Production House',
                    subtitle: 'Official Brand Identity',
                    src: '/assets/promedia/pro-media-logo.png',
                    caption: 'Make your vision PRO — Leading production house in Egypt, France & USA'
                  })}
                  className="p-8 bg-white rounded-2xl shadow-xl border border-white/20 flex flex-col items-center justify-center cursor-pointer group hover:scale-[1.02] transition-transform aspect-[16/10]"
                >
                  <img
                    src="/assets/promedia/pro-media-logo.png"
                    alt="ProMedia Logo"
                    className="w-full max-w-[200px] h-auto object-contain"
                  />
                  <span className="text-[10px] font-mono text-noir/60 uppercase mt-4 tracking-widest flex items-center gap-1 font-semibold">
                    <span>View Brand Asset</span>
                    <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
                <div className="flex items-center justify-between px-1">
                  <a
                    href="https://www.instagram.com/p/Dc6zLHcxQyN/?stkn=YWN2OW1tZHdiODZ0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-viv-yellow hover:underline"
                  >
                    <InstagramIcon className="w-3.5 h-3.5" />
                    <span>ProMedia Instagram</span>
                    <ExternalLink className="w-3 h-3 opacity-70" />
                  </a>
                  <span className="text-[11px] font-mono text-viv-cream/50">pro-media.tv</span>
                </div>
              </div>

              {/* ProMedia Direct Embedded Video Player */}
              <div className="md:col-span-7 space-y-3">
                <div>
                  <h4 className="text-xl font-serif text-viv-cream mb-1">
                    ProMedia Production Capabilities
                  </h4>
                  <p className="text-xs sm:text-sm text-viv-cream-soft/80 font-light leading-relaxed">
                    {promediaData.shortDescription}
                  </p>
                </div>

                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border-2 border-viv-yellow/30 bg-black">
                  <video
                    src="/assets/promedia/promedia-promo-video.mp4"
                    poster="/assets/promedia/pro-media-logo.png"
                    controls
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
