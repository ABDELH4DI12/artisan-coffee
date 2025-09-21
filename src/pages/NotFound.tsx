import { Link } from 'react-router-dom';
import { Coffee, Home, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl"
      >
        <div className="mb-8">
          <Coffee className="h-24 w-24 text-coffee-300 mx-auto mb-4" />
          <h1 className="font-serif text-6xl md:text-8xl font-bold text-coffee-600 mb-4">
            404
          </h1>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-dark-brown mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-lg text-light-brown mb-8">
            Looks like this cup is empty. The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="btn-primary inline-flex items-center justify-center"
          >
            <Home className="mr-2 h-5 w-5" />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="btn-secondary inline-flex items-center justify-center"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Go Back
          </button>
        </div>

        <div className="mt-12 p-6 bg-white rounded-lg shadow-md">
          <h3 className="font-semibold text-dark-brown mb-3">
            Looking for something specific?
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <Link to="/shop" className="text-coffee-600 hover:text-coffee-700 hover:underline">
              Shop Coffee
            </Link>
            <Link to="/menu" className="text-coffee-600 hover:text-coffee-700 hover:underline">
              View Menu
            </Link>
            <Link to="/about" className="text-coffee-600 hover:text-coffee-700 hover:underline">
              About Us
            </Link>
            <Link to="/contact" className="text-coffee-600 hover:text-coffee-700 hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
