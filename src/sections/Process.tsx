import { useEffect, useRef } from 'react';
import { ClipboardCheck, FileText, Hammer, ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: '01',
    icon: ClipboardCheck,
    title: 'Book a Free Survey',
    description:
      'We assess your roof and explain your options. No obligation, just honest advice.',
  },
  {
    number: '02',
    icon: FileText,
    title: 'Get a Clear Quote',
    description:
      'No hidden costs—just honest pricing and a timeline that works for you.',
  },
  {
    number: '03',
    icon: Hammer,
    title: 'Work Begins',
    description:
      'We complete the job on schedule and leave your home tidy and secure.',
  },
];

export function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image panel animation
      gsap.fromTo(
        imageRef.current,
        { x: '-60vw', opacity: 0 },
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
          { x: '10vw', opacity: 0 },
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

      // Steps animation
      const stepItems = contentRef.current?.querySelectorAll('.step-item');
      if (stepItems) {
        gsap.fromTo(
          stepItems,
          { y: 22, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: stepItems[0],
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative py-20 lg:py-0 lg:min-h-screen bg-green-800 overflow-hidden"
    >
      <div className="lg:grid lg:grid-cols-2 lg:min-h-screen">
        {/* Left Image */}
        <div
          ref={imageRef}
          className="relative h-64 lg:h-auto overflow-hidden order-2 lg:order-1"
        >
          <img
            src="/images/roof-repair.jpg"
            alt="Roofer working on roof in South Lambeth"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-green-800/50 to-transparent lg:bg-gradient-to-r" />
        </div>

        {/* Right Content */}
        <div
          ref={contentRef}
          className="flex flex-col justify-center px-4 sm:px-6 lg:px-8 xl:px-12 py-12 lg:py-20 order-1 lg:order-2"
        >
          <div className="max-w-xl">
            <span className="animate-item inline-block text-sm font-semibold text-orange-400 uppercase tracking-widest mb-3">
              Our Process
            </span>
            <h2 className="animate-item text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              How It <span className="text-orange-400">Works</span>
            </h2>
            <p className="animate-item text-lg text-white/80 mb-8">
              Getting your roof fixed or replaced shouldn't be complicated. Our
              simple three-step process makes it easy.
            </p>

            {/* Steps */}
            <div className="space-y-6 mb-8">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="step-item flex items-start gap-4 bg-white/10 rounded-2xl p-5 backdrop-blur-sm"
                >
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-orange-500 rounded-xl flex items-center justify-center">
                      <step.icon className="w-7 h-7 text-slate-900" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-orange-400 font-bold text-sm">
                        Step {step.number}
                      </span>
                    </div>
                    <h4 className="font-bold text-white text-lg mb-1">
                      {step.title}
                    </h4>
                    <p className="text-white/70 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button
              onClick={scrollToContact}
              className="animate-item btn-primary"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}