import React from 'react';
import { Link } from 'react-router-dom';
import { Coffee, Leaf, Award, ArrowRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { testimonials } from '../data/testimonials';

const Home: React.FC = () => {
  const features = [
    {
      icon: <Coffee className="h-8 w-8 text-coffee-600" />,
      title: 'Fresh Beans',
      description: 'Roasted daily in small batches for optimal freshness and flavor',
    },
    {
      icon: <Leaf className="h-8 w-8 text-forest-green" />,
      title: 'Sustainable',
      description: 'Ethically sourced from fair-trade certified farms worldwide',
    },
    {
      icon: <Award className="h-8 w-8 text-coffee-600" />,
      title: 'Artisan Roasting',
      description: 'Expert roasters bring out the unique character of each bean',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
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
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6">
            Crafted with Passion
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Experience the perfect blend of tradition and innovation in every cup
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/shop" className="btn-primary inline-flex items-center justify-center">
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link to="/contact" className="btn-secondary inline-flex items-center justify-center bg-white/10 backdrop-blur text-white border-white hover:bg-white hover:text-coffee-600">
              Visit Us
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
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
              Why Choose Artisan Coffee
            </h2>
            <p className="text-lg text-light-brown max-w-2xl mx-auto">
              We're committed to delivering exceptional coffee experiences through quality, sustainability, and craftsmanship
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 rounded-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-coffee-100 rounded-full mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-xl text-dark-brown mb-3">
                  {feature.title}
                </h3>
                <p className="text-light-brown">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-cream">
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-4xl font-bold text-dark-brown mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-light-brown max-w-2xl mx-auto">
              Discover our most popular coffee selections and brewing equipment
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Ethiopian Yirgacheffe',
                price: '$18.99',
                image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400',
                description: 'Bright and floral with notes of lemon',
              },
              {
                name: 'Pour Over Kit',
                price: '$45.99',
                image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400',
                description: 'Complete brewing kit for coffee enthusiasts',
              },
              {
                name: 'Colombian Supremo',
                price: '$16.99',
                image: 'https://images.unsplash.com/photo-1611564494260-6f21b80af7ea?w=400',
                description: 'Smooth with chocolate and caramel notes',
              },
            ].map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-lg card-hover"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-semibold text-xl text-dark-brown mb-2">
                    {product.name}
                  </h3>
                  <p className="text-light-brown mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-coffee-600">
                      {product.price}
                    </span>
                    <Link
                      to="/shop"
                      className="text-coffee-600 hover:text-coffee-700 font-semibold inline-flex items-center"
                    >
                      View Details
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/shop" className="btn-primary inline-flex items-center">
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
              What Our Customers Say
            </h2>
            <p className="text-lg text-light-brown max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-cream p-6 rounded-lg"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-dark-brown">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-light-brown">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-light-brown italic">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-coffee-600 text-white">
        <div className="section-padding text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl font-bold mb-4">
              Start Your Coffee Journey Today
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join our community of coffee lovers and discover your perfect brew
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/shop" className="btn-secondary bg-white text-coffee-600 hover:bg-cream inline-flex items-center justify-center">
                Shop Coffee
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/blog" className="btn-secondary border-white text-white hover:bg-white hover:text-coffee-600 inline-flex items-center justify-center">
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
