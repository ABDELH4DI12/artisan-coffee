import React from 'react';
import { X, ShoppingCart, Coffee } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Product } from '../data/products';
import { useCart } from '../contexts/CartContext';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose }) => {
  const { addToCart } = useCart();

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 backdrop-blur-md z-50"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center">
                <h2 className="text-2xl font-serif font-bold text-dark-brown">Product Details</h2>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="h-6 w-6 text-dark-brown" />
                </button>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 p-6">
                <div>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-96 object-cover rounded-lg"
                  />
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-3xl font-serif font-bold text-dark-brown mb-2">
                      {product.name}
                    </h3>
                    <p className="text-2xl font-bold text-coffee-600">
                      ${product.price.toFixed(2)}
                    </p>
                  </div>
                  
                  <p className="text-light-brown text-lg">
                    {product.description}
                  </p>
                  
                  {product.origin && (
                    <div className="border-t pt-4">
                      <h4 className="font-semibold text-dark-brown mb-2">Details</h4>
                      <div className="space-y-2 text-light-brown">
                        <p><span className="font-medium">Origin:</span> {product.origin}</p>
                        {product.roast && (
                          <p><span className="font-medium">Roast Level:</span> {product.roast}</p>
                        )}
                      </div>
                    </div>
                  )}
                  
                  {product.tastingNotes && (
                    <div className="border-t pt-4">
                      <h4 className="font-semibold text-dark-brown mb-2">Tasting Notes</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.tastingNotes.map((note, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-coffee-100 text-coffee-700 rounded-full text-sm"
                          >
                            {note}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="border-t pt-4 space-y-3">
                    <div className="flex items-center space-x-2 text-green-600">
                      <Coffee className="h-5 w-5" />
                      <span className="text-sm">Freshly roasted and shipped within 24 hours</span>
                    </div>
                    
                    <button
                      onClick={handleAddToCart}
                      disabled={!product.inStock}
                      className={`w-full flex items-center justify-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                        product.inStock
                          ? 'bg-coffee-600 text-white hover:bg-coffee-700'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      <ShoppingCart className="h-5 w-5" />
                      <span>{product.inStock ? 'Add to Cart' : 'Out of Stock'}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProductModal;
