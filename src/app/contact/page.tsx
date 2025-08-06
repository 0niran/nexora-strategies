'use client';

import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Button from '../components/Button';
import ScrollToTop from '../components/ScrollToTop';
import { Mail, Phone, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 to-teal-50 px-4">
          <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h1>
            <p className="text-gray-600 mb-6">
              Your consultation request has been submitted successfully. We&apos;ll contact you within 24 hours to schedule your strategic consultation.
            </p>
            
            <div className="space-y-3">
              <Link href="/" className="block">
                <Button variant="primary" className="w-full">
                  Return to Home
                </Button>
              </Link>
              <Link href="/#services" className="block">
                <Button variant="outline" className="w-full">
                  View Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
        <ScrollToTop />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-600 animate-gradient-shift bg-[length:300%_300%]"></div>
        
        {/* Enhanced Visual Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
          <div className="absolute top-20 right-20 w-64 h-64 bg-emerald-300/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-teal-300/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <span className="inline-block px-6 py-3 bg-white/20 backdrop-blur-lg rounded-full text-emerald-100 text-sm font-medium border border-white/30 shadow-lg">
              ✨ Free Strategic Consultation - No Commitment Required
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Ready to Transform
            <span className="block bg-gradient-to-r from-emerald-200 via-white to-emerald-100 bg-clip-text text-transparent">
              Your Business?
            </span>
          </h1>
          
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed mb-10">
            Schedule a consultation with our expert team and discover proven strategies to accelerate your growth, optimize performance, and achieve your strategic objectives.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <CheckCircle className="h-8 w-8 text-emerald-200 mb-3" />
              <h3 className="font-semibold text-white mb-2">Free 30-Min Call</h3>
              <p className="text-emerald-100 text-sm text-center">Comprehensive business assessment at no cost</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <CheckCircle className="h-8 w-8 text-emerald-200 mb-3" />
              <h3 className="font-semibold text-white mb-2">24-Hour Response</h3>
              <p className="text-emerald-100 text-sm text-center">Quick turnaround for your consultation request</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <CheckCircle className="h-8 w-8 text-emerald-200 mb-3" />
              <h3 className="font-semibold text-white mb-2">Custom Strategy</h3>
              <p className="text-emerald-100 text-sm text-center">Tailored solutions for your specific challenges</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/80 via-white to-teal-50/80"></div>
          <div className="absolute top-40 left-20 w-64 h-64 bg-emerald-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 right-20 w-80 h-80 bg-teal-200/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fill out the form below and we&apos;ll be in touch within 24 hours to discuss your business objectives.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 xl:gap-12 items-start">
            {/* Contact Form - Takes 2 columns */}
            <div className="lg:col-span-2">
              <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 lg:p-10 border border-white/50 hover:shadow-3xl transition-all duration-500">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mr-4">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Contact Information</h3>
                    <p className="text-gray-600">Let&apos;s discuss your business goals</p>
                  </div>
                </div>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-800">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-4 bg-gray-50/80 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:bg-white transition-all duration-300 text-gray-900 placeholder-gray-500"
                        placeholder="John Smith"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-800">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-4 bg-gray-50/80 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:bg-white transition-all duration-300 text-gray-900 placeholder-gray-500"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="company" className="block text-sm font-semibold text-gray-800">
                        Company *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-4 bg-gray-50/80 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:bg-white transition-all duration-300 text-gray-900 placeholder-gray-500"
                        placeholder="Acme Corporation"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-800">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-4 bg-gray-50/80 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:bg-white transition-all duration-300 text-gray-900 placeholder-gray-500"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="service" className="block text-sm font-semibold text-gray-800">
                      Primary Service Interest *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 bg-gray-50/80 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:bg-white transition-all duration-300 text-gray-900 appearance-none cursor-pointer"
                    >
                      <option value="">Choose your primary interest...</option>
                      <option value="financial-performance">💼 Financial Performance Enhancement</option>
                      <option value="resource-allocation">⚡ Resource Allocation Optimization</option>
                      <option value="strategic-guidance">🎯 Strategic Guidance & Advisory</option>
                      <option value="general-consulting">🚀 General Business Consulting</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-800">
                      Tell Us About Your Business Goals *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-4 bg-gray-50/80 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:bg-white transition-all duration-300 text-gray-900 placeholder-gray-500 resize-none"
                      placeholder="Share your current challenges, business objectives, and what success looks like for your organization..."
                    />
                  </div>

                  <div className="pt-4">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300"
                      disabled={isSubmitting}
                      icon={isSubmitting ? undefined : "arrow"}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Submitting Your Request...
                        </>
                      ) : (
                        'Schedule Free Consultation ✨'
                      )}
                    </Button>
                  </div>

                  <div className="bg-emerald-50/50 rounded-xl p-4 border border-emerald-100">
                    <p className="text-sm text-gray-600 text-center flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                      Your information is secure and will never be shared.
                    </p>
                  </div>
                </form>
              </div>
            </div>

            {/* Sidebar - Contact Info & Process */}
            <div className="space-y-8">
              {/* Direct Contact */}
              <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/50">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Prefer to Call?</h3>
                  <p className="text-gray-600 text-sm">Speak directly with our team</p>
                </div>
                
                <div className="space-y-6">
                  <div className="text-center p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl border border-emerald-100">
                    <h4 className="font-semibold text-gray-900 mb-1">Direct Line</h4>
                    <a href="tel:+1-555-123-4567" className="text-xl font-bold text-emerald-600 hover:text-emerald-700 transition-colors">
                      +1 (555) 123-4567
                    </a>
                  </div>
                  
                  <div className="text-center p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl border border-gray-100">
                    <h4 className="font-semibold text-gray-900 mb-1">Email Us</h4>
                    <a href="mailto:info@nexorastrategies.com" className="text-emerald-600 hover:text-emerald-700 transition-colors font-medium">
                      info@nexorastrategies.com
                    </a>
                  </div>
                  
                  <div className="text-center p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-100">
                    <h4 className="font-semibold text-gray-900 mb-1">Office</h4>
                    <p className="text-gray-600 text-sm">
                      123 Financial District<br />
                      Toronto, ON M5H 2N2
                    </p>
                  </div>
                </div>
              </div>

              {/* Our Process */}
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-8 shadow-xl text-white">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-lg rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Our 3-Step Process</h3>
                  <p className="text-emerald-100 text-sm">Simple, transparent, effective</p>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-white/20 backdrop-blur-lg rounded-xl flex items-center justify-center mr-4 mt-1">
                      <span className="text-white text-sm font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Discovery Call</h4>
                      <p className="text-emerald-100 text-sm leading-relaxed">30-minute consultation to understand your challenges and objectives</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-white/20 backdrop-blur-lg rounded-xl flex items-center justify-center mr-4 mt-1">
                      <span className="text-white text-sm font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Strategic Analysis</h4>
                      <p className="text-emerald-100 text-sm leading-relaxed">Deep dive into your business metrics and identify improvement opportunities</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-white/20 backdrop-blur-lg rounded-xl flex items-center justify-center mr-4 mt-1">
                      <span className="text-white text-sm font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Custom Proposal</h4>
                      <p className="text-emerald-100 text-sm leading-relaxed">Tailored strategy and implementation plan within 48 hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
}