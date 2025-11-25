'use client';

import { Check, Sparkles, Zap } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            Special Pre-Order Offer
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Lock in your exclusive pre-order price today and be among the first to experience excellence
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-lg mx-auto">
          <div className="relative">
            {/* Popular Badge */}
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-10">
              <div className="bg-gradient-to-r from-blue-700 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                <Zap className="w-4 h-4 fill-amber-500 text-amber-500" />
                Limited Time Offer
              </div>
            </div>

            {/* Main Card */}
            <div className="bg-white rounded-2xl shadow-2xl border-2 border-blue-100 overflow-hidden transition-transform hover:scale-105 duration-300">
              {/* Card Header */}
              <div className="bg-gradient-to-br from-blue-700 to-blue-800 text-white p-8 text-center">
                <h3 className="text-2xl font-bold mb-2">Pre-Order Special</h3>
                <p className="text-blue-200 mb-6">Be an early adopter and save</p>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-5xl md:text-6xl font-bold">$29</span>
                </div>
                <p className="text-blue-200 mt-2">One-time payment</p>
              </div>

              {/* Card Body */}
              <div className="p-8">
                {/* Features List */}
                <ul className="space-y-4 mb-8">
                  {[
                    'Full access to all features',
                    'Priority customer support',
                    'Lifetime updates included',
                    'Early access to new releases',
                    'Exclusive community access',
                    '30-day money-back guarantee',
                    'Premium onboarding experience',
                    'No hidden fees or charges'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center mt-0.5">
                        <Check className="w-4 h-4 text-white stroke-[3]" />
                      </div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Stripe Button */}
                <button
                  onClick={() => window.location.href = 'https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00'}
                  className="w-full py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Pre-Order Now - $29
                </button>

                {/* Trust Indicators */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-center gap-6 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Secure Payment</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Money-back Guarantee</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Hint */}
        <div className="text-center mt-12">
          <p className="text-gray-600">
            Have questions?{' '}
            <a href="#contact" className="text-blue-700 hover:text-amber-500 font-semibold transition-colors">
              Contact us
            </a>
            {' '}and we'll help you out.
          </p>
        </div>
      </div>
    </section>
  );
}
