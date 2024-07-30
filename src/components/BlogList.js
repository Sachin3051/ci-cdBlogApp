import React from 'react';
import BlogPost from './BlogPost';

const BlogList = ({ posts, deletePost, setEditPost }) => {
  return (
    <div className="blog-list">
      {posts.map((post) => (
        <BlogPost
          key={post.id}
          post={post}
          deletePost={deletePost}
          setEditPost={setEditPost}
        />
      ))}
    </div>
  );
};

export default BlogList;
