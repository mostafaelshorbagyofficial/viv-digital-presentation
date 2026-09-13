import { FeaturedWork } from '../types/presentation';

export const fiveRoostersData = {
  brand: {
    name: "5 ROOSTERS FRIED CHICKEN",
    tagline: "WE CRUST, YOU CRUNCH",
    image: "/assets/five-roosters/five-roosters-brand.jpg",
    description: "A fast-scaling, flavor-forward fast casual fried chicken powerhouse built on culinary precision, signature crunch secret recipes, and hyper-efficient kitchen operations."
  },

  founder: {
    name: "ENG. AHMED HASSAN SELIM",
    title: "CEO & CO-FOUNDER",
    company: "5 ROOSTERS FRIED CHICKEN",
    portrait: "/assets/five-roosters/ahmed-hassan-portrait.jpg",
    roleInViv: "Restaurant Operations & Culinary Supply Chain Architecture",
    bio: "Eng. Ahmed Hassan is a veteran F&B engineer and restaurant operations mastermind. Through rigorous system engineering, precision kitchen line flow, and scalable supply chain frameworks, he has spearheaded high-growth restaurant chains capable of delivering unyielding consistency across multi-unit retail networks."
  },

  strengths: [
    { title: "Precision Kitchen Engineering", desc: "Developing optimized prep workflows that maximize hourly throughput while minimizing ticket times." },
    { title: "Multi-Store Operating Systems", desc: "Designing bulletproof SOPs and quality assurance checkpoints for rapid franchise deployment." },
    { title: "Supply Chain & Procurement", desc: "Leveraging direct agricultural sourcing and volume contracts to protect unit-level margins." },
    { title: "Culinary Quality Control", desc: "Uncompromising standards in seasoning, crust adherence, and fryer temperature monitoring." }
  ],

  brandPillars: [
    { title: "The Signature Crust", desc: "Engineered multi-layer dredge technique creating an unmistakable, long-lasting crunch." },
    { title: "Operational Velocity", desc: "Sub-4-minute order fulfillment optimized for high-density food courts and street corners." },
    { title: "Value & Generosity", desc: "Hearty portion sizes and craveable sauce pairings that cultivate fanatic customer loyalty." }
  ],

  works: [
    {
      id: "fr-work-1",
      title: "5 Roosters Multi-Branch Scaling",
      category: "Restaurant Chain Execution",
      clientOrRole: "CEO & Co-Founder",
      description: "Engineering and operating the high-growth 5 Roosters Fried Chicken brand with optimized unit economics.",
      thumbnail: "/assets/five-roosters/five-roosters-brand.jpg",
      status: "completed",
      highlights: ["High-throughput kitchen layout", "Proven customer repeat rate", "Scalable branch network"]
    },
    {
      id: "fr-work-2",
      title: "Central Commissary & Supply Chain Integration",
      category: "F&B Infrastructure",
      clientOrRole: "Operations Lead",
      description: "Establishing standardized marination, proprietary spice blending, and cold-chain logistics for retail outlets.",
      thumbnail: "/assets/five-roosters/ahmed-hassan-portrait.jpg",
      status: "completed",
      highlights: ["Centralized recipe control", "Low store-level labor overhead", "Strict HACCP food safety standards"]
    }
  ] as FeaturedWork[]
};
