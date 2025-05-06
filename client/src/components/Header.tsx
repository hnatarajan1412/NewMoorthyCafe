import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMobileMenu } from "@/hooks/use-mobile-menu";
import { useLocation } from "wouter";

export default function Header() {
  const { isOpen, toggle } = useMobileMenu();
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();
  const isHomePage = location === "/";
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (isHomePage) {
      // If on home page, scroll to the section
      const element = document.getElementById(id);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80,
          behavior: "smooth"
        });
        if (isOpen) toggle();
      }
    } else {
      // If not on home page, navigate to home page with hash
      window.location.href = `/#${id}`;
      if (isOpen) toggle();
    }
  };

  return (
    <header id="header" className={`fixed w-full z-50 bg-[#C30010] text-white`}>
      <div className="container mx-auto px-4 py-1 md:py-3">
        <nav className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <a href="/" className="flex items-center">
              <img 
                src="/assets/images/NMC_Logo.jpg" 
                alt="Chidambaram New Moorthy Cafe Logo" 
                className="h-12 md:h-16 rounded-full border-2 border-[#FFB800] bg-white p-1"
              />
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 xl:space-x-8">
            <a 
              onClick={() => scrollToSection("home")} 
              className="font-medium text-white hover:text-[#FFB800] transition-colors duration-300 cursor-pointer uppercase tracking-wide"
            >
              Home
            </a>
            <a 
              onClick={() => scrollToSection("about")} 
              className="font-medium text-white hover:text-[#FFB800] transition-colors duration-300 cursor-pointer uppercase tracking-wide"
            >
              About Us
            </a>
            <a 
              onClick={() => scrollToSection("menu")} 
              className="font-medium text-white hover:text-[#FFB800] transition-colors duration-300 cursor-pointer uppercase tracking-wide"
            >
              Menu
            </a>
            <a 
              onClick={() => scrollToSection("gallery")} 
              className="font-medium text-white hover:text-[#FFB800] transition-colors duration-300 cursor-pointer uppercase tracking-wide"
            >
              Gallery
            </a>
            <a 
              onClick={() => scrollToSection("reviews")} 
              className="font-medium text-white hover:text-[#FFB800] transition-colors duration-300 cursor-pointer uppercase tracking-wide"
            >
              Reviews
            </a>
            <a 
              onClick={() => scrollToSection("contact")} 
              className="font-medium text-white hover:text-[#FFB800] transition-colors duration-300 cursor-pointer uppercase tracking-wide"
            >
              Contact
            </a>
            <a 
              href="/franchise" 
              className="font-medium text-[#FFB800] transition-colors duration-300 cursor-pointer uppercase tracking-wide"
            >
              Franchise
            </a>
          </div>
          
          {/* Order Button - Desktop */}
          {/* <div className="hidden md:block">
            <div className="rounded bg-white px-3 py-2 text-center">
              <div className="font-bold text-[#C30010] text-sm">Order Now</div>
              <Button 
                onClick={() => scrollToSection("contact")}
                className="bg-[#FFB800] text-[#C30010] px-4 py-1 rounded font-bold hover:bg-[#FFB800]/90 transition-all duration-300 text-sm"
              >
                +91 93808 99999
              </Button>
            </div>
          </div> */}
          
          {/* Mobile Menu Button */}
          <div className="md:hidden ml-auto">
            <button 
              onClick={toggle} 
              className="focus:outline-none p-1"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <X className="h-6 w-6 text-white" />
              ) : (
                <Menu className="h-6 w-6 text-white" />
              )}
            </button>
          </div>
        </nav>
      </div>
      
      {/* Straight Line Divider */}
      <div className="w-full h-1 bg-[#FFB800]"></div>
      
      {/* Mobile Navigation Menu */}
      <div 
        className={`${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } bg-[#C30010] border-t-2 border-[#FFB800] w-full absolute top-full left-0 shadow-md md:hidden overflow-hidden transition-all duration-300`}
      >
        <div className="flex flex-col p-4 space-y-3">
          <a 
            onClick={() => scrollToSection("home")} 
            className="font-medium text-white hover:text-[#FFB800] transition-colors duration-300 cursor-pointer py-1 uppercase"
          >
            Home
          </a>
          <a 
            onClick={() => scrollToSection("about")} 
            className="font-medium text-white hover:text-[#FFB800] transition-colors duration-300 cursor-pointer py-1 uppercase"
          >
            About Us
          </a>
          <a 
            onClick={() => scrollToSection("menu")} 
            className="font-medium text-white hover:text-[#FFB800] transition-colors duration-300 cursor-pointer py-1 uppercase"
          >
            Menu
          </a>
          <a 
            onClick={() => scrollToSection("gallery")} 
            className="font-medium text-white hover:text-[#FFB800] transition-colors duration-300 cursor-pointer py-1 uppercase"
          >
            Gallery
          </a>
          <a 
            onClick={() => scrollToSection("reviews")} 
            className="font-medium text-white hover:text-[#FFB800] transition-colors duration-300 cursor-pointer py-1 uppercase"
          >
            Reviews
          </a>
          <a 
            onClick={() => scrollToSection("contact")} 
            className="font-medium text-white hover:text-[#FFB800] transition-colors duration-300 cursor-pointer py-1 uppercase"
          >
            Contact
          </a>
          <a 
            href="/franchise" 
            className="bg-[#FFB800] text-[#C30010] px-4 py-1 rounded font-bold hover:bg-[#FFB800]/90 transition-all duration-300 w-full"
          >
            Franchise
          </a>
          {/* <div className="pt-2">
            <div className="bg-white rounded-md p-2 flex flex-col items-center">
              <div className="text-[#C30010] font-bold mb-1">Order Now</div>
              <Button 
                onClick={() => scrollToSection("contact")}
                className="bg-[#FFB800] text-[#C30010] px-4 py-1 rounded font-bold hover:bg-[#FFB800]/90 transition-all duration-300 w-full"
              >
                +91 93808 99999
              </Button>
            </div>
          </div> */}
        </div>
      </div>
    </header>
  );
}
