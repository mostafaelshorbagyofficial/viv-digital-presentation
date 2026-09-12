export interface MediaItem {
  id: string;
  type: 'image' | 'video';
  title: string;
  subtitle?: string;
  src: string;
  poster?: string;
  aspectRatio?: 'landscape' | 'portrait' | 'square' | 'ultrawide';
  caption?: string;
  tags?: string[];
}

export interface FeaturedWork {
  id: string;
  title: string;
  category: string;
  clientOrRole?: string;
  year?: string;
  description: string;
  thumbnail: string;
  mediaType?: 'image' | 'video';
  mediaSrc?: string;
  highlights?: string[];
  status?: 'completed' | 'upcoming' | 'in-production';
}

export interface ClientCategory {
  category: string;
  clients: string[];
  description?: string;
}

export interface CreatorProfile {
  name: string;
  role: string;
  description?: string;
  followers?: string;
}

export interface NavItem {
  id: string;
  label: string;
  sectionNumber: string;
}
