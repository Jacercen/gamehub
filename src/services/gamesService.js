import rawgApi from "../api/rawgApi";

/**
 * Obtiene una lista de juegos.
 * @returns {Promise<Array>}
 */
export const getGames = async ({ search = "", ordering = "" } = {}) => {
  try {
    const params = {};

    if (search) {
      params.search = search;
    }

    if (ordering) {
      params.ordering = ordering;
    }

    const response = await rawgApi.get("/games", {
      params,
    });

    return response.data.results;
  } catch (error) {
    console.error("Error al obtener los juegos:", error);
    throw error;
  }
};
export const getGameById = async (id) => {
  try {
    const response = await rawgApi.get(`/games/${id}`);

    return response.data;
  } catch (error) {
    console.error("Error obteniendo el juego:", error);
    throw error;
  }
};
