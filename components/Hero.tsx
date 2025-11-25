import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  const trustIndicators = [
    { label: 'Enterprise Clients', value: '500+' },
    { label: 'Success Rate', value: '98%' },
    { label: 'Years Experience', value: '15+' }
  ];

  const keyBenefits = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Rapid Implementation',
      description: 'Deploy solutions in weeks, not months'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Enterprise Security',
      description: 'Bank-grade protection for your data'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      ),
      title: 'Measurable ROI',
      description: 'Track performance with real-time analytics'
    }
  ];

  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-100 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            {/* Trust Badge */}
            <div className="inline-flex items-center space-x-2 bg-white border border-amber-200 rounded-full px-4 py-2 mb-6 shadow-sm">
              <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">Trusted by Fortune 500 Companies</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Transform Your Business with
              <span className="block text-blue-700 mt-2">Expert Consulting</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              We deliver strategic solutions that drive growth, optimize operations, and position your business for long-term success in an evolving marketplace.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Link
                href="#contact"
                className="group px-8 py-4 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-800 hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Schedule Consultation</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="#services"
                className="px-8 py-4 bg-white text-blue-700 border-2 border-blue-700 rounded-lg font-semibold hover:bg-blue-50 hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              {trustIndicators.map((indicator, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-700 mb-1">{indicator.value}</div>
                  <div className="text-sm text-gray-600">{indicator.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            {/* Main Image Card */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80"
                alt="Professional business consulting team"
                width={800}
                height={600}
                className="w-full h-auto"
                priority
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
            </div>

            {/* Floating Benefit Cards */}
            <div className="hidden lg:block absolute -left-8 top-1/2 -translate-y-1/2 w-72">
              <div className="bg-white rounded-xl shadow-xl p-6 border border-gray-100 transform hover:scale-105 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-700 to-blue-900 rounded-lg flex items-center justify-center text-white">
                    {keyBenefits[0].icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{keyBenefits[0].title}</h3>
                    <p className="text-sm text-gray-600">{keyBenefits[0].description}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden lg:block absolute -right-8 bottom-12 w-72">
              <div className="bg-white rounded-xl shadow-xl p-6 border border-gray-100 transform hover:scale-105 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center text-white">
                    {keyBenefits[2].icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{keyBenefits[2].title}</h3>
                    <p className="text-sm text-gray-600">{keyBenefits[2].description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Features Bar */}
        <div className="mt-16 lg:mt-20 grid sm:grid-cols-3 gap-8">
          {keyBenefits.map((benefit, index) => (
            <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-xl border border-gray-200 hover:border-amber-500 hover:shadow-lg transition-all duration-300 group">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 group-hover:bg-blue-700 rounded-lg flex items-center justify-center text-blue-700 group-hover:text-white transition-colors duration-300">
                {benefit.icon}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
