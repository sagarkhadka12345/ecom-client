import axios, { AxiosResponse } from "axios";
import { doGet } from "../Services/Axios";
import { Item } from "../types/types";

export const fetchProducts = async (): Promise<
  AxiosResponse<Item[], unknown>
> => {
  return axios.get(`http://localhost:9191/api/v1/item/all`);
};

export const KEYWORDS = [
  "All",
  "Desktop",
  "Item",
  "Mobile",
  "Laptop",
  "PC",
] as const;
