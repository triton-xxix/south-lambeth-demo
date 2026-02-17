import { useEffect, useRef, useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: 'How quickly can you attend a leak?',
    answer:
      'We aim to respond the same day or next day for urgent leaks. For emergency situations, we prioritize rapid response to prevent further damage to your property.',
  },
  {
    question: 'Do you provide free quotes?',
    answer:
      'Yes, absolutely. We offer free, no-obligation surveys and clear written quotes. There are no hidden costs—just honest pricing and a timeline that works for you.',
  },
  {
    question: 'Are you fully insured?',
    answer:
      'Yes, we carry full public liability insurance for every project. This protects both our team and your property, giving you complete peace of mind.',
  },
  {
    question: 'Do you repair flat roofs?',
    answer:
      'Absolutely. We install and repair EPDM, GRP, and felt flat roofs. Our team has extensive experience with all types of flat roofing systems.',
  },
  {
    question: 'Which areas do you cover?',
    answer:
      "We're based in South Lambeth (SW8) and serve homeowners across South East London, including Sydenham, Dulwich, Crystal Palace, Penge, and surrounding areas.",
  },
];

export function FAQ() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        headingRef.current,
        { y: 26, opacity: 0 },
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

      // Items animation
      const items = itemsRef.current?.querySelectorAll('.faq-item');
      if (items) {
        gsap.fromTo(
          items,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: itemsRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="py-20 lg:py-28 bg-slate-50"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-12 lg:mb-16">
          <span className="inline-block text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Common <span className="text-blue-700">Questions</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Got questions? We've got answers. Here are some of the most common
            things our customers ask.
          </p>
        </div>

        {/* FAQ Items */}
        <div
          ref={itemsRef}
          className="max-w-3xl mx-auto space-y-4"
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="faq-item bg-white rounded-2xl shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-5 lg:p-6 text-left hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <HelpCircle className="w-5 h-5 text-blue-700" />
                  </div>
                  <span className="font-semibold text-slate-900 pr-4">
                    {faq.question}
                  </span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-slate-500 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-48' : 'max-h-0'
                }`}
              >
                <div className="px-5 lg:px-6 pb-5 lg:pb-6 pl-16 lg:pl-18">
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Help */}
        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-4">
            Still have questions? We're here to help.
          </p>
          <a
            href="tel:07832767092"
            className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:text-amber-500 transition-colors"
          >
            Call us on 07832 767092
          </a>
        </div>
      </div>
    </section>
  );
}