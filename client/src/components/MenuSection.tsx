import { useState } from "react";
import { Button } from "@/components/ui/button";

type CategoryType = 'All' | 'Tandoori' | 'Special Items' | 'Biryani' | 'South Indian';

interface StaticMenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  isPopular: boolean;
}

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('All');
  const [isLoading, setIsLoading] = useState(false);
  
  const staticMenuItems: StaticMenuItem[] = [
    {
      id: 1,
      name: "Parotta",
      description: "Flaky, layered flatbread made from refined flour, a signature speciality of New Moorthy Cafe.",
      price: 16,
      category: "Special Items",
      image: "/assets/images/menu-parotta.jpg",
      isPopular: true
    },
    {
      id: 2,
      name: "Chicken Biryani",
      description: "Aromatic basmati rice cooked with tender chicken pieces and traditional spices.",
      price: 170,
      category: "Biryani",
      image: "/assets/images/menu-biryani.jpg",
      isPopular: true
    },
    {
      id: 3,
      name: "Dosa",
      description: "Crispy fermented rice and lentil crepe served with sambar and chutney.",
      price: 60,
      category: "South Indian",
      image: "/assets/images/menu-dosa.jpg",
      isPopular: true
    },
    {
      id: 4,
      name: "Kadai Chicken",
      description: "Spicy chicken curry cooked with bell peppers and kadai masala in a thick gravy.",
      price: 240,
      category: "Special Items",
      image: "/assets/images/menu-chicken.jpg",
      isPopular: true
    },
    {
      id: 5,
      name: "Tandoori Chicken",
      description: "Chicken marinated in yogurt and spices, roasted in a traditional clay oven.",
      price: 260,
      category: "Tandoori",
      image: "/assets/images/menu-chicken.jpg",
      isPopular: false
    },
    {
      id: 6,
      name: "Idli",
      description: "Steamed rice cakes made from fermented batter, served with sambar and chutney.",
      price: 60,
      category: "South Indian",
      image: "/assets/images/menu-idli.jpg",
      isPopular: true
    }
  ];

  const filteredItems = staticMenuItems.filter(item => {
    if (activeCategory === 'All') return true;
    return item.category === activeCategory;
  });

  return (
    <section id="menu" className="py-16 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-[#C30010]"></div>
    
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#C30010] uppercase tracking-wide border-b-4 border-[#FFB800] pb-2 inline-block px-8">Our Menu</h2>
          <p className="text-gray-700 max-w-4xl mx-auto">
            Explore our wide selection of authentic South Indian dishes prepared with exclusive hand-picked spices and traditional methods.
          </p>
        </div>
        
        <div className="flex justify-center mb-10 overflow-x-auto">
          <div className="flex space-x-4">
            {(['All', 'Tandoori', 'Special Items', 'Biryani', 'South Indian'] as CategoryType[]).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-md transition-colors whitespace-nowrap font-bold uppercase tracking-wide ${
                  activeCategory === category
                    ? 'bg-[#C30010] text-white border-2 border-[#FFB800]'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border-2 border-transparent'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white rounded-lg overflow-hidden shadow-md animate-pulse">
                <div className="h-64 bg-gray-300"></div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <div className="h-6 bg-gray-300 rounded w-1/2"></div>
                    <div className="h-6 bg-gray-300 rounded w-16"></div>
                  </div>
                  <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems?.map((item) => (
              <div key={item.id} className="menu-item bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200">
                <div className="relative">
                  <div className="overflow-hidden h-64">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover menu-img-hover transition-all duration-300" 
                    />
                  </div>
                  {item.isPopular && (
                    <div className="absolute top-3 right-3 bg-[#FFB800] text-[#C30010] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                      Popular
                    </div>
                  )}
                </div>
                <div className="p-6 border-t-4 border-[#C30010]">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-[#C30010]">{item.name}</h3>
                    <span className="text-[#C30010] bg-[#FFB800] px-3 py-1 rounded-full font-bold">₹{item.price}</span>
                  </div>
                  <p className="text-gray-700 mb-4">{item.description}</p>
                  <button className="bg-[#C30010] text-white font-bold py-2 px-4 rounded-md hover:bg-[#C30010]/90 transition-all duration-300 w-full uppercase tracking-wide">
                    Add to Order
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        
        <div className="text-center mt-12">
          <Button className="bg-[#C30010] text-white border-2 border-[#FFB800] px-8 py-3 rounded-md hover:bg-[#C30010]/90 transition-all duration-300 text-lg font-bold uppercase tracking-wide">
            View Full Menu
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-1 bg-[#C30010]"></div>
    </section>
  );
}
