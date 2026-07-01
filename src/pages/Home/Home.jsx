import { useEffect, useState } from "react";
import { getGames } from "../../services/gamesService";

function Home() {
  const [games, setGames] = useState([]);

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

  return (
    <div>
      <h1>GameHub</h1>

      {games.map((game) => (
        <p key={game.id}>{game.name}</p>
      ))}
    </div>
  );
}

export default Home;
