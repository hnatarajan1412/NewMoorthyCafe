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
      <div className="container mx-auto px-4 py-2">
        <nav className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="text-3xl font-bold font-cursive text-primary">Chidambaram New Moorthy Cafe</a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
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
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggle} 
              className="focus:outline-none"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <X className="h-6 w-6 text-secondary" />
              ) : (
                <Menu className="h-6 w-6 text-secondary" />
              )}
            </button>
          </div>
          
          {/* Order Button */}
          <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection("contact")}
              className="bg-primary text-white px-6 py-2 rounded hover:bg-primary/90 transition-all duration-300"
            >
              Order Now
            </Button>
          </div>
        </nav>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} bg-white w-full absolute top-full left-0 shadow-md p-4 md:hidden`}>
        <div className="flex flex-col space-y-4">
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
          <Button 
            onClick={() => scrollToSection("contact")}
            className="bg-primary text-white px-6 py-2 rounded hover:bg-primary/90 transition-all duration-300 w-full"
          >
            Order Now
          </Button>
        </div>
      </div>
    </header>
  );
}
