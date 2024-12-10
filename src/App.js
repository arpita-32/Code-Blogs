import './App.css';
import Header from './components/Header';
import Blogs from './components/Blogs';
import Pagination from './components/Pagination';
import { useContext } from 'react';
import { AppContext } from './context/AppContext';
import { useEffect } from 'react';

function App() {
  const {fetchBlogPosts} = useContext(AppContext);
  useEffect(() => {
    fetchBlogPosts();
}, []);
  return (
    <div>
      <Header/>
      <Blogs/>
      <Pagination/>
    </div>
  );
}

export default App;
