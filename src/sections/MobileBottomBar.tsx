import { Phone, ClipboardList } from 'lucide-react';

export function MobileBottomBar() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 shadow-lg lg:hidden pb-safe">
      <div className="flex items-center">
        {/* Call Button */}
        <a
          href="tel:07832767092"
          className="flex-1 flex items-center justify-center gap-2 bg-green-800 hover:bg-blue-700 text-white py-4 transition-colors"
        >
          <Phone className="w-5 h-5" />
          <span className="font-semibold">Call Now</span>
        </a>
        
        {/* Quote Button */}
        <button
          onClick={scrollToContact}
          className="flex-1 flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-400 text-slate-900 py-4 transition-colors"
        >
          <ClipboardList className="w-5 h-5" />
          <span className="font-semibold">Get Quote</span>
        </button>
      </div>
    </div>
  );
}