import axios from "axios";

const rawgApi = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: import.meta.env.VITE_RAWG_API_KEY,
  },
  headers: {
    Accept: "application/json",
  },
});
export default rawgApi;
