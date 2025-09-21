import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Coffee, Snowflake, Cookie } from 'lucide-react';
import { menuItems } from '../data/products';
import { useCart } from '../contexts/CartContext';

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'hot-drinks' | 'cold-drinks' | 'pastries'>('all');
  const { addToCart } = useCart();

  const categories = [
    { id: 'all', label: 'All Items', icon: <Coffee className="h-5 w-5" /> },
    { id: 'hot-drinks', label: 'Hot Drinks', icon: <Coffee className="h-5 w-5" /> },
    { id: 'cold-drinks', label: 'Cold Drinks', icon: <Snowflake className="h-5 w-5" /> },
    { id: 'pastries', label: 'Pastries', icon: <Cookie className="h-5 w-5" /> },
  ];

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  const handleAddToCart = (item: typeof menuItems[0]) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      category: item.category,
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1920)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white section-padding"
        >
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">
            Our Menu
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Handcrafted beverages and fresh pastries
          </p>
        </motion.div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white sticky top-16 z-40 shadow-sm">
        <div className="section-padding">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id as any)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-coffee-600 text-white'
                    : 'bg-coffee-100 text-coffee-800 hover:bg-coffee-200'
                }`}
              >
                {category.icon}
                <span>{category.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items Grid */}
      <section className="py-20 bg-cream">
        <div className="section-padding">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-coffee-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    ${item.price.toFixed(2)}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-xl text-dark-brown mb-2">
                    {item.name}
                  </h3>
                  <p className="text-light-brown mb-4">{item.description}</p>
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="w-full btn-primary py-2 text-sm"
                  >
                    Add to Cart
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-20 bg-white">
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-4xl font-bold text-dark-brown mb-4">
              Daily Specials
            </h2>
            <p className="text-lg text-light-brown max-w-2xl mx-auto">
              Enjoy special prices on selected items every day
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-coffee-50 p-6 rounded-lg text-center"
            >
              <Coffee className="h-12 w-12 text-coffee-600 mx-auto mb-4" />
              <h3 className="font-semibold text-xl text-dark-brown mb-2">
                Morning Special
              </h3>
              <p className="text-light-brown mb-4">
                Before 10 AM: Any coffee + pastry for $7.99
              </p>
              <span className="text-coffee-600 font-bold">Save $2.00</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-coffee-50 p-6 rounded-lg text-center"
            >
              <Snowflake className="h-12 w-12 text-coffee-600 mx-auto mb-4" />
              <h3 className="font-semibold text-xl text-dark-brown mb-2">
                Afternoon Chill
              </h3>
              <p className="text-light-brown mb-4">
                2-5 PM: 20% off all iced beverages
              </p>
              <span className="text-coffee-600 font-bold">Cool Down</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-coffee-50 p-6 rounded-lg text-center"
            >
              <Cookie className="h-12 w-12 text-coffee-600 mx-auto mb-4" />
              <h3 className="font-semibold text-xl text-dark-brown mb-2">
                Sweet Hour
              </h3>
              <p className="text-light-brown mb-4">
                After 6 PM: Buy 2 pastries, get 1 free
              </p>
              <span className="text-coffee-600 font-bold">Perfect for Sharing</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nutrition Info */}
      <section className="py-12 bg-cream">
        <div className="section-padding text-center">
          <p className="text-light-brown">
            <span className="font-semibold">Allergen Information:</span> Many of our products contain or may come in contact with common allergens. 
            Please speak with our staff about your dietary needs.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Menu;
