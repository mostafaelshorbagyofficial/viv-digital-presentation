import React, { useRef, useState, useEffect } from 'react';
import { Play, Volume2, VolumeX, Maximize2, Sparkles } from 'lucide-react';
import { MediaItem } from '../../types/presentation';
import { vivData } from '../../data/vivData';

interface VIVHeroVideoSectionProps {
  onOpenVideo: (media: MediaItem) => void;
}

export const VIVHeroVideoSection: React.FC<VIVHeroVideoSectionProps> = ({ onOpenVideo }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    // Intersection observer to pause video when offscreen
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (videoRef.current) {
          if (entry.isIntersecting) {
            videoRef.current.play().catch(() => {});
            setIsPlaying(true);
          } else {
            videoRef.current.pause();
            setIsPlaying(false);
          }
        }
      },
      { threshold: 0.25 }
    );

    if (videoRef.current) observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, []);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleOpenPlayer = () => {
    onOpenVideo({
      id: 'viv-video-1',
      type: 'video',
      title: 'VIV Croissants — The Craft & Lamination',
      subtitle: 'Cinematic Overture 01',
      src: vivData.hero.video1Src,
      caption: 'The delicate lamination, golden crust, and pure buttery essence of the VIV Croissant.'
    });
  };

  return (
    <section id="viv-croissants" className="relative py-24 sm:py-36 bg-noir overflow-hidden">
      {/* Chapter Title Badge */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 mb-12">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-xs sm:text-sm font-mono tracking-widest px-3 py-1 rounded-full border border-gold-500/30 bg-gold-500/10 text-gold-300">
            02
          </span>
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-ivory/50">
            Culinary Brand Hero
          </span>
        </div>
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-ivory font-normal tracking-tight leading-[1.05]">
          {vivData.hero.title}
        </h2>
        <p className="text-xl sm:text-2xl font-serif italic text-gold-300 mt-2">
          {vivData.hero.tagline}
        </p>
      </div>

      {/* Cinematic Full-Bleed Video Canvas */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <div 
          onClick={handleOpenPlayer}
          className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-3xl overflow-hidden bg-noir-card border border-gold-500/20 shadow-2xl cursor-pointer group"
        >
          {/* Real Video Element with muted autoplay and loop */}
          <video
            ref={videoRef}
            src={vivData.hero.video1Src}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
          />

          {/* Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-noir via-transparent to-noir/40 pointer-events-none" />

          {/* Floating Action Button */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gold-500/90 text-noir flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-gold-400 transition-all duration-300 backdrop-blur-md">
              <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current ml-1 text-noir" />
            </div>
          </div>

          {/* Video Bottom Floating Bar */}
          <div className="absolute bottom-6 inset-x-6 sm:inset-x-10 flex items-center justify-between pointer-events-auto">
            <div className="bg-noir/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-xs font-mono text-ivory/80 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              <span>Cinematic Film 01 · Click to Expand Full Screen</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={toggleMute}
                className="p-3 rounded-full bg-noir/80 hover:bg-noir text-ivory border border-white/10 backdrop-blur-md transition-colors"
                aria-label="Toggle Sound"
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
              <button
                onClick={handleOpenPlayer}
                className="p-3 rounded-full bg-noir/80 hover:bg-noir text-ivory border border-white/10 backdrop-blur-md transition-colors"
                aria-label="Fullscreen"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Narrative Lead Statement */}
        <div className="mt-12 text-center max-w-3xl mx-auto">
          <p className="text-xl sm:text-2xl font-serif text-ivory font-light leading-relaxed">
            “{vivData.hero.statement}”
          </p>
        </div>
      </div>
    </section>
  );
};
