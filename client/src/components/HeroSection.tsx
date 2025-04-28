import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="home" className="hero-section min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-4 text-center text-white">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="font-cursive text-6xl md:text-8xl mb-4"
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
