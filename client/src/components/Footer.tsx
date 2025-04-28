import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock, SendIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-[#C30010] text-white py-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-white"></div>
      
      <div className="absolute inset-0 opacity-10" 
           style={{
             backgroundImage: 'url("/assets/images/red-texture.jpg")',
             backgroundSize: 'cover',
             backgroundPosition: 'center'
           }}>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/assets/NMC_Logo.png" 
                alt="Chidambaram New Moorthy Cafe Logo" 
                className="h-16 rounded-full border-2 border-[#FFB800] bg-white p-1 mr-3"
              />
              <h3 className="text-2xl font-bold text-white">New Moorthy Cafe</h3>
            </div>
            <p className="mb-4 text-white/90">
              Since 1955, we've been serving authentic South Indian cuisine with 
              exclusive hand-picked spices and traditional methods.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white text-[#C30010] p-2 rounded-full hover:bg-[#FFB800] transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-white text-[#C30010] p-2 rounded-full hover:bg-[#FFB800] transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-white text-[#C30010] p-2 rounded-full hover:bg-[#FFB800] transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6 text-[#FFB800] uppercase tracking-wide">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="/#home" className="text-white hover:text-[#FFB800] transition-colors flex items-center">
                <span className="mr-2">•</span>Home
              </a></li>
              <li><a href="/#about" className="text-white hover:text-[#FFB800] transition-colors flex items-center">
                <span className="mr-2">•</span>About Us
              </a></li>
              <li><a href="/#menu" className="text-white hover:text-[#FFB800] transition-colors flex items-center">
                <span className="mr-2">•</span>Menu
              </a></li>
              <li><a href="/#gallery" className="text-white hover:text-[#FFB800] transition-colors flex items-center">
                <span className="mr-2">•</span>Gallery
              </a></li>
              <li><a href="/#reviews" className="text-white hover:text-[#FFB800] transition-colors flex items-center">
                <span className="mr-2">•</span>Reviews
              </a></li>
              <li><a href="/#contact" className="text-white hover:text-[#FFB800] transition-colors flex items-center">
                <span className="mr-2">•</span>Contact
              </a></li>
              <li><a href="/franchise" className="text-[#FFB800] hover:text-white transition-colors flex items-center">
                <span className="mr-2">•</span>Franchise
              </a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6 text-[#FFB800] uppercase tracking-wide">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mt-1 mr-3 text-[#FFB800]" size={18} />
                <span>North Main Road, Chidambaram, Tamil Nadu, India</span>
              </li>
              <li className="flex items-start">
                <Phone className="mt-1 mr-3 text-[#FFB800]" size={18} />
                <span>+91-96778 00889</span>
              </li>
              <li className="flex items-start">
                <Mail className="mt-1 mr-3 text-[#FFB800]" size={18} />
                <span>info@newmoorthycafe.com</span>
              </li>
              <li className="flex items-start">
                <Clock className="mt-1 mr-3 text-[#FFB800]" size={18} />
                <span>Mon-Fri: 11:00 AM - 10:00 PM<br />Sat-Sun: 12:00 PM - 11:00 PM</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6 text-[#FFB800] uppercase tracking-wide">Visit Us</h4>
            <p className="mb-6 text-white/90">We're open 7 days a week. Come experience the authentic taste of South Indian cuisine.</p>
            <Button 
              onClick={() => window.location.href = '/#contact'}
              className="bg-white text-[#C30010] px-6 py-3 rounded border-2 border-[#FFB800] hover:bg-[#FFB800] transition-all duration-300 font-bold uppercase tracking-wide"
            >
              Contact Us
            </Button>
          </div>
        </div>
        
        <div className="border-t border-[#FFB800]/30 mt-12 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Chidambaram New Moorthy Cafe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
