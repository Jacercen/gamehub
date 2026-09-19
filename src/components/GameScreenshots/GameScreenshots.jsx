import { useState } from "react";
import "./GameScreenshots.css";

function GameScreenshots({ screenshots }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  if (!Array.isArray(screenshots) || screenshots.length === 0) {
    return <p>No hay capturas disponibles.</p>;
  }

  const closeModal = () => {
    setSelectedIndex(null);
  };

  const showPrevious = (event) => {
    event.stopPropagation();

    setSelectedIndex((currentIndex) =>
      currentIndex === 0 ? screenshots.length - 1 : currentIndex - 1,
    );
  };

  const showNext = (event) => {
    event.stopPropagation();

    setSelectedIndex((currentIndex) =>
      currentIndex === screenshots.length - 1 ? 0 : currentIndex + 1,
    );
  };

  return (
    <section className="game-screenshots">
      <h2>Capturas</h2>

      <div className="screenshots-container">
        {screenshots.map((screenshot, index) => (
          <img
            key={screenshot.id}
            src={screenshot.image}
            alt="Captura del videojuego"
            className="screenshot-image"
            onClick={() => setSelectedIndex(index)}
          />
        ))}
      </div>

      {selectedIndex !== null && (
        <div className="screenshot-modal" onClick={closeModal}>
          <button
            className="modal-close"
            onClick={closeModal}
            aria-label="Cerrar imagen"
          >
            &times;
          </button>

          <button
            className="modal-arrow modal-arrow-left"
            onClick={showPrevious}
            aria-label="Captura anterior"
          >
            &#10094;
          </button>

          <img
            src={screenshots[selectedIndex].image}
            alt="Captura ampliada del videojuego"
            className="modal-image"
            onClick={(event) => event.stopPropagation()}
          />

          <button
            className="modal-arrow modal-arrow-right"
            onClick={showNext}
            aria-label="Siguiente captura"
          >
            &#10095;
          </button>
        </div>
      )}
    </section>
  );
}

export default GameScreenshots;
