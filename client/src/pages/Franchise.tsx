import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Clock, DollarSign, Briefcase, Utensils, Award, BarChart3 } from "lucide-react";

export default function Franchise() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-[60px] md:pt-[80px] relative h-[60vh] flex items-center">
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: 'url("/assets/images/franchise-banner.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          ></div>
          
          <div className="absolute inset-0 bg-[#C30010]/80 z-0"></div>
          
          {/* Main title - small overlay at bottom center */}
          <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-20 text-center">
            <div className="bg-black/40 backdrop-blur-sm py-2 px-6 inline-block">
              <h1 className="text-white text-3xl md:text-5xl font-bold drop-shadow-lg">
                Franchise Opportunities
              </h1>
              <div className="w-56 h-1 bg-[#FFB800] mx-auto my-2"></div>
              <p className="text-white text-lg md:text-xl drop-shadow-lg mb-6">
                Join the Chidambaram New Moorthy Cafe family
              </p>
              <Button 
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#FFB800] text-[#C30010] hover:bg-[#FFB800]/90 px-8 py-3 rounded-md text-lg font-bold"
              >
                Apply Now
              </Button>
            </div>
          </div>
          
          {/* Bottom Border */}
          <div className="absolute bottom-0 left-0 w-full h-2 bg-[#FFB800] z-30"></div>
        </section>

        {/* Our Legacy Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl md:text-5xl mb-4">A Legacy to Remember</h2>
              <div className="w-24 h-1 bg-[#FFB800] mx-auto mb-6"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-gray-700 mb-4 text-lg">
                The History of Moorthy Cafe can be traced all the way back to 1955. Founded by Mr. S. Dhakshina Moorthy and Mrs. Nagavalli under the name of Moorthy Cafe Veg and Non-Veg Hotel, which over the years have become famous with its name and cooking style. It was first originated in North Main Road, Chidambaram. Mr. S. Dhakshina Moorthy soul reached god on 20-08-1976. New Moorthy Cafe started at Thandai Periyar Bus stand by Mr. S. Dhakshina Moorthy's sons following his footsteps. Multiple branches in the name of Moorthy Cafe evolved around the year in different places of Chidambaram.
                </p>
                <p className="text-gray-700 mb-6 text-lg">
                Moorthy Cafe have created a range of South Indian vegetarian and Non-Vegetarian dishes for you to enjoy. Food is their passion, prepared for you always with devotion, love, and the finest ingredients. Since it was established, Moorthy Cafe has grown in popularity through the exceptional quality of service and food.
                </p>
                <p className="text-gray-700 mb-6 text-lg">
                Apt restaurant temperature, ambient lighting conditions, pleasant decor, comfortable seating arrangement and backed by a dedicated team of workers, chef and management who are working around the clock striving to take care of every intricate needs to provide its customers with the complete pleasurable experience.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <span className="block text-primary font-bold text-3xl">70+</span>
                    <span className="text-gray-600">Years of Excellence</span>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <span className="block text-primary font-bold text-3xl">50+</span>
                    <span className="text-gray-600">Signature Dishes</span>
                  </div>
                </div>
              </div>
              <div>
                <img 
                  src="/assets/images/Legacy.png" 
                  alt="New Moorthy Cafe Legacy" 
                  className="rounded-lg shadow-xl w-full h-auto object-cover" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* Signature Dishes */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl md:text-5xl mb-4">Our Signature Dishes</h2>
              <div className="w-24 h-1 bg-[#FFB800] mx-auto mb-6"></div>
              <p className="text-lg max-w-4xl mx-auto text-gray-600 mb-10">
                These are the culinary masterpieces that have made us famous and will be the cornerstone of your franchise success
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="/assets/images/Kadai-Chicken.jpg"
                    alt="Kadai Chicken" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-serif text-xl mb-2">Kadai Chicken</h3>
                  <p className="text-gray-600 text-sm">Our spicy signature chicken dish that keeps customers coming back</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="/assets/images/parotta.jpeg"
                    alt="Soft Layered Parotta" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-serif text-xl mb-2">Soft Layered Parotta</h3>
                  <p className="text-gray-600 text-sm">Perfectly flaky layers that melt in your mouth</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1631452180519-c014fe946bc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                    alt="Special Mutton Curry" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-serif text-xl mb-2">Special Mutton Curry</h3>
                  <p className="text-gray-600 text-sm">Tender mutton cooked with our secret spice blend</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="/assets/images/Mutton_briyani.jpeg"
                    alt="Mutton Biryani" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-serif text-xl mb-2">Seeraga Samba Biryani</h3>
                  <p className="text-gray-600 text-sm">Fragrant rice with perfectly spiced meat and vegetables</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Partner With Us */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl md:text-5xl mb-4">Why Partner With Us?</h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-lg max-w-4xl mx-auto text-gray-600">
                Joining the Chidambaram New Moorthy Cafe family means benefiting from our proven business model, time-tested recipes, and comprehensive support
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-md transition-all duration-300">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <DollarSign className="text-primary w-7 h-7" />
                </div>
                <h3 className="font-serif text-xl mb-4">Low Investment, High Return</h3>
                <p className="text-gray-600">
                  Our business model is designed to maximize your ROI with optimized operations and pricing strategy
                </p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-md transition-all duration-300">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Utensils className="text-primary w-7 h-7" />
                </div>
                <h3 className="font-serif text-xl mb-4">Complete Operational Support</h3>
                <p className="text-gray-600">
                  From chef training to inventory management, we're with you every step of the way
                </p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-md transition-all duration-300">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BarChart3 className="text-primary w-7 h-7" />
                </div>
                <h3 className="font-serif text-xl mb-4">Marketing & Brand Power</h3>
                <p className="text-gray-600">
                  Benefit from our established brand recognition and ongoing marketing support
                </p>
              </div>
            </div>
            
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="font-serif text-2xl mb-6">Complete Support Package</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="text-primary mt-1 mr-2 min-w-5" />
                    <span>Venue & kitchen setup assistance with layout planning</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-primary mt-1 mr-2 min-w-5" />
                    <span>Digital & tech support including POS and online ordering</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-primary mt-1 mr-2 min-w-5" />
                    <span>Marketing & branding support with social media campaigns</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-primary mt-1 mr-2 min-w-5" />
                    <span>Access to training materials, SOPs, and video libraries</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-primary mt-1 mr-2 min-w-5" />
                    <span>Ongoing operations assistance with regular audits and feedback</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="font-serif text-2xl mb-6">Franchise Partner Profile</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="text-primary mt-1 mr-2 min-w-5" />
                    <span>Strong local network & community knowledge</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-primary mt-1 mr-2 min-w-5" />
                    <span>Basic understanding of hospitality/food industry</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-primary mt-1 mr-2 min-w-5" />
                    <span>Commitment to quality and hygiene standards</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-primary mt-1 mr-2 min-w-5" />
                    <span>Ability to invest and manage daily operations</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-primary mt-1 mr-2 min-w-5" />
                    <span>Passion to grow with our legacy brand</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Franchise Models */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl md:text-5xl mb-4">Franchise Models</h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-lg max-w-4xl mx-auto text-gray-600">
                Choose the model that best fits your investment goals and location
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
              <div className="flex-1 bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="bg-primary/10 text-primary font-bold py-2 px-4 rounded-full inline-block mb-6">
                  QSR Model
                </div>
                <h3 className="font-serif text-2xl mb-2">Quick Service Restaurant</h3>
                <p className="text-gray-600 mb-6">Ideal for takeaway & limited dine-in locations</p>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <Clock className="text-gray-400 mt-1 mr-2 min-w-5" />
                    <span className="text-gray-600">Space Required: 500 - 850 sq.ft</span>
                  </li>
                  <li className="flex items-start">
                    <Briefcase className="text-gray-400 mt-1 mr-2 min-w-5" />
                    <span className="text-gray-600">Focus on take-out and delivery</span>
                  </li>
                  <li className="flex items-start">
                    <Award className="text-gray-400 mt-1 mr-2 min-w-5" />
                    <span className="text-gray-600">Optimized menu for fast service</span>
                  </li>
                </ul>
                
                <div className="text-center pt-4 border-t border-gray-100">
                  <span className="text-3xl font-bold text-primary">₹9.5 Lakhs</span>
                  <p className="text-gray-500 text-sm">+ GST</p>
                </div>
              </div>
              
              <div className="flex-1 bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="bg-primary/10 text-primary font-bold py-2 px-4 rounded-full inline-block mb-6">
                  Full Service Model
                </div>
                <h3 className="font-serif text-2xl mb-2">Full-service Restaurant</h3>
                <p className="text-gray-600 mb-6">Complete dining experience with our full menu</p>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <Clock className="text-gray-400 mt-1 mr-2 min-w-5" />
                    <span className="text-gray-600">Space Required: 1250 - 1500 sq.ft</span>
                  </li>
                  <li className="flex items-start">
                    <Briefcase className="text-gray-400 mt-1 mr-2 min-w-5" />
                    <span className="text-gray-600">Full dine-in experience with premium interiors</span>
                  </li>
                  <li className="flex items-start">
                    <Award className="text-gray-400 mt-1 mr-2 min-w-5" />
                    <span className="text-gray-600">Complete menu with all signature dishes</span>
                  </li>
                </ul>
                
                <div className="text-center pt-4 border-t border-gray-100">
                  <span className="text-3xl font-bold text-primary">₹43.5 Lakhs</span>
                  <p className="text-gray-500 text-sm">+ GST</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact-form" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl md:text-5xl mb-4">Ready to Get Started?</h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-lg max-w-4xl mx-auto text-gray-600">
                Fill out the form below and our franchise development team will contact you soon
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto bg-gray-50 p-8 rounded-lg shadow-md">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">Full Name*</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email Address*</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number*</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="location" className="block text-gray-700 mb-2">Preferred Location*</label>
                    <input 
                      type="text" 
                      id="location" 
                      name="location" 
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="investment" className="block text-gray-700 mb-2">Investment Capacity*</label>
                  <select 
                    id="investment" 
                    name="investment" 
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  >
                    <option value="">Select your investment range</option>
                    <option value="10-30">₹10 - ₹30 Lakhs</option>
                    <option value="30-50">₹30 - ₹50 Lakhs</option>
                    <option value="50+">Above ₹50 Lakhs</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">Additional Information</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Tell us about your background, experience, and why you're interested in our franchise"
                  ></textarea>
                </div>
                
                <div className="text-center">
                  <Button 
                    type="submit" 
                    className="bg-primary text-white px-8 py-3 rounded-md hover:bg-primary/90 transition-all duration-300 text-lg font-medium"
                  >
                    Submit Application
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}