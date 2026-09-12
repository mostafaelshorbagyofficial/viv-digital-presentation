import React, { useRef, useState, useEffect } from 'react';
import { Play, Volume2, VolumeX, Maximize2, Sparkles, Heart } from 'lucide-react';
import { MediaItem } from '../../types/presentation';
import { vivData } from '../../data/vivData';

interface VIVSensoryVideoSectionProps {
  onOpenVideo: (media: MediaItem) => void;
}

export const VIVSensoryVideoSection: React.FC<VIVSensoryVideoSectionProps> = ({ onOpenVideo }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (videoRef.current) {
          if (entry.isIntersecting) {
            videoRef.current.play().catch(() => {});
          } else {
            videoRef.current.pause();
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
      id: 'viv-video-2',
      type: 'video',
      title: 'VIV Croissants — Sensory & Indulgence',
      subtitle: 'Cinematic Chapter 02',
      src: vivData.hero.video2Src,
      caption: 'The rich fillings, warm aroma, and craveable coffee dining experience.'
    });
  };

  return (
    <section id="sensory-experience" className="py-24 sm:py-36 px-4 sm:px-8 lg:px-16 bg-viv-burgundy-deep text-viv-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Editorial Narrative Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-3">
            <Sparkles className="w-4 h-4 text-viv-yellow" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-viv-yellow font-bold">
              Sensory Dining & Atmosphere
            </span>
          </div>
          <h3 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-viv-cream font-normal leading-tight">
            The Craving That Brings Them Back
          </h3>
          <p className="mt-4 text-lg text-viv-cream-soft font-light">
            An indulgent visual exploration into the warm aromas, decadent fillings, and buzzing atmosphere of the VIV table.
          </p>
        </div>

        {/* Video Canvas Container */}
        <div 
          onClick={handleOpenPlayer}
          className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-3xl overflow-hidden bg-viv-chocolate border-2 border-viv-yellow/30 shadow-2xl cursor-pointer group"
        >
          <video
            ref={videoRef}
            src={vivData.hero.video2Src}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-viv-burgundy-deep/80 via-transparent to-viv-burgundy-deep/40 pointer-events-none" />

          {/* Center Play Button */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-viv-yellow/95 text-viv-chocolate flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-viv-yellow transition-all duration-300 backdrop-blur-md">
              <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current ml-1" />
            </div>
          </div>

          {/* Floating Controls Bar */}
          <div className="absolute bottom-6 inset-x-6 sm:inset-x-10 flex items-center justify-between pointer-events-auto">
            <div className="bg-viv-burgundy-deep/90 backdrop-blur-md px-5 py-2.5 rounded-full border border-viv-yellow/30 text-xs font-mono text-viv-cream flex items-center gap-2">
              <Heart className="w-3.5 h-3.5 text-viv-yellow fill-current" />
              <span>Cinematic Film 02 · Click to Watch Full Screen</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={toggleMute}
                className="p-3 rounded-full bg-viv-burgundy-deep/90 hover:bg-viv-burgundy text-viv-cream border border-viv-yellow/30 backdrop-blur-md transition-colors"
                aria-label="Toggle Sound"
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
              <button
                onClick={handleOpenPlayer}
                className="p-3 rounded-full bg-viv-burgundy-deep/90 hover:bg-viv-burgundy text-viv-cream border border-viv-yellow/30 backdrop-blur-md transition-colors"
                aria-label="Fullscreen"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
