import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

interface HeaderProps {
  isScrolled: boolean;
}

export function Header({ isScrolled }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Services', id: 'services' },
    { label: 'About', id: 'about' },
    { label: 'Reviews', id: 'testimonials' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-green-800/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-2"
            >
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-green-900 font-bold text-lg">SL</span>
              </div>
              <span className="text-white font-bold text-xl hidden sm:block">
                Roofing
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-white/80 hover:text-white font-medium transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:07832767092"
                className="flex items-center gap-2 text-white font-semibold hover:text-orange-400 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>07832 767092</span>
              </a>
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-primary text-sm"
              >
                Get a Free Quote
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-green-900 lg:hidden">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-white text-2xl font-semibold hover:text-orange-400 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <a
              href="tel:07832767092"
              className="flex items-center gap-3 text-orange-400 text-xl font-bold mt-4"
            >
              <Phone className="w-6 h-6" />
              <span>07832 767092</span>
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-primary mt-4"
            >
              Get a Free Quote
            </button>
          </div>
        </div>
      )}
    </>
  );
}