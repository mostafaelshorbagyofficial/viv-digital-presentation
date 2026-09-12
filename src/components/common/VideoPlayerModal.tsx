import React, { useEffect, useRef, useState } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Maximize, ExternalLink } from 'lucide-react';
import { MediaItem } from '../../types/presentation';

interface VideoPlayerModalProps {
  media: MediaItem | null;
  onClose: () => void;
}

export const VideoPlayerModal: React.FC<VideoPlayerModalProps> = ({
  media,
  onClose
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState('0:00');
  const [duration, setDuration] = useState('0:00');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === ' ' && !isYouTube && !isInstagram) {
        e.preventDefault();
        togglePlay();
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
  }, [media, onClose]);

  if (!media) return null;

  const isYouTube = media.src.includes('youtu.be') || media.src.includes('youtube.com');
  const isInstagram = media.src.includes('instagram.com');

  // Convert YouTube URL to embed URL
  const getYouTubeEmbedUrl = (url: string) => {
    if (url.includes('youtu.be/')) {
      const id = url.split('youtu.be/')[1].split('?')[0];
      return `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;
    }
    if (url.includes('watch?v=')) {
      const id = url.split('watch?v=')[1].split('&')[0];
      return `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;
    }
    return url;
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const curr = videoRef.current.currentTime;
    const dur = videoRef.current.duration || 1;
    setProgress((curr / dur) * 100);

    const formatTime = (secs: number) => {
      const m = Math.floor(secs / 60);
      const s = Math.floor(secs % 60);
      return `${m}:${s < 10 ? '0' : ''}${s}`;
    };

    setCurrentTime(formatTime(curr));
    setDuration(formatTime(dur));
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return;
    const seekTime = (parseFloat(e.target.value) / 100) * (videoRef.current.duration || 1);
    videoRef.current.currentTime = seekTime;
    setProgress(parseFloat(e.target.value));
  };

  const handleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 sm:p-8"
      onClick={onClose}
    >
      {/* Top Close Button */}
      <div className="absolute top-6 right-6 z-50 flex items-center gap-3">
        {(isYouTube || isInstagram) && (
          <a
            href={media.src}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="p-3 text-ivory/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors backdrop-blur-sm border border-white/10 flex items-center gap-1.5 text-xs font-mono"
          >
            <span>Open Source</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
        <button
          onClick={onClose}
          className="p-3 text-ivory/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors backdrop-blur-sm border border-white/10"
          aria-label="Close Video"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Video Content Container */}
      <div 
        className="relative w-full max-w-5xl flex flex-col items-center bg-viv-burgundy-dark/95 rounded-2xl overflow-hidden border border-viv-yellow/30 shadow-2xl shadow-black/80"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full aspect-video bg-black flex items-center justify-center">
          {isYouTube ? (
            <iframe
              src={getYouTubeEmbedUrl(media.src)}
              title={media.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
            />
          ) : isInstagram ? (
            <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-viv-burgundy to-viv-chocolate">
              <div className="w-20 h-20 rounded-full bg-viv-yellow/20 border border-viv-yellow flex items-center justify-center text-viv-yellow mb-6">
                <Play className="w-8 h-8 fill-current ml-1" />
              </div>
              <h3 className="text-2xl font-serif text-ivory mb-2">{media.title}</h3>
              <p className="text-sm text-viv-cream/80 max-w-md mb-6">{media.caption || 'Official Instagram Reel Experience'}</p>
              <a
                href={media.src}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full bg-viv-yellow text-viv-chocolate font-mono text-xs tracking-widest uppercase font-bold hover:bg-viv-yellow-light transition-all shadow-lg flex items-center gap-2"
              >
                <span>Watch Reel on Instagram</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ) : (
            <>
              <video
                ref={videoRef}
                src={media.src}
                autoPlay
                playsInline
                onTimeUpdate={handleTimeUpdate}
                onClick={togglePlay}
                className="w-full h-full object-contain cursor-pointer"
              />

              {!isPlaying && (
                <button
                  onClick={togglePlay}
                  className="absolute inset-0 m-auto w-20 h-20 bg-viv-yellow/90 hover:bg-viv-yellow text-viv-chocolate rounded-full flex items-center justify-center shadow-lg transition-transform transform hover:scale-110"
                >
                  <Play className="w-8 h-8 fill-current ml-1" />
                </button>
              )}

              {/* Bottom Player Controls */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 sm:p-6 opacity-95 transition-opacity">
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="0.1"
                  value={progress}
                  onChange={handleSeek}
                  className="w-full h-1 bg-white/30 rounded-lg appearance-none cursor-pointer accent-viv-yellow mb-4"
                />

                <div className="flex items-center justify-between text-ivory text-sm">
                  <div className="flex items-center gap-4">
                    <button 
                      onClick={togglePlay}
                      className="text-ivory hover:text-viv-yellow transition-colors"
                    >
                      {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-current" />}
                    </button>
                    <button 
                      onClick={toggleMute}
                      className="text-ivory hover:text-viv-yellow transition-colors"
                    >
                      {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                    </button>
                    <span className="font-mono text-xs text-ivory/70">
                      {currentTime} / {duration}
                    </span>
                  </div>

                  <button 
                    onClick={handleFullscreen}
                    className="text-ivory hover:text-viv-yellow transition-colors"
                    aria-label="Fullscreen"
                  >
                    <Maximize className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Video Info Header */}
        <div className="w-full p-6 bg-viv-burgundy-deep border-t border-viv-yellow/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-viv-yellow block mb-1">
              {media.subtitle || 'VIV Presentation Cinema'}
            </span>
            <h3 className="text-xl font-serif text-ivory">
              {media.title}
            </h3>
            {media.caption && (
              <p className="text-sm text-viv-cream/70 mt-1 font-light">
                {media.caption}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
