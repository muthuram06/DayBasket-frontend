
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:8080/api",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 15000,
});

export const setAuthToken = (token: string | null) => {
  if (token) {
    localStorage.setItem("daybasket_token", token);
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    localStorage.removeItem("daybasket_token");
    delete api.defaults.headers.common.Authorization;
  }
};

// Restore token when application starts.
const savedToken = localStorage.getItem("daybasket_token");

if (savedToken) {
  setAuthToken(savedToken);
}

// Handle common API errors.
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      const isAuthRequest =
        error.config?.url?.includes("/auth/login") ||
        error.config?.url?.includes("/auth/register");

      if (!isAuthRequest) {
        setAuthToken(null);
      }
    }

    return Promise.reject(error);
  }
);

export default api;
