import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-[#C30010]"></div>
    
      <div className="container mx-auto px-4 z-10 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#C30010] uppercase tracking-wide border-b-4 border-[#FFB800] pb-2 inline-block px-8">Our Story</h2>
          <p className="text-gray-700 max-w-4xl mx-auto">
            Discover the passion and tradition behind our authentic South Indian cuisine since 1955.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 bg-[#f9f9f9] p-6 rounded-lg shadow-md border-t-4 border-[#C30010]">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#C30010]">A Legacy to Remember</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Founded in 1955 by Mr. S. Dhakshina Moorthy and Mrs. Nagavalli Ammal, New Moorthy Cafe 
              began as a humble establishment in North Main Road, Chidambaram. It quickly gained fame 
              for its unique taste and has since evolved into a full-fledged restaurant with multiple branches.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We offer a wide range of South Indian vegetarian and non-vegetarian dishes, prepared using 
              exclusive hand-picked spices and ingredients. Our food is crafted using traditional methods 
              and a deep commitment to delighting your taste buds.
            </p>
            <div className="flex items-center space-x-4 bg-white p-4 rounded-lg border border-gray-100">
              <Avatar className="w-16 h-16 border-2 border-[#FFB800]">
                <AvatarImage 
                  src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80" 
                  alt="Founder" 
                />
                <AvatarFallback className="bg-[#C30010] text-white">SM</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-bold text-lg text-[#C30010]">S. Dhakshina Moorthy</p>
                <p className="text-gray-500">Founder</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative mx-auto w-fit">
              <img 
                src="/assets/images/southindian_restaurant.jpg" 
                alt="New Moorthy Cafe Restaurant Interior" 
                className="rounded-full border-4 border-[#FFB800] shadow-xl h-80 w-80 object-cover" 
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
      
      <div className="absolute bottom-0 left-0 w-full h-1 bg-[#C30010]"></div>
    </section>
  );
}
