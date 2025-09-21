import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Coffee } from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <footer className="bg-dark-brown text-cream mt-20">
      <div className="section-padding py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Coffee className="h-8 w-8 text-coffee-400" />
              <span className="font-serif text-2xl font-bold">Artisan Coffee</span>
            </div>
            <p className="text-sm text-coffee-200">
              Crafting exceptional coffee experiences since 2020. From bean to cup, we're passionate about quality.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-coffee-200 hover:text-coffee-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-coffee-200 hover:text-coffee-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-coffee-200 hover:text-coffee-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-coffee-200 hover:text-coffee-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-coffee-200 hover:text-coffee-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-coffee-200 hover:text-coffee-400 transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-coffee-200 hover:text-coffee-400 transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-coffee-200 hover:text-coffee-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-coffee-200 hover:text-coffee-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-coffee-400 mt-0.5" />
                <span className="text-coffee-200 text-sm">
                  123 Coffee Street<br />
                  San Francisco, CA 94102
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-coffee-400" />
                <span className="text-coffee-200 text-sm">(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-coffee-400" />
                <span className="text-coffee-200 text-sm">hello@artisancoffee.com</span>
              </li>
            </ul>
            <div className="mt-4">
              <h4 className="font-medium mb-2">Opening Hours</h4>
              <p className="text-coffee-200 text-sm">
                Mon-Fri: 7:00 AM - 8:00 PM<br />
                Sat-Sun: 8:00 AM - 9:00 PM
              </p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
            <p className="text-coffee-200 text-sm mb-4">
              Subscribe to get special offers and updates on new coffee arrivals!
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full px-4 py-2 bg-coffee-900 text-cream placeholder-coffee-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-coffee-400"
                required
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-coffee-600 text-white font-semibold rounded-lg hover:bg-coffee-700 transition-colors"
              >
                {subscribed ? 'Subscribed!' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-coffee-800 text-center">
          <p className="text-coffee-200 text-sm">
            © 2024 Artisan Coffee. All rights reserved. | 
            <Link to="/privacy" className="hover:text-coffee-400 ml-1">Privacy Policy</Link> | 
            <Link to="/terms" className="hover:text-coffee-400 ml-1">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
