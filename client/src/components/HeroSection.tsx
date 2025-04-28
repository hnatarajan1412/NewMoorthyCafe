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
      <section id="home" className="pt-[60px] md:pt-[80px]">
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
        <div className="absolute inset-0 bg-gradient-to-r from-[#C30010]/90 to-[#C30010]/80 mix-blend-multiply"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 text-white mb-10 md:mb-0">
              <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 leading-tight uppercase tracking-wide">
                Chidambaram<br/>New Moorthy Cafe
              </h1>
              
              <h2 className="font-medium text-xl sm:text-2xl md:text-3xl mb-6 leading-relaxed">
                Home to World's Best Parotta & Kadai Chicken
              </h2>
              
              <p className="text-base md:text-lg max-w-2xl mb-8 text-white/90">
                Over 70 years of culinary excellence, serving authentic 
                South Indian cuisine.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => scrollToSection("menu")}
                  className="bg-[#FFB800] text-[#C30010] px-8 py-3 rounded hover:bg-[#FFB800]/90 transition-all duration-300 text-base font-bold uppercase"
                >
                  View Menu
                </Button>
                <Button 
                  onClick={() => scrollToSection("contact")}
                  variant="outline" 
                  className="border-2 border-white bg-transparent text-white px-8 py-3 rounded hover:bg-white/10 transition-all duration-300 text-base font-medium uppercase"
                >
                  Book a Table
                </Button>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative">
                <img 
                  src="/assets/images/menu-biryani.jpg" 
                  alt="Delicious Biryani" 
                  className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-[#FFB800]"
                />
                <img 
                  src="/assets/circle-frame-gold.svg"
                  alt=""
                  className="absolute -top-5 -left-5 -right-5 -bottom-5 w-[calc(100%+40px)] h-[calc(100%+40px)] animate-spin-slow"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
