import React from 'react';
import { vivData } from '../../data/vivData';
import { FeaturedWork, MediaItem } from '../../types/presentation';
import { Building2, Sparkles, CheckCircle2, ArrowRight, Play, Eye } from 'lucide-react';

interface VIVPartnershipSectionProps {
  onOpenFeaturedWork: (work: FeaturedWork) => void;
  onOpenLightbox: (media: MediaItem) => void;
  onOpenVideo: (media: MediaItem) => void;
}

export const VIVPartnershipSection: React.FC<VIVPartnershipSectionProps> = ({
  onOpenFeaturedWork,
  onOpenLightbox,
  onOpenVideo
}) => {
  return (
    <section className="py-24 sm:py-36 px-4 sm:px-8 lg:px-16 bg-noir border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto space-y-28">
        {/* 01 Partnership Proposition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold-400 block">
              Commercial Alliances
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-ivory font-normal leading-tight">
              {vivData.partnership.headline}
            </h2>
            <p className="text-lg text-ivory-muted/90 font-light leading-relaxed">
              {vivData.partnership.whyViv}
            </p>

            <div className="p-6 rounded-2xl bg-noir-card border border-white/10 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-gold-400 block">
                Mall Location Specifications
              </span>
              <ul className="space-y-2.5">
                {vivData.partnership.locationRequirements.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-ivory/80 font-light">
                    <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {vivData.partnership.mallValue.map((val) => (
              <div
                key={val.title}
                className="p-6 rounded-2xl bg-noir-card border border-gold-500/20 flex flex-col justify-between"
              >
                <div>
                  <h4 className="font-serif text-lg text-ivory mb-2 font-medium">
                    {val.title}
                  </h4>
                  <p className="text-xs sm:text-sm font-light text-ivory-muted/70 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 02 Featured Work — VIV Showcase */}
        <div className="pt-16 border-t border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-gold-400 block mb-2">
                Brand Showcase Assets
              </span>
              <h3 className="text-2xl sm:text-4xl font-serif text-ivory">
                VIV Featured Assets & Cinema
              </h3>
            </div>
            <p className="text-xs font-mono text-ivory/50">
              Click to view high-definition media & video players
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {vivData.works.map((work) => (
              <div
                key={work.id}
                onClick={() => {
                  if (work.mediaType === 'video' && work.mediaSrc) {
                    onOpenVideo({
                      id: work.id,
                      type: 'video',
                      title: work.title,
                      subtitle: work.clientOrRole,
                      src: work.mediaSrc,
                      caption: work.description
                    });
                  } else {
                    onOpenFeaturedWork(work);
                  }
                }}
                className="p-6 rounded-2xl bg-noir-card border border-white/10 hover:border-gold-500/50 transition-all duration-300 cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-video w-full rounded-xl overflow-hidden mb-4 bg-noir border border-white/10">
                    <img
                      src={work.thumbnail}
                      alt={work.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {work.mediaType === 'video' && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-gold-500/90 text-noir flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <Play className="w-5 h-5 fill-current ml-0.5" />
                        </div>
                      </div>
                    )}
                  </div>

                  <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded bg-gold-500/10 text-gold-300 border border-gold-500/20 inline-block mb-2">
                    {work.category}
                  </span>
                  <h4 className="text-lg font-serif text-ivory mb-2 group-hover:text-gold-200 transition-colors">
                    {work.title}
                  </h4>
                  <p className="text-xs text-ivory-muted/70 font-light line-clamp-2">
                    {work.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-gold-400">
                  <span>{work.mediaType === 'video' ? 'Play Video Player' : 'View Details'}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 03 VIV Climax Statement */}
        <div className="p-12 sm:p-20 rounded-3xl bg-gradient-to-b from-noir-card via-noir-elevated to-noir border border-gold-500/30 text-center max-w-4xl mx-auto space-y-6">
          <div className="space-y-1">
            <p className="text-2xl sm:text-4xl font-serif text-ivory font-light tracking-wide">{vivData.closing.line1}</p>
            <p className="text-2xl sm:text-4xl font-serif text-ivory font-light tracking-wide">{vivData.closing.line2}</p>
            <p className="text-3xl sm:text-5xl font-serif text-gold-300 font-bold tracking-wider">{vivData.closing.line3}</p>
          </div>

          <p className="text-base sm:text-xl font-serif text-ivory-muted/90 font-light max-w-2xl mx-auto leading-relaxed pt-4">
            {vivData.closing.paragraph}
          </p>

          <div className="pt-6">
            <span className="text-xs font-mono tracking-[0.3em] text-gold-400 uppercase font-bold">
              {vivData.closing.promise}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
