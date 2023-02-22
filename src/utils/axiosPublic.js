import axios from "axios";

export const axiosPublic = axios.create({
  baseURL: "http://localhost:8900/api",
  headers: {
    "Content-Type": "application/json",
  },
});