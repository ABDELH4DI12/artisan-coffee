import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import type { ReactNode } from 'react';

interface FavoritesContextType {
  favorites: string[];
  toggleFavorite: (productId: string) => void;
  isFavorite: (productId: string) => boolean;
  clearFavorites: () => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<string[]>(() => {
    const saved = localStorage.getItem('coffee-favorites');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('coffee-favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = useCallback((productId: string) => {
    setFavorites(prev => 
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  }, []);

  const isFavorite = useCallback((productId: string) => {
    return favorites.includes(productId);
  }, [favorites]);

  const clearFavorites = useCallback(() => {
    setFavorites([]);
  }, []);

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite, clearFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};
