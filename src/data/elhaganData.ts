import { FeaturedWork } from '../types/presentation';

export const elhaganData = {
  name: "MOHAMED ELHAGAN",
  title: "CREATIVE DIRECTOR",
  companyRole: "FOUNDER & CEO — PROMEDIA PRODUCTION HOUSE",
  portrait: "/assets/elhagan/mohamed-elhagan-portrait.jpg",
  
  bio: "With over two decades of distinguished creative leadership, Mohamed Elhagan has shaped premier media productions, sovereign cultural documentaries, luxury commercials, and viral digital IPs across the Middle East and Europe.",

  experience: "20+ Years in Media Production & Content Creation",
  
  expertise: [
    { title: "Creative Direction", desc: "Setting holistic cinematic tone, art direction, and brand narrative architecture." },
    { title: "Content Creation", desc: "Developing original formats, digital IP, and high-engagement episodic media." },
    { title: "Advertising & Commercial Films", desc: "Directing high-stakes campaigns for automotive, consumer, and corporate leaders." },
    { title: "Documentary Films", desc: "Crafting culturally resonant historical, biographical, and sovereign documentaries." },
    { title: "TV Programs", desc: "Orchestrating multi-camera prime-time television formats and satellite identities." },
    { title: "Digital Content Strategy", desc: "Engineering viral engines and talent ecosystems that dominate social platforms." }
  ],

  internationalFootprint: [
    "Egypt", "France", "Spain", "Saudi Arabia", "United Arab Emirates"
  ],

  socialImpact: {
    followers: "3M+",
    followersLabel: "Social Media Followers",
    views: "1B+",
    viewsLabel: "Total Video Views",
    likes: "500M+",
    likesLabel: "Audience Interactions & Likes"
  },

  visionStatement: "Every frame must serve a purpose. Great media production doesn't just display a brand—it builds an emotional empire.",

  works: [
    {
      id: "elhagan-work-1",
      title: "ProMedia International Production House",
      category: "Founding & Strategic Direction",
      clientOrRole: "Founder & CEO",
      description: "Building an international media house operating across Egypt, France, and the USA, serving Tier-1 global clients.",
      thumbnail: "/assets/elhagan/mohamed-elhagan-portrait.jpg",
      status: "completed",
      highlights: ["Multi-national operations", "Over 500 creators developed", "Tier-1 corporate roster"]
    },
    {
      id: "elhagan-work-2",
      title: "Automotive Cinema Campaigns",
      category: "Commercial Film Direction",
      clientOrRole: "BMW · Maserati · Jaguar",
      description: "Leading creative direction and cinematography for luxury automotive television spots and digital films.",
      thumbnail: "/assets/elhagan/mohamed-elhagan-portrait.jpg",
      status: "completed",
      highlights: ["Cinematic visual polish", "International broadcast delivery", "High brand prestige"]
    },
    {
      id: "elhagan-work-3",
      title: "Documentary & Cultural Masterworks",
      category: "Documentary Directing",
      clientOrRole: "Cultural & Sovereign Broadcasts",
      description: "Directing biographical and historical films celebrating Arab literature, comedy icons, and sovereign institutions.",
      thumbnail: "/assets/elhagan/mohamed-elhagan-portrait.jpg",
      status: "completed",
      highlights: ["Naguib El Rihani docuseries", "Wogoh Shawky cinematic showcase", "Sovereign ministry films"]
    }
  ] as FeaturedWork[]
};
