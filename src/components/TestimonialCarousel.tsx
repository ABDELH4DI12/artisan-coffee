import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '../data/testimonials';

const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="relative max-w-4xl mx-auto px-4">
      <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            <div className="flex justify-center mb-4">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-500 fill-current" />
              ))}
            </div>
            
            <p className="text-xl md:text-2xl text-light-brown italic mb-6 font-serif">
              "{currentTestimonial.content}"
            </p>
            
            <div className="flex items-center justify-center">
              <img
                src={currentTestimonial.image}
                alt={currentTestimonial.name}
                className="w-16 h-16 rounded-full mr-4 object-cover"
              />
              <div className="text-left">
                <h4 className="font-semibold text-dark-brown">
                  {currentTestimonial.name}
                </h4>
                <p className="text-sm text-coffee-600">{currentTestimonial.role}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-coffee-100 rounded-full flex items-center justify-center hover:bg-coffee-200 transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-5 w-5 text-coffee-600" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-coffee-100 rounded-full flex items-center justify-center hover:bg-coffee-200 transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-5 w-5 text-coffee-600" />
        </button>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'w-8 bg-coffee-600'
                  : 'bg-coffee-300 hover:bg-coffee-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
