import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Plus, Minus, Trash2, ArrowLeft, ArrowRight } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import CheckoutForm from '../components/CheckoutForm';

const Cart: React.FC = () => {
  const { items, removeFromCart, updateQuantity, clearCart, getTotalPrice } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);

  const handleCheckoutSubmit = () => {
    alert('🎉 Thank you for your order! This is just a demo website - no real payment was processed. Your coffee journey continues in the real world!');
    setShowCheckout(false);
    clearCart();
  };

  const calculateTotal = () => {
    const subtotal = getTotalPrice();
    const shipping = subtotal > 50 ? 0 : 5.99;
    const tax = subtotal * 0.08;
    return subtotal + shipping + tax;
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="text-center">
          <ShoppingCart className="h-24 w-24 text-coffee-300 mx-auto mb-6" />
          <h2 className="font-serif text-3xl font-bold text-dark-brown mb-4">
            Your cart is empty
          </h2>
          <p className="text-light-brown mb-8">
            Looks like you haven't added anything to your cart yet.
          </p>
          <Link to="/shop" className="btn-primary inline-flex items-center">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Continue Shopping
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
            Shopping Cart
          </h1>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              <AnimatePresence mode="popLayout">
              {items.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20, scale: 0.95 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
                  }}
                  className="bg-white rounded-lg shadow-md p-6 card-hover"
                >
                  <div className="flex flex-col sm:flex-row gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full sm:w-24 h-24 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-dark-brown mb-2">
                        {item.name}
                      </h3>
                      <p className="text-coffee-600 font-bold mb-4">
                        ${item.price.toFixed(2)}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 rounded-full bg-coffee-100 text-coffee-600 hover:bg-coffee-200 transition-all duration-200 flex items-center justify-center"
                          >
                            <Minus className="h-4 w-4" />
                          </motion.button>
                          <motion.span 
                            key={item.quantity}
                            initial={{ scale: 1.2 }}
                            animate={{ scale: 1 }}
                            className="font-medium text-dark-brown w-8 text-center"
                          >
                            {item.quantity}
                          </motion.span>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 rounded-full bg-coffee-100 text-coffee-600 hover:bg-coffee-200 transition-all duration-200 flex items-center justify-center"
                          >
                            <Plus className="h-4 w-4" />
                          </motion.button>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-600 transition-colors"
                        >
                          <Trash2 className="h-5 w-5" />
                        </motion.button>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-xl text-dark-brown">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
              </AnimatePresence>

              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Link
                  to="/shop"
                  className="btn-secondary inline-flex items-center justify-center"
                >
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Continue Shopping
                </Link>
                <button
                  onClick={clearCart}
                  className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition-colors"
                >
                  Clear Cart
                </button>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-lg shadow-md p-6 sticky top-24"
              >
                <h2 className="font-semibold text-xl text-dark-brown mb-4">
                  Order Summary
                </h2>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-light-brown">
                    <span>Subtotal</span>
                    <span>${getTotalPrice().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-light-brown">
                    <span>Shipping</span>
                    <span>{getTotalPrice() > 50 ? 'FREE' : '$5.99'}</span>
                  </div>
                  <div className="flex justify-between text-light-brown">
                    <span>Tax</span>
                    <span>${(getTotalPrice() * 0.08).toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between font-bold text-xl text-dark-brown">
                      <span>Total</span>
                      <span>
                        ${(
                          getTotalPrice() +
                          (getTotalPrice() > 50 ? 0 : 5.99) +
                          getTotalPrice() * 0.08
                        ).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                {getTotalPrice() < 50 && (
                  <div className="bg-coffee-50 p-3 rounded-lg mb-6">
                    <p className="text-sm text-coffee-700">
                      Add ${(50 - getTotalPrice()).toFixed(2)} more for free shipping!
                    </p>
                  </div>
                )}

                <button 
                  onClick={() => setShowCheckout(true)}
                  className="w-full btn-primary flex items-center justify-center"
                >
                  Proceed to Checkout
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>

                <div className="mt-6 space-y-2">
                  <p className="text-sm text-light-brown flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    Secure checkout
                  </p>
                  <p className="text-sm text-light-brown flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    30-day return policy
                  </p>
                  <p className="text-sm text-light-brown flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    Free shipping over $50
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Checkout Form Modal */}
        <AnimatePresence>
          {showCheckout && (
            <CheckoutForm
              onSubmit={handleCheckoutSubmit}
              onCancel={() => setShowCheckout(false)}
              total={calculateTotal()}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Cart;
