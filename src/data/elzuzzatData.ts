import { FeaturedWork } from '../types/presentation';

export const elzuzzatData = {
  headline: "ELZUZZAT",
  subtitle: "MAZEN & MOAZ EL-ZOZ",
  role: "Content Creators, Cultural Influencers & Entrepreneurs",
  portrait: "/assets/elzuzzat/elzuzzat-portrait.jpg",
  summary: "Mazen and Moaz El-Zoz represent one of the Middle East's most charismatic, relatable, and high-velocity digital creator duos. Combining authentic humor, infectious chemistry, and sharp entrepreneurial acumen, they command a passionate cross-generational audience of over 9.7 million followers.",
  
  duoNote: "A dynamic duo of two visionary brothers uniting entertainment, hospitality, and viral digital culture.",

  audience: {
    total: "+9.7M",
    label: "Combined Digital Community",
    platforms: [
      { name: "Facebook", followers: "4.6M", note: "Massive engagement & community discussions" },
      { name: "TikTok", followers: "3.7M", note: "Viral trendsetters & high-reach short video content" },
      { name: "Instagram", followers: "1.4M", note: "Lifestyle, aesthetic moments & behind-the-scenes" }
    ]
  },

  strengths: [
    { title: "Authentic Chemistry", desc: "Natural on-screen charisma and organic brotherly dynamic that connects instantly with millions." },
    { title: "Viral Storytelling", desc: "Mastery of modern social formats, high-retention skits, and cultural trend creation." },
    { title: "Entrepreneurship & Hospitality", desc: "Proven track record in turning audience loyalty into physical hospitality ventures." },
    { title: "High-Converting Influence", desc: "A trusted voice that drives genuine footfall and real-world consumer trial." }
  ],

  hospitality: {
    title: "Blue View Cafe",
    badge: "Hospitality Venture",
    description: "A flagship hospitality and cafe venture co-created and driven by Elzuzzat, blending vibrant atmospheric dining, social gathering spaces, and dedicated community lifestyle experiences.",
    highlights: [
      "Successful physical hospitality brand execution",
      "Sustained youth and family footfall",
      "Seamless integration of digital influence with real-world hospitality operations"
    ]
  },

  works: [
    {
      id: "elz-work-1",
      title: "Blue View Cafe Destination Concept",
      category: "Hospitality & Cafe Venture",
      clientOrRole: "Founders & Brand Drivers",
      description: "Creating and launching a thriving lifestyle cafe destination that bridges digital community energy with high-quality F&B service.",
      thumbnail: "/assets/elzuzzat/elzuzzat-portrait.jpg",
      status: "completed",
      highlights: ["Physical retail execution", "High customer retention", "Vibrant community hub"]
    },
    {
      id: "elz-work-2",
      title: "Cross-Platform Viral Content Campaigns",
      category: "Digital Content Ecosystem",
      clientOrRole: "Content Innovators",
      description: "Producing high-impact episodic content, engaging millions across TikTok, Facebook, and Instagram.",
      thumbnail: "/assets/elzuzzat/elzuzzat-portrait.jpg",
      status: "completed",
      highlights: ["Over 9.7M organic reach", "High engagement ratios", "Brand collaboration success"]
    }
  ] as FeaturedWork[]
};
