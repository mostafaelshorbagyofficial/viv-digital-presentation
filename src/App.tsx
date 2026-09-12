import React, { useState } from 'react';
import { TopNavigation } from './components/layout/TopNavigation';
import { HeroSection } from './components/sections/HeroSection';
import { VIVBrandStorySection } from './components/sections/VIVBrandStorySection';
import { VIVProductMenuSection } from './components/sections/VIVProductMenuSection';
import { VIVCustomerOccasionsSection } from './components/sections/VIVCustomerOccasionsSection';
import { VIVPositioningExperienceSection } from './components/sections/VIVPositioningExperienceSection';
import { VIVSensoryVideoSection } from './components/sections/VIVSensoryVideoSection';
import { VIVMarketingBusinessSection } from './components/sections/VIVMarketingBusinessSection';
import { VIVOperationsScalabilitySection } from './components/sections/VIVOperationsScalabilitySection';
import { VIVExpansion50Section } from './components/sections/VIVExpansion50Section';
import { VIVEcosystemTeamSection } from './components/sections/VIVEcosystemTeamSection';
import { VIVPartnershipSection } from './components/sections/VIVPartnershipSection';

import { LightboxModal } from './components/common/LightboxModal';
import { VideoPlayerModal } from './components/common/VideoPlayerModal';
import { FeaturedWorkModal } from './components/common/FeaturedWorkModal';
import { MediaItem, FeaturedWork } from './types/presentation';

export function App() {
  const [lightboxMedia, setLightboxMedia] = useState<MediaItem | null>(null);
  const [videoModalMedia, setVideoModalMedia] = useState<MediaItem | null>(null);
  const [selectedFeaturedWork, setSelectedFeaturedWork] = useState<FeaturedWork | null>(null);

  const handleOpenLightbox = (media: MediaItem) => {
    setLightboxMedia(media);
  };

  const handleOpenVideo = (media: MediaItem) => {
    setVideoModalMedia(media);
  };

  const handleOpenFeaturedWork = (work: FeaturedWork) => {
    setSelectedFeaturedWork(work);
  };

  return (
    <div className="min-h-screen bg-viv-cream text-viv-chocolate font-sans antialiased selection:bg-viv-yellow selection:text-viv-chocolate">
      {/* VIV Brand Top Navigation */}
      <TopNavigation />

      {/* 01 — VIV Hero / First Impression (VIV ONLY) */}
      <HeroSection onOpenVideo={handleOpenVideo} />

      {/* 02 — VIV The Vision & Concept */}
      <VIVBrandStorySection onOpenLightbox={handleOpenLightbox} />

      {/* 03 — VIV Product & Menu */}
      <VIVProductMenuSection />

      {/* 04 — VIV Customer & Occasions */}
      <VIVCustomerOccasionsSection />

      {/* 05 — VIV Positioning & 360 Experience */}
      <VIVPositioningExperienceSection />

      {/* 06 — VIV Sensory Cinema (Film 02) */}
      <VIVSensoryVideoSection onOpenVideo={handleOpenVideo} />

      {/* 07 — VIV Marketing Engine & Business Model */}
      <VIVMarketingBusinessSection />

      {/* 08 — VIV Operations, Centralized Commissary & Unit Economics */}
      <VIVOperationsScalabilitySection />

      {/* 09 — The 50-Location Expansion Vision */}
      <VIVExpansion50Section />

      {/* 10 — The Team & Supporting Ecosystem */}
      <VIVEcosystemTeamSection 
        onOpenLightbox={handleOpenLightbox}
        onOpenVideo={handleOpenVideo}
      />

      {/* 11 — Final VIV Brand Promise & Mall Partnership */}
      <VIVPartnershipSection onOpenVideo={handleOpenVideo} />

      {/* Global Modals */}
      <LightboxModal 
        media={lightboxMedia} 
        onClose={() => setLightboxMedia(null)} 
      />

      <VideoPlayerModal 
        media={videoModalMedia} 
        onClose={() => setVideoModalMedia(null)} 
      />

      <FeaturedWorkModal 
        work={selectedFeaturedWork} 
        onClose={() => setSelectedFeaturedWork(null)}
        onOpenMedia={(media) => {
          setSelectedFeaturedWork(null);
          if (media.type === 'video') {
            setVideoModalMedia(media);
          } else {
            setLightboxMedia(media);
          }
        }}
      />
    </div>
  );
}

export default App;
