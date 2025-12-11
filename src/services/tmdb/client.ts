import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_API_TDMB_KEY;

if (!API_KEY) {
  throw new Error("VITE_API_TDMB_KEY is not defined");
}

export const instanceTMDB = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language: "en-US",
  },
});
