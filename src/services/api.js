import axios from "axios";

export const api = axios.create({
  // baseURL: "https://movies-api-32us.onrender.com",
  baseURL: "http://localhost:3000",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  }
});
