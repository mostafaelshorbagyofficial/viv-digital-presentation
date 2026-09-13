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

const TEAM_PILLARS = [
  {
    name: 'AHMED HASSAN',
    role: 'Restaurant Operations',
    pillar: 'OPERATIONS',
    affiliation: 'CEO & Co-Founder — 5 Roosters',
    image: '/assets/five-roosters/ahmed-hassan-portrait.jpg'
  },
  {
    name: 'MAZEN & MOAZ EL-ZOZ',
    role: 'Business & Hospitality',
    pillar: 'BUSINESS',
    affiliation: 'Elzuzzat / Blue View Cafe (+9.7M Community)',
    image: '/assets/elzuzzat/elzuzzat-portrait.jpg'
  },
  {
    name: 'MOHAMED SALAM',
    role: 'Entertainment & Visibility',
    pillar: 'AUDIENCE',
    affiliation: 'Acclaimed Pan-Arab Actor',
    image: '/assets/salam/mohamed-salam-portrait.jpg'
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
            02 — MOHAMED ELHAGAN + PROMEDIA
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

              <div className="flex flex-wrap gap-4 pt-2 text-xs font-mono text-viv-yellow">
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
              {/* ProMedia Clean White Logo Box with generous padding */}
              <div className="md:col-span-5">
                <div 
                  onClick={() => onOpenLightbox({
                    id: 'promedia-logo-contained',
                    type: 'image',
                    title: 'ProMedia Production House',
                    subtitle: 'Official Brand Identity',
                    src: '/assets/promedia/pro-media-logo.png',
                    caption: 'Make your vision PRO — Leading production house in Egypt, France & USA'
                  })}
                  className="p-8 bg-white rounded-2xl shadow-xl border border-white/20 flex flex-col items-center justify-center cursor-pointer group hover:scale-[1.02] transition-transform"
                >
                  <img
                    src="/assets/promedia/pro-media-logo.png"
                    alt="ProMedia Logo"
                    className="w-full max-w-[200px] h-auto object-contain"
                  />
                  <span className="text-[10px] font-mono text-noir/50 uppercase mt-4 tracking-widest flex items-center gap-1">
                    <span>View Brand Asset</span>
                    <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
              </div>

              {/* ProMedia Profile Video Trigger & Summary */}
              <div className="md:col-span-7 space-y-4">
                <h4 className="text-xl font-serif text-viv-cream">
                  ProMedia Production Capabilities
                </h4>
                <p className="text-xs sm:text-sm text-viv-cream-soft/80 font-light leading-relaxed">
                  {promediaData.shortDescription}
                </p>

                <button
                  onClick={() => onOpenVideo({
                    id: 'promedia-profile-reel',
                    type: 'video',
                    title: 'ProMedia Production House Promotional Film',
                    subtitle: 'Official Production Showcase',
                    src: '/assets/promedia/promedia-promo-video.mp4',
                    caption: 'ProMedia integrated cinematic production, editing, and commercial campaigns.'
                  })}
                  className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-viv-cream border border-viv-yellow/40 font-mono text-xs uppercase tracking-wider flex items-center gap-2 transition-colors shadow-lg"
                >
                  <Play className="w-3.5 h-3.5 fill-current text-viv-yellow" />
                  <span>Watch ProMedia Production Reel</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ===================================================
            03 — ENG. AHMED HASSAN + 5 ROOSTERS
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
              {/* 5 Roosters Brand Logo / Asset */}
              <div className="md:col-span-5">
                <div 
                  onClick={() => onOpenLightbox({
                    id: 'five-roosters-brand-contained',
                    type: 'image',
                    title: '5 Roosters Fried Chicken',
                    subtitle: 'WE CRUST, YOU CRUNCH',
                    src: fiveRoostersData.brand.image,
                    caption: '5 Roosters Fried Chicken — Fast-casual operations powerhouse'
                  })}
                  className="relative aspect-video rounded-2xl overflow-hidden shadow-xl border border-viv-yellow/20 bg-viv-chocolate cursor-pointer group hover:scale-[1.02] transition-transform flex items-center justify-center p-2"
                >
                  <img
                    src={fiveRoostersData.brand.image}
                    alt="5 Roosters Brand"
                    className="w-full h-full max-h-[180px] object-contain"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-xs font-mono text-viv-yellow font-bold">5 Roosters Official Logo</span>
                  </div>
                </div>
              </div>

              {/* 5 Roosters Video Link */}
              <div className="md:col-span-7 space-y-4">
                <h4 className="text-xl font-serif text-viv-cream">
                  5 Roosters Culinary Operations Video
                </h4>
                <p className="text-xs sm:text-sm text-viv-cream-soft/80 font-light leading-relaxed">
                  {fiveRoostersData.brand.description}
                </p>

                <button
                  onClick={() => onOpenVideo({
                    id: 'five-roosters-reel',
                    type: 'video',
                    title: '5 Roosters Fried Chicken — Kitchen & Crunch Reel',
                    subtitle: 'Official Brand Reel',
                    src: 'https://www.instagram.com/reel/DHZHs-JSv4z/?stkn=ZzR4MTZpcWh0',
                    caption: 'Experience the signature crunch, kitchen workflow, and high-velocity fast casual operations.'
                  })}
                  className="px-6 py-3.5 rounded-full bg-viv-yellow text-viv-chocolate font-mono text-xs uppercase tracking-wider font-bold flex items-center gap-2 hover:bg-viv-yellow-light transition-colors shadow-lg"
                >
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                  <span>Watch 5 Roosters Video Reel</span>
                </button>
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

              <div className="flex flex-wrap gap-4 pt-2 text-xs font-mono text-viv-cream/80">
                <span>TikTok: 3.7M</span>
                <span>Facebook: 4.6M</span>
                <span>Instagram: 1.4M</span>
              </div>
            </div>
          </div>

          {/* Dedicated Blue View Subsection with Official Logo & Connected Instagram Reel */}
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
              {/* Official Blue View Brand Logo */}
              <div className="md:col-span-5">
                <div 
                  onClick={() => onOpenLightbox({
                    id: 'blue-view-brand-contained',
                    type: 'image',
                    title: 'Blue View Cafe & Restaurant',
                    subtitle: 'Official Hospitality Brand Logo',
                    src: '/assets/elzuzzat/blue-view-logo.jpg',
                    caption: 'Blue View Cafe and Restaurant — Nile View Hospitality Destination'
                  })}
                  className="relative aspect-video rounded-2xl overflow-hidden shadow-xl border border-viv-yellow/20 bg-viv-chocolate cursor-pointer group hover:scale-[1.02] transition-transform flex items-center justify-center p-3"
                >
                  <img
                    src="/assets/elzuzzat/blue-view-logo.jpg"
                    alt="Blue View Cafe Official Logo"
                    className="w-full h-full max-h-[180px] object-contain rounded-full shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-xs font-mono text-viv-yellow font-bold">Blue View Official Logo</span>
                  </div>
                </div>
              </div>

              {/* Blue View Summary & Action */}
              <div className="md:col-span-7 space-y-4">
                <h4 className="text-xl font-serif text-viv-cream">
                  Blue View Hospitality Experience
                </h4>
                <p className="text-xs sm:text-sm text-viv-cream-soft/80 font-light leading-relaxed">
                  {elzuzzatData.hospitality.description}
                </p>

                <button
                  onClick={() => onOpenVideo({
                    id: 'blue-view-video',
                    type: 'video',
                    title: 'Blue View Cafe — Hospitality Showcase',
                    subtitle: 'Official Video Reel by Elzuzzat',
                    src: 'https://www.instagram.com/reel/DDNM_6rN_EH/?stkn=ZTlveHBqNjk3eHRp',
                    caption: 'Atmospheric dining and social cafe moments at Blue View Cafe developed by Elzuzzat.'
                  })}
                  className="px-6 py-3.5 rounded-full bg-viv-yellow text-viv-chocolate font-mono text-xs uppercase tracking-wider font-bold flex items-center gap-2 hover:bg-viv-yellow-light transition-colors shadow-lg"
                >
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                  <span>Watch Blue View Hospitality Showcase</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ===================================================
            05 — MOHAMED SALAM + SELECTED WORK VIDEO
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

              <div className="flex flex-wrap gap-4 pt-2 text-xs font-mono text-viv-cream/80">
                <span>✓ El Kabeer Awy</span>
                <span>✓ Karset Tabeia (WATCH IT Lead)</span>
                <span>✓ 20+ Landmark Egyptian Feature Films</span>
              </div>
            </div>
          </div>

          {/* Simple Dedicated Selected Work Video Section */}
          <div className="pt-8 border-t border-viv-yellow/20">
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-mono uppercase tracking-widest text-viv-yellow font-bold">
                Selected Work Video
              </span>
              <span className="text-xs font-mono text-viv-cream/50">
                Official Cinematic Reel
              </span>
            </div>

            <div className="p-8 rounded-2xl bg-viv-burgundy-deep border border-viv-yellow/30 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-center sm:text-left">
                <h4 className="text-xl font-serif text-viv-cream font-medium">
                  Mohamed Salam — Selected Works & Highlights
                </h4>
                <p className="text-xs font-mono text-viv-cream/70">
                  Featured Cinematic & Dramatic Performances
                </p>
              </div>

              <button
                onClick={() => onOpenVideo({
                  id: 'salam-youtube-reel',
                  type: 'video',
                  title: 'Mohamed Salam — Selected Work',
                  subtitle: 'Curated Cinematic Performances',
                  src: 'https://youtu.be/szOPQ44Cllg?si=MJHN8l_z0vjmGlf4',
                  caption: 'Official video highlight of Mohamed Salam curated dramatic and comedic achievements.'
                })}
                className="px-8 py-3.5 rounded-full bg-viv-yellow text-viv-chocolate font-mono text-xs uppercase tracking-widest font-bold flex items-center gap-2 hover:bg-viv-yellow-light transition-all shadow-xl whitespace-nowrap"
              >
                <Play className="w-4 h-4 fill-current ml-0.5" />
                <span>Watch Selected Work Video</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
