import React from 'react';
import PostsList from './features/posts/PostsList';
import AddPostForm from './features/posts/AddPostForm';
import SinglePostPage from './features/posts/SinglePostPage';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <main className='App'>
      <AddPostForm />
      <PostsList />
    </main>
  )
}

export default App