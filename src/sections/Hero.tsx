import { useEffect, useRef } from 'react';
import { Phone, MapPin, Star, Shield, ClipboardCheck, Clock, ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const infoCardRef = useRef<HTMLDivElement>(null);
  const contactStripRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial states
      gsap.set('.hero-bg', { scale: 1.08, opacity: 0 });
      gsap.set('.hero-headline', { y: 40, opacity: 0 });
      gsap.set('.hero-subheadline', { y: 24, opacity: 0 });
      gsap.set('.hero-trust', { y: 16, opacity: 0 });
      gsap.set('.hero-buttons', { y: 18, opacity: 0 });
      gsap.set(infoCardRef.current, { x: '8vw', opacity: 0 });
      gsap.set(contactStripRef.current, { y: 12, opacity: 0 });

      // Animation timeline
      const tl = gsap.timeline({ delay: 0.2 });

      tl.to('.hero-bg', {
        scale: 1,
        opacity: 1,
        duration: 1.1,
        ease: 'power2.out',
      })
        .to('.hero-headline', {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power2.out',
        })
        .to(
          '.hero-subheadline',
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: 'power2.out',
          },
          '-=0.4'
        )
        .to(
          '.hero-trust',
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: 'power2.out',
          },
          '-=0.3'
        )
        .to(
          '.hero-buttons',
          {
            y: 0,
            opacity: 1,
            duration: 0.55,
            ease: 'power2.out',
          },
          '-=0.25'
        )
        .to(
          infoCardRef.current,
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out',
          },
          '-=0.5'
        )
        .to(
          contactStripRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: 'power2.out',
          },
          '-=0.4'
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen w-full overflow-hidden bg-blue-800"
    >
      {/* Background Image */}
      <div className="hero-bg absolute inset-0">
        <img
          src="/images/hero-roofer.jpg"
          alt="Professional roofer repairing roof in South Lambeth London"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(110deg, rgba(30,58,138,0.88) 0%, rgba(30,58,138,0.65) 55%, rgba(30,58,138,0.35) 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 xl:px-12 pt-20"
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              {/* Headline */}
              <h1 className="hero-headline text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                Trusted Local Roofers in{' '}
                <span className="text-amber-400">South Lambeth</span>
              </h1>

              {/* Subheadline */}
              <p className="hero-subheadline text-lg sm:text-xl text-white/80 max-w-xl">
                Reliable repairs, new roofs, and flat roofing across South Lambeth
                and South East London. Fully insured with free quotes.
              </p>

              {/* Trust Row */}
              <div className="hero-trust flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <span className="text-white font-semibold">
                  5.0 Google Rating
                </span>
                <span className="text-white/60">(1 review)</span>
              </div>

              {/* CTA Buttons */}
              <div className="hero-buttons flex flex-wrap gap-4">
                <a href="tel:07832767092" className="btn-primary">
                  <Phone className="w-5 h-5 mr-2" />
                  Call 07832 767092
                </a>
                <button onClick={scrollToServices} className="btn-secondary">
                  View Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </div>

            {/* Right Info Card */}
            <div
              ref={infoCardRef}
              className="hidden lg:block bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20"
            >
              <h3 className="text-xl font-bold text-white mb-6">
                Why Choose South Lambeth Roofing?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Fully Insured</h4>
                    <p className="text-white/70 text-sm">
                      Complete public liability coverage
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <ClipboardCheck className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Free Quotes</h4>
                    <p className="text-white/70 text-sm">
                      No obligation, transparent pricing
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">
                      Emergency Callouts
                    </h4>
                    <p className="text-white/70 text-sm">
                      Rapid response when you need us
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Contact Strip */}
        <div
          ref={contactStripRef}
          className="absolute bottom-6 left-4 right-4 sm:left-6 sm:right-6 lg:left-8 lg:right-8 xl:left-12 xl:right-12"
        >
          <div className="flex flex-wrap items-center justify-between gap-4 bg-white/10 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/20">
            <div className="flex items-center gap-6">
              <a
                href="tel:07832767092"
                className="flex items-center gap-2 text-white hover:text-amber-400 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span className="font-semibold">07832 767092</span>
              </a>
              <div className="hidden sm:flex items-center gap-2 text-white/70">
                <MapPin className="w-5 h-5" />
                <span>Wandsworth Rd, South Lambeth, London SW8 3JL</span>
              </div>
            </div>
            <button
              onClick={scrollToContact}
              className="text-amber-400 font-semibold hover:text-amber-300 transition-colors flex items-center gap-1"
            >
              Get Free Quote
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}