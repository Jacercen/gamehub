import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaCalendarAlt, FaExternalLinkAlt, FaStar } from "react-icons/fa";

import { getGameById, getGameScreenshots } from "../../services/gamesService";

import FavoriteButton from "../../components/FavoriteButton/FavoriteButton";
import GameScreenshots from "../../components/GameScreenshots/GameScreenshots";

import "./GameDetails.css";

function GameDetails() {
  const { id } = useParams();

  const [game, setGame] = useState(null);
  const [screenshots, setScreenshots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function loadGame() {
      setLoading(true);
      setError(false);
      setGame(null);
      setScreenshots([]);

      try {
        const [gameResult, screenshotsResult] = await Promise.allSettled([
          getGameById(id),
          getGameScreenshots(id),
        ]);

        if (gameResult.status === "rejected") {
          throw gameResult.reason;
        }

        if (cancelled) return;

        setGame(gameResult.value);

        if (screenshotsResult.status === "fulfilled") {
          setScreenshots(screenshotsResult.value ?? []);
        } else {
          console.error(
            "Error cargando las capturas:",
            screenshotsResult.reason,
          );
        }
      } catch (err) {
        console.error("Error cargando el videojuego:", err);

        if (!cancelled) {
          setError(true);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadGame();

    return () => {
      cancelled = true;
    };
  }, [id]);

  if (loading) {
    return (
      <div className="details-loading">
        <div className="details-loading-image" />
        <div className="details-loading-lines">
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
    );
  }

  if (error || !game) {
    return (
      <div className="details-error">
        <h1>No se ha podido cargar el videojuego</h1>
        <p>Comprueba tu conexión e inténtalo de nuevo.</p>

        <Link to="/" className="details-back-link">
          Volver al catálogo
        </Link>
      </div>
    );
  }

  const genres = game.genres?.map((genre) => genre.name) ?? [];

  const developers = game.developers
    ?.map((developer) => developer.name)
    .join(" · ");

  const platforms = game.parent_platforms
    ?.map((item) => item.platform.name)
    .join(" · ");

  return (
    <article className="game-details">
      <Link to="/" className="details-back-link">
        ← Volver al catálogo
      </Link>

      {/* HERO DEL VIDEOJUEGO */}
      <section className="game-hero">
        <img
          src={game.background_image || "/placeholder.jpg"}
          alt={`Portada de ${game.name}`}
          className="game-details-image"
        />

        <div className="game-hero-overlay" aria-hidden="true" />

        <div className="game-info">
          <h1 className="game-details-name">{game.name}</h1>

          <div className="game-details-rating">
            <FaStar aria-hidden="true" />
            <strong>
              {typeof game.rating === "number" ? game.rating.toFixed(1) : "—"}
            </strong>
          </div>

          <div className="game-details-chips">
            {game.released && (
              <span className="details-chip">
                <FaCalendarAlt aria-hidden="true" />
                {game.released}
              </span>
            )}

            {genres.map((genre) => (
              <span className="details-chip" key={genre}>
                {genre}
              </span>
            ))}
          </div>

          {/* ÚNICA ZONA DE ACCIONES */}
          <div className="game-details-actions">
            <FavoriteButton gameId={game.id} showLabel />

            {game.website && (
              <a
                href={game.website}
                target="_blank"
                rel="noopener noreferrer"
                className="official-website"
              >
                Página oficial
                <FaExternalLinkAlt aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
      </section>

      {/* FICHA TÉCNICA Y DESCRIPCIÓN */}
      <div className="game-content-grid">
        <section className="game-facts">
          <p className="details-section-kicker">INFORMACIÓN</p>

          <h2>Ficha técnica</h2>

          <dl>
            <div>
              <dt>Desarrollador</dt>
              <dd>{developers || "No disponible"}</dd>
            </div>

            <div>
              <dt>Plataformas</dt>
              <dd>{platforms || "No disponible"}</dd>
            </div>

            <div>
              <dt>Fecha de lanzamiento</dt>
              <dd>{game.released || "No disponible"}</dd>
            </div>
          </dl>
        </section>

        <section className="game-description">
          <p className="details-section-kicker">SOBRE EL JUEGO</p>

          <h2>Descripción</h2>

          <p>
            {game.description_raw ||
              "No hay una descripción disponible para este videojuego."}
          </p>
        </section>
      </div>

      {/* GALERÍA Y MODAL */}
      <GameScreenshots screenshots={screenshots} />
    </article>
  );
}

export default GameDetails;
