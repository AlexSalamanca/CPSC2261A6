import React, { useEffect, useState } from 'react';
import Posts from '../components/Posts';

function Home() {
  const [appState, setAppState] = useState({
    loading: false,
    posts: null,
  });

  useEffect( () => {  
    setAppState({ loading: true });
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => {
        setAppState({ loading: false, posts: data.slice(0, 5)  });
      });   

  }, [setAppState]);
  
  return (
      <Posts isLoading={appState.loading} posts={appState.posts}/>
  );

}
export default Home;