import "./GameCard.css";

function GameCard({ game }) {
  return (
    <article className="game-card">
      <img src={game.background_image} alt={game.name} className="game-image" />

      <h2 className="game-name">{game.name}</h2>

      <p className="game-rating">⭐ {game.rating}</p>

      <p className="game-date">{game.released}</p>
    </article>
  );
}

export default GameCard;
