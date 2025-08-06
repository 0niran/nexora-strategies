import Image from 'next/image';
import Button from './Button';
import { TrendingUp, Target, Shield, BarChart3 } from 'lucide-react';

interface CaseStudy {
  id: number;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  metrics: {
    label: string;
    value: string;
    improvement: string;
  }[];
  image: string;
  service: 'financial' | 'resource' | 'strategic';
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Digital Transformation & Cost Optimization",
    client: "Global Manufacturing Leader",
    industry: "Manufacturing",
    challenge: "A large manufacturing company faced declining margins due to operational inefficiencies and outdated financial processes.",
    solution: "Implemented comprehensive financial performance analysis and process optimization, including real-time cost tracking systems and predictive analytics.",
    results: [
      "Reduced operational costs by 22%",
      "Improved cash flow by $45M annually",
      "Increased profit margins by 18%",
      "Streamlined 15 core financial processes"
    ],
    metrics: [
      { label: "Cost Reduction", value: "22%", improvement: "↓" },
      { label: "Cash Flow Improvement", value: "$45M", improvement: "↑" },
      { label: "Margin Increase", value: "18%", improvement: "↑" }
    ],
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop",
    service: "financial"
  },
  {
    id: 2,
    title: "Strategic Acquisition & Market Expansion",
    client: "Technology Startup",
    industry: "Technology",
    challenge: "A rapidly growing SaaS company needed strategic guidance for international expansion and potential acquisition opportunities.",
    solution: "Provided comprehensive market analysis, developed acquisition strategy, and guided due diligence process for three strategic acquisitions.",
    results: [
      "Successfully completed 2 strategic acquisitions",
      "Expanded into 4 new international markets",
      "Increased customer base by 300%",
      "Achieved $120M Series C funding"
    ],
    metrics: [
      { label: "Market Expansion", value: "4", improvement: "↑" },
      { label: "Customer Growth", value: "300%", improvement: "↑" },
      { label: "Funding Secured", value: "$120M", improvement: "↑" }
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    service: "strategic"
  },
  {
    id: 3,
    title: "Capital Structure Optimization",
    client: "Healthcare Network",
    industry: "Healthcare",
    challenge: "A multi-location healthcare network struggled with inefficient capital allocation and high operational costs across facilities.",
    solution: "Redesigned capital allocation framework, optimized resource distribution across locations, and implemented performance monitoring systems.",
    results: [
      "Optimized capital allocation across 25 locations",
      "Reduced facility operational costs by 15%",
      "Improved patient satisfaction scores by 28%",
      "Enhanced ROI by 32%"
    ],
    metrics: [
      { label: "Cost Optimization", value: "15%", improvement: "↓" },
      { label: "Satisfaction Increase", value: "28%", improvement: "↑" },
      { label: "ROI Improvement", value: "32%", improvement: "↑" }
    ],
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop",
    service: "resource"
  }
];

const getServiceIcon = (service: string) => {
  switch (service) {
    case 'financial':
      return TrendingUp;
    case 'resource':
      return Target;
    case 'strategic':
      return Shield;
    default:
      return BarChart3;
  }
};

const getServiceColor = (service: string) => {
  switch (service) {
    case 'financial':
      return 'text-blue-600';
    case 'resource':
      return 'text-green-600';
    case 'strategic':
      return 'text-purple-600';
    default:
      return 'text-gray-600';
  }
};

export default function CaseStudies() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="heading-2 text-gray-900 mb-4">
            Proven results across industries
          </h2>
          <p className="body-large text-gray-600 max-w-3xl mx-auto">
            Discover how we&apos;ve helped organizations achieve transformational results through strategic consulting and expert guidance
          </p>
        </div>

        <div className="space-y-20">
          {caseStudies.map((study, index) => {
            const Icon = getServiceIcon(study.service);
            const isReversed = index % 2 === 1;
            
            return (
              <div 
                key={study.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  isReversed ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={isReversed ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-4">
                    <div className={`p-2 rounded-lg bg-gray-100 mr-3`}>
                      <Icon className={`h-5 w-5 ${getServiceColor(study.service)}`} />
                    </div>
                    <span className="body-small text-gray-500 uppercase tracking-wider font-semibold">
                      {study.industry} • Case Study
                    </span>
                  </div>

                  <h3 className="heading-3 text-gray-900 mb-4">
                    {study.title}
                  </h3>

                  <p className="body-base text-gray-600 mb-6">
                    <strong>Challenge:</strong> {study.challenge}
                  </p>

                  <p className="body-base text-gray-600 mb-8">
                    <strong>Solution:</strong> {study.solution}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-8 p-6 bg-gray-50 rounded-xl">
                    {study.metrics.map((metric, i) => (
                      <div key={i} className="text-center">
                        <div className="flex items-center justify-center mb-1">
                          <span className="heading-4 text-gray-900">{metric.value}</span>
                          <span className={`ml-1 text-sm ${
                            metric.improvement === '↑' ? 'text-green-600' : 'text-red-600'
                          }`}>
                            {metric.improvement}
                          </span>
                        </div>
                        <div className="body-small text-gray-600">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Results */}
                  <div className="space-y-2 mb-8">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Results:</h4>
                    {study.results.map((result, i) => (
                      <div key={i} className="flex items-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                        <span className="body-base text-gray-700">{result}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    href="/contact"
                    variant="outline"
                    icon="arrow"
                  >
                    Discuss Your Project
                  </Button>
                </div>

                {/* Image */}
                <div className={isReversed ? 'lg:col-start-1' : ''}>
                  <div className="relative h-80 w-full overflow-hidden rounded-2xl shadow-xl">
                    <Image
                      src={`${study.image}&auto=format&fit=crop`}
                      alt={study.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="transition-transform duration-500 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    
                    {/* Client Badge */}
                    <div className="absolute top-6 left-6">
                      <div className="glass-effect px-4 py-2 rounded-lg">
                        <span className="body-small font-semibold text-gray-900">
                          {study.client}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}