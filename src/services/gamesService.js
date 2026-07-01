// src/services/gamesService.js

import rawgApi from "../api/rawgApi";

/**
 * Obtiene una lista de juegos.
 * @returns {Promise<Array>}
 */
export const getGames = async () => {
  try {
    const response = await rawgApi.get("/games");
    return response.data.results;
  } catch (error) {
    console.error("Error al obtener los juegos:", error);
    throw error;
  }
};
