import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { CartProvider } from './contexts/CartContext';
import { FavoritesProvider } from './contexts/FavoritesContext';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Menu = lazy(() => import('./pages/Menu'));
const Shop = lazy(() => import('./pages/Shop'));
const Blog = lazy(() => import('./pages/Blog'));
const Contact = lazy(() => import('./pages/Contact'));
const Cart = lazy(() => import('./pages/Cart'));
const Favorites = lazy(() => import('./pages/Favorites'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <ErrorBoundary>
      <CartProvider>
        <FavoritesProvider>
          <Router>
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <main className="flex-grow">
                <Suspense fallback={
                  <div className="flex justify-center items-center min-h-[400px]">
                    <LoadingSpinner size="lg" message="Loading page..." />
                  </div>
                }>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/favorites" element={<Favorites />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </Suspense>
              </main>
              <Footer />
              <ScrollToTop />
            </div>
          </Router>
        </FavoritesProvider>
      </CartProvider>
    </ErrorBoundary>
  );
}

export default App;
