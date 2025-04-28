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
    <section 
      id="home" 
      className="relative pt-[60px] md:pt-[80px] min-h-[80vh] flex flex-col items-center justify-center"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/assets/images/southindian_thali.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container mx-auto px-4 py-12 md:py-16 text-center text-white z-10">
        <h1 className="font-bold text-2xl sm:text-3xl md:text-5xl lg:text-6xl mb-4 leading-tight">
          Chidambaram New Moorthy Cafe
        </h1>
        
        <h2 className="font-medium text-lg sm:text-xl md:text-3xl mb-4 md:mb-6 leading-relaxed px-2">
          Home to World's Best Parotta & Kadai Chicken
        </h2>
        
        <p className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-6 md:mb-8 opacity-90">
          Over 70 years of culinary excellence, serving authentic 
          South Indian cuisine.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mx-auto max-w-xs sm:max-w-md">
          <Button 
            onClick={() => scrollToSection("menu")}
            className="bg-primary text-white w-full px-6 py-2.5 rounded-full hover:bg-primary/90 transition-all duration-300 text-base font-medium"
          >
            View Menu
          </Button>
          <Button 
            onClick={() => scrollToSection("contact")}
            variant="outline" 
            className="bg-white text-primary w-full px-6 py-2.5 rounded-full hover:bg-white/90 transition-all duration-300 text-base font-medium"
          >
            Book a Table
          </Button>
        </div>
      </div>
    </section>
  );
}
