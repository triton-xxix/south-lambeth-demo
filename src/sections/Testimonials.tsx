import { useEffect, useRef } from 'react';
import { Star, Quote } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    text: "Had a leak during heavy rain—South Lambeth Roofing came quickly and fixed it properly. Great communication and fair price. Would definitely recommend!",
    name: 'James',
    location: 'South Lambeth',
    rating: 5,
  },
  {
    text: "New flat roof looks perfect. Clean work, on time, and explained everything clearly. Highly recommend to anyone in the area.",
    name: 'Sofia',
    location: 'Sydenham',
    rating: 5,
  },
  {
    text: "Chimney repairs and guttering done to a high standard. Polite team and left everything tidy. Very professional service.",
    name: 'Mark',
    location: 'Dulwich',
    rating: 5,
  },
];

export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        headingRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Cards animation
      const cards = cardsRef.current?.querySelectorAll('.testimonial-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 50, opacity: 0, scale: 0.98 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: 0.12,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="py-20 lg:py-28 bg-slate-50"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-12 lg:mb-16">
          <span className="inline-block text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            5-Star Reviews From{' '}
            <span className="text-blue-700">Local Customers</span>
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 fill-orange-400 text-orange-400"
                />
              ))}
            </div>
            <span className="text-slate-600 font-medium">
              Rated 5.0 on Google (1 review)
            </span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div
          ref={cardsRef}
          className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card bg-white rounded-3xl p-6 lg:p-8 shadow-lg relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 w-10 h-10 bg-green-50 rounded-full flex items-center justify-center">
                <Quote className="w-5 h-5 text-blue-600" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-orange-400 text-orange-400"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-slate-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-700 font-bold">
                    {testimonial.name[0]}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-slate-500">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
          <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm">
            <Star className="w-5 h-5 fill-orange-400 text-orange-400" />
            <span className="text-sm font-medium text-slate-700">
              5.0 Google Rating
            </span>
          </div>
          <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm">
            <span className="text-sm font-medium text-slate-700">
              Fully Insured
            </span>
          </div>
          <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm">
            <span className="text-sm font-medium text-slate-700">
              Free Quotes
            </span>
          </div>
          <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm">
            <span className="text-sm font-medium text-slate-700">
              Local SW8 Business
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}