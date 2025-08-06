'use client';

import { forwardRef } from 'react';
import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';
import type { ButtonProps } from '@/types';

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(({
  variant = 'primary',
  size = 'md',
  href,
  icon,
  loading = false,
  children,
  className = '',
  onClick,
  disabled = false,
  type = 'button',
  ...props
}, ref) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden';
  
  const variantClasses = {
    primary: 'bg-emerald-600 text-white hover:bg-emerald-700 focus:ring-emerald-500 shadow-sm hover:shadow-md transform hover:scale-[1.02]',
    secondary: 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100 focus:ring-emerald-500 border border-emerald-200',
    outline: 'border border-gray-300 text-gray-700 hover:border-emerald-300 hover:text-emerald-700 focus:ring-emerald-500',
    ghost: 'text-gray-700 hover:text-emerald-700 hover:bg-emerald-50 focus:ring-emerald-500'
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm rounded-md',
    md: 'px-4 py-2 text-sm rounded-lg',
    lg: 'px-6 py-3 text-base rounded-lg'
  };

  const finalClassName = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const renderIcon = () => {
    if (loading) {
      return (
        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2" />
      );
    }

    if (!icon) return null;

    if (typeof icon === 'string') {
      switch (icon) {
        case 'arrow':
          return <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />;
        case 'external':
          return <ExternalLink className="ml-2 h-4 w-4" />;
        default:
          return null;
      }
    }

    // Custom React node
    return icon;
  };

  const content = (
    <>
      {loading && (
        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2" />
      )}
      <span className={loading ? 'opacity-70' : ''}>{children}</span>
      {!loading && renderIcon()}
    </>
  );

  if (href) {
    if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={`${finalClassName} group`}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
          onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {content}
        </a>
      );
    }

    return (
      <Link 
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href} 
        className={`${finalClassName} group`}
        onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      type={type}
      className={`${finalClassName} group`}
      disabled={disabled || loading}
      onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;