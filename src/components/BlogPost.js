import React from 'react';

const BlogPost = ({ post, deletePost, setEditPost }) => {
  return (
    <div className="blog-post">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <button onClick={() => setEditPost(post)}>Edit</button>
      <button onClick={() => deletePost(post.id)}>Delete</button>
    </div>
  );
};

export default BlogPost;
