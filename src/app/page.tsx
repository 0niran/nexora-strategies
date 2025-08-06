'use client';

import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import CaseStudies from './components/CaseStudies';
import Footer from './components/Footer';
import Button from './components/Button';
import ScrollToTop from './components/ScrollToTop';
import { ArrowRight, CheckCircle, Users, Award, Clock } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

import { SERVICES } from '@/constants/services';
import { MAIN_INDUSTRIES, ADDITIONAL_INDUSTRIES } from '@/constants/industries';
import { COMPANY_INFO, CONTENT } from '@/constants/company';
import { getIndustryColorClasses } from '@/utils/colorUtils';
import type { HeroStat } from '@/types';

export default function Home() {
  const heroStats: HeroStat[] = [
    { value: COMPANY_INFO.stats.clients, label: "Clients" },
    { value: COMPANY_INFO.stats.valueCreated, label: "Value Created" },
    { value: COMPANY_INFO.stats.industries, label: "Industries" }
  ];

  const aboutFeatures = [
    {
      icon: CheckCircle,
      title: "Proven Track Record",
      description: `${COMPANY_INFO.stats.valueCreated} in value created across ${COMPANY_INFO.stats.projects} successful engagements`
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Experienced executives and industry specialists"
    },
    {
      icon: Award,
      title: "Tailored Solutions",
      description: "Customized strategies aligned with your unique business objectives"
    }
  ];

  const additionalStats = [
    { value: COMPANY_INFO.stats.clientSatisfaction, label: "Client Satisfaction" },
    { value: COMPANY_INFO.stats.avgROI, label: "Avg. ROI Increase" },
    { value: COMPANY_INFO.stats.avgEngagement, label: "Avg. Engagement" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <HeroSection
        variant="home"
        title="Strategic Excellence for"
        subtitle="Growing Businesses"
        description={CONTENT.hero.description}
        primaryCta={{
          text: "Get Started",
          href: "/contact"
        }}
        secondaryCta={{
          text: "Learn More",
          href: "#about"
        }}
        image={{
          src: "/hero-business.jpg",
          alt: "Strategic Business Consulting"
        }}
        stats={heroStats}
        badge={CONTENT.hero.badge}
      />

      {/* Services Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 via-transparent to-teal-50/50 opacity-60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-2 text-gray-900 mb-4">
              Expert Advisory Services
            </h2>
            <p className="body-large text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive consulting solutions designed to accelerate your business growth and optimize performance
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => {
              const Icon = service.icon;
              
              return (
                <Link 
                  key={service.id}
                  href={service.href}
                  className="group relative bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100/50 hover:border-emerald-300/50 hover:-translate-y-2 hover:bg-white/90"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3 rounded-xl ${
                      service.color === 'emerald' ? 'bg-emerald-50 text-emerald-600' :
                      service.color === 'green' ? 'bg-green-50 text-green-600' :
                      'bg-teal-50 text-teal-600'
                    } group-hover:scale-110 transition-transform duration-300 shadow-inner`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-emerald-600 group-hover:translate-x-2 transition-all duration-300" />
                  </div>
                  
                  <h3 className="heading-4 text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="body-base text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mt-6">
                    <Button 
                      variant="ghost"
                      size="sm"
                      icon="arrow"
                      className={`p-0 ${service.color === 'emerald' ? 'text-emerald-600 hover:text-emerald-700' :
                        service.color === 'green' ? 'text-green-600 hover:text-green-700' :
                        'text-teal-600 hover:text-teal-700'}`}
                    >
                      Learn more
                    </Button>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="heading-2 text-gray-900 mb-6">
                {CONTENT.about.title}
              </h2>
              
              <p className="body-large text-gray-600 mb-8 leading-relaxed">
                {CONTENT.about.description}
              </p>
              
              <div className="space-y-6">
                {aboutFeatures.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center">
                          <Icon className="h-6 w-6 text-emerald-600" />
                        </div>
                      </div>
                      <div>
                        <h3 className="heading-5 text-gray-900 mb-2">
                          {item.title}
                        </h3>
                        <p className="body-base text-gray-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <div className="mt-10">
                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  icon="arrow"
                >
                  Partner With Us
                </Button>
              </div>
            </div>
            
            <div className="mt-12 lg:mt-0">
              <div className="relative h-80 w-full overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="/team-meeting.jpg"
                  alt="Professional Team Meeting"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-8">
                {additionalStats.map((stat, index) => (
                  <div key={index} className="text-center bg-white p-4 rounded-lg shadow-sm">
                    <div className="heading-4 text-emerald-600 mb-1">
                      {stat.value}
                    </div>
                    <div className="body-small text-gray-600">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-2 text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="body-large text-gray-600 max-w-3xl mx-auto">
              We bring deep sector expertise and proven methodologies across diverse industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {MAIN_INDUSTRIES.map((industry, index) => {
              const Icon = industry.icon;
              const colorClasses = getIndustryColorClasses(industry.color);
              
              return (
                <div key={index} className="text-center group hover:-translate-y-2 transition-all duration-300">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center transition-all duration-300 ${colorClasses.container}`}>
                    <Icon className={`h-8 w-8 ${colorClasses.icon}`} />
                  </div>
                  
                  <h3 className="heading-5 text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                    {industry.title}
                  </h3>
                  
                  <p className="body-small text-gray-600 leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Additional Industries */}
          <div className="mt-16 text-center">
            <div className="inline-flex flex-wrap gap-3 justify-center">
              {ADDITIONAL_INDUSTRIES.map((industry, index) => (
                <span key={index} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full body-small font-medium hover:bg-blue-50 hover:text-blue-700 transition-colors cursor-pointer">
                  {industry}
                </span>
              ))}
            </div>
            
            <div className="mt-8">
              <p className="body-base text-gray-600 mb-4">Don&apos;t see your industry? We work across all sectors.</p>
              <Button
                href="/contact"
                variant="ghost"
                icon="arrow"
                className="text-emerald-600 hover:text-emerald-700"
              >
                Contact us to discuss your needs
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-50/20 to-transparent"></div>
        <CaseStudies />
      </div>
      
      {/* CTA Section */}
      <section className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 py-20 relative overflow-hidden animate-gradient-shift bg-[length:200%_auto]">
        {/* Animated background patterns */}
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px]"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400 rounded-full filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-400 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="heading-2 text-white mb-6">
            {CONTENT.cta.title}
          </h2>
          
          <p className="body-large text-emerald-50 mb-10 max-w-3xl mx-auto leading-relaxed">
            {CONTENT.cta.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              href="/contact"
              variant="secondary"
              size="lg"
              icon="arrow"
              className="bg-white/95 backdrop-blur text-emerald-600 hover:bg-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Start Your Transformation
            </Button>
            
            <Button
              href={`tel:${COMPANY_INFO.contact.phone}`}
              variant="outline"
              size="lg"
              className="border-2 border-white/80 text-white hover:bg-white/10 hover:border-white backdrop-blur-sm transition-all duration-300"
            >
              📞 Schedule a Call
            </Button>
          </div>
          
          <div className="mt-12 flex items-center justify-center space-x-8 text-emerald-100">
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              <span className="body-small">Quick 30-min consultation</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span className="body-small">No commitment required</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
}