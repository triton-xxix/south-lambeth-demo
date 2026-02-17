import { useEffect, useRef, useState } from 'react';
import { Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { toast } from 'sonner';

gsap.registerPlugin(ScrollTrigger);

const services = [
  'Roof Repairs',
  'New Roof',
  'Flat Roofing',
  'Chimney Repairs',
  'Guttering & Fascias',
  'Emergency Callout',
  'Other',
];

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    postcode: '',
    service: '',
    message: '',
  });

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

      // Form fields animation
      const formFields = contentRef.current?.querySelectorAll('.form-field');
      if (formFields) {
        gsap.fromTo(
          formFields,
          { y: 18, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.06,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: formFields[0],
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.phone || !formData.service) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success('Thank you! We will contact you shortly.');
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-20 lg:py-0 lg:min-h-screen bg-blue-800 overflow-hidden"
    >
      <div className="lg:grid lg:grid-cols-2 lg:min-h-screen">
        {/* Left Content */}
        <div
          ref={contentRef}
          className="flex flex-col justify-center px-4 sm:px-6 lg:px-8 xl:px-12 py-12 lg:py-20"
        >
          <div className="max-w-xl">
            <span className="animate-item inline-block text-sm font-semibold text-amber-400 uppercase tracking-widest mb-3">
              Contact Us
            </span>
            <h2 className="animate-item text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Get Your{' '}
              <span className="text-amber-400">Free Quote</span>
            </h2>
            <p className="animate-item text-lg text-white/80 mb-8">
              Tell us what you need. We'll reply within one business day.
            </p>

            {/* Contact Details */}
            <div className="animate-item flex flex-wrap gap-4 mb-8">
              <a
                href="tel:07832767092"
                className="flex items-center gap-3 bg-white/10 rounded-xl p-4 hover:bg-white/20 transition-colors"
              >
                <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-slate-900" />
                </div>
                <div>
                  <p className="text-white/70 text-sm">Call us</p>
                  <p className="text-white font-bold">07832 767092</p>
                </div>
              </a>
              <div className="flex items-center gap-3 bg-white/10 rounded-xl p-4">
                <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <p className="text-white/70 text-sm">Visit us</p>
                  <p className="text-white font-bold text-sm">
                    Wandsworth Rd, South Lambeth
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            {isSubmitted ? (
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center border border-white/20">
                <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-slate-900" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Thank You!
                </h3>
                <p className="text-white/80">
                  We've received your request and will contact you within one
                  business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="form-field">
                    <label className="block text-white/80 text-sm mb-1.5">
                      Name <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-amber-400 transition-colors"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="form-field">
                    <label className="block text-white/80 text-sm mb-1.5">
                      Phone <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-amber-400 transition-colors"
                      placeholder="Your phone number"
                      required
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="form-field">
                    <label className="block text-white/80 text-sm mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-amber-400 transition-colors"
                      placeholder="Your email"
                    />
                  </div>
                  <div className="form-field">
                    <label className="block text-white/80 text-sm mb-1.5">
                      Postcode
                    </label>
                    <input
                      type="text"
                      name="postcode"
                      value={formData.postcode}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-amber-400 transition-colors"
                      placeholder="e.g., SW8 3JL"
                    />
                  </div>
                </div>
                <div className="form-field">
                  <label className="block text-white/80 text-sm mb-1.5">
                    Service Needed <span className="text-amber-400">*</span>
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-amber-400 transition-colors appearance-none"
                    required
                  >
                    <option value="" className="bg-blue-800">
                      Select a service
                    </option>
                    {services.map((service, index) => (
                      <option key={index} value={service} className="bg-blue-800">
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-field">
                  <label className="block text-white/80 text-sm mb-1.5">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-amber-400 transition-colors resize-none"
                    placeholder="Tell us about your roofing needs..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="form-field w-full btn-primary disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Clock className="w-5 h-5 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Request Free Quote
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Right Image */}
        <div
          ref={imageRef}
          className="relative h-64 lg:h-auto overflow-hidden"
        >
          <img
            src="/images/hero-roofer.jpg"
            alt="South Lambeth Roofing contact"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-800/50 to-transparent lg:bg-gradient-to-l" />
          
          {/* Trust Badge */}
          <div className="absolute bottom-6 left-6 right-6 lg:bottom-12 lg:left-12 lg:right-12">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-amber-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-7 h-7 text-slate-900" />
                </div>
                <div>
                  <p className="text-white font-bold text-lg">
                    Quick Response
                  </p>
                  <p className="text-white/70">
                    Free quotes • Emergency callouts available
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