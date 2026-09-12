import React, { useState } from 'react';
import { TopNavigation } from './components/layout/TopNavigation';
import { HeroSection } from './components/sections/HeroSection';
import { ProMediaSection } from './components/sections/ProMediaSection';
import { VIVHeroVideoSection } from './components/sections/VIVHeroVideoSection';
import { VIVBrandStorySection } from './components/sections/VIVBrandStorySection';
import { VIVProductMenuSection } from './components/sections/VIVProductMenuSection';
import { VIVCustomerOccasionsSection } from './components/sections/VIVCustomerOccasionsSection';
import { VIVPositioningExperienceSection } from './components/sections/VIVPositioningExperienceSection';
import { VIVSensoryVideoSection } from './components/sections/VIVSensoryVideoSection';
import { VIVMarketingBusinessSection } from './components/sections/VIVMarketingBusinessSection';
import { VIVOperationsScalabilitySection } from './components/sections/VIVOperationsScalabilitySection';
import { VIVTeamSection } from './components/sections/VIVTeamSection';
import { VIVExpansion50Section } from './components/sections/VIVExpansion50Section';
import { VIVPartnershipSection } from './components/sections/VIVPartnershipSection';
import { ElzuzzatSection } from './components/sections/ElzuzzatSection';
import { MohamedElhaganSection } from './components/sections/MohamedElhaganSection';
import { MohamedSalamSection } from './components/sections/MohamedSalamSection';
import { FiveRoostersSection } from './components/sections/FiveRoostersSection';
import { FinalEcosystemSection } from './components/sections/FinalEcosystemSection';
import { GlobalContactSection } from './components/sections/GlobalContactSection';

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
    <div className="min-h-screen bg-noir text-ivory font-sans antialiased selection:bg-gold-500/30 selection:text-gold-200">
      {/* Fixed Luxury Presentation Navigation */}
      <TopNavigation />

      {/* Chapter 00 — Opening Overture */}
      <HeroSection onOpenVideo={handleOpenVideo} />

      {/* Chapter 01 — ProMedia (Foundation) */}
      <ProMediaSection 
        onOpenLightbox={handleOpenLightbox}
        onOpenFeaturedWork={handleOpenFeaturedWork}
      />

      {/* Chapter 02 — VIV Croissants (The Culinary Hero) */}
      <VIVHeroVideoSection onOpenVideo={handleOpenVideo} />
      <VIVBrandStorySection onOpenLightbox={handleOpenLightbox} />
      <VIVProductMenuSection />
      <VIVCustomerOccasionsSection />
      <VIVPositioningExperienceSection />
      <VIVSensoryVideoSection onOpenVideo={handleOpenVideo} />
      <VIVMarketingBusinessSection />
      <VIVOperationsScalabilitySection />
      <VIVTeamSection onOpenLightbox={handleOpenLightbox} />
      <VIVExpansion50Section />
      <VIVPartnershipSection 
        onOpenFeaturedWork={handleOpenFeaturedWork}
        onOpenLightbox={handleOpenLightbox}
        onOpenVideo={handleOpenVideo}
      />

      {/* Chapter 03 — Elzuzzat */}
      <ElzuzzatSection 
        onOpenLightbox={handleOpenLightbox}
        onOpenFeaturedWork={handleOpenFeaturedWork}
      />

      {/* Chapter 04 — Mohamed Elhagan */}
      <MohamedElhaganSection 
        onOpenLightbox={handleOpenLightbox}
        onOpenFeaturedWork={handleOpenFeaturedWork}
      />

      {/* Chapter 05 — Mohamed Salam */}
      <MohamedSalamSection 
        onOpenLightbox={handleOpenLightbox}
        onOpenFeaturedWork={handleOpenFeaturedWork}
      />

      {/* Chapter 06 — 5 Roosters / Eng. Ahmed Hassan */}
      <FiveRoostersSection 
        onOpenLightbox={handleOpenLightbox}
        onOpenFeaturedWork={handleOpenFeaturedWork}
      />

      {/* Chapter 07 — Final Integrated Ecosystem */}
      <FinalEcosystemSection />

      {/* Chapter 08 — Global Contacts & Inquiries */}
      <GlobalContactSection />

      {/* Modals */}
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
