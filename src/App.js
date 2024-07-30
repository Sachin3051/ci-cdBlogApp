import React, { useState, useEffect } from 'react';
import BlogList from './components/BlogList';
import CreatePost from './components/CreatePost';
import EditPost from './components/EditPost';
import Navbar from './components/Navbar';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [editPost, setEditPost] = useState(null);

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    setPosts(savedPosts);
  }, []);

  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts));
  }, [posts]);

  const addPost = (post) => {
    setPosts([...posts, post]);
  };

  const updatePost = (updatedPost) => {
    setPosts(posts.map(post => (post.id === updatedPost.id ? updatedPost : post)));
    setEditPost(null);
  };

  const deletePost = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  return (
    <div className="App">
      <Navbar/>
      {editPost ? (
        <EditPost post={editPost} updatePost={updatePost} />
      ) : (
        <>
          <CreatePost addPost={addPost} />
          <BlogList posts={posts} deletePost={deletePost} setEditPost={setEditPost} />
        </>
      )}
    </div>
  );
};

export default App;
