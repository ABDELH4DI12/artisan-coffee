import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 3000);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1920)',
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
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            We'd love to hear from you
          </p>
        </motion.div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="section-padding">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-3xl font-bold text-dark-brown mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-dark-brown mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-coffee-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-coffee-600"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-dark-brown mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-coffee-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-coffee-600"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-dark-brown mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-coffee-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-coffee-600"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="order">Order Question</option>
                    <option value="wholesale">Wholesale Inquiry</option>
                    <option value="feedback">Feedback</option>
                    <option value="partnership">Partnership Opportunity</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-dark-brown mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-coffee-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-coffee-600"
                    placeholder="Your message here..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center"
                  disabled={submitted}
                >
                  {submitted ? (
                    'Message Sent!'
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Contact Details & Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-serif text-3xl font-bold text-dark-brown mb-6">
                  Visit Our Café
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-coffee-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-dark-brown mb-1">Address</h3>
                      <p className="text-light-brown">
                        123 Coffee Street<br />
                        San Francisco, CA 94102<br />
                        United States
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-coffee-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-dark-brown mb-1">Phone</h3>
                      <p className="text-light-brown">(555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-coffee-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-dark-brown mb-1">Email</h3>
                      <p className="text-light-brown">hello@artisancoffee.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-coffee-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-dark-brown mb-1">Opening Hours</h3>
                      <div className="text-light-brown">
                        <p>Monday - Friday: 7:00 AM - 8:00 PM</p>
                        <p>Saturday - Sunday: 8:00 AM - 9:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-cream rounded-lg overflow-hidden h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0977031982387!2d-122.41941548468185!3d37.77492977975951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1641234567890!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Artisan Coffee Location"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 bg-cream">
        <div className="section-padding">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-coffee-100 rounded-full mb-4">
                <Phone className="h-8 w-8 text-coffee-600" />
              </div>
              <h3 className="font-semibold text-xl text-dark-brown mb-2">
                Call Us
              </h3>
              <p className="text-light-brown">
                Have a quick question? Give us a call during business hours.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-coffee-100 rounded-full mb-4">
                <Mail className="h-8 w-8 text-coffee-600" />
              </div>
              <h3 className="font-semibold text-xl text-dark-brown mb-2">
                Email Support
              </h3>
              <p className="text-light-brown">
                We typically respond to emails within 24 hours.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-coffee-100 rounded-full mb-4">
                <MapPin className="h-8 w-8 text-coffee-600" />
              </div>
              <h3 className="font-semibold text-xl text-dark-brown mb-2">
                Visit Us
              </h3>
              <p className="text-light-brown">
                Stop by our café for the full Artisan Coffee experience.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
