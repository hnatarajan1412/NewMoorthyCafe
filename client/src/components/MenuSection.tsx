import { useState } from "react";
import { Button } from "@/components/ui/button";

type CategoryType = 'All' | 'Appetizers' | 'Main Course' | 'Desserts';

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
      name: "Butter Chicken",
      description: "Tender chicken in a rich, creamy tomato sauce with a blend of aromatic spices.",
      price: 16.99,
      category: "Main Course",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      isPopular: true
    },
    {
      id: 2,
      name: "Vegetable Biryani",
      description: "Fragrant basmati rice cooked with mixed vegetables and aromatic spices.",
      price: 14.99,
      category: "Main Course",
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      isPopular: false
    },
    {
      id: 3,
      name: "Paneer Tikka",
      description: "Marinated cottage cheese cubes grilled to perfection with bell peppers and onions.",
      price: 12.99,
      category: "Appetizers",
      image: "https://images.unsplash.com/photo-1517244683847-7456b63c5969?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      isPopular: true
    },
    {
      id: 4,
      name: "Chicken Tikka Masala",
      description: "Grilled chicken pieces in a creamy, spiced tomato sauce with a hint of fenugreek.",
      price: 17.99,
      category: "Main Course",
      image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      isPopular: true
    },
    {
      id: 5,
      name: "Garlic Naan",
      description: "Soft, leavened bread topped with garlic and butter, baked in a tandoor oven.",
      price: 3.99,
      category: "Appetizers",
      image: "https://images.unsplash.com/photo-1628294895950-9805252327bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      isPopular: false
    },
    {
      id: 6,
      name: "Gulab Jamun",
      description: "Deep-fried milk solids soaked in rose-flavored sugar syrup, served warm.",
      price: 5.99,
      category: "Desserts",
      image: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
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
            Explore our wide selection of authentic Indian dishes prepared with love and tradition.
          </p>
        </div>
        
        <div className="flex justify-center mb-10 overflow-x-auto">
          <div className="flex space-x-4">
            {(['All', 'Appetizers', 'Main Course', 'Desserts'] as CategoryType[]).map((category) => (
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
                    <span className="text-primary font-bold">${item.price.toFixed(2)}</span>
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
