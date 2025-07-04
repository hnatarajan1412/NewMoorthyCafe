import { Button } from "@/components/ui/button";
import { BannerSlider } from './BannerSlider';

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

  const images = [
    '/assets/images/dish1.jpg',
    '/assets/images/dish2.jpg',
    '/assets/images/dish3.jpg',
    '/assets/images/dish4.jpg',
    '/assets/images/menu-biryani.jpg',
    '/assets/images/menu-dosa.jpg',
  ];

  return (
    <>
      <section id="home" className="pt-[60px] md:pt-[80px] relative">
        {/* Main title - even smaller overlay at bottom center */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 text-center w-auto">
          <div className="bg-black/30 backdrop-blur-sm py-1 px-4 inline-block max-w-sm">
            <h1 className="text-white text-2xl md:text-3xl font-bold drop-shadow-lg">
              Chidambaram New Moorthy Cafe
            </h1>
            <div className="w-40 h-1 bg-[#FFB800] mx-auto my-1"></div>
            <p className="text-white text-base drop-shadow-lg">Since 1955</p>
          </div>
        </div>
        
        <BannerSlider images={images} />
      </section>

      <section 
        className="relative py-16 md:py-24"
        style={{
          backgroundImage: 'url("/assets/images/red-texture.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Top decorative border */}
        <div className="absolute top-0 left-0 w-full flex justify-center">
          <div className="w-1/2 h-2 bg-[#FFB800]"></div>
        </div>
        
        {/* Corner decorative elements */}
        <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-[#FFB800] opacity-70"></div>
        <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-[#FFB800] opacity-70"></div>
        <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-[#FFB800] opacity-70"></div>
        <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-[#FFB800] opacity-70"></div>
        
        <div className="absolute inset-0 bg-gradient-to-r from-[#C30010]/90 to-[#C30010]/80 mix-blend-multiply"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 text-white mb-10 md:mb-0">
              <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight uppercase tracking-wide">
                Chidambaram<br/>New Moorthy Cafe
              </h1>
              
              <div className="w-24 h-1 bg-[#FFB800] mb-6"></div>
              
              <h2 className="font-medium text-xl sm:text-2xl md:text-3xl mb-6 leading-relaxed">
                Home to World's Best Parotta & Kadai Chicken
              </h2>
              
              <p className="text-base md:text-lg max-w-2xl mb-8 text-white/90">
                Over 70 years of culinary excellence, serving authentic 
                South Indian cuisine with time-honored family recipes.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
              <a 
              href="/franchise" >
                <Button 
                  className="bg-[#FFB800] text-[#C30010] px-8 py-3 rounded-md hover:bg-[#FFB800]/90 transition-all duration-300 text-base font-bold uppercase shadow-lg"
                >
                  Franchise
                </Button>
                </a>
                <Button 
                  onClick={() => scrollToSection("menu")}
                  variant="outline" 
                  className="border-2 border-[#FFB800] bg-transparent text-[#FFB800] px-8 py-3 rounded-md hover:bg-[#FFB800]/10 transition-all duration-300 text-base font-medium uppercase"
                >
                  View Menu
                </Button>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative">
                <img 
                  src="/assets/images/menu-biryani.jpg" 
                  alt="Delicious Biryani" 
                  className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-[#FFB800] shadow-xl"
                />
                <img 
                  src="/assets/circle-frame-gold.svg"
                  alt=""
                  className="absolute -top-5 -left-5 -right-5 -bottom-5 w-[calc(100%+40px)] h-[calc(100%+40px)] animate-spin-slow"
                />
                
                {/* Decorative floating elements */}
                <div className="absolute -top-6 -right-6 w-12 h-12 rounded-full border-2 border-[#FFB800] opacity-50"></div>
                <div className="absolute -bottom-8 -left-4 w-8 h-8 rounded-full border-2 border-[#FFB800] opacity-30"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
