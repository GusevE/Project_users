import './App.css';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import HomePages from './components/pages/HomePages';
import { PostGet } from './components/pages/PostGet';

function App() {
  const dispatch = useDispatch();
 
  

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/')
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: 'DATA', paylod: json.sort((a, b)=>("" + a.username).localeCompare(b.username) ) });
      });
  }, [dispatch]);


    

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePages />} />
        <Route path='posts/:id' element={<PostGet />} />
      </Routes>
    </>
  );
}

export default App;
