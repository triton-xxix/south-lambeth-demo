import { useEffect, useRef } from 'react';
import { Wrench, Home, Layers, BrickWall, Droplets, AlertTriangle, Phone } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Wrench,
    title: 'Roof Repairs',
    description:
      'From leaks to storm damage—fast, lasting fixes. We diagnose problems quickly and repair them properly.',
    image: '/images/roof-repair.jpg',
  },
  {
    icon: Home,
    title: 'New Roofs',
    description:
      'Full replacements with quality materials and a clean finish. Built to last for decades.',
    image: '/images/new-roof.jpg',
  },
  {
    icon: Layers,
    title: 'Flat Roofing',
    description:
      'EPDM, GRP, and high-performance felt systems. Professional installation with guaranteed waterproofing.',
    image: '/images/flat-roof.jpg',
  },
  {
    icon: BrickWall,
    title: 'Chimney Repairs',
    description:
      'Repointing, flashing, and safe structural repairs. Keep your chimney safe and weatherproof.',
    image: '/images/chimney-repair.jpg',
  },
  {
    icon: Droplets,
    title: 'Guttering & Fascias',
    description:
      'Proper drainage and neat, durable finishes. Protect your home from water damage.',
    image: '/images/guttering.jpg',
  },
  {
    icon: AlertTriangle,
    title: 'Emergency Callouts',
    description:
      'Rapid response when you need it most. Same-day service for urgent roofing issues.',
    image: '/images/emergency-repair.jpg',
  },
];

export function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        headingRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Cards animation
      const cards = cardsRef.current?.querySelectorAll('.service-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 60, opacity: 0, scale: 0.98 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: 0.08,
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
      id="services"
      className="py-20 lg:py-28 bg-slate-50"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-12 lg:mb-16">
          <span className="inline-block text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Roofing Services in{' '}
            <span className="text-blue-700">South Lambeth & SE London</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            From minor repairs to complete roof replacements, we deliver quality
            workmanship you can trust.
          </p>
        </div>

        {/* Services Grid */}
        <div
          ref={cardsRef}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={`${service.title} in South Lambeth London`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
                  <service.icon className="w-6 h-6 text-blue-700" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-4 line-clamp-2">
                  {service.description}
                </p>
                <a
                  href="tel:07832767092"
                  className="inline-flex items-center text-blue-700 font-semibold hover:text-orange-500 transition-colors"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}