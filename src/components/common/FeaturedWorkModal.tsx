import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, Play, Sparkles } from 'lucide-react';
import { FeaturedWork, MediaItem } from '../../types/presentation';

interface FeaturedWorkModalProps {
  work: FeaturedWork | null;
  onClose: () => void;
  onOpenMedia?: (media: MediaItem) => void;
}

export const FeaturedWorkModal: React.FC<FeaturedWorkModalProps> = ({
  work,
  onClose,
  onOpenMedia
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (work) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [work, onClose]);

  if (!work) return null;

  const handleMediaClick = () => {
    if (onOpenMedia && work.mediaSrc) {
      onOpenMedia({
        id: work.id,
        type: work.mediaType || 'image',
        title: work.title,
        subtitle: work.category,
        src: work.mediaSrc,
        caption: work.description
      });
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 sm:p-8"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-noir-card border border-gold-500/30 rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-noir-elevated">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 text-xs font-mono tracking-widest uppercase bg-gold-500/10 text-gold-300 border border-gold-500/30 rounded-full">
              {work.category}
            </span>
            {work.year && (
              <span className="text-xs font-mono text-ivory/50">
                {work.year}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 text-ivory/70 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto space-y-6">
          {/* Media preview banner if available */}
          {work.thumbnail && (
            <div 
              onClick={work.mediaSrc ? handleMediaClick : undefined}
              className={`relative h-64 sm:h-80 w-full rounded-xl overflow-hidden bg-black/50 border border-white/10 flex items-center justify-center ${work.mediaSrc ? 'cursor-pointer group' : ''}`}
            >
              <img 
                src={work.thumbnail} 
                alt={work.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/40 to-transparent" />

              {work.mediaType === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-gold-500/90 text-noir flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-7 h-7 fill-current ml-1" />
                  </div>
                </div>
              )}
            </div>
          )}

          <div>
            <h2 className="text-2xl sm:text-3xl font-serif text-ivory tracking-wide font-medium">
              {work.title}
            </h2>
            {work.clientOrRole && (
              <p className="text-sm font-sans tracking-wide text-gold-300 mt-1 uppercase">
                {work.clientOrRole}
              </p>
            )}
          </div>

          <p className="text-base sm:text-lg text-ivory-muted/90 font-light leading-relaxed">
            {work.description}
          </p>

          {/* Highlights */}
          {work.highlights && work.highlights.length > 0 && (
            <div className="pt-4 border-t border-white/5">
              <h4 className="text-xs font-mono uppercase tracking-widest text-ivory/60 mb-4 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                Key Production Highlights
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {work.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-ivory/80">
                    <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
