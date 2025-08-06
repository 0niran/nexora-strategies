import type { LucideIcon } from 'lucide-react';

// Service-related types
export type ServiceId = 'financial' | 'resource' | 'strategic';
export type ServiceColor = 'emerald' | 'green' | 'teal';

export interface Service {
  id: ServiceId;
  href: string;
  icon: LucideIcon;
  title: string;
  description: string;
  color: ServiceColor;
}

// Form-related types
export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone?: string;
  service: string;
  message: string;
}

// Case study types
export interface CaseStudy {
  id: number;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  metrics: CaseStudyMetric[];
  image: string;
  service: ServiceId;
}

export interface CaseStudyMetric {
  label: string;
  value: string;
  improvement: '↑' | '↓';
}

// Testimonial types
export interface Testimonial {
  id: number;
  name: string;
  title: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
  companyLogo?: string;
}

// Hero section types
export type HeroVariant = 'home' | 'service';

export interface HeroStat {
  value: string;
  label: string;
}

export interface HeroCTA {
  text: string;
  href: string;
}

export interface HeroImage {
  src: string;
  alt: string;
}

export interface HeroSectionProps {
  variant?: HeroVariant;
  title: string;
  subtitle?: string;
  description: string;
  primaryCta?: HeroCTA;
  secondaryCta?: HeroCTA;
  image?: HeroImage;
  stats?: HeroStat[];
  features?: string[];
  badge?: string;
}

// Button types
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  icon?: 'arrow' | 'external' | React.ReactNode;
  loading?: boolean;
  children: React.ReactNode;
  className?: string;
  onClick?: ((event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void);
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  target?: string;
  rel?: string;
}

// Navigation types
export interface NavigationProps {
  currentService?: ServiceId;
}

// Industry types
export interface Industry {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

// Common component types
export interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'gray' | 'white';
}

export interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  style?: React.CSSProperties;
  priority?: boolean;
  sizes?: string;
  fallbackSrc?: string;
}