import axios from "axios";
import { ACCESS_TOKEN } from "./constants";

const apiUrl =
  "/https://3be4cda6-79f4-484b-a7db-4671b985a284-dev.e1-us-east-azure.choreoapis.dev/djangoreact/backend/v1";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL : apiUrl,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
