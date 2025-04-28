import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

export default function HeroSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  const carouselImages = [
    {
      src: "./assets/images/southindian_food1.jpg",
      alt: "South Indian Dishes"
    },
    {
      src: "./assets/images/dosa.jpg",
      alt: "South Indian Dosa"
    },
    {
      src: "./assets/images/southindian_thali.jpg",
      alt: "South Indian Thali"
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    if (!api) return;
    
    // Set up auto-advance
    intervalRef.current = window.setInterval(() => {
      api.scrollNext();
    }, 5000);
    
    // Clean up interval on unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [api]);

  useEffect(() => {
    if (!api) return;
    
    const onSelect = () => {
      setCurrent(api.selectedScrollSnap() || 0);
    };
    
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Carousel 
          className="w-full h-full" 
          opts={{ loop: true, duration: 50 }}
          setApi={setApi}
        >
          <CarouselContent className="h-full">
            {carouselImages.map((image, index) => (
              <CarouselItem key={index} className="h-full">
                <div className="w-full h-full relative">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/60"></div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      
      {/* Hero Content */}
      <div className="container mx-auto px-4 text-center text-white relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="font-cursive text-5xl md:text-7xl mb-4"
        >
          Chidambaram New Moorthy Cafe
        </motion.h1>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-serif text-2xl md:text-4xl mb-8"
        >
          Home to World's Best Parotta & Kadai Chicken
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-lg md:text-xl max-w-2xl mx-auto mb-8"
        >
          Over 70 years of culinary excellence in Tamil Nadu, serving authentic 
          South Indian vegetarian and non-vegetarian dishes prepared with exclusive 
          hand-picked spices and traditional methods.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Button 
            onClick={() => scrollToSection("menu")}
            className="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-all duration-300 text-lg font-medium"
          >
            View Menu
          </Button>
          <Button 
            onClick={() => scrollToSection("contact")}
            variant="outline" 
            className="bg-white text-primary px-8 py-3 rounded-full hover:bg-white/90 transition-all duration-300 text-lg font-medium"
          >
            Book a Table
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
