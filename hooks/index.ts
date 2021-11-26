import { useQuery } from "react-query";
import { getUsers } from "../apis/user";

export const useUsers = () => {
  return useQuery("getUsers", getUsers);
};
