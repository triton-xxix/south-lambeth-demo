import { useEffect, useRef } from 'react';
import { MapPin, Phone, ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const areas = [
  'South Lambeth',
  'Vauxhall',
  'Stockwell',
  'Oval',
  'Kennington',
  'Pimlico',
  'Victoria',
  'Westminster',
  'Battersea',
  'Nine Elms',
  'Waterloo',
  'Elephant & Castle',
];

export function Coverage() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image panel animation
      gsap.fromTo(
        imageRef.current,
        { x: '60vw', opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Content animation
      const contentElements = contentRef.current?.querySelectorAll('.animate-item');
      if (contentElements) {
        gsap.fromTo(
          contentElements,
          { x: '-10vw', opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: contentRef.current,
              start: 'top 70%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Chips animation
      const chips = contentRef.current?.querySelectorAll('.area-chip');
      if (chips) {
        gsap.fromTo(
          chips,
          { scale: 0.92, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.4,
            stagger: 0.04,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: chips[0],
              start: 'top 85%',
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
      id="coverage"
      className="relative py-20 lg:py-0 lg:min-h-screen bg-green-800 overflow-hidden"
    >
      <div className="lg:grid lg:grid-cols-2 lg:min-h-screen">
        {/* Left Content */}
        <div
          ref={contentRef}
          className="flex flex-col justify-center px-4 sm:px-6 lg:px-8 xl:px-12 py-12 lg:py-20"
        >
          <div className="max-w-xl">
            <span className="animate-item inline-block text-sm font-semibold text-orange-400 uppercase tracking-widest mb-3">
              Coverage Area
            </span>
            <h2 className="animate-item text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              We Cover{' '}
              <span className="text-orange-400">South East London</span>
            </h2>
            <p className="animate-item text-lg text-white/80 mb-8">
              Based in South Lambeth (SW8), we're never far away. We travel
              across SE London to keep homes dry and secure. Not sure if we
              cover your area? Give us a call!
            </p>

            {/* Areas Grid */}
            <div className="flex flex-wrap gap-2 mb-8">
              {areas.map((area, index) => (
                <div
                  key={index}
                  className="area-chip flex items-center gap-1.5 bg-white/10 hover:bg-white/20 rounded-full px-4 py-2 backdrop-blur-sm transition-colors"
                >
                  <MapPin className="w-4 h-4 text-orange-400" />
                  <span className="text-white font-medium text-sm">{area}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="animate-item flex flex-wrap gap-4">
              <a href="tel:07832767092" className="btn-primary">
                <Phone className="w-5 h-5 mr-2" />
                Check Your Area
              </a>
              <a
                href="tel:07832767092"
                className="btn-secondary"
              >
                Call 07832 767092
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div
          ref={imageRef}
          className="relative h-64 lg:h-auto overflow-hidden"
        >
          <img
            src="/images/hero-roofer.jpg"
            alt="South Lambeth Roofing coverage area South East London"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-800/50 to-transparent lg:bg-gradient-to-l" />
          
          {/* Coverage Badge */}
          <div className="absolute bottom-6 left-6 right-6 lg:bottom-12 lg:left-12 lg:right-12">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-7 h-7 text-slate-900" />
                </div>
                <div>
                  <p className="text-white font-bold text-lg">
                    Based in South Lambeth
                  </p>
                  <p className="text-white/70">
                    Serving all of South East London
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}