import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { useFavorites } from '../contexts/FavoritesContext';
import { useCart } from '../contexts/CartContext';
import { products } from '../data/products';

const Favorites: React.FC = () => {
  const { favorites, toggleFavorite } = useFavorites();
  const { addToCart } = useCart();

  const favoriteProducts = products.filter(p => favorites.includes(p.id));

  if (favoriteProducts.length === 0) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="text-center">
          <Heart className="h-24 w-24 text-coffee-300 mx-auto mb-6" />
          <h2 className="font-serif text-3xl font-bold text-dark-brown mb-4">
            No favorites yet
          </h2>
          <p className="text-light-brown mb-8">
            Start adding your favorite products to see them here!
          </p>
          <Link to="/shop" className="btn-primary inline-flex items-center">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream py-12">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-serif text-4xl font-bold text-dark-brown mb-8">
            My Favorites
          </h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {favoriteProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg card-hover"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <button
                    onClick={() => toggleFavorite(product.id)}
                    className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
                  >
                    <Heart className="h-5 w-5 text-red-500 fill-current" />
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-dark-brown mb-2">
                    {product.name}
                  </h3>
                  <p className="text-light-brown text-sm mb-3 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-coffee-600">
                      ${product.price.toFixed(2)}
                    </span>
                    <button
                      onClick={() => addToCart({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        image: product.image,
                        category: product.category,
                      })}
                      className="flex items-center space-x-2 px-3 py-2 bg-coffee-600 text-white rounded-lg hover:bg-coffee-700 transition-colors text-sm"
                    >
                      <ShoppingCart className="h-4 w-4" />
                      <span>Add</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/shop"
              className="btn-secondary inline-flex items-center"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Continue Shopping
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Favorites;
