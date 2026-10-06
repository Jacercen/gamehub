import useFavorites from "../../hooks/useFavorites";

function FavoriteButton({ gameId }) {
  const { isFavorite, addFavorite, removeFavorite } = useFavorites();
  const favorite = isFavorite(gameId);

  function handleClick(event) {
    event.stopPropagation();
    event.preventDefault();
    if (favorite) {
      removeFavorite(gameId);
    } else {
      addFavorite(gameId);
    }
  }

  return (
    <button
      type="button"
      className="favorite-button"
      onClick={handleClick}
      aria-label={favorite ? "Quitar de favoritos" : "Añadir a favoritos"}
      aria-pressed={favorite}
    >
      {favorite ? "★" : "☆"}
    </button>
  );
}

export default FavoriteButton;
