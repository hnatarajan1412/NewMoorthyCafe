import { Utensils, Leaf, HandHeart } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section className="py-16 bg-[#F5F5F5]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Utensils className="text-primary w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl mb-4">Authentic Flavors</h3>
            <p className="text-gray-600">
              We use traditional spices and cooking methods to create authentic Indian flavors 
              that transport you to the streets of India.
            </p>
          </div>
          
          {/* Feature 2 */}
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Leaf className="text-primary w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl mb-4">Fresh Ingredients</h3>
            <p className="text-gray-600">
              We source only the freshest, highest quality ingredients to ensure every dish 
              delivers exceptional taste and quality.
            </p>
          </div>
          
          {/* Feature 3 */}
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <HandHeart className="text-primary w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl mb-4">Handcrafted Dishes</h3>
            <p className="text-gray-600">
              Each dish is prepared with care and attention to detail, ensuring a memorable 
              dining experience with every visit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
