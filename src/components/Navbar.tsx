import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, Coffee, Heart } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useFavorites } from '../contexts/FavoritesContext';
import SearchBar from './SearchBar';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { getTotalItems } = useCart();
  const { favorites } = useFavorites();
  const cartItemsCount = getTotalItems();
  const favoritesCount = favorites.length;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/menu', label: 'Menu' },
    { path: '/shop', label: 'Shop' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="section-padding">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Coffee className="h-8 w-8 text-coffee-600" />
            <span className="font-serif text-2xl font-bold text-dark-brown">
              Artisan Coffee
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors duration-300 ${
                  isActive(link.path)
                    ? 'text-coffee-600 border-b-2 border-coffee-600'
                    : 'text-dark-brown hover:text-coffee-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <SearchBar />
            <Link 
              to="/favorites" 
              className="relative"
              aria-label={`Favorites ${favoritesCount > 0 ? `(${favoritesCount} items)` : ''}`}
            >
              <Heart className="h-6 w-6 text-dark-brown hover:text-coffee-600 transition-colors" />
              {favoritesCount > 0 && (
                <span 
                  className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
                  aria-hidden="true"
                >
                  {favoritesCount}
                </span>
              )}
            </Link>
            <Link 
              to="/cart" 
              className="relative"
              aria-label={`Shopping cart ${cartItemsCount > 0 ? `(${cartItemsCount} items)` : ''}`}
            >
              <ShoppingCart className="h-6 w-6 text-dark-brown hover:text-coffee-600 transition-colors" />
              {cartItemsCount > 0 && (
                <span 
                  className="absolute -top-2 -right-2 bg-coffee-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
                  aria-hidden="true"
                >
                  {cartItemsCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <Link to="/cart" className="relative">
              <ShoppingCart className="h-6 w-6 text-dark-brown" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-coffee-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-dark-brown hover:text-coffee-600 focus:outline-none focus:ring-2 focus:ring-coffee-600 rounded-md p-1"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden animate-slide-down">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md font-medium ${
                    isActive(link.path)
                      ? 'text-coffee-600 bg-coffee-50'
                      : 'text-dark-brown hover:text-coffee-600 hover:bg-coffee-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
