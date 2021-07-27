import React, {useState, useEffect} from 'react'
import axios from 'axios';
import './App.css';
import Posts from './components/Posts';
import Pagination from './components/Pagination';

function App() {
  const [posts, setPosts] =  useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(2);

  useEffect(() => {
    
    const fetchPost = async ()=> {
      setLoading(true);
      const res = await axios.get('https://reqres.in/api/users?page=2');
      setPosts(res.data.data)
      setLoading(false)

    }
    fetchPost();
  }, []);
  // console.log(posts);


  // get current posts
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstpost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstpost, indexOfLastPost);

  const paginate = (buttonNumber)=> {
    return setCurrentPage(buttonNumber)
  }

  return (
    <div className="App">
    <h1>User Lists</h1>
     <Posts posts={currentPosts} loading={loading} />
     <Pagination postPerPage={postPerPage} totalPosts={posts.length} paginate={paginate}/>
    </div>
  );
}

export default App;
