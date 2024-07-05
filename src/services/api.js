import axios from "axios";

export const api = axios.create({
  // baseURL: "https://movies-api-32us.onrender.com",
  baseURL: "http://localhost:3000",
});

