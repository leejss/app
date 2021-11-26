import React from "react";
import { getPosts } from "../../apis/post";
import { Post } from "../../types/Post";

const PostPage = () => {
  const [posts, setPosts] = React.useState<Post[] | null>(null);

  React.useEffect(() => {
    const fetchData = async () => {
      const posts = await getPosts();
      if (posts.length > 0) {
        setPosts(posts);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {posts?.map((p, index) => {
          return <li key={index}>{p.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default PostPage;
