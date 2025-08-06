import Image from 'next/image';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  title: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
  companyLogo?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Chen",
    title: "Chief Financial Officer",
    company: "TechCorp Industries",
    content: "Nexora Strategies' financial performance analysis transformed our approach to capital allocation. Their insights led to a 23% increase in operational efficiency and helped us secure $50M in Series B funding.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616c5d0b24f?w=150&h=150&fit=crop&crop=faces",
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    title: "CEO & Founder",
    company: "GrowthTech Solutions",
    content: "The strategic guidance team at Nexora helped us navigate a complex acquisition that doubled our market presence. Their expertise in M&A strategy and due diligence was invaluable throughout the process.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=faces",
  },
  {
    id: 3,
    name: "Jennifer Park",
    title: "VP of Operations",
    company: "InnovateCo",
    content: "Their resource allocation optimization reduced our operational costs by 18% while improving service quality. The team's analytical approach and practical recommendations exceeded our expectations.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces",
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="heading-2 text-white mb-4">
            Trusted by industry leaders
          </h2>
          <p className="body-large text-gray-300 max-w-3xl mx-auto">
            See how we&apos;ve helped organizations transform their performance and achieve sustainable growth
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="bg-blue-600 rounded-full p-3 shadow-lg">
                  <Quote className="h-6 w-6 text-white" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4 mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="body-base text-gray-700 mb-6 leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center">
                <div className="relative w-12 h-12 mr-4">
                  <Image
                    src={`${testimonial.avatar}&auto=format&fit=crop`}
                    alt={testimonial.name}
                    fill
                    className="rounded-full object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="body-small text-gray-600">
                    {testimonial.title}
                  </div>
                  <div className="body-small text-blue-600 font-medium">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 border-t border-gray-800 pt-16">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="fade-in">
              <div className="heading-2 text-white mb-2">50+</div>
              <div className="body-base text-gray-400">Clients Served</div>
            </div>
            <div className="fade-in animation-delay-200">
              <div className="heading-2 text-white mb-2">$100M+</div>
              <div className="body-base text-gray-400">Value Created</div>
            </div>
            <div className="fade-in animation-delay-400">
              <div className="heading-2 text-white mb-2">50+</div>
              <div className="body-base text-gray-400">Successful Projects</div>
            </div>
            <div className="fade-in animation-delay-600">
              <div className="heading-2 text-white mb-2">10+</div>
              <div className="body-base text-gray-400">Industries</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
      `}</style>
    </section>
  );
}