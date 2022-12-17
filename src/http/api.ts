import axios, { type AxiosInstance } from "axios"

export const api: AxiosInstance = axios.create({
  baseURL: "http://localhost:8085/",
  headers: {
    "Content-type": "application/json",
  },
})