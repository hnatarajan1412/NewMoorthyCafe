import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock, SendIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-[#333333] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-cursive text-3xl text-primary mb-4">Thaliwala</h3>
            <p className="mb-4">
              Experience the authentic taste of India with our carefully crafted dishes 
              made from traditional recipes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-primary transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#menu" className="hover:text-primary transition-colors">Menu</a></li>
              <li><a href="#gallery" className="hover:text-primary transition-colors">Gallery</a></li>
              <li><a href="#reviews" className="hover:text-primary transition-colors">Reviews</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPin className="mt-1 mr-2" size={16} />
                <span>123 Main Street, New York, NY 10001</span>
              </li>
              <li className="flex items-start">
                <Phone className="mt-1 mr-2" size={16} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <Mail className="mt-1 mr-2" size={16} />
                <span>info@thaliwala.com</span>
              </li>
              <li className="flex items-start">
                <Clock className="mt-1 mr-2" size={16} />
                <span>Mon-Fri: 11:00 AM - 10:00 PM<br />Sat-Sun: 12:00 PM - 11:00 PM</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl mb-4">Newsletter</h4>
            <p className="mb-4">Subscribe to our newsletter for special offers and updates.</p>
            <form className="flex">
              <Input 
                type="email" 
                placeholder="Your Email" 
                className="px-4 py-2 rounded-l text-gray-800 w-full focus:outline-none" 
              />
              <Button 
                type="submit" 
                className="bg-primary text-white px-4 py-2 rounded-r hover:bg-primary/90 transition-all duration-300"
              >
                <SendIcon size={16} />
              </Button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Thaliwala. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
