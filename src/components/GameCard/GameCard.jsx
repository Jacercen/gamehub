import "./GameCard.css";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

function GameCard({ game }) {
  console.log(game);
  return (
    <Link to={`/game/${game.id}`} className="game-card-link">
      <article className="game-card">
        <img
          src={game.background_image}
          alt={game.name}
          className="game-image"
        />

        <h2 className="game-name">{game.name}</h2>
        <p className="game-genre">
          {game.genres.map((genre) => genre.name).join(" · ")}
        </p>
        <p className="game-platforms">
          {game.parent_platforms.map((item) => item.platform.name).join(" · ")}
        </p>
        <p className="game-rating">
          <FaStar className="star-icon" /> {game.rating}
        </p>

        <p className="game-date">{game.released}</p>
      </article>
    </Link>
  );
}

export default GameCard;
