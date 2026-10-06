import { createContext, useEffect, useState } from "react";

const FavoritesContext = createContext();

function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("gamehub-favorites") || "[]");
    } catch {
      return [];
    }
  });
  useEffect(() => {
    localStorage.setItem("gamehub-favorites", JSON.stringify(favorites));
  }, [favorites]);

  function isFavorite(id) {
    return favorites.includes(id);
  }
  function addFavorite(id) {
    setFavorites((current) => current.includes(id) ? current : [...current, id]);
  }
  function removeFavorite(id) {
    setFavorites((current) => current.filter((favoriteId) => favoriteId !== id));
  }
  return (
    <FavoritesContext.Provider value={{ favorites, isFavorite, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export { FavoritesContext, FavoritesProvider };
