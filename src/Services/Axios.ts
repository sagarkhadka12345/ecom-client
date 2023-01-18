import axios, { AxiosError, AxiosResponse } from "axios";
import { ZodError } from "zod";

const instance = axios.create({
  baseURL: "/api/",
});

instance.interceptors.request.use((config) => {
  if (typeof config.headers !== "undefined") {
    config.headers["Authorization"] = "Bearer " + localStorage.getItem("token");
  }
  return config;
});

export const doGet = (url: string) => instance.get(url);
export const doPost = (
  url: string,
  data?: object
): Promise<AxiosResponse<any, AxiosError<unknown, ZodError | unknown>>> =>
  instance.post(url, data);
