import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Heart, Leaf, Users, Award, Globe } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8 text-coffee-600" />,
      title: 'Passion for Quality',
      description: 'We source only the finest beans and roast them with care to bring out their unique flavors.',
    },
    {
      icon: <Leaf className="h-8 w-8 text-forest-green" />,
      title: 'Eco-Friendly Practices',
      description: 'From biodegradable packaging to energy-efficient roasting, we minimize our environmental impact.',
    },
    {
      icon: <Users className="h-8 w-8 text-coffee-600" />,
      title: 'Fair Trade',
      description: 'We ensure farmers receive fair compensation and support sustainable farming communities.',
    },
    {
      icon: <Globe className="h-8 w-8 text-forest-green" />,
      title: 'Global Community',
      description: 'Connecting coffee lovers worldwide through our shared passion for exceptional coffee.',
    },
  ];

  const team = [
    {
      name: 'Maria Rodriguez',
      role: 'Master Roaster',
      image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400',
      bio: '15 years of experience in artisan coffee roasting',
    },
    {
      name: 'John Smith',
      role: 'Head Barista',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400',
      bio: 'Award-winning barista with a passion for latte art',
    },
    {
      name: 'Sarah Chen',
      role: 'Sustainability Director',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
      bio: 'Leading our mission for sustainable coffee sourcing',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1920)',
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
            Our Story
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            From a small roastery to a beloved coffee destination
          </p>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="section-padding">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-4xl font-bold text-dark-brown mb-6">
                Crafting Coffee Since 2020
              </h2>
              <p className="text-light-brown mb-4">
                Artisan Coffee began as a dream shared by three friends who believed that coffee could be more than just a morning ritual—it could be an experience that brings people together.
              </p>
              <p className="text-light-brown mb-4">
                What started in a small garage with a single roaster has grown into a thriving café and roastery. We've stayed true to our roots, focusing on quality, sustainability, and community.
              </p>
              <p className="text-light-brown">
                Every bean we roast, every cup we serve, reflects our commitment to excellence and our passion for sharing the world's finest coffees with you.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <img
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400"
                alt="Coffee brewing"
                className="rounded-lg shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400"
                alt="Coffee beans"
                className="rounded-lg shadow-lg mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1545665225-b23b99e4d45e?w=400"
                alt="Café interior"
                className="rounded-lg shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400"
                alt="Coffee farm"
                className="rounded-lg shadow-lg mt-8"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
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
              Our Mission
            </h2>
            <p className="text-xl text-light-brown max-w-3xl mx-auto">
              To source, roast, and serve exceptional coffee while supporting sustainable farming practices and building meaningful connections within our community.
            </p>
          </motion.div>

          <div className="flex justify-center mb-12">
            <Award className="h-16 w-16 text-coffee-600" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="font-semibold text-2xl text-dark-brown mb-3">Quality First</h3>
              <p className="text-light-brown">
                We never compromise on quality, from bean selection to the final cup
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="font-semibold text-2xl text-dark-brown mb-3">People Matter</h3>
              <p className="text-light-brown">
                Supporting farmers, employees, and customers with respect and fairness
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="font-semibold text-2xl text-dark-brown mb-3">Planet Conscious</h3>
              <p className="text-light-brown">
                Minimizing our environmental impact through sustainable practices
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our Values
            </h2>
            <p className="text-lg text-light-brown max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-coffee-100 rounded-full mb-4">
                  {value.icon}
                </div>
                <h3 className="font-semibold text-xl text-dark-brown mb-3">
                  {value.title}
                </h3>
                <p className="text-light-brown text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Meet Our Team
            </h2>
            <p className="text-lg text-light-brown max-w-2xl mx-auto">
              The passionate people behind your perfect cup
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="font-semibold text-xl text-dark-brown mb-1">
                    {member.name}
                  </h3>
                  <p className="text-coffee-600 font-medium mb-3">{member.role}</p>
                  <p className="text-light-brown text-sm">{member.bio}</p>
                </div>
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
            <Coffee className="h-16 w-16 mx-auto mb-6" />
            <h2 className="font-serif text-4xl font-bold mb-4">
              Experience the Difference
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Visit us today and discover what makes our coffee special
            </p>
            <a
              href="/contact"
              className="btn-secondary bg-white text-coffee-600 hover:bg-cream inline-block"
            >
              Find Our Location
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
