import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Route, Routes, Link, Navigate } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Search from './components/Search';
import About from './components/About';
import Content from './components/Content';

const App = () => {
  const url = "https://api.nobelprize.org/2.1/nobelPrizes"

  const [nobel, setNobel] = useState([])

  const getData = () => {
    axios
      .get(url)
      .then((res) => {
        console.log(res.data.nobelPrizes)
        const nobelArr = res.data.nobelPrizes

        setNobel(nobelArr)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  // getData()

  return (
    <div>
      <header>
        <h1 className='header'>Noble Prize Collection</h1>
      </header>
      <main className='body'>
        {/* {nobel.map((item, index) => {
        <li key={index}>
          {item}
        </li>
      })} */}
        <Search />
        <Nav />
      </main>
        <About />
    </div>
  );
}

export default App;
