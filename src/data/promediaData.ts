import { ClientCategory, CreatorProfile, FeaturedWork } from '../types/presentation';

export const promediaData = {
  tagline: "Make your vision PRO.",
  name: "ProMedia Production House",
  shortDescription: "Pro Media is one of the leading media production and advertising companies in the Middle East, Africa and Europe. We help brands, content creators and institutions turn their vision into professional visual experiences through integrated production, editing and digital content solutions.",
  
  services: [
    { title: "TV Program Production", desc: "End-to-end concept development, studio broadcasting, and prime-time show executions." },
    { title: "Editing & Motion Graphics", desc: "High-end post-production, VFX, 3D motion design, and visual polish." },
    { title: "Satellite Channel Launch", desc: "Comprehensive identity, broadcast infrastructure, and on-air programming architecture." },
    { title: "Documentary Production", desc: "Deep cinematic storytelling, archival investigations, and cultural biographical narratives." },
    { title: "Conference & Event Coverage", desc: "Multi-camera live broadcast, real-time streaming, and executive keynote staging." },
    { title: "Digital Marketing & Social Media", desc: "Viral content engines, creator growth campaigns, and cross-platform distribution." },
    { title: "Commercial Production", desc: "High-impact brand films, luxury commercials, and broadcast television campaigns." },
    { title: "Media Training", desc: "Executive presentation coaching, on-camera readiness, and creative masterclasses." }
  ],

  clientCategories: [
    {
      category: "Automotive & Luxury",
      clients: ["BMW", "Maserati", "Jaguar", "Mini Cooper"],
      description: "High-end commercial films and brand cinematic showcases."
    },
    {
      category: "Consumer & F&B Brands",
      clients: ["Pepsi", "Nestle", "Al Ameed", "almentor.net", "Hesas Masr", "Il Campo", "Dukkan Bazza"],
      description: "National brand campaigns, digital storytelling, and commercial releases."
    },
    {
      category: "Broadcasting & Television Networks",
      clients: ["MBC", "Al Jazeera", "Al Nahar", "Rotana"],
      description: "Network programming, prime-time shows, and broadcast identity systems."
    },
    {
      category: "Government & International Institutions",
      clients: ["Ministry of Youth & Sports — Iraq", "Ministry of Interior — Qatar", "Media & Communications Authority"],
      description: "Strategic cultural documentations and national sovereign campaigns."
    },
    {
      category: "Technology & Social Ecosystems",
      clients: ["Meta", "TikTok", "Life Makers"],
      description: "Platform initiatives, community activations, and digital content acceleration."
    }
  ] as ClientCategory[],

  creators: [
    { name: "Samira Said", role: "Iconic Pan-Arab Music Star" },
    { name: "Mai Kassab", role: "Renowned Actress & Vocalist" },
    { name: "Hisham Elgakh", role: "Leading Contemporary Poet" },
    { name: "Basant Nour El Din", role: "Acclaimed Cultural & Heritage Explorer" },
    { name: "Ahmed Abu Khater", role: "International Spiritual Artist" },
    { name: "Karim El Shazly", role: "Author & Personal Development Figure" },
    { name: "Asmaa Raouf", role: "Tourism & Lifestyle Influencer" },
    { name: "Mohamed Hossam", role: "Digital Content Innovator" }
  ] as CreatorProfile[],

  scale: {
    creatorsManaged: "+500",
    creatorsDescription: "Content creators & influencers managed and developed across the Middle East",
    globalFootprint: [
      { region: "Egypt / Middle East", hub: "Giza - El Mariouteya", phone: "00201061119700" },
      { region: "France / Europe", hub: "100 rue jean jaures", phone: "0033751309179" },
      { region: "USA / Americas", hub: "6422 19th St, Brooklyn NY", phone: "19179246520" }
    ]
  },

  works: [
    {
      id: "pm-work-1",
      title: "Luxury Automotive Commercials",
      category: "Commercial Production",
      clientOrRole: "BMW · Maserati · Jaguar · Mini Cooper",
      description: "Art-directed cinematic commercials capturing engineering precision, luxury performance, and brand prestige.",
      thumbnail: "/assets/promedia/pro-media-logo.png",
      status: "completed",
      highlights: ["High-speed cinematography", "Color grading & sound design", "Global broadcast standards"]
    },
    {
      id: "pm-work-2",
      title: "Naguib El Rihani — Philosopher of Laughter",
      category: "Documentary Production",
      clientOrRole: "Cultural Biographical Film",
      description: "In-depth cinematic exploration documenting the life, artistic revolution, and enduring legacy of the legendary icon.",
      thumbnail: "/assets/promedia/pro-media-logo.png",
      status: "completed",
      highlights: ["Archival restoration", "Historical dramatizations", "Critical acclaim across festivals"]
    },
    {
      id: "pm-work-3",
      title: "Wogoh Shawky",
      category: "Documentary Film",
      clientOrRole: "Literary & Cultural Heritage",
      description: "A visually compelling exploration of Ahmed Shawky's poetry and influence across modern Arab literature.",
      thumbnail: "/assets/promedia/pro-media-logo.png",
      status: "completed",
      highlights: ["Literary narrative design", "Cinematic landscape composition", "Broadcast showcase"]
    },
    {
      id: "pm-work-4",
      title: "Osoul El Leaba & Sohbet Youssef",
      category: "TV Programs & Broadcast",
      clientOrRole: "Prime-Time Broadcasting",
      description: "High-production studio talk formats and cultural talk programs produced for leading satellite networks.",
      thumbnail: "/assets/promedia/pro-media-logo.png",
      status: "completed",
      highlights: ["Multi-camera studio direction", "Dynamic motion graphics packaging", "High ratings"]
    },
    {
      id: "pm-work-5",
      title: "Mai Kassab — \"Kelma Men Andak\"",
      category: "Music & Visual Production",
      clientOrRole: "Music Video & Digital Release",
      description: "Cinematic music video production with emotive art direction and viral social media rollout.",
      thumbnail: "/assets/promedia/pro-media-logo.png",
      status: "completed",
      highlights: ["Conceptual visual direction", "Multi-platform rollout", "High audience engagement"]
    },
    {
      id: "pm-work-6",
      title: "Ahmed Abu Khater — \"Sobha Ala Allah\"",
      category: "Spiritual & Musical Production",
      clientOrRole: "International Visual Release",
      description: "An evocative visual journey produced with international aesthetic finesse and spiritual serenity.",
      thumbnail: "/assets/promedia/pro-media-logo.png",
      status: "completed",
      highlights: ["Location shooting across landmark scenery", "Acoustic audio mastering", "Millions of digital views"]
    },
    {
      id: "pm-work-7",
      title: "Hadayek October · Blue View · Haleeb & Haleeb",
      category: "Brand & F&B Campaigns",
      clientOrRole: "Commercial & Digital Brand Growth",
      description: "Comprehensive visual campaigns, commercial spot creation, and brand storytelling for dynamic lifestyle ventures.",
      thumbnail: "/assets/promedia/pro-media-logo.png",
      status: "completed",
      highlights: ["Integrated brand identity", "Social-first video campaigns", "High conversion impact"]
    }
  ] as FeaturedWork[],

  contact: {
    website: "www.pro-m-edia.com",
    email: "info@pro-m-edia.com",
    locations: [
      { country: "Egypt", address: "Giza - El Mariouteya", phone: "00201061119700" },
      { country: "France", address: "100 rue jean jaures", phone: "0033751309179" },
      { country: "USA", address: "6422 19th St, Brooklyn NY", phone: "19179246520" }
    ]
  }
};
