import './App.css';
import axios from 'axios';
import React, {useState} from 'react';
import { Route, Routes, Link, Navigate } from 'react-router-dom';
import Nav from './components/Nav';
import Search from './components/Search';
import About from './components/About';
import Content from './components/Content';

const App = () => {
  const url = "https://api.nobelprize.org/2.1/nobelPrizes"
  // axios.get(url) 

  return (
    <div>
      <h1 className='header'>Noble Prize Collection</h1>
    </div>
  );
}

export default App;
