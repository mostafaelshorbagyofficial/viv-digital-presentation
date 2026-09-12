import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { MediaItem } from '../../types/presentation';

interface LightboxModalProps {
  media: MediaItem | null;
  mediaList?: MediaItem[];
  onClose: () => void;
  onNavigate?: (item: MediaItem) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  media,
  mediaList = [],
  onClose,
  onNavigate
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (!media || mediaList.length <= 1 || !onNavigate) return;
      const currentIndex = mediaList.findIndex(m => m.src === media.src || m.id === media.id);
      if (currentIndex === -1) return;
      if (e.key === 'ArrowRight') {
        const nextIndex = (currentIndex + 1) % mediaList.length;
        onNavigate(mediaList[nextIndex]);
      } else if (e.key === 'ArrowLeft') {
        const prevIndex = (currentIndex - 1 + mediaList.length) % mediaList.length;
        onNavigate(mediaList[prevIndex]);
      }
    };

    if (media) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [media, mediaList, onClose, onNavigate]);

  if (!media) return null;

  const currentIndex = mediaList.findIndex(m => m.src === media.src || m.id === media.id);
  const hasMultiple = mediaList.length > 1 && onNavigate;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!hasMultiple || currentIndex === -1) return;
    const prevIndex = (currentIndex - 1 + mediaList.length) % mediaList.length;
    onNavigate(mediaList[prevIndex]);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!hasMultiple || currentIndex === -1) return;
    const nextIndex = (currentIndex + 1) % mediaList.length;
    onNavigate(mediaList[nextIndex]);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-8 animate-fadeIn"
      onClick={onClose}
    >
      {/* Top action bar */}
      <div className="absolute top-6 right-6 z-50 flex items-center gap-4">
        <button
          onClick={onClose}
          className="p-3 text-ivory/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors backdrop-blur-sm border border-white/10"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation Arrows */}
      {hasMultiple && (
        <>
          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 text-ivory/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors backdrop-blur-sm border border-white/10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 text-ivory/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors backdrop-blur-sm border border-white/10"
            aria-label="Next image"
          >
            <ChevronRight className="w-7 h-7" />
          </button>
        </>
      )}

      {/* Content Container */}
      <div 
        className="relative max-w-6xl max-h-[85vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative overflow-hidden rounded-lg shadow-2xl border border-white/10 bg-noir-card">
          <img
            src={media.src}
            alt={media.title}
            className="max-h-[75vh] w-auto max-w-full object-contain mx-auto transition-transform duration-300"
          />
        </div>

        {/* Captions */}
        <div className="mt-4 text-center max-w-2xl px-4">
          <h3 className="text-xl sm:text-2xl font-serif text-ivory font-medium tracking-wide">
            {media.title}
          </h3>
          {media.subtitle && (
            <p className="text-sm font-sans tracking-widest uppercase text-gold-300 mt-1">
              {media.subtitle}
            </p>
          )}
          {media.caption && (
            <p className="text-xs sm:text-sm text-ivory-muted/80 mt-2 font-light">
              {media.caption}
            </p>
          )}
          {hasMultiple && (
            <p className="text-xs text-ivory/40 mt-2 font-mono">
              {currentIndex + 1} / {mediaList.length}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
