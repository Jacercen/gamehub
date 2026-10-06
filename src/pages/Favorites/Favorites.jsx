import useFavorites from "../../hooks/useFavorites";
import GameGrid from "../../components/GameGrid/GameGrid";
import { useState, useEffect } from "react";
import { getGameById } from "../../services/gamesService";

function Favorites() {
  const { favorites } = useFavorites();
  const [loading, setLoading] = useState(true);
  const [games, setGames] = useState([]);

  useEffect(() => {
    const loadFavoriteGames = async () => {
      try {
        setLoading(true);

        const data = await Promise.all(favorites.map((id) => getGameById(id)));

        setGames(data);
      } catch (error) {
        console.error("Error cargando los favoritos:", error);
      } finally {
        setLoading(false);
      }
    };

    loadFavoriteGames();
  }, [favorites]);

  return (
    <main className="favorites-page">
      <h1>Mis favoritos</h1>

      <p>Favoritos: {favorites.length}</p>

      {loading ? <p>Cargando favoritos...</p> : <GameGrid games={games} />}
    </main>
  );
}

export default Favorites;
