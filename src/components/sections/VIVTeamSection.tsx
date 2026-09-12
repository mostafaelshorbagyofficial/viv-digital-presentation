import React from 'react';
import { MediaItem } from '../../types/presentation';
import { Sparkles, Eye, ArrowUpRight } from 'lucide-react';

interface VIVTeamSectionProps {
  onOpenLightbox: (media: MediaItem) => void;
}

const TEAM_MEMBERS = [
  {
    id: 'team-ahmed-hassan',
    name: 'AHMED HASSAN',
    role: 'Restaurant Operations & Scalability',
    pillar: 'OPERATIONS',
    affiliation: 'CEO & Co-Founder — 5 Roosters',
    image: '/assets/five-roosters/ahmed-hassan-portrait.jpg',
    summary: 'Spearheading kitchen line engineering, commissary scaling, and operational rigor across store networks.'
  },
  {
    id: 'team-mohamed-salam',
    name: 'MOHAMED SALAM',
    role: 'Entertainment & Public Visibility',
    pillar: 'AUDIENCE',
    affiliation: 'Acclaimed Pan-Arab Actor',
    image: '/assets/salam/mohamed-salam-portrait.jpg',
    summary: 'Delivering authentic cultural reach, public recognition, and organic star visibility to the brand universe.'
  },
  {
    id: 'team-elzuzzat',
    name: 'MAZEN & MOAZ EL-ZOZ',
    role: 'Business, Hospitality & Youth Trends',
    pillar: 'HOSPITALITY',
    affiliation: 'Elzuzzat / Blue View Cafe (+9.7M Community)',
    image: '/assets/elzuzzat/elzuzzat-portrait.jpg',
    summary: 'Uniting high-velocity social reach with proven physical hospitality execution and trend-setting energy.'
  },
  {
    id: 'team-mohamed-elhagan',
    name: 'MOHAMED ELHAGAN',
    role: 'Brand, Production & Marketing',
    pillar: 'MARKETING',
    affiliation: 'Founder & CEO — ProMedia (20+ Years Exp.)',
    image: '/assets/elhagan/mohamed-elhagan-portrait.jpg',
    summary: 'Orchestrating world-class visual identity, high-production commercial cinema, and viral content engines.'
  }
];

export const VIVTeamSection: React.FC<VIVTeamSectionProps> = ({ onOpenLightbox }) => {
  return (
    <section className="py-24 sm:py-36 px-4 sm:px-8 lg:px-16 bg-noir border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold-400 block mb-3">
            Founding Leadership & Coalition
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-ivory font-normal leading-tight">
            The People Behind VIV
          </h2>
          <p className="mt-4 text-base sm:text-xl text-ivory-muted/80 font-light">
            Four distinct industry powerhouses united by one uncompromising standard of excellence.
          </p>
        </div>

        {/* 4 People Editorial Portrait Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((m) => (
            <div
              key={m.id}
              className="group flex flex-col justify-between p-6 rounded-3xl bg-noir-card border border-white/10 hover:border-gold-500/40 transition-all duration-300"
            >
              <div>
                {/* Portrait */}
                <div
                  onClick={() => onOpenLightbox({
                    id: m.id,
                    type: 'image',
                    title: m.name,
                    subtitle: `${m.pillar} · ${m.role}`,
                    src: m.image,
                    caption: `${m.affiliation} — ${m.summary}`
                  })}
                  className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-noir border border-white/10 mb-6 cursor-pointer"
                >
                  <img
                    src={m.image}
                    alt={m.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-noir via-transparent to-transparent opacity-60" />
                  <div className="absolute top-3 right-3 p-2 rounded-full bg-black/60 backdrop-blur-md text-ivory/70 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Eye className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Info */}
                <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded bg-gold-500/10 text-gold-300 border border-gold-500/20 inline-block mb-3">
                  {m.pillar}
                </span>
                <h4 className="text-xl font-serif text-ivory font-medium mb-1 group-hover:text-gold-200 transition-colors">
                  {m.name}
                </h4>
                <p className="text-xs font-mono text-gold-400 mb-2">
                  {m.role}
                </p>
                <p className="text-xs text-ivory-muted/70 font-light leading-relaxed mb-4">
                  {m.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 text-[11px] font-mono text-ivory/40">
                {m.affiliation}
              </div>
            </div>
          ))}
        </div>

        {/* Coalition Statement */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-noir-card via-noir-elevated to-noir-card border border-gold-500/30 text-center max-w-4xl mx-auto">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold-400 block mb-2">
            The Coalition Formula
          </span>
          <h3 className="text-2xl sm:text-4xl font-serif text-ivory mb-4">
            FOUR DIFFERENT STRENGTHS. ONE SHARED VISION.
          </h3>
          <p className="text-sm sm:text-base text-ivory-muted/90 font-light max-w-2xl mx-auto">
            Operations + Business & Hospitality + Pan-Arab Audience + Tier-1 Marketing = <strong className="text-gold-300">A Complete Ecosystem Around VIV.</strong>
          </p>
        </div>
      </div>
    </section>
  );
};
