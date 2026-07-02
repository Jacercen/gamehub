import GameCard from "../GameCard/GameCard";

function GameGrid({ games }) {
  return (
    <div className="game-grid">
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
}

export default GameGrid;
