import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl mb-4">Our Story</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg max-w-4xl mx-auto text-gray-600">
            Discover the passion and tradition behind our authentic Indian cuisine.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="font-serif text-3xl mb-6">Tradition meets Innovation</h3>
            <p className="text-gray-600 mb-4">
              Founded in 2005, Thaliwala has been serving authentic Indian cuisine with a modern twist. 
              Our dishes are inspired by traditional recipes from various regions of India, carefully 
              prepared with fresh, locally-sourced ingredients.
            </p>
            <p className="text-gray-600 mb-6">
              Our team of experienced chefs brings decades of culinary expertise to create a memorable 
              dining experience that celebrates the rich heritage of Indian gastronomy.
            </p>
            <div className="flex items-center space-x-4">
              <Avatar className="w-16 h-16">
                <AvatarImage 
                  src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80" 
                  alt="Chef" 
                />
                <AvatarFallback>RS</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-serif text-lg">Chef Raj Sharma</p>
                <p className="text-gray-500">Executive Chef & Founder</p>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <img 
              src="https://images.unsplash.com/photo-1514222788835-3a1a1d5b32f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80" 
              alt="Restaurant Interior" 
              className="rounded-lg shadow-xl h-[500px] w-full object-cover" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
