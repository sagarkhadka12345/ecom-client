import { userEndPoint } from "../../Apis";
import axios, { AxiosResponse } from "axios";
import { User } from "./NavBar.types";

const api = `${userEndPoint}/findUser`;
export const fetchUser = async (): Promise<AxiosResponse<User, unknown>> => {
  return await axios.get(api, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
};
