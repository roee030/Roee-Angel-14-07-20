import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from './components/navbar/Navbar.js';
import Title from './components/title/Title.js';
import SearchBar from './components/searchBar/SearchBar.js';
import TaskOption from './components/taskOptions/TaskOption';
function App() {
  return (
    <>
        <Navbar/>
        <div className='container'>
            <Title/>
            <SearchBar/>
            <TaskOption/>
        </div>
    </>
  );
}

export default App;
