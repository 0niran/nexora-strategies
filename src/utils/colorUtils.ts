import type { ServiceColor } from '@/types';

type ColorVariant = 'background' | 'text' | 'border' | 'hover' | 'ring';

interface ColorMap {
  [key: string]: {
    background: string;
    text: string;
    border: string;
    hover: string;
    ring: string;
  };
}

const COLOR_MAP: ColorMap = {
  emerald: {
    background: 'bg-emerald-100',
    text: 'text-nexora-emerald',
    border: 'border-emerald-200',
    hover: 'hover:bg-emerald-200',
    ring: 'ring-nexora-emerald'
  },
  green: {
    background: 'bg-green-100',
    text: 'text-nexora-green', 
    border: 'border-green-200',
    hover: 'hover:bg-green-200',
    ring: 'ring-nexora-green'
  },
  teal: {
    background: 'bg-teal-100',
    text: 'text-nexora-teal',
    border: 'border-teal-200', 
    hover: 'hover:bg-teal-200',
    ring: 'ring-nexora-teal'
  },
  red: {
    background: 'bg-red-100',
    text: 'text-red-600',
    border: 'border-red-200',
    hover: 'hover:bg-red-200',
    ring: 'ring-red-500'
  }
};

/**
 * Get Tailwind CSS class for a specific color and variant
 */
export const getColorClass = (color: ServiceColor | string, variant: ColorVariant): string => {
  return COLOR_MAP[color]?.[variant] || '';
};

/**
 * Get service-specific color classes for active/inactive states
 */
export const getServiceColorClasses = (color: ServiceColor, isActive: boolean): string => {
  if (isActive) {
    return `${getColorClass(color, 'background')} border-2 ${getColorClass(color, 'border')} ${getColorClass(color, 'text').replace('600', '700')}`;
  }
  return `hover:${getColorClass(color, 'background')} transition-colors duration-200`;
};

/**
 * Get icon color classes for service items
 */
export const getIconColorClasses = (color: ServiceColor, isActive: boolean): string => {
  const baseClasses = `transition-colors duration-200 ${getColorClass(color, 'background')}`;
  
  if (isActive) {
    return `${baseClasses} ${getColorClass(color, 'text').replace('600', '700')}`;
  }
  
  return `${baseClasses} group-hover:${getColorClass(color, 'text')}`;
};

/**
 * Get industry color classes
 */
export const getIndustryColorClasses = (color: string): {
  container: string;
  icon: string;
} => {
  return {
    container: `${getColorClass(color, 'background')} group-hover:${getColorClass(color, 'hover')}`,
    icon: getColorClass(color, 'text')
  };
};