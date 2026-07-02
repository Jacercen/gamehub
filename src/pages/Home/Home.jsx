import { useEffect, useState } from "react";
import { getGames } from "../../services/gamesService";
import GameGrid from "../../components/GameGrid/GameGrid";
function Home() {
  const [games, setGames] = useState([]);
  console.log(games);
  useEffect(() => {
    const loadGames = async () => {
      try {
        const data = await getGames();
        setGames(data);
      } catch (error) {
        console.error("Error cargando los juegos:", error);
      }
    };

    loadGames();
  }, []);

  return <GameGrid games={games} />;
}

export default Home;
