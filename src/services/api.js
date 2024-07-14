import axios from "axios";

export const api = axios.create({
  baseURL: "https://movies-api-32us.onrender.com",
  withCredentials: true
});
