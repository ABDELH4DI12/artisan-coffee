import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Lock, User, MapPin, Truck } from 'lucide-react';

interface CheckoutFormProps {
  onSubmit: () => void;
  onCancel: () => void;
  total: number;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ onSubmit, onCancel, total }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: '',
    paymentMethod: 'card'
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [paymentMethod, setPaymentMethod] = useState<'card' | 'cod'>('card');

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // Personal Information validation
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';

    // Address validation
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.state.trim()) newErrors.state = 'State is required';
    if (!formData.zipCode.trim()) newErrors.zipCode = 'ZIP code is required';

    // Card payment validation
    if (paymentMethod === 'card') {
      if (!formData.cardNumber.trim()) newErrors.cardNumber = 'Card number is required';
      if (!formData.expiryDate.trim()) newErrors.expiryDate = 'Expiry date is required';
      if (!formData.cvv.trim()) newErrors.cvv = 'CVV is required';
      if (!formData.cardName.trim()) newErrors.cardName = 'Cardholder name is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    onSubmit();
  };

  return (
    <div className="fixed inset-0 backdrop-blur-md flex items-center justify-center p-4 z-50">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-serif text-2xl font-bold text-dark-brown">Checkout</h2>
            <button
              onClick={onCancel}
              className="text-gray-500 hover:text-gray-700 text-2xl"
            >
              ×
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div>
              <h3 className="font-semibold text-lg text-dark-brown mb-4 flex items-center">
                <User className="mr-2 h-5 w-5" />
                Personal Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                      errors.firstName 
                        ? 'border-red-300 focus:ring-red-500' 
                        : 'border-gray-300 focus:ring-coffee-500'
                    }`}
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                      errors.lastName 
                        ? 'border-red-300 focus:ring-red-500' 
                        : 'border-gray-300 focus:ring-coffee-500'
                    }`}
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                      errors.email 
                        ? 'border-red-300 focus:ring-red-500' 
                        : 'border-gray-300 focus:ring-coffee-500'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                      errors.phone 
                        ? 'border-red-300 focus:ring-red-500' 
                        : 'border-gray-300 focus:ring-coffee-500'
                    }`}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Shipping Address */}
            <div>
              <h3 className="font-semibold text-lg text-dark-brown mb-4 flex items-center">
                <MapPin className="mr-2 h-5 w-5" />
                Shipping Address
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-coffee-500"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-coffee-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      State
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-coffee-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      ZIP Code
                    </label>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-coffee-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Method Selection */}
            <div>
              <h3 className="font-semibold text-lg text-dark-brown mb-4 flex items-center">
                <CreditCard className="mr-2 h-5 w-5" />
                Payment Method
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div 
                  onClick={() => setPaymentMethod('card')}
                  className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    paymentMethod === 'card' 
                      ? 'border-coffee-500 bg-coffee-50' 
                      : 'border-gray-200 hover:border-coffee-300'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <CreditCard className="h-6 w-6 text-coffee-600" />
                    <div>
                      <h4 className="font-medium text-dark-brown">Credit/Debit Card</h4>
                      <p className="text-sm text-gray-600">Pay securely with your card</p>
                    </div>
                  </div>
                </div>
                
                <div 
                  onClick={() => setPaymentMethod('cod')}
                  className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    paymentMethod === 'cod' 
                      ? 'border-coffee-500 bg-coffee-50' 
                      : 'border-gray-200 hover:border-coffee-300'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <Truck className="h-6 w-6 text-coffee-600" />
                    <div>
                      <h4 className="font-medium text-dark-brown">Cash on Delivery</h4>
                      <p className="text-sm text-gray-600">Pay when you receive</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Card Payment Fields */}
              {paymentMethod === 'card' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Card Number
                    </label>
                    <input
                      type="text"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      placeholder="1234 5678 9012 3456"
                      required={paymentMethod === 'card'}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-coffee-500"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        name="expiryDate"
                        value={formData.expiryDate}
                        onChange={handleInputChange}
                        placeholder="MM/YY"
                        required={paymentMethod === 'card'}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-coffee-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        CVV
                      </label>
                      <input
                        type="text"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        placeholder="123"
                        required={paymentMethod === 'card'}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-coffee-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Cardholder Name
                      </label>
                      <input
                        type="text"
                        name="cardName"
                        value={formData.cardName}
                        onChange={handleInputChange}
                        required={paymentMethod === 'card'}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-coffee-500"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Cash on Delivery Info */}
              {paymentMethod === 'cod' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-coffee-50 p-4 rounded-lg"
                >
                  <div className="flex items-start space-x-3">
                    <Truck className="h-6 w-6 text-coffee-600 mt-1" />
                    <div>
                      <h4 className="font-medium text-dark-brown mb-2">Cash on Delivery</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Pay in cash when your order is delivered</li>
                        <li>• Additional COD fee: $2.99</li>
                        <li>• Please have exact change ready</li>
                        <li>• Available for orders within delivery zones</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Order Total */}
            <div className="bg-coffee-50 p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-lg text-dark-brown">Total:</span>
                <span className="font-bold text-xl text-coffee-600">${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Security Notice */}
            <div className="flex items-center text-sm text-gray-600">
              <Lock className="mr-2 h-4 w-4" />
              Your payment information is secure and encrypted
            </div>

            {/* Submit Buttons */}
            <div className="flex justify-end space-x-4 mt-8">
              <button
                type="button"
                onClick={onCancel}
                className="btn-secondary py-3 px-8"
                disabled={isSubmitting}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn-primary py-3 px-8 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                disabled={isSubmitting}
              >
                <Lock className="mr-2 h-5 w-5" />
                {isSubmitting ? 'Processing...' : 'Complete Order'}
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default CheckoutForm;
