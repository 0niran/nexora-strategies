'use client';

import Navigation from '../../components/Navigation';
import HeroSection from '../../components/HeroSection';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import ScrollToTop from '../../components/ScrollToTop';
import { Target, Shield, DollarSign, CheckCircle, BarChart } from 'lucide-react';

export default function ResourceAllocationPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation currentService="resource" />
      
      <HeroSection
        variant="service"
        title="Resource Allocation Optimization"
        description="Maximize efficiency and minimize costs through strategic capital deployment, risk management, and optimal resource utilization frameworks."
        primaryCta={{
          text: "Schedule Consultation",
          href: "/contact"
        }}
        secondaryCta={{
          text: "View Process",
          href: "#process"
        }}
        features={[
          "Capital structure optimization",
          "Risk management frameworks",
          "Resource efficiency analysis",
          "Performance monitoring systems"
        ]}
        badge="Resource Allocation Excellence"
      />

      {/* Services Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="heading-2 text-gray-900 mb-6">
                Strategic Capital Deployment & Risk Management
              </h2>
              <p className="body-large text-gray-600 mb-8">
                Our resource allocation optimization services help organizations deploy capital efficiently, 
                manage risk effectively, and maximize returns on investment. We provide comprehensive 
                frameworks that balance growth objectives with prudent risk management.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="heading-5 text-gray-900 mb-2">Efficient Capital Allocation</h3>
                    <p className="body-base text-gray-600">
                      Optimize capital structure and deployment to maximize returns while maintaining financial stability.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="heading-5 text-gray-900 mb-2">Risk Mitigation</h3>
                    <p className="body-base text-gray-600">
                      Comprehensive risk assessment and management strategies to protect investments and operations.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="heading-5 text-gray-900 mb-2">Performance Optimization</h3>
                    <p className="body-base text-gray-600">
                      Continuous monitoring and adjustment to ensure optimal resource utilization and performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl" id="process">
              <h3 className="heading-3 text-gray-900 mb-8">Our Process</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mr-4 text-white font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="heading-5 text-gray-900 mb-2">Resource Audit</h4>
                    <p className="body-base text-gray-600">
                      Comprehensive analysis of current resource allocation and identification of optimization opportunities.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mr-4 text-white font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="heading-5 text-gray-900 mb-2">Strategy Design</h4>
                    <p className="body-base text-gray-600">
                      Development of customized resource allocation strategies based on business objectives and risk tolerance.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mr-4 text-white font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="heading-5 text-gray-900 mb-2">Implementation</h4>
                    <p className="body-base text-gray-600">
                      Phased rollout of resource optimization strategies with clear metrics and accountability frameworks.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mr-4 text-white font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="heading-5 text-gray-900 mb-2">Ongoing Management</h4>
                    <p className="body-base text-gray-600">
                      Continuous monitoring and refinement to ensure sustained optimization and performance improvement.
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
              Core Resource Allocation Services
            </h2>
            <p className="body-large text-gray-600 max-w-2xl mx-auto">
              Comprehensive services designed to optimize every aspect of your resource allocation and management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="heading-5 text-gray-900 mb-3">Capital Structure Optimization</h3>
              <p className="body-small text-gray-600">
                Strategic optimization of debt-to-equity ratios and capital allocation for maximum efficiency.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="heading-5 text-gray-900 mb-3">Risk Management</h3>
              <p className="body-small text-gray-600">
                Comprehensive risk assessment and mitigation strategies to protect investments and operations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="heading-5 text-gray-900 mb-3">Cash Flow Management</h3>
              <p className="body-small text-gray-600">
                Advanced cash flow forecasting and management to ensure optimal liquidity and working capital.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <BarChart className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="heading-5 text-gray-900 mb-3">Performance Analytics</h3>
              <p className="body-small text-gray-600">
                Real-time monitoring and analytics to track resource utilization and investment performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto container-padding text-center">
          <h2 className="heading-2 text-white mb-4">
            Ready to optimize your resource allocation?
          </h2>
          <p className="body-large text-gray-300 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how our expertise can help you maximize efficiency and minimize costs through strategic resource management.
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

      <Footer currentService="resource" />
      <ScrollToTop />
    </div>
  );
}