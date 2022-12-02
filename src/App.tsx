import React, {useCallback, useEffect, useState} from 'react';
import NavBar from "./Components/Nav-Bar/Nav-Bar";
import {Route, Routes, useLocation} from "react-router-dom";
import Home from "./Containers/Home/Home";
import AddPost from "./Containers/Add-Post/Add-Post";
import About from "./Containers/About/About";
import Contacts from "./Components/Contacts/Contacts";
import axiosApi from "./axiosApi";
import {Post, PostsList} from "./type";
import EditPost from "./Containers/Edit-Post/Edit-Post";

function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const fetchPosts = useCallback(async ()=> {
    try {
      setLoading(true);
      const postsResponse = await axiosApi.get<PostsList>('/posts.json');
      const posts = Object.keys(postsResponse.data).map(key =>{
        const post = postsResponse.data[key];
        post.id = key;
        return post;
      });
      setPosts(posts);
    } finally {
      setLoading(false);
    }
  },[]);

  useEffect(() => {
    if(location.pathname === '/') {
      void fetchPosts();
    }
  }, [fetchPosts, location]);

  return (
    <div className="App">
      <header>
        <NavBar/>
      </header>
      <main>
        <Routes>
          <Route path='/' element={(
            <Home posts={posts} postLoading={loading}/>
          )}/>
          <Route path='/add-post' element={(
            <AddPost/>
          )}/>
          <Route path='/edit-posts/:id' element={(
            <EditPost/>
          )}/>

          <Route path='/about' element={(
            <About/>
          )}/>
          <Route path='/contacts' element={(
            <Contacts/>
          )}/>
        </Routes>
      </main>

    </div>
  );
}

export default App;
