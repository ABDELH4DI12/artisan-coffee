import { useState, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { blogPosts } from '../data/blog';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: 'product' | 'blog';
  link: string;
  price?: number;
}

const SearchBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (query.length > 2) {
      const searchQuery = query.toLowerCase();
      
      const productResults: SearchResult[] = products
        .filter(p => 
          p.name.toLowerCase().includes(searchQuery) ||
          p.description.toLowerCase().includes(searchQuery) ||
          p.origin?.toLowerCase().includes(searchQuery) ||
          p.tastingNotes?.some(note => note.toLowerCase().includes(searchQuery))
        )
        .slice(0, 3)
        .map(p => ({
          id: p.id,
          title: p.name,
          description: p.description,
          type: 'product' as const,
          link: '/shop',
          price: p.price,
        }));

      const blogResults: SearchResult[] = blogPosts
        .filter(b => 
          b.title.toLowerCase().includes(searchQuery) ||
          b.excerpt.toLowerCase().includes(searchQuery) ||
          b.category.toLowerCase().includes(searchQuery)
        )
        .slice(0, 2)
        .map(b => ({
          id: b.id,
          title: b.title,
          description: b.excerpt,
          type: 'blog' as const,
          link: '/blog',
        }));

      setResults([...productResults, ...blogResults]);
    } else {
      setResults([]);
    }
  }, [query]);

  const handleResultClick = (result: SearchResult) => {
    navigate(result.link);
    setIsOpen(false);
    setQuery('');
  };

  return (
    <div ref={searchRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 hover:bg-coffee-50 rounded-full transition-colors"
        aria-label="Search"
      >
        <Search className="h-5 w-5 text-dark-brown" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute right-0 top-12 w-80 bg-white rounded-lg shadow-xl z-50"
          >
            <div className="p-4 border-b">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search products, blog posts..."
                  className="w-full pl-10 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-coffee-600"
                  autoFocus
                  aria-label="Search input"
                  role="searchbox"
                />
                {query && (
                  <button
                    onClick={() => setQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                  >
                    <X className="h-4 w-4 text-gray-400" />
                  </button>
                )}
              </div>
            </div>

            {results.length > 0 && (
              <div className="max-h-96 overflow-y-auto">
                {results.map((result) => (
                  <button
                    key={result.id}
                    onClick={() => handleResultClick(result)}
                    className="w-full p-4 hover:bg-coffee-50 text-left transition-colors border-b last:border-0"
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold text-dark-brown">
                            {result.title}
                          </span>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            result.type === 'product' 
                              ? 'bg-coffee-100 text-coffee-700' 
                              : 'bg-blue-100 text-blue-700'
                          }`}>
                            {result.type}
                          </span>
                        </div>
                        <p className="text-sm text-light-brown line-clamp-2">
                          {result.description}
                        </p>
                      </div>
                      {result.price && (
                        <span className="text-coffee-600 font-bold">
                          ${result.price.toFixed(2)}
                        </span>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            )}

            {query.length > 2 && results.length === 0 && (
              <div className="p-8 text-center text-light-brown">
                No results found for "{query}"
              </div>
            )}

            {query.length <= 2 && (
              <div className="p-8 text-center text-light-brown">
                Type at least 3 characters to search
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchBar;
