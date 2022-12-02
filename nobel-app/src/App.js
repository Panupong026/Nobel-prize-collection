import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Route, Routes, Link, Navigate } from 'react-router-dom';
import Home from './Home'
import Nav from './components/Nav/Nav';
import Search from './components/Search';
import About from './components/About';
import All from './components/categories/All';


const App = () => {

  return (
    <div className='container'>
      <header>
          <h1 className='header'>
            <Link to="/Home">Noble Prize Collection</Link>
          </h1>
      </header>
      <nav>
      </nav>
      <div className='body  '>
        <Nav />
        <Link to="/about">About</Link>
        <Search />

        <Routes>
          <Route path='/Home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/Content/All' element={<About />} />
          <Route path='/Content/Chemistry' element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
