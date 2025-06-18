
import { Link } from 'react-router-dom';
import { Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border mehendi-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                <span className="text-white font-bold">S</span>
              </div>
              <span className="font-playfair text-2xl font-bold text-gradient">
                Shaziya Mehendi Designs
              </span>
            </Link>
            <p className="text-muted-foreground max-w-md mb-4">
              Celebrating the art of traditional Mehendi with modern elegance. 
              Creating beautiful henna designs for your special moments.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/categories/bridal" className="text-muted-foreground hover:text-primary transition-colors">Bridal Mehendi</Link></li>
              <li><Link to="/categories/festival" className="text-muted-foreground hover:text-primary transition-colors">Festival Designs</Link></li>
              <li><Link to="/categories/tips" className="text-muted-foreground hover:text-primary transition-colors">Mehendi Tips</Link></li>
              <li><Link to="/gallery" className="text-muted-foreground hover:text-primary transition-colors">Gallery</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-playfair font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Email: info@shaziyamehendi.com</li>
              <li>Phone: +91 98765 43210</li>
              <li>Location: Mumbai, India</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Shaziya Mehendi Designs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
