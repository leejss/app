import client from "../utils/client";
import { Post } from "../types/Post";

export const getPosts = async () => {
  const response = await client.getData<Post[]>("/posts");
  return response.data;
};

export const postPost = async (data: Post) => {
  const response = await client.postData<Post>("/posts", {
    data,
  });
  return response;
};
