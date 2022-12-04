import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Routes, Link, Navigate } from 'react-router-dom';
import Home from './Home'
import Nav from './components/Nav/Nav';


const App = () => {
  return (
    <div className='container'>
      <header>
        <h1 className='header'>
          <Link to="/Home">NOBEL PRIZE COLLECTION 1901 - 1905</Link>
        </h1>
      </header>
      <div className='body'>
        <nav className='navBar'>
          <Nav />
        </nav>
        <Routes>
          <Route path='/Home' element={<Home />} />
          <Route path='/Nav' element={<Nav />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
