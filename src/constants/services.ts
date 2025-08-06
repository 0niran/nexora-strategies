import { TrendingUp, Shield, Target } from 'lucide-react';
import type { Service } from '@/types';

export const SERVICES: Service[] = [
  {
    id: 'financial',
    href: '/services/financial-performance',
    icon: TrendingUp,
    title: 'Financial Performance Enhancement',
    description: 'Strategic financial analysis, performance optimization, and sustainable growth strategies',
    color: 'emerald'
  },
  {
    id: 'resource',
    href: '/services/resource-allocation',
    icon: Target,
    title: 'Resource Allocation Optimization',
    description: 'Capital efficiency, resource distribution, and operational excellence frameworks',
    color: 'green'
  },
  {
    id: 'strategic',
    href: '/services/strategic-guidance',
    icon: Shield,
    title: 'Strategic Guidance & Advisory',
    description: 'M&A advisory, funding strategy, and transformational change management',
    color: 'teal'
  }
];

export const getServiceById = (id: string): Service | undefined => {
  return SERVICES.find(service => service.id === id);
};

export const getServiceByHref = (href: string): Service | undefined => {
  return SERVICES.find(service => service.href === href);
};