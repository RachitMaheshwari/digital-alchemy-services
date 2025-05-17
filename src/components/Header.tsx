
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold bg-gradient-to-r from-techpro-blue to-techpro-purple bg-clip-text text-transparent">
            TechPro
          </span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#services" className="text-gray-700 hover:text-techpro-purple transition-colors">
            Services
          </a>
          <a href="#pricing" className="text-gray-700 hover:text-techpro-purple transition-colors">
            Pricing
          </a>
          <a href="#contact" className="text-gray-700 hover:text-techpro-purple transition-colors">
            Contact
          </a>
          <Button className="bg-techpro-purple hover:bg-techpro-purple/90">Get Quote</Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4 px-4 animate-fade-in">
          <nav className="flex flex-col gap-4">
            <a 
              href="#services" 
              className="text-gray-700 hover:text-techpro-purple transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#pricing" 
              className="text-gray-700 hover:text-techpro-purple transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <a 
              href="#contact" 
              className="text-gray-700 hover:text-techpro-purple transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            <Button 
              className="bg-techpro-purple hover:bg-techpro-purple/90 w-full"
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
