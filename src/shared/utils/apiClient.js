import axios from "axios";

const USE_MOCK_API = false;
const API_URL = "/api";

const apiClient = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("auth-storage");
  if (token) {
    try {
      const authData = JSON.parse(token);
      if (authData?.state?.token) {
        config.headers.Authorization = `Bearer ${authData.state.token}`;
      }
    } catch (error) {
      console.error("Error parsing auth token:", error);
    }
  }
  return config;
}, (error) => Promise.reject(error));

apiClient.interceptors.response.use((response) => response, (error) => {
  if (error.response?.status === 401) {
    localStorage.removeItem("auth-storage");
    window.location.href = "/login";
  }
  return Promise.reject(error);
});

export default apiClient;
