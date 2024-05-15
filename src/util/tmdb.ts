import axios from "axios";
import type { Configuration } from "../lib/types/Configuration";

const client = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_READ_ACCESS_TOKEN}`,
  },
});

export let configuration: Configuration;

const getConfiguration = async () => {
  const response = await client.get("/configuration");
  return response.data;
};

getConfiguration().then((data) => {
  configuration = data;
});

export const getMovieList = async (
  type: string,
  route: string,
  pagenum: number
) => {
  const response = await client.get(`/${type}/${route}?page=${pagenum}`);
  return response.data;
};
