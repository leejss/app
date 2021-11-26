import client from "../utils/client";
import { User } from "../types/User";

export const getUsers = async () => {
  const { data } = await client.getData<User[]>("/users");
  return data;
};
export const postUser = async (data: User) => {
  const response = await client.postData<User>("/users", {
    data,
  });
  return response;
};
