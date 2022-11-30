import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Route, Routes, Link, Navigate } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Search from './components/Search';
import About from './components/About';
import Content from './components/Content';

const App = () => {

  const [nobel, setNobel] = useState([])
  
  return (
    <div>
      <nav>
      <header>
        <h1 className='header'>
          <Link to="/">
            Noble Prize Collection
            </Link>
          </h1>
      </header>
        <Link to="/about">About</Link>
      </nav>
      <main className='body'>
        <Nav />
        <Search />
        <Content nobel={nobel} setNobel={setNobel}/>
      </main>
      <Routes>
      <Route path='/about' element={<About />}/>
      </Routes>
    </div>
  );
}

export default App;
