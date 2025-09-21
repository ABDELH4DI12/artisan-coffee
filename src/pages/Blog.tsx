import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/blog';

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null);

  const categories = ['all', 'Brewing Guide', 'Coffee Education', 'Sustainability', 'Health & Wellness'];

  const filteredPosts = selectedCategory === 'all'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  if (selectedPost) {
    return (
      <div className="min-h-screen bg-white">
        {/* Blog Post Detail */}
        <article className="py-12">
          <div className="section-padding max-w-4xl mx-auto">
            <button
              onClick={() => setSelectedPost(null)}
              className="mb-8 text-coffee-600 hover:text-coffee-700 font-medium"
            >
              ← Back to Blog
            </button>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-96 object-cover rounded-lg mb-8"
              />

              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-coffee-100 text-coffee-700 rounded-full text-sm font-medium mb-4">
                  {selectedPost.category}
                </span>
                <h1 className="font-serif text-4xl md:text-5xl font-bold text-dark-brown mb-4">
                  {selectedPost.title}
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-light-brown">
                  <span className="flex items-center">
                    <User className="h-4 w-4 mr-2" />
                    {selectedPost.author}
                  </span>
                  <span className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {new Date(selectedPost.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    {selectedPost.readTime}
                  </span>
                </div>
              </div>

              <div className="prose prose-lg max-w-none text-light-brown">
                {selectedPost.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4">
                    {paragraph.trim()}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
        </article>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=1920)',
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
            Coffee Blog
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Tips, guides, and stories from the world of coffee
          </p>
        </motion.div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white sticky top-16 z-40 shadow-sm">
        <div className="section-padding">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-coffee-600 text-white'
                    : 'bg-coffee-100 text-coffee-800 hover:bg-coffee-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-cream">
        <div className="section-padding">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-lg card-hover cursor-pointer"
                onClick={() => setSelectedPost(post)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-coffee-600 text-white rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-dark-brown mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-light-brown mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-light-brown">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(post.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                        })}
                      </span>
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                    <span className="text-coffee-600 font-semibold flex items-center hover:text-coffee-700">
                      Read More
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-coffee-600 text-white">
        <div className="section-padding text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Get the latest coffee tips, recipes, and exclusive offers delivered to your inbox
            </p>
            <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-lg text-dark-brown focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-coffee-600 font-semibold rounded-lg hover:bg-cream transition-colors"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
