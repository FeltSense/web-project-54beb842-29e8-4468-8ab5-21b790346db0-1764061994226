'use client';

import Image from 'next/image';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Mitchell",
      role: "CEO, TechVentures",
      image: "https://i.pravatar.cc/150?img=47",
      quote: "The level of professionalism and attention to detail exceeded our expectations. Our project was delivered on time and beyond what we imagined.",
      rating: 5
    },
    {
      id: 2,
      name: "Marcus Chen",
      role: "Founder, InnovateLabs",
      image: "https://i.pravatar.cc/150?img=33",
      quote: "Working with this team transformed our business. Their strategic approach and innovative solutions delivered measurable results within months.",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Director, Global Solutions",
      image: "https://i.pravatar.cc/150?img=45",
      quote: "Exceptional service from start to finish. The team's expertise and dedication made what seemed impossible become our greatest success story.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-50 rounded-full mb-4">
            <span className="text-blue-700 font-semibold text-sm tracking-wide uppercase">
              Client Success Stories
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover why businesses choose us to drive their success forward
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 relative overflow-hidden group"
            >
              {/* Accent Corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-amber-500/10 to-transparent rounded-bl-full" />
              
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-amber-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 text-lg leading-relaxed mb-8 relative z-10">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-blue-700 ring-offset-2">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>

              {/* Hover Accent */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-700 via-amber-500 to-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
