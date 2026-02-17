import { useState, useEffect } from 'react';
import { Header } from './sections/Header';
import { Hero } from './sections/Hero';
import { Services } from './sections/Services';
import { About } from './sections/About';
import { Testimonials } from './sections/Testimonials';
import { Process } from './sections/Process';
import { Projects } from './sections/Projects';
import { Coverage } from './sections/Coverage';
import { FAQ } from './sections/FAQ';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';
import { MobileBottomBar } from './sections/MobileBottomBar';
import { SchemaMarkup } from './components/SchemaMarkup';
import { Toaster } from '@/components/ui/sonner';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Schema Markup for SEO */}
      <SchemaMarkup />
      
      {/* Grain Overlay */}
      <div className="grain-overlay" aria-hidden="true" />
      
      {/* Sticky Header */}
      <Header isScrolled={isScrolled} />
      
      {/* Main Content */}
      <main>
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <Process />
        <Projects />
        <Coverage />
        <FAQ />
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Mobile Bottom Bar */}
      <MobileBottomBar />
      
      {/* Toast notifications */}
      <Toaster position="top-center" />
    </div>
  );
}

export default App;