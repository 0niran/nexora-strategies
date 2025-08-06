import Image from 'next/image';
import Button from './Button';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';

interface HeroSectionProps {
  variant?: 'home' | 'service';
  title: string;
  subtitle?: string;
  description: string;
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  image?: {
    src: string;
    alt: string;
  };
  stats?: Array<{
    value: string;
    label: string;
  }>;
  features?: string[];
  badge?: string;
}

export default function HeroSection({
  variant = 'home',
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  image,
  stats,
  features,
  badge
}: HeroSectionProps) {
  if (variant === 'home') {
    return (
      <section className="relative bg-gradient-to-br from-gray-50 via-green-50/30 to-emerald-50/20 py-20 lg:py-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-48 h-48 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob"></div>
          <div className="absolute top-20 right-10 w-48 h-48 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-20 w-48 h-48 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto container-padding relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              {badge && (
                <div className="inline-block bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-green-200">
                  {badge}
                </div>
              )}
              
              <h1 className="heading-display text-gray-900 mb-6 slide-up">
                {title}
                {subtitle && <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent block">{subtitle}</span>}
              </h1>
              
              <p className="body-large text-gray-600 mb-8 leading-relaxed slide-up animation-delay-200">
                {description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-slide-up animation-delay-400">
                {primaryCta && (
                  <Button
                    href={primaryCta.href}
                    variant="primary"
                    size="lg"
                    icon="arrow"
                    className="shadow-lg hover:shadow-xl"
                  >
                    {primaryCta.text}
                  </Button>
                )}
                {secondaryCta && (
                  <Button
                    href={secondaryCta.href}
                    variant="outline"
                    size="lg"
                    icon={<Play className="h-4 w-4" />}
                  >
                    {secondaryCta.text}
                  </Button>
                )}
              </div>
              
              {/* Trust Indicators */}
              {stats && (
                <div className="border-t border-gray-200 pt-8 slide-up animation-delay-600">
                  <div className="flex items-center space-x-8">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="heading-3 text-emerald-600 font-bold mb-1 group-hover:scale-110 transition-transform duration-300">{stat.value}</div>
                        <div className="body-small text-gray-600">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <div className="relative scale-in animation-delay-800">
              {image ? (
                <div className="relative h-96 w-full overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-500 hover:scale-105"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  
                  {/* Floating Card */}
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="glass-effect rounded-lg p-4 backdrop-blur-md">
                      <p className="text-gray-900 font-semibold text-sm">
                        Trusted by growing businesses worldwide
                      </p>
                      <div className="flex items-center mt-2">
                        <div className="flex -space-x-2">
                          {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full border-2 border-white"></div>
                          ))}
                        </div>
                        <span className="ml-2 text-xs text-gray-600">50+ clients</span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="relative h-96 w-full bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl shadow-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-emerald-50 to-green-50 rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg">
                      <ArrowRight className="h-8 w-8 text-green-600" />
                    </div>
                    <p className="text-gray-700 font-medium">Professional Excellence</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* CSS for animations */}
        <style jsx>{`
          .animate-blob {
            animation: blob 7s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          .animation-delay-4000 {
            animation-delay: 4s;
          }
          .animation-delay-200 {
            animation-delay: 0.2s;
          }
          .animation-delay-400 {
            animation-delay: 0.4s;
          }
          .animation-delay-600 {
            animation-delay: 0.6s;
          }
          .animation-delay-800 {
            animation-delay: 0.8s;
          }
          
          @keyframes blob {
            0% {
              transform: translate(0px, 0px) scale(1);
            }
            33% {
              transform: translate(30px, -50px) scale(1.1);
            }
            66% {
              transform: translate(-20px, 20px) scale(0.9);
            }
            100% {
              transform: translate(0px, 0px) scale(1);
            }
          }
        `}</style>
      </section>
    );
  }

  // Service page variant
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-green-50/20 py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="max-w-4xl">
          {badge && (
            <div className="inline-block bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-green-200">
              {badge}
            </div>
          )}
          
          <h1 className="heading-1 text-gray-900 mb-6 leading-tight">
            {title}
            {subtitle && <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent"> {subtitle}</span>}
          </h1>
          
          <p className="body-large text-gray-600 mb-8 leading-relaxed">
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            {primaryCta && (
              <Button
                href={primaryCta.href}
                variant="primary"
                size="lg"
                icon="arrow"
              >
                {primaryCta.text}
              </Button>
            )}
            {secondaryCta && (
              <Button
                href={secondaryCta.href}
                variant="outline"
                size="lg"
              >
                {secondaryCta.text}
              </Button>
            )}
          </div>
          
          {/* Features List */}
          {features && (
            <div className="grid sm:grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                  <span className="body-base text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}