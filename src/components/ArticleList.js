import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
  return (
    <main>
      {posts.map((post, index) => (
        <Article
          key={index} // Assign a unique key, you can use the post's ID if available
          title={post.title}
          date={post.date}
          preview={post.preview}
        />
      ))}
    </main>
  );
}

export default ArticleList;

