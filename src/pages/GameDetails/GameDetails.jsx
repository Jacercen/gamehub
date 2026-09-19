import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getGameById, getGameScreenshots } from "../../services/gamesService";
import { FaStar } from "react-icons/fa";
import GameScreenshots from "../../components/GameScreenshots/GameScreenshots";
import "./GameDetails.css";

function GameDetails() {
  const { id } = useParams();

  const [game, setGame] = useState(null);
  const [screenshots, setScreenshots] = useState([]);

  const loadGame = useCallback(async () => {
    try {
      const [gameData, screenshotsData] = await Promise.all([
        getGameById(id),
        getGameScreenshots(id),
      ]);

      setGame(gameData);
      setScreenshots(screenshotsData);
    } catch (error) {
      console.error("Error cargando el juego:", error);
    }
  }, [id]);

  useEffect(() => {
    loadGame();
  }, [loadGame]);

  if (!game) {
    return <h2>Cargando...</h2>;
  }

  return (
    <section className="game-details">
      <div className="game-header">
        <img
          src={game.background_image || "/placeholder.jpg"}
          alt={game.name}
          className="game-details-image"
        />

        <div className="game-info">
          <h1 className="game-details-name">{game.name}</h1>

          <p className="game-details-rating">
            <FaStar className="star-icon" />
            {game.rating}
          </p>

          <p className="game-details-genre">
            {game.genres.map((genre) => genre.name).join(" · ")}
          </p>

          <p className="game-details-platforms">
            {game.parent_platforms
              .map((item) => item.platform.name)
              .join(" · ")}
          </p>
          <p className="game-details-dev">
            {game.developers.map((dev) => dev.name).join(" · ")}
          </p>
          <p className="game-details-date">{game.released}</p>

          {game.website && (
            <a
              href={game.website}
              target="_blank"
              rel="noopener noreferrer"
              className="official-website"
            >
              🌐 Página oficial
            </a>
          )}
        </div>
      </div>

      <section className="game-description">
        <h2>Descripción</h2>

        <p>{game.description_raw}</p>
      </section>
      <GameScreenshots screenshots={screenshots} />
    </section>
  );
}

export default GameDetails;
