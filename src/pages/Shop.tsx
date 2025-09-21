import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Filter, X, Eye, Heart } from 'lucide-react';
import { products } from '../data/products';
import type { Product } from '../data/products';
import { useCart } from '../contexts/CartContext';
import { useFavorites } from '../contexts/FavoritesContext';
import ProductModal from '../components/ProductModal';

const Shop: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'coffee' | 'equipment' | 'accessories'>('all');
  const [selectedOrigin, setSelectedOrigin] = useState<string>('all');
  const [selectedRoast, setSelectedRoast] = useState<string>('all');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);
  const { addToCart } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();

  const origins = ['all', 'Ethiopia', 'Colombia', 'Brazil', 'Kenya', 'Costa Rica'];
  const roasts = ['all', 'light', 'medium', 'dark'];

  const filteredProducts = products.filter(product => {
    if (selectedCategory !== 'all' && product.category !== selectedCategory) return false;
    if (selectedOrigin !== 'all' && product.origin !== selectedOrigin) return false;
    if (selectedRoast !== 'all' && product.roast !== selectedRoast) return false;
    if (product.price < priceRange[0] || product.price > priceRange[1]) return false;
    return true;
  });

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1556745753-b2904692b3cd?w=1920)',
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
            Shop Coffee & Gear
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Premium beans and brewing equipment delivered to your door
          </p>
        </motion.div>
      </section>

      <section className="py-8 bg-white">
        <div className="section-padding">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center justify-center space-x-2 px-4 py-2 bg-coffee-600 text-white rounded-lg"
            >
              <Filter className="h-5 w-5" />
              <span>Filters</span>
            </button>

            {/* Filters Sidebar */}
            <aside className={`${showFilters ? 'block' : 'hidden'} lg:block lg:w-64 space-y-6`}>
              <div className="bg-cream p-6 rounded-lg">
                <div className="flex justify-between items-center mb-4 lg:mb-0">
                  <h3 className="font-semibold text-lg text-dark-brown">Filters</h3>
                  <button
                    onClick={() => setShowFilters(false)}
                    className="lg:hidden"
                  >
                    <X className="h-5 w-5 text-dark-brown" />
                  </button>
                </div>

                {/* Category Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-dark-brown mb-3">Category</h4>
                  <div className="space-y-2">
                    {['all', 'coffee', 'equipment', 'accessories'].map(category => (
                      <label key={category} className="flex items-center">
                        <input
                          type="radio"
                          name="category"
                          checked={selectedCategory === category}
                          onChange={() => setSelectedCategory(category as any)}
                          className="mr-2 text-coffee-600 focus:ring-coffee-600"
                        />
                        <span className="text-light-brown capitalize">{category}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Origin Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-dark-brown mb-3">Origin</h4>
                  <select
                    value={selectedOrigin}
                    onChange={(e) => setSelectedOrigin(e.target.value)}
                    className="w-full px-3 py-2 border border-coffee-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-coffee-600"
                  >
                    {origins.map(origin => (
                      <option key={origin} value={origin}>
                        {origin === 'all' ? 'All Origins' : origin}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Roast Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-dark-brown mb-3">Roast Level</h4>
                  <div className="space-y-2">
                    {roasts.map(roast => (
                      <label key={roast} className="flex items-center">
                        <input
                          type="radio"
                          name="roast"
                          checked={selectedRoast === roast}
                          onChange={() => setSelectedRoast(roast)}
                          className="mr-2 text-coffee-600 focus:ring-coffee-600"
                        />
                        <span className="text-light-brown capitalize">{roast === 'all' ? 'All Roasts' : `${roast} Roast`}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range Filter */}
                <div>
                  <h4 className="font-medium text-dark-brown mb-3">Price Range</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm text-light-brown">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full accent-coffee-600"
                    />
                    <div className="flex gap-2">
                      <input
                        type="number"
                        min="0"
                        max={priceRange[1]}
                        value={priceRange[0]}
                        onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                        className="w-1/2 px-2 py-1 border rounded text-sm"
                        placeholder="Min"
                      />
                      <input
                        type="number"
                        min={priceRange[0]}
                        max="100"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                        className="w-1/2 px-2 py-1 border rounded text-sm"
                        placeholder="Max"
                      />
                    </div>
                  </div>
                </div>

                {/* Clear Filters */}
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedOrigin('all');
                    setSelectedRoast('all');
                  }}
                  className="w-full mt-6 px-4 py-2 bg-coffee-600 text-white rounded-lg hover:bg-coffee-700 transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            </aside>

            {/* Products Grid */}
            <div className="flex-1">
              <div className="mb-6 flex justify-between items-center">
                <p className="text-light-brown">
                  Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-lg overflow-hidden shadow-lg"
                  >
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                      <button
                        onClick={() => toggleFavorite(product.id)}
                        className="absolute top-4 left-4 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
                        title={isFavorite(product.id) ? "Remove from favorites" : "Add to favorites"}
                      >
                        <Heart 
                          className={`h-5 w-5 ${
                            isFavorite(product.id) 
                              ? 'text-red-500 fill-current' 
                              : 'text-gray-400 hover:text-red-500'
                          } transition-colors`}
                        />
                      </button>
                      {product.inStock ? (
                        <span className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                          In Stock
                        </span>
                      ) : (
                        <span className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                          Out of Stock
                        </span>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="font-semibold text-xl text-dark-brown mb-2">
                        {product.name}
                      </h3>
                      <p className="text-light-brown text-sm mb-3">{product.description}</p>
                      
                      {product.origin && (
                        <p className="text-sm text-coffee-600 mb-1">
                          <span className="font-medium">Origin:</span> {product.origin}
                        </p>
                      )}
                      
                      {product.roast && (
                        <p className="text-sm text-coffee-600 mb-1">
                          <span className="font-medium">Roast:</span> {product.roast}
                        </p>
                      )}
                      
                      {product.tastingNotes && (
                        <div className="flex flex-wrap gap-2 mt-3 mb-4">
                          {product.tastingNotes.map((note, i) => (
                            <span
                              key={i}
                              className="px-2 py-1 bg-coffee-100 text-coffee-700 text-xs rounded-full"
                            >
                              {note}
                            </span>
                          ))}
                        </div>
                      )}
                      
                      <div className="flex justify-between items-center mt-4">
                        <span className="text-2xl font-bold text-coffee-600">
                          ${product.price.toFixed(2)}
                        </span>
                        <div className="flex gap-2">
                          <button
                            onClick={() => {
                              setSelectedProduct(product);
                              setIsModalOpen(true);
                            }}
                            className="p-2 bg-coffee-100 text-coffee-600 rounded-lg hover:bg-coffee-200 transition-all"
                            title="Quick View"
                          >
                            <Eye className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => handleAddToCart(product)}
                            disabled={!product.inStock}
                            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all ${
                              product.inStock
                                ? 'bg-coffee-600 text-white hover:bg-coffee-700'
                                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            }`}
                          >
                            <ShoppingCart className="h-4 w-4" />
                            <span>Add</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-light-brown text-lg">
                    No products found matching your filters.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedProduct(null);
        }}
      />
    </div>
  );
};

export default Shop;
