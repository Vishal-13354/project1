
import axios, { AxiosError } from "axios";

export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "http://localhost:4005/api"
      : "https://project1-tpjf.onrender.com/api",
  withCredentials: true,
});

console.log(AxiosError);
