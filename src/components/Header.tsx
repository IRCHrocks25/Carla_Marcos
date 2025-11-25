import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 py-3 md:py-4 sticky top-0 z-50 shadow-sm">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 md:gap-3">
            <div className="relative w-12 h-12 md:w-16 md:h-16 flex-shrink-0">
              <div className="absolute top-0 left-3 md:left-4 w-2 h-2 md:w-3 md:h-3 bg-orange-500 rounded-full"></div>
              <div className="absolute top-1 md:top-2 right-1 md:right-2 w-2 h-2 md:w-3 md:h-3 bg-green-400 rounded-full"></div>
              <div className="absolute top-4 md:top-6 left-6 md:left-8 w-3 h-3 md:w-4 md:h-4 bg-blue-600 rounded-full"></div>
              <div className="absolute bottom-1 md:bottom-2 left-0 w-2 h-2 md:w-3 md:h-3 bg-purple-600 rounded-full"></div>
              <div className="absolute bottom-0 left-4 md:left-6 w-1.5 h-1.5 md:w-2 md:h-2 border-2 border-gray-400 rounded-full"></div>
            </div>
            <div>
              <div className="text-gray-800 tracking-wider text-xs md:text-sm font-semibold">CARLA MARCOS •</div>
              <div className="text-gray-600 text-[10px] md:text-xs tracking-wide font-medium">HYPNOTHERAPY</div>
              <div className="text-gray-400 text-[9px] md:text-[10px] italic font-medium">Finding your unique balance</div>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <a href="#" className="text-gray-800 hover:text-purple-600 transition-colors font-medium">Home</a>
            <a href="#" className="text-gray-800 hover:text-purple-600 transition-colors font-medium">Carla</a>
            <a href="#" className="text-gray-800 hover:text-purple-600 transition-colors font-medium">My Services</a>
            <a href="#" className="text-gray-800 hover:text-purple-600 transition-colors font-medium">My Mission</a>
            <a href="#" className="text-gray-800 hover:text-purple-600 transition-colors font-medium">FAQs</a>
            <Button className="bg-purple-600 hover:bg-purple-700 font-semibold">Contact</Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-800 hover:text-purple-600 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 flex flex-col gap-4 border-t border-gray-200 pt-4">
            <a 
              href="#" 
              className="text-gray-800 hover:text-purple-600 transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#" 
              className="text-gray-800 hover:text-purple-600 transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Carla
            </a>
            <a 
              href="#" 
              className="text-gray-800 hover:text-purple-600 transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              My Services
            </a>
            <a 
              href="#" 
              className="text-gray-800 hover:text-purple-600 transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              My Mission
            </a>
            <a 
              href="#" 
              className="text-gray-800 hover:text-purple-600 transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQs
            </a>
            <Button 
              className="bg-purple-600 hover:bg-purple-700 font-semibold w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}