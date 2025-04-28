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
    <section id="menu" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl mb-4">Our Menu</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg max-w-4xl mx-auto text-gray-600">
            Explore our wide selection of authentic South Indian dishes prepared with exclusive hand-picked spices and traditional methods.
          </p>
        </div>
        
        <div className="flex justify-center mb-10 overflow-x-auto">
          <div className="flex space-x-4">
            {(['All', 'Tandoori', 'Special Items', 'Biryani', 'South Indian'] as CategoryType[]).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full transition-colors whitespace-nowrap ${
                  activeCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
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
              <div key={item.id} className="menu-item bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                <div className="overflow-hidden h-64">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover menu-img-hover transition-all duration-300" 
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-serif text-2xl">{item.name}</h3>
                    <span className="text-primary font-bold">₹{item.price}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <button className="text-primary font-medium hover:underline">Add to Order</button>
                </div>
              </div>
            ))}
          </div>
        )}
        
        <div className="text-center mt-12">
          <Button className="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-all duration-300 text-lg font-medium">
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
}
