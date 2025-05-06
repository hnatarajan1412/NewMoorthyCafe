import { useState } from "react";
import { Button } from "@/components/ui/button";

type CategoryType = 'All' | 'Veg' | 'Non-Veg';

interface StaticMenuItem {
  id: number;
  name: string;
  description: string;
  category: string;
  image: string;
  isPopular: boolean;
}

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('All');
  const [isLoading, setIsLoading] = useState(false);
  
  const staticMenuItems: StaticMenuItem[] = [
    {
      "id": 1,
      "name": "Mushroom 65",
      "description": "Crispy deep-fried mushroom bites tossed in a spicy South Indian-style seasoning blend.",
      "category": "Veg",
      "image": "/assets/images/Mushroom_65.jpeg",
      "isPopular": true
    },
    {
      "id": 2,
      "name": "Chilli Paneer Gravy",
      "description": "Soft paneer cubes cooked in a spicy Indo-Chinese gravy with capsicum and onions.",
      "category": "Veg",
      "image": "/assets/images/Chilli_paneer_gravy.jpeg",
      "isPopular": true
    },
    {
      "id": 3,
      "name": "Gobi Masala",
      "description": "Cauliflower florets simmered in a rich tomato-onion masala with traditional spices.",
      "category": "Veg",
      "image": "/assets/images/Gobi_masala.jpeg",
      "isPopular": true
    },
    {
      "id": 4,
      "name": "Chana Masala",
      "description": "Tender chickpeas cooked in a spiced tangy tomato-based gravy with a hint of ginger.",
      "category": "Veg",
      "image": "/assets/images/Chana-Masala.jpg",
      "isPopular": true
    },
    {
      "id": 5,
      "name": "Green Peas Masala",
      "description": "A creamy and mildly spiced curry made with green peas and aromatic masalas.",
      "category": "Veg",
      "image": "/assets/images/Green_peas.jpg",
      "isPopular": true
    },
    {
      "id": 6,
      "name": "Paneer Kadai",
      "description": "A spicy North Indian dish with paneer cubes stir-fried with bell peppers and crushed spices.",
      "category": "Veg",
      "image": "/assets/images/paneer_kadai.jpeg",
      "isPopular": true
    },
    {
      "id": 7,
      "name": "Veg Noodles",
      "description": "Stir-fried noodles tossed with fresh vegetables and Indo-Chinese sauces.",
      "category": "Veg",
      "image": "/assets/images/Veg_noodles.jpeg",
      "isPopular": true
    },
    {
      "id": 8,
      "name": "Paneer Pulav",
      "description": "Basmati rice cooked with paneer cubes, mild spices, and herbs for a fragrant experience.",
      "category": "Veg",
      "image": "/assets/images/paneer_pulav.jpg",
      "isPopular": true
    },
    {
      "id": 9,
      "name": "Romali Roti",
      "description": "Thin and soft Indian flatbread folded like a handkerchief, perfect with rich gravies.",
      "category": "Veg",
      "image": "/assets/images/Romaliya_rotti.jpeg",
      "isPopular": true
    },
    {
      "id": 10,
      "name": "Paneer Fried Rice",
      "description": "Indo-Chinese fusion rice dish stir-fried with paneer cubes and crunchy vegetables.",
      "category": "Veg",
      "image": "/assets/images/Panner_fried_rice.jpeg",
      "isPopular": true
    },
    {
      "id": 11,
      "name": "Parotta",
      "description": "Flaky, layered flatbread made from refined flour, a signature speciality of New Moorthy Cafe.",
      "category": "Veg",
      "image": "/assets/images/parotta.jpeg",
      "isPopular": true
    },
    {
      "id": 12,
      "name": "Mushroom Munchurian",
      "description": "Crispy fried mushrooms tossed in a spicy Manchurian sauce with garlic and spring onions.",
      "category": "Veg",
      "image": "/assets/images/Mushroom_munchurian.jpg",
      "isPopular": true
    },
    {
      "id": 13,
      "name": "Veg Fried Rice",
      "description": "Fragrant rice stir-fried with colorful vegetables and a dash of soy sauce for a flavorful touch.",
      "category": "Veg",
      "image": "/assets/images/Veg_fried_rice.jpeg",
      "isPopular": true
    },
    {
      "id": 14,
      "name": "Schezwan Veg Noodles",
      "description": "Fiery noodles tossed in spicy schezwan sauce with vegetables, a favorite among spice lovers.",
      "category": "Veg",
      "image": "/assets/images/Schezwan_Veg_Noodles.jpeg",
      "isPopular": true
    },
    {
      "id": 15,
      "name": "Veechu Parotta",
      "description": "Thin, soft, and flaky layered parotta skillfully stretched and pan-cooked to perfection.",
      "category": "Veg",
      "image": "/assets/images/Veechu_parotta.jpeg",
      "isPopular": true
    },
    {"id": 16,
      "name": "Chicken Onion Roast",
      "description": "Juicy chicken pieces slow-roasted with caramelized onions and a blend of southern spices.",
      "category": "Non-Veg",
      "image": "/assets/images/Chicken_onion_roast.jpeg",
      "isPopular": true
    },
    {
      "id": 17,
      "name": "Prawn Fried Rice",
      "description": "Aromatic rice stir-fried with prawns, fresh vegetables, and soy sauce for a savory bite.",
      "category": "Non-Veg",
      "image": "/assets/images/Prawn_fried_rice.jpeg",
      "isPopular": true
    },
    {
      "id": 18,
      "name": "Egg Briyani",
      "description": "Fragrant basmati rice cooked with boiled eggs and mild spices for a flavorful meal.",
      "category": "Non-Veg",
      "image": "/assets/images/Egg_briyani.jpeg",
      "isPopular": true
    },
    {
      "id": 19,
      "name": "Plain Lappa",
      "description": "Soft and flaky layered bread, perfect to pair with spicy non-veg gravies.",
      "category": "Non-Veg",
      "image": "/assets/images/plain_lappa.jpeg",
      "isPopular": true
    },
    {
      "id": 20,
      "name": "Kadaai Chicken",
      "description": "Spicy chicken cooked in a kadaai (wok) with capsicum, onions, and rich masala.",
      "category": "Non-Veg",
      "image": "/assets/images/Kadai-Chicken.jpg",
      "isPopular": true
    },
    {
      "id": 21,
      "name": "Mutton Briyani",
      "description": "Tender mutton pieces cooked in layered basmati rice with traditional dum-style biryani spices.",
      "category": "Non-Veg",
      "image": "/assets/images/Mutton_briyani.jpeg",
      "isPopular": true
    },
    {
      "id": 22,
      "name": "Tandoori Chicken Briyani",
      "description": "Basmati rice blended with smoky tandoori chicken and rich aromatic spices.",
      "category": "Non-Veg",
      "image": "/assets/images/Tandoori_chicken_briyani.jpeg",
      "isPopular": true
    },
    {
      "id": 23,
      "name": "Chilly Prawn",
      "description": "Crisp-fried prawns tossed in a tangy and spicy Indo-Chinese style chili sauce.",
      "category": "Non-Veg",
      "image": "/assets/images/Chilly_prawn.jpeg",
      "isPopular": true
    },
    {
      "id": 24,
      "name": "Butter Chicken Gravy",
      "description": "Creamy tomato-based gravy with tender chicken pieces simmered in buttery richness.",
      "category": "Non-Veg",
      "image": "/assets/images/Butter_chicken_gravy.jpeg",
      "isPopular": true
    },
    {
      "id": 25,
      "name": "Chettinadu Chicken Gravy",
      "description": "Bold and spicy Chettinad-style chicken curry infused with roasted spices and curry leaves.",
      "category": "Non-Veg",
      "image": "/assets/images/Chettinadu_chicken_gravy.jpeg",
      "isPopular": true
    },
    {
      "id": 26,
      "name": "Chicken Kal Pepper",
      "description": "Chicken chunks sautéed with black pepper and garlic, offering a bold and spicy finish.",
      "category": "Non-Veg",
      "image": "/assets/images/Chicken_kal_pepper.jpeg",
      "isPopular": true
    },
    {
      "id": 27,
      "name": "Hyderabad Chicken Gravy",
      "description": "Rich and flavorful gravy inspired by Hyderabadi spices, cooked with tender chicken.",
      "category": "Non-Veg",
      "image": "/assets/images/Hydrabhath_chicken_gravy.jpeg",
      "isPopular": true
    },
    {
      "id": 28,
      "name": "Chicken Tikka Briyani",
      "description": "Grilled chicken tikka pieces layered with saffron rice and traditional biryani spices.",
      "category": "Non-Veg",
      "image": "/assets/images/Chicken_tikka_briyani.jpeg",
      "isPopular": true
    },
    {
      "id": 29,
      "name": "Chilli Chicken Dry",
      "description": "Crispy fried chicken chunks tossed in a spicy dry chili sauce with garlic and herbs.",
      "category": "Non-Veg",
      "image": "/assets/images/Chilli_chicken_dry.jpeg",
      "isPopular": true
    },
    {
      "id": 30,
      "name": "Chilli Chicken Gravy",
      "description": "Spicy Indo-Chinese style chicken cooked in a thick, flavorful chili gravy.",
      "category": "Non-Veg",
      "image": "/assets/images/Chilli_chicken_gravy.jpeg",
      "isPopular": true
    },
    {
      "id": 31,
      "name": "Tandoori Chicken",
      "description": "Classic North Indian starter of chicken marinated in yogurt and spices, roasted in a tandoor.",
      "category": "Non-Veg",
      "image": "/assets/images/Tandori_chicken.jpeg",
      "isPopular": true
    },
    {
      "id": 32,
      "name": "Tandoori Roti",
      "description": "Whole wheat flatbread cooked in a clay tandoor, crisp on the edges and soft inside.",
      "category": "Non-Veg",
      "image": "/assets/images/Tandoori_roti.jpeg",
      "isPopular": true
    },
    {
      "id": 33,
      "name": "Egg Fried Rice",
      "description": "Classic fried rice tossed with scrambled eggs, soy sauce, and veggies.",
      "category": "Non-Veg",
      "image": "/assets/images/Egg_fried_rice.jpeg",
      "isPopular": true
    },
    {
      "id": 34,
      "name": "Egg Masala",
      "description": "Boiled eggs simmered in a spicy onion-tomato gravy for a rich side dish.",
      "category": "Non-Veg",
      "image": "/assets/images/Egg_masala.jpeg",
      "isPopular": true
    },
    {
      "id": 35,
      "name": "Prawn Masala",
      "description": "Juicy prawns cooked in a traditional spicy masala with coastal-style flavors.",
      "category": "Non-Veg",
      "image": "/assets/images/Prawn_masala.jpeg",
      "isPopular": true
    },
    {
      "id": 36,
      "name": "Schezwan Chicken Noodles",
      "description": "Spicy noodles tossed with shredded chicken and schezwan sauce for a fiery treat.",
      "category": "Non-Veg",
      "image": "/assets/images/Schezwan_chicken_noodles.jpeg",
      "isPopular": true
    },
    {
      "id": 37,
      "name": "Schezwan Egg Noodles",
      "description": "Noodles stir-fried with eggs and spicy schezwan sauce, a perfect Indo-Chinese delight.",
      "category": "Non-Veg",
      "image": "/assets/images/Schezwan_egg_noodles.jpeg",
      "isPopular": true
    },
    {
      "id": 38,
      "name": "Special Chicken Briyani",
      "description": "Chef's special chicken biryani layered with spices, herbs, and marinated chicken pieces.",
      "category": "Non-Veg",
      "image": "/assets/images/Spl_Chicken_briyani.jpeg",
      "isPopular": true
    },
    {
      "id": 39,
      "name": "Chicken 007",
      "description": "A spicy and crispy chicken starter with a secret masala punch.",
      "category": "Non-Veg",
      "image": "/assets/images/Chicken_007.jpeg",
      "isPopular": true
    },
    {
      "id": 40,
      "name": "Chicken 65",
      "description": "Iconic deep-fried chicken pieces marinated in a fiery South Indian blend.",
      "category": "Non-Veg",
      "image": "/assets/images/Chicken_65.jpeg",
      "isPopular": true
    },
    {
      "id": 41,
      "name": "Chicken 88",
      "description": "A flavorful chicken fry with rich aromatic spices, served crisp and hot.",
      "category": "Non-Veg",
      "image": "/assets/images/Chicken_88.jpeg",
      "isPopular": true
    },
    {
      "id": 42,
      "name": "Chilly Fish Dry",
      "description": "Batter-fried fish tossed in a dry Indo-Chinese chili sauce with onions and peppers.",
      "category": "Non-Veg",
      "image": "/assets/images/Chilly_fish_dry.jpeg",
      "isPopular": true
    },
    {
      "id": 43,
      "name": "Chicken Briyani",
      "description": "Classic chicken biryani cooked with basmati rice, herbs, and traditional spices.",
      "category": "Non-Veg",
      "image": "/assets/images/Chicken_briyani.jpeg",
      "isPopular": true
    },
    {
      "id": 44,
      "name": "Chicken Manchurian Dry",
      "description": "Crispy chicken balls tossed in a dry manchurian sauce with spring onions.",
      "category": "Non-Veg",
      "image": "/assets/images/Chicken_manjurian_dry.jpeg",
      "isPopular": true
    },
    {
      "id": 45,
      "name": "Chicken Mohalai Gravy",
      "description": "A rich, creamy Mughlai-style chicken curry with nuts and aromatic spices.",
      "category": "Non-Veg",
      "image": "/assets/images/Chicken_mohalai_gravy.jpeg",
      "isPopular": true
    },
    {
      "id": 46,
      "name": "Fish Fry",
      "description": "Spiced and shallow-fried fish fillets with a crisp crust and juicy inside.",
      "category": "Non-Veg",
      "image": "/assets/images/Fish_fry.jpeg",
      "isPopular": true
    },
    {
      "id": 47,
      "name": "Chicken Pepper Fry",
      "description": "Chicken stir-fried with crushed black pepper and curry leaves for intense flavor.",
      "category": "Non-Veg",
      "image": "/assets/images/Chicken_pepper_fry.jpeg",
      "isPopular": true
    },
    {
      "id": 48,
      "name": "Lolly Pop",
      "description": "Frenched chicken wings marinated and fried to golden perfection.",
      "category": "Non-Veg",
      "image": "/assets/images/Lolly_pop.jpeg",
      "isPopular": true
    },
    {
      "id": 49,
      "name": "Prawn 65",
      "description": "Deep-fried prawns coated with spicy masala for a crispy seafood delight.",
      "category": "Non-Veg",
      "image": "/assets/images/Prawn_65.jpeg",
      "isPopular": true
    },
    {
      "id": 50,
      "name": "Prawn Fry",
      "description": "Sautéed prawns with bold spices and a hint of lemon, crisp and savory.",
      "category": "Non-Veg",
      "image": "/assets/images/Prawn_fry.jpeg",
      "isPopular": true
    },
    {
      "id": 51,
      "name": "Schezwan Chicken Fried Rice",
      "description": "Fried rice tossed with schezwan sauce and juicy chicken for a spicy punch.",
      "category": "Non-Veg",
      "image": "/assets/images/Chiken_briyani.jpeg",
      "isPopular": true
    },
    {
      "id": 52,
      "name": "Winglet",
      "description": "Crispy chicken winglets seasoned and fried with a tangy-spicy coating.",
      "category": "Non-Veg",
      "image": "/assets/images/Winglet.jpeg",
      "isPopular": true
    },
    {
      "id": 53,
      "name": "Egg Lappa",
      "description": "A delicious stuffed lappa bread layered with spicy egg masala filling.",
      "category": "Non-Veg",
      "image": "/assets/images/Egg_lappa.jpeg",
      "isPopular": true
    },
    {
      "id": 54,
      "name": "Egg Kothu Parotta",
      "description": "Shredded parotta stir-fried with eggs, onions, chilies, and spices — a street food favorite.",
      "category": "Non-Veg",
      "image": "/assets/images/Egg_kothu_parotta.jpeg",
      "isPopular": true
    }
  ]


;

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
            {(['All', 'Veg', 'Non-Veg'] as CategoryType[]).map((category) => (
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
                    {/* <span className="text-[#C30010] bg-[#FFB800] px-3 py-1 rounded-full font-bold">₹{item.price}</span> */}
                  </div>
                  <p className="text-gray-700 mb-4">{item.description}</p>
                  {/* <button className="bg-[#C30010] text-white font-bold py-2 px-4 rounded-md hover:bg-[#C30010]/90 transition-all duration-300 w-full uppercase tracking-wide">
                    Order Now
                  </button> */}
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
