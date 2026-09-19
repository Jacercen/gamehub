import { createContext } from "react";

const FavoritesContext = createContext();

function FavoritesProvider({ children }) {
  return (
    <FavoritesContext.Provider value={{}}>{children}</FavoritesContext.Provider>
  );
}
export { FavoritesContext, FavoritesProvider };
