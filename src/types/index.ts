export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'Frontend' | 'Web3' | 'Full Stack';
  image_url: string;
  technologies: string[];
  live_url?: string;
  github_url?: string;
  challenge?: string;
  solution?: string;
  order: number;
  created_at: string;
}

export interface ContactSubmission {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  message: string;
  rating: number;
  image_url?: string;
  order: number;
  created_at: string;
}

export interface Skill {
  name: string;
  icon: string;
  category: 'Frontend' | 'Web3' | 'Tools';
}
