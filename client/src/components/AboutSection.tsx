import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl mb-4">Our Story</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg max-w-4xl mx-auto text-gray-600">
            Discover the passion and tradition behind our authentic South Indian cuisine since 1955.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="font-serif text-3xl mb-6">A Legacy to Remember</h3>
            <p className="text-gray-600 mb-4">
              Founded in 1955 by Mr. S. Dhakshina Moorthy and Mrs. Nagavalli Ammal, New Moorthy Cafe 
              began as a humble establishment in North Main Road, Chidambaram. It quickly gained fame 
              for its unique taste and has since evolved into a full-fledged restaurant with multiple branches.
            </p>
            <p className="text-gray-600 mb-6">
              We offer a wide range of South Indian vegetarian and non-vegetarian dishes, prepared using 
              exclusive hand-picked spices and ingredients. Our food is crafted using traditional methods 
              and a deep commitment to delighting your taste buds.
            </p>
            <div className="flex items-center space-x-4">
              <Avatar className="w-16 h-16">
                <AvatarImage 
                  src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80" 
                  alt="Founder" 
                />
                <AvatarFallback>SM</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-serif text-lg">S. Dhakshina Moorthy</p>
                <p className="text-gray-500">Founder</p>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <img 
              src="./assets/images/southindian_restaurant.jpg" 
              alt="New Moorthy Cafe Restaurant Interior" 
              className="rounded-lg shadow-xl h-[500px] w-full object-cover" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
