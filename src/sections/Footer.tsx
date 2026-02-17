import { Phone, MapPin, Mail, Star, Shield, ClipboardCheck } from 'lucide-react';

const quickLinks = [
  { label: 'Services', href: '#services' },
  { label: 'About Us', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Coverage Area', href: '#coverage' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

const services = [
  'Roof Repairs',
  'New Roofs',
  'Flat Roofing',
  'Chimney Repairs',
  'Guttering & Fascias',
  'Emergency Callouts',
];

const areas = [
  'South Lambeth',
  'Sydenham',
  'Dulwich',
  'Crystal Palace',
  'Penge',
  'Anerley',
];

export function Footer() {
  const scrollToSection = (href: string) => {
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center">
                  <span className="text-slate-900 font-bold text-lg">R&P</span>
                </div>
                <span className="font-bold text-xl">Roofing</span>
              </div>
              <p className="text-slate-400 mb-4">
                Trusted local roofers based in South Lambeth, serving South East
                London with quality repairs, new roofs, and emergency services.
              </p>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <span className="text-sm text-slate-400">
                  5.0 (1 review)
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1 bg-white/10 rounded-full px-3 py-1 text-xs">
                  <Shield className="w-3 h-3" />
                  Fully Insured
                </span>
                <span className="inline-flex items-center gap-1 bg-white/10 rounded-full px-3 py-1 text-xs">
                  <ClipboardCheck className="w-3 h-3" />
                  Free Quotes
                </span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-slate-400 hover:text-amber-400 transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold text-lg mb-4">Our Services</h4>
              <ul className="space-y-2">
                {services.map((service, index) => (
                  <li key={index}>
                    <a
                      href="tel:07832767092"
                      className="text-slate-400 hover:text-amber-400 transition-colors"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Areas */}
            <div>
              <h4 className="font-bold text-lg mb-4">Contact Us</h4>
              <ul className="space-y-3 mb-6">
                <li>
                  <a
                    href="tel:07832767092"
                    className="flex items-center gap-2 text-slate-400 hover:text-amber-400 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    07832 767092
                  </a>
                </li>
                <li className="flex items-start gap-2 text-slate-400">
                  <MapPin className="w-4 h-4 mt-0.5" />
                  <span>Wandsworth Rd, South Lambeth, London SW8 3JL</span>
                </li>
                <li className="flex items-center gap-2 text-slate-400">
                  <Mail className="w-4 h-4" />
                  <span>info@rproofing.co.uk</span>
                </li>
              </ul>

              <h4 className="font-bold text-lg mb-3">Areas We Cover</h4>
              <div className="flex flex-wrap gap-1.5">
                {areas.map((area, index) => (
                  <span
                    key={index}
                    className="bg-white/10 rounded-full px-2.5 py-1 text-xs text-slate-400"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-6">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm text-center sm:text-left">
              © {new Date().getFullYear()} South Lambeth Roofing. All rights reserved.
              Fully insured roofing services.
            </p>
            <div className="flex items-center gap-4 text-sm text-slate-500">
              <span>South Lambeth</span>
              <span>•</span>
              <span>SW8</span>
              <span>•</span>
              <span>SE London</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}