import { FeaturedWork } from '../types/presentation';

export const salamData = {
  name: "MOHAMED SALAM",
  title: "ACCLAIMED EGYPTIAN ACTOR",
  portrait: "/assets/salam/mohamed-salam-portrait.jpg",
  
  bio: "One of the most authentic, beloved, and versatile comedy and dramatic figures in contemporary Arab cinema and television. Known for effortless charisma, master timing, and profound connection with millions of viewers across the Arab world.",

  background: {
    birthYear: "1983",
    birthPlace: "Cairo, Egypt",
    education: "Faculty of Commerce, Cairo University",
    artisticRoots: "Began his artistic path on the Cairo University theater stage before joining the renowned Artistic Creativity Center workshop under director Khaled Galal.",
    debuts: [
      { work: "The Host / El Rahina", year: "2006", role: "Feature Film Debut" },
      { work: "Qahwa Sada (Black Coffee)", year: "2009", role: "Breakthrough Theatrical Production" }
    ]
  },

  leadSpotlight: {
    title: "KARSET TABEIA",
    tag: "FIRST ABSOLUTE DRAMA LEAD",
    platform: "WATCH IT",
    premiereDate: "Starting 29 Oct 2025",
    character: "Mohamed Shaaban",
    summary: "Mohamed Salam's landmark first absolute leading role in an original high-production drama series, showcasing his dramatic depth and charismatic storytelling.",
    credits: {
      writer: "Ahmed Atef Fayad",
      director: "Hossam Hamed",
      coStars: [
        "Jihad Hossam El Din",
        "Kamal Abu Raya",
        "Hamza El Eili"
      ]
    }
  },

  filmography: {
    film: [
      "El Rahina (2006)", "Waqfet Regala", "El Floos", "El Ghassala",
      "Mama Hamel", "Hamel El Laqab", "Amohom", "Nabil El Gamil",
      "Ramsees Paris", "Bedaa’at Saat Fe Yom Ma", "Lel Egar"
    ],
    television: [
      "El Kabeer Awy (Seasons 1–8)", "Sharbat Loz", "Niran Sadeeqa",
      "Heba Ragel El Ghorab", "Lahfa", "Haq Mayyet", "Nelly & Sherihan",
      "Captain Anoush", "Rob’ Rumi", "Khafet Yed", "Abu Omar El Masry",
      "Badal El Hadouta Talata", "El Le’ba",
      "German Company for Combating the Paranormal: Jamgoum w Bom Bom",
      "Get Salima", "Karset Tabeia (2025 Lead)"
    ],
    theatre: [
      "Qahwa Sada (Black Coffee)",
      "1/2 Hour Hamlet",
      "Hazalqum",
      "Aela Tes",
      "Ala Wadaa El Tayaran"
    ]
  },

  works: [
    {
      id: "salam-work-1",
      title: "Karset Tabeia — Lead Role Drama",
      category: "Television & Drama (WATCH IT)",
      clientOrRole: "Lead Character: Mohamed Shaaban",
      year: "2025",
      description: "First absolute lead role in a premier WATCH IT original series directed by Hossam Hamed and written by Ahmed Atef Fayad.",
      thumbnail: "/assets/salam/mohamed-salam-portrait.jpg",
      status: "completed",
      highlights: ["First absolute lead", "WATCH IT Original Production", "Starring alongside Kamal Abu Raya & Hamza El Eili"]
    },
    {
      id: "salam-work-2",
      title: "El Kabeer Awy (Hagras)",
      category: "Television Comedy Milestone",
      clientOrRole: "Iconic Character: Hagras",
      year: "Multi-Season",
      description: "Defining modern Egyptian comedy across 8 seasons as one of the most culturally recognized characters in Arab TV history.",
      thumbnail: "/assets/salam/mohamed-salam-portrait.jpg",
      status: "completed",
      highlights: ["Pan-Arab cultural icon", "8 successful seasons", "Generational catchphrases"]
    },
    {
      id: "salam-work-3",
      title: "Landmark Egyptian Cinema Features",
      category: "Feature Films",
      clientOrRole: "Starring Roles",
      year: "2006–Present",
      description: "Stellar box-office performances in Waqfet Regala, El Floos, El Ghassala, Hamel El Laqab, and Amohom.",
      thumbnail: "/assets/salam/mohamed-salam-portrait.jpg",
      status: "completed",
      highlights: ["Box office successes", "Critical and commercial acclaim", "Mastery of comedic timing"]
    }
  ] as FeaturedWork[]
};
