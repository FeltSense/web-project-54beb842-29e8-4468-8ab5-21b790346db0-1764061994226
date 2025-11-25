'use client';

import { Scale, Users, FileText, Award } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Scale,
      title: "Practice Areas",
      description: "Comprehensive legal expertise across corporate law, litigation, real estate, family law, immigration, and intellectual property.",
      gradient: "from-blue-50 to-blue-100"
    },
    {
      icon: Users,
      title: "Attorney Profiles",
      description: "Distinguished attorneys with verified credentials, bar admissions, and a proven track record of notable case victories.",
      gradient: "from-amber-50 to-amber-100"
    },
    {
      icon: Award,
      title: "Case Results",
      description: "Documented success stories and client testimonials showcasing our commitment to excellence and confidentiality.",
      gradient: "from-blue-50 to-blue-100"
    },
    {
      icon: FileText,
      title: "Legal Resources",
      description: "Expert insights and thought leadership through our comprehensive blog covering current legal trends and analysis.",
      gradient: "from-amber-50 to-amber-100"
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider bg-amber-50 px-4 py-2 rounded-full">
              Our Services
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive Legal Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Delivering exceptional legal services with integrity, expertise, and a commitment to your success
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                {/* Icon Container */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-blue-700" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Decorative Bottom Border */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-700 to-amber-500 group-hover:w-full transition-all duration-500 rounded-b-2xl"></div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="px-8 py-4 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Schedule Consultation
            </a>
            <a
              href="#pricing"
              className="px-8 py-4 bg-white text-blue-700 font-semibold rounded-lg border-2 border-blue-700 hover:bg-blue-50 hover:scale-105 transition-all duration-300"
            >
              View Pricing
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
