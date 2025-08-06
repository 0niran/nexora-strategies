'use client';

import Navigation from '../../components/Navigation';
import HeroSection from '../../components/HeroSection';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import ScrollToTop from '../../components/ScrollToTop';
import { Handshake, TrendingUp, CheckCircle, Zap, Globe } from 'lucide-react';

export default function StrategicGuidancePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation currentService="strategic" />
      
      <HeroSection
        variant="service"
        title="Strategic Guidance & Advisory"
        description="Navigate complex business decisions with expert counsel. From M&A transactions to funding strategies and organizational transformations, we guide you through critical strategic initiatives."
        primaryCta={{
          text: "Schedule Consultation",
          href: "/contact"
        }}
        secondaryCta={{
          text: "View Process",
          href: "#process"
        }}
        features={[
          "M&A advisory and due diligence",
          "Funding strategy and execution",
          "Organizational transformation",
          "Growth and expansion planning"
        ]}
        badge="Strategic Advisory Excellence"
      />

      {/* Services Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="heading-2 text-gray-900 mb-6">
                Expert Counsel for Complex Business Decisions
              </h2>
              <p className="body-large text-gray-600 mb-8">
                Our strategic guidance and advisory services provide expert counsel through your most 
                critical business decisions. We bring deep experience in M&A, funding strategies, and 
                organizational transformation to help you navigate complex challenges successfully.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <CheckCircle className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="heading-5 text-gray-900 mb-2">Strategic Vision</h3>
                    <p className="body-base text-gray-600">
                      Clear strategic direction and roadmap development aligned with your long-term objectives.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <CheckCircle className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="heading-5 text-gray-900 mb-2">Transaction Expertise</h3>
                    <p className="body-base text-gray-600">
                      Comprehensive M&A advisory, due diligence, and transaction management from start to finish.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <CheckCircle className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="heading-5 text-gray-900 mb-2">Change Management</h3>
                    <p className="body-base text-gray-600">
                      Organizational transformation guidance to ensure successful implementation and adoption.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-2xl" id="process">
              <h3 className="heading-3 text-gray-900 mb-8">Our Process</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center mr-4 text-white font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="heading-5 text-gray-900 mb-2">Strategic Assessment</h4>
                    <p className="body-base text-gray-600">
                      Comprehensive evaluation of your strategic position, market dynamics, and growth opportunities.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center mr-4 text-white font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="heading-5 text-gray-900 mb-2">Strategy Development</h4>
                    <p className="body-base text-gray-600">
                      Creation of detailed strategic plans and execution roadmaps tailored to your specific objectives.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center mr-4 text-white font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="heading-5 text-gray-900 mb-2">Execution Support</h4>
                    <p className="body-base text-gray-600">
                      Hands-on guidance and support throughout the implementation of strategic initiatives.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center mr-4 text-white font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="heading-5 text-gray-900 mb-2">Performance Monitoring</h4>
                    <p className="body-base text-gray-600">
                      Ongoing monitoring and adjustment to ensure strategic objectives are achieved successfully.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="heading-2 text-gray-900 mb-4">
              Core Strategic Guidance Services
            </h2>
            <p className="body-large text-gray-600 max-w-2xl mx-auto">
              Comprehensive advisory services to guide your organization through complex strategic decisions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Handshake className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="heading-5 text-gray-900 mb-3">Mergers & Acquisitions</h3>
              <p className="body-small text-gray-600">
                End-to-end M&A advisory including target identification, due diligence, and transaction management.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="heading-5 text-gray-900 mb-3">Funding Strategy</h3>
              <p className="body-small text-gray-600">
                Strategic funding advisory including investor relations, capital structure, and funding execution.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="heading-5 text-gray-900 mb-3">Turnaround Strategies</h3>
              <p className="body-small text-gray-600">
                Strategic restructuring and turnaround management to restore business performance and stability.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="heading-5 text-gray-900 mb-3">Growth Planning</h3>
              <p className="body-small text-gray-600">
                Scalability assessments and growth strategy development for sustainable business expansion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto container-padding text-center">
          <h2 className="heading-2 text-white mb-4">
            Ready for strategic transformation?
          </h2>
          <p className="body-large text-gray-300 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how our strategic guidance can help you navigate complex decisions and achieve your business objectives.
          </p>
          <Button
            href="/contact"
            variant="primary"
            size="lg"
            icon="arrow"
          >
            Schedule a consultation
          </Button>
        </div>
      </section>

      <Footer currentService="strategic" />
      <ScrollToTop />
    </div>
  );
}