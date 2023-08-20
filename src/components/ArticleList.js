import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
  const myPosts = posts.map((post, index) => {
    return (
      <Article
        key={index}
        title={post.title}
        date={post.date}
        preview={post.preview}
        minutes={post.minutes}
      />
    );
  });
  return <main>{myPosts}</main>;
}
export default ArticleList;