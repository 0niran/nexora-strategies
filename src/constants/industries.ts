import { Building2, DollarSign, Globe, Zap } from 'lucide-react';
import type { Industry } from '@/types';

export const MAIN_INDUSTRIES: Industry[] = [
  {
    icon: Building2,
    title: "Technology",
    description: "SaaS, fintech, and emerging tech companies",
    color: "blue"
  },
  {
    icon: DollarSign,
    title: "Financial Services",
    description: "Banks, investment firms, and insurance",
    color: "green"
  },
  {
    icon: Globe,
    title: "Manufacturing",
    description: "Industrial, automotive, and consumer goods",
    color: "purple"
  },
  {
    icon: Zap,
    title: "Healthcare",
    description: "Medical devices, pharma, and healthcare services",
    color: "red"
  }
];

export const ADDITIONAL_INDUSTRIES = [
  "Real Estate",
  "Energy", 
  "Retail",
  "Education",
  "Media",
  "Transportation",
  "Agriculture",
  "Hospitality",
  "Professional Services",
  "Non-Profit"
];