import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Route, Routes, Link, Navigate } from 'react-router-dom';
import Home from './Home'
import Nav from './components/Nav/Nav';
import Search from './components/Search';
import About from './components/About';
import Content from './components/Content';


const App = () => {

  // const [nobel, setNobel] = useState([])

  return (
    <div className='container'>
      <nav>
        <header headerContainer>
          <h1 className='header'>
            <Link to="/Home">Noble Prize Collection</Link>
            <span className='about'>
            <Link to="/about">About</Link>
            </span>
          </h1>
        </header>
      </nav>
        <Nav />
        <Search />
        {/* <Content nobel={nobel} setNobel={setNobel} /> */}

        <Routes>
          <Route path='/Home' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
    </div>
  );
}

export default App;
