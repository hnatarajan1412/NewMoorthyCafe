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
    <header id="header" className={`fixed w-full bg-white z-50 ${isScrolled ? 'shadow-lg' : 'shadow-md'}`}>
      <div className="container mx-auto px-4 py-1 md:py-2">
        <nav className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <a href="/" className="flex items-center">
              <img 
                src="/assets/NMC_Logo.png" 
                alt="Chidambaram New Moorthy Cafe Logo" 
                className="h-10 md:h-16"
              />
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4 xl:space-x-6">
            <a 
              onClick={() => scrollToSection("home")} 
              className="font-medium hover:text-primary transition-colors duration-300 cursor-pointer"
            >
              Home
            </a>
            <a 
              onClick={() => scrollToSection("about")} 
              className="font-medium hover:text-primary transition-colors duration-300 cursor-pointer"
            >
              About Us
            </a>
            <a 
              onClick={() => scrollToSection("menu")} 
              className="font-medium hover:text-primary transition-colors duration-300 cursor-pointer"
            >
              Menu
            </a>
            <a 
              onClick={() => scrollToSection("gallery")} 
              className="font-medium hover:text-primary transition-colors duration-300 cursor-pointer"
            >
              Gallery
            </a>
            <a 
              onClick={() => scrollToSection("reviews")} 
              className="font-medium hover:text-primary transition-colors duration-300 cursor-pointer"
            >
              Reviews
            </a>
            <a 
              onClick={() => scrollToSection("contact")} 
              className="font-medium hover:text-primary transition-colors duration-300 cursor-pointer"
            >
              Contact
            </a>
            <a 
              href="/franchise" 
              className="font-medium text-primary transition-colors duration-300 cursor-pointer"
            >
              Franchise
            </a>
          </div>
          
          {/* Order Button - Desktop */}
          <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection("contact")}
              className="bg-primary text-white px-6 py-2 rounded hover:bg-primary/90 transition-all duration-300"
            >
              Order Now
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden ml-auto">
            <button 
              onClick={toggle} 
              className="focus:outline-none p-1"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <X className="h-6 w-6 text-primary" />
              ) : (
                <Menu className="h-6 w-6 text-primary" />
              )}
            </button>
          </div>
        </nav>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div 
        className={`${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } bg-white w-full absolute top-full left-0 shadow-md md:hidden overflow-hidden transition-all duration-300`}
      >
        <div className="flex flex-col p-4 space-y-3">
          <a 
            onClick={() => scrollToSection("home")} 
            className="font-medium hover:text-primary transition-colors duration-300 cursor-pointer py-1"
          >
            Home
          </a>
          <a 
            onClick={() => scrollToSection("about")} 
            className="font-medium hover:text-primary transition-colors duration-300 cursor-pointer py-1"
          >
            About Us
          </a>
          <a 
            onClick={() => scrollToSection("menu")} 
            className="font-medium hover:text-primary transition-colors duration-300 cursor-pointer py-1"
          >
            Menu
          </a>
          <a 
            onClick={() => scrollToSection("gallery")} 
            className="font-medium hover:text-primary transition-colors duration-300 cursor-pointer py-1"
          >
            Gallery
          </a>
          <a 
            onClick={() => scrollToSection("reviews")} 
            className="font-medium hover:text-primary transition-colors duration-300 cursor-pointer py-1"
          >
            Reviews
          </a>
          <a 
            onClick={() => scrollToSection("contact")} 
            className="font-medium hover:text-primary transition-colors duration-300 cursor-pointer py-1"
          >
            Contact
          </a>
          <a 
            href="/franchise" 
            className="font-medium text-primary transition-colors duration-300 cursor-pointer py-1"
          >
            Franchise
          </a>
          <div className="pt-2">
            <Button 
              onClick={() => scrollToSection("contact")}
              className="bg-primary text-white px-6 py-2 rounded hover:bg-primary/90 transition-all duration-300 w-full"
            >
              Order Now
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
