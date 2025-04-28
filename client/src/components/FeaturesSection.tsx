import { Utensils, Leaf, HandHeart } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section className="py-16 bg-[#C30010] relative overflow-hidden">
      <div className="absolute inset-0 opacity-20" 
           style={{
             backgroundImage: 'url("/assets/images/red-texture.jpg")',
             backgroundSize: 'cover',
             backgroundPosition: 'center'
           }}>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white uppercase tracking-wide">Our Specialities</h2>
          <div className="w-24 h-1 bg-[#FFB800] mx-auto mb-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-8 rounded-lg shadow-md text-center relative border-t-4 border-[#FFB800]">
            <div className="w-20 h-20 bg-[#C30010] rounded-full flex items-center justify-center mx-auto mb-6 -mt-14 border-4 border-white">
              <Utensils className="text-[#FFB800] w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-[#C30010] uppercase">Authentic Flavors</h3>
            <p className="text-gray-700">
              We use traditional spices and cooking methods to create authentic Indian flavors 
              that transport you to the streets of India.
            </p>
          </div>
          
          {/* Feature 2 */}
          <div className="bg-white p-8 rounded-lg shadow-md text-center relative border-t-4 border-[#FFB800]">
            <div className="w-20 h-20 bg-[#C30010] rounded-full flex items-center justify-center mx-auto mb-6 -mt-14 border-4 border-white">
              <Leaf className="text-[#FFB800] w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-[#C30010] uppercase">Fresh Ingredients</h3>
            <p className="text-gray-700">
              We source only the freshest, highest quality ingredients to ensure every dish 
              delivers exceptional taste and quality.
            </p>
          </div>
          
          {/* Feature 3 */}
          <div className="bg-white p-8 rounded-lg shadow-md text-center relative border-t-4 border-[#FFB800]">
            <div className="w-20 h-20 bg-[#C30010] rounded-full flex items-center justify-center mx-auto mb-6 -mt-14 border-4 border-white">
              <HandHeart className="text-[#FFB800] w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-[#C30010] uppercase">Handcrafted Dishes</h3>
            <p className="text-gray-700">
              Each dish is prepared with care and attention to detail, ensuring a memorable 
              dining experience with every visit.
            </p>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-8">
        <svg viewBox="0 0 1200 30" className="fill-white w-full h-8">
          <path d="M0,30 C200,10 400,30 600,15 C800,0 1000,20 1200,5 L1200,30 L0,30 Z"></path>
        </svg>
      </div>
    </section>
  );
}
