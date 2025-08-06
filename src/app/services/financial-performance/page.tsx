'use client';

import Navigation from '../../components/Navigation';
import HeroSection from '../../components/HeroSection';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import ScrollToTop from '../../components/ScrollToTop';
import { TrendingUp, BarChart3, Calculator, Target, CheckCircle } from 'lucide-react';

export default function FinancialPerformancePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation currentService="financial" />
      
      <HeroSection
        variant="service"
        title="Financial Performance Enhancement"
        description="Transform your financial performance through comprehensive analysis, strategic planning, and proven methodologies that drive sustainable growth and profitability."
        primaryCta={{
          text: "Schedule Consultation",
          href: "/contact"
        }}
        secondaryCta={{
          text: "View Process",
          href: "#process"
        }}
        features={[
          "Comprehensive financial analysis",
          "Data-driven strategic insights",
          "Customized implementation plans", 
          "Ongoing performance monitoring"
        ]}
        badge="Financial Performance Excellence"
      />

      {/* Services Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="heading-2 text-gray-900 mb-6">
                Comprehensive Financial Analysis & Strategic Implementation
              </h2>
              <p className="body-large text-gray-600 mb-8">
                Our financial performance enhancement services provide a complete framework for analyzing, 
                planning, and optimizing your business&apos;s financial health. We combine deep analytical insights 
                with practical implementation strategies to deliver measurable results.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="heading-5 text-gray-900 mb-2">Data-Driven Insights</h3>
                    <p className="body-base text-gray-600">
                      Advanced financial modeling and analytics to uncover hidden opportunities and risks.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="heading-5 text-gray-900 mb-2">Actionable Strategies</h3>
                    <p className="body-base text-gray-600">
                      Customized financial strategies designed for immediate implementation and long-term success.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="heading-5 text-gray-900 mb-2">Ongoing Support</h3>
                    <p className="body-base text-gray-600">
                      Continuous monitoring and adjustment to ensure sustained financial performance improvement.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl" id="process">
              <h3 className="heading-3 text-gray-900 mb-8">Our Process</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-4 text-white font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="heading-5 text-gray-900 mb-2">Initial Assessment</h4>
                    <p className="body-base text-gray-600">
                      Comprehensive analysis of your current financial position, identifying strengths and areas for improvement.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-4 text-white font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="heading-5 text-gray-900 mb-2">Strategy Development</h4>
                    <p className="body-base text-gray-600">
                      Creation of customized financial strategies aligned with your business objectives and market conditions.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-4 text-white font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="heading-5 text-gray-900 mb-2">Implementation</h4>
                    <p className="body-base text-gray-600">
                      Systematic rollout of financial improvements with clear milestones and measurable outcomes.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-4 text-white font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="heading-5 text-gray-900 mb-2">Monitoring & Optimization</h4>
                    <p className="body-base text-gray-600">
                      Ongoing performance tracking and strategy refinement to ensure continued success.
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
              Core Financial Performance Services
            </h2>
            <p className="body-large text-gray-600 max-w-2xl mx-auto">
              Specialized services designed to enhance every aspect of your financial performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="heading-5 text-gray-900 mb-3">Financial Analysis & Assessment</h3>
              <p className="body-small text-gray-600">
                Deep dive into financial statements, cash flow analysis, and comprehensive business health evaluation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="heading-5 text-gray-900 mb-3">Strategy Development</h3>
              <p className="body-small text-gray-600">
                Custom strategies to improve profitability, optimize costs, and enhance operational efficiency.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Calculator className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="heading-5 text-gray-900 mb-3">Financial Planning & Budgeting</h3>
              <p className="body-small text-gray-600">
                Comprehensive budgeting, forecasting, and long-term financial planning for sustainable growth.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="heading-5 text-gray-900 mb-3">Investment Strategy</h3>
              <p className="body-small text-gray-600">
                Strategic capital allocation advice to maximize returns and minimize investment risks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto container-padding text-center">
          <h2 className="heading-2 text-white mb-4">
            Ready to enhance your financial performance?
          </h2>
          <p className="body-large text-gray-300 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how our expertise can help you achieve your financial objectives and drive sustainable growth.
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

      <Footer currentService="financial" />
      <ScrollToTop />
    </div>
  );
}