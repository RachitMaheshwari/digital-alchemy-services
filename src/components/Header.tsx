
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

type HeaderProps = {
  isScrolled?: boolean;
};

const Header = ({ isScrolled }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (mobileMenuOpen && !target.closest('.mobile-menu') && !target.closest('.mobile-menu-button')) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [mobileMenuOpen]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/95 backdrop-blur-lg shadow-md'
        : 'bg-transparent'
      }`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <a
            href="#">
            <span className="text-2xl font-bold bg-gradient-to-r from-techpro-blue to-techpro-purple bg-clip-text text-transparent">
              OmTech
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#services"
            className="text-gray-700 hover:text-techpro-purple transition-colors relative group"
          >
            Services
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-techpro-purple transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#pricing"
            className="text-gray-700 hover:text-techpro-purple transition-colors relative group"
          >
            Pricing
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-techpro-purple transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#contact"
            className="text-gray-700 hover:text-techpro-purple transition-colors relative group"
          >
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-techpro-purple transition-all duration-300 group-hover:w-full"></span>
          </a>
          <Button
            className={`bg-gradient-to-r from-techpro-blue to-techpro-purple hover:from-techpro-blue/90 hover:to-techpro-purple/90 text-white ${isScrolled ? 'shadow-md' : ''
              }`}
          >
            Get Quote
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 mobile-menu-button z-50"
          onClick={(e) => {
            e.stopPropagation();
            setMobileMenuOpen(!mobileMenuOpen);
          }}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4 px-4 animate-fade-in shadow-lg mobile-menu">
          <nav className="flex flex-col gap-4">
            <a
              href="#services"
              className="text-gray-700 hover:text-techpro-purple transition-colors py-2 pl-2 hover:bg-gray-50 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#pricing"
              className="text-gray-700 hover:text-techpro-purple transition-colors py-2 pl-2 hover:bg-gray-50 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-techpro-purple transition-colors py-2 pl-2 hover:bg-gray-50 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            <Button
              className="bg-gradient-to-r from-techpro-blue to-techpro-purple hover:from-techpro-blue/90 hover:to-techpro-purple/90 text-white mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Quote
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
