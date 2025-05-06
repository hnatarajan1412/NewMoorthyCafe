import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, StarHalf } from "lucide-react";

interface Testimonial {
  name: string;
  avatar: string;
  rating: number;
  text: string;
}

export default function TestimonialsSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  
  const testimonials: Testimonial[] = [
    {
      name: "Venkatesh J",
      avatar: "",
      rating: 5,
      text: "All the items taste was good. Especially the mutton biriyani was awesome. The price is reasonable and the quantity is more. One starters and one gravy is more than sufficient for two people. Fluffy barotta was also good. For 200 Rs Prawn masala was good and the quantity was also more."
    },
    {
      name: "Kabhilan D",
      avatar: "",
      rating: 4.5,
      text: "Went for the famous name itself. Nool Parotta is perfectly cooked. Kadai chicken along with cashews & onions is a good combo along with it as suggested by servers. But I hardly missed trying Egg chutney, Customer service is good. Ambience is also good."
    },
    {
      name: "Hariharasudhan",
      avatar: "",
      rating: 5,
      text: "One of the best underrated non veg food in kumbakonam hattss off to you...."
    }
  ];

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} className="fill-yellow-400 text-yellow-400 w-4 h-4" />);
    }
    
    if (hasHalfStar) {
      stars.push(<StarHalf key="half-star" className="fill-yellow-400 text-yellow-400 w-4 h-4" />);
    }
    
    const remainingStars = 5 - stars.length;
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-star-${i}`} className="text-yellow-400 w-4 h-4" stroke="currentColor" fill="none" />);
    }
    
    return stars;
  };

  return (
    <section id="reviews" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl mb-4">Customer Reviews</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg max-w-4xl mx-auto text-gray-600">
            What our customers say about their dining experience.
          </p>
        </div>
        
        <div className="flex overflow-x-auto gap-6 pb-6 testimonial-slider">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="min-w-[300px] md:min-w-[350px] bg-[#F5F5F5] p-8 rounded-lg flex-shrink-0"
            >
              <div className="flex items-center mb-4">
                <Avatar className="w-12 h-12 mr-4">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-medium">{testimonial.name}</h4>
                  <div className="flex">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">{testimonial.text}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <div className="inline-flex space-x-2">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`w-3 h-3 rounded-full ${activeSlide === index ? 'bg-primary' : 'bg-gray-300'}`}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
