import React from "react";
import { useGetPostsQuery } from "../api/postsApi";

function Posts() {
  const { data = {}, error, isLoading } = useGetPostsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      Just for testing
      {data.posts &&
        data.posts.map((post) => (
          <div key={post._id}>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
          </div>
        ))}
    </div>
  );
}

export default Posts;
