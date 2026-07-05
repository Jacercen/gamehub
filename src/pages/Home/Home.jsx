import { useEffect, useState } from "react";
import { getGames } from "../../services/gamesService";
import GameGrid from "../../components/GameGrid/GameGrid";
import Filters from "../../components/Filters/Filters";
import useDebounce from "../../hooks/useDebounce";

function Home() {
  const [games, setGames] = useState([]);
  const [ordering, setOrdering] = useState("");
  const [search, setSearch] = useState("");

  // Aquí usamos el hook
  const debouncedSearch = useDebounce(search);

  useEffect(() => {
    const loadGames = async () => {
      try {
        const data = await getGames({
          search: debouncedSearch,
          ordering,
        });

        setGames(data);
      } catch (error) {
        console.error("Error cargando los juegos:", error);
      }
    };

    loadGames();
  }, [debouncedSearch, ordering]);

  return (
    <>
      <Filters
        search={search}
        setSearch={setSearch}
        ordering={ordering}
        setOrdering={setOrdering}
      />

      <GameGrid games={games} />
    </>
  );
}

export default Home;
