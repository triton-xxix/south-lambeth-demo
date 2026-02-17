import { useEffect, useRef } from 'react';
import { Shield, FileText, Users, Award, Phone } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const credentials = [
  {
    icon: Shield,
    title: 'Fully Insured',
    description: 'Complete public liability insurance for your peace of mind.',
  },
  {
    icon: FileText,
    title: 'Transparent Quotes',
    description: 'Clear, honest pricing with no hidden costs or surprises.',
  },
  {
    icon: Users,
    title: 'Tidy, Respectful Crews',
    description: 'We treat your home with care and leave it spotless.',
  },
  {
    icon: Award,
    title: 'Guaranteed Workmanship',
    description: 'Quality work backed by our satisfaction guarantee.',
  },
];

export function About() {
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

      // Credentials animation
      const credItems = contentRef.current?.querySelectorAll('.cred-item');
      if (credItems) {
        gsap.fromTo(
          credItems,
          { y: 18, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.06,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: credItems[0],
              start: 'top 80%',
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
      id="about"
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
              About Us
            </span>
            <h2 className="animate-item text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Why Homeowners Choose{' '}
              <span className="text-orange-400">South Lambeth Roofing</span>
            </h2>
            <p className="animate-item text-lg text-white/80 mb-8">
              We're based in South Lambeth (SW8) and serve homeowners across
              South East London. Our work is tidy, on time, and backed by clear
              communication. With years of experience and a commitment to
              quality, we've built a reputation as the trusted local roofers.
            </p>

            {/* Credentials Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {credentials.map((cred, index) => (
                <div
                  key={index}
                  className="cred-item flex items-start gap-3 bg-white/10 rounded-xl p-4 backdrop-blur-sm"
                >
                  <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <cred.icon className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">
                      {cred.title}
                    </h4>
                    <p className="text-white/70 text-xs mt-0.5">
                      {cred.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Banner */}
            <div className="animate-item bg-orange-500 rounded-2xl p-6">
              <p className="text-slate-900 font-semibold mb-2">
                Need help fast?
              </p>
              <a
                href="tel:07832767092"
                className="inline-flex items-center text-slate-900 font-bold text-lg hover:text-slate-800 transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call 07832 767092
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
            alt="South Lambeth Roofing team at work in South Lambeth"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-800/50 to-transparent lg:bg-gradient-to-l" />
          
          {/* Stats Overlay */}
          <div className="absolute bottom-6 left-6 right-6 lg:bottom-12 lg:left-12 lg:right-12">
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center">
                <div className="text-2xl lg:text-3xl font-bold text-orange-400">
                  5.0★
                </div>
                <div className="text-white/80 text-xs lg:text-sm">
                  Google Rating
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center">
                <div className="text-2xl lg:text-3xl font-bold text-orange-400">
                  27+
                </div>
                <div className="text-white/80 text-xs lg:text-sm">
                  Reviews
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center">
                <div className="text-2xl lg:text-3xl font-bold text-orange-400">
                  SW8
                </div>
                <div className="text-white/80 text-xs lg:text-sm">
                  Based Here
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}