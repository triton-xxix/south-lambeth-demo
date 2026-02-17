import { useEffect, useRef } from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'Pitched Roof Replacement',
    location: 'South Lambeth',
    image: '/images/new-roof.jpg',
    description: 'Complete roof replacement with premium tiles',
  },
  {
    title: 'Flat Roof Installation',
    location: 'Sydenham',
    image: '/images/flat-roof.jpg',
    description: 'EPDM rubber roofing system installed',
  },
  {
    title: 'Chimney Repointing',
    location: 'Dulwich',
    image: '/images/chimney-repair.jpg',
    description: 'Professional repointing and flashing repair',
  },
  {
    title: 'Guttering & Fascias',
    location: 'Crystal Palace',
    image: '/images/guttering.jpg',
    description: 'New uPVC guttering and fascia boards',
  },
];

export function Projects() {
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
      const cards = cardsRef.current?.querySelectorAll('.project-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 60, opacity: 0, scale: 0.98 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
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
      id="projects"
      className="py-20 lg:py-28 bg-slate-50"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-12 lg:mb-16">
          <span className="inline-block text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Recent <span className="text-blue-700">Projects</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Quality workmanship you can see. Browse our recent roofing projects
            across South East London.
          </p>
        </div>

        {/* Projects Grid */}
        <div
          ref={cardsRef}
          className="grid sm:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} in ${project.location}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Location Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5">
                  <MapPin className="w-4 h-4 text-blue-700" />
                  <span className="text-sm font-medium text-slate-900">
                    {project.location}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="tel:07832767092"
            className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:text-amber-500 transition-colors"
          >
            View More Projects
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}