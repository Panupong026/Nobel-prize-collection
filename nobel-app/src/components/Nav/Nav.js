import React, { useState, useEffect } from "react";
import { Route, Routes, Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import Search from '../Search'
import All from "../categories/All";
import Literature from '../categories/Literature'
import Peace from '../categories/Peace'
import Physics from '../categories/Physics'
import Chemistry from '../categories/Chemistry';
import Economics from '../categories/Economics'
import Medicine from '../categories/Medicine'
import About from "../About";


const Nav = () => {
    const [nobel, setNobel] = useState([])
    const [insert, setInsert] = useState("")
    const [laureate, setLaureate] = useState([])
    
    const url = "https://api.nobelprize.org/2.1/nobelPrizes"

    useEffect(() => {
        axios
            .get(url)
            .then((res) => {
                const nobelArr = res.data.nobelPrizes
                setNobel(nobelArr)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            <div className="navBar">
                <div className="list">
                    <Link to='/Content/All'><p className="navHeader">All</p></Link>
                    <Link to='/Content/Literature'><p className="navHeader">Literature</p></Link>
                    <Link to='/Content/Peace'><p className="navHeader">Peace</p></Link>
                    <Link to='/Content/Physics'><p className="navHeader">Physics</p></Link>
                    <Link to='/Content/Chemistry'><p className="navHeader">Chemistry</p></Link>
                    <Link to='/Content/Economics'><p className="navHeader">Economics</p></Link>
                    <Link to='/Content/Medicine'><p className="navHeader">Physiology or Medicine</p></Link>
                    <Link to='/about'><p className="navHeader">About</p></Link>
                    <Link to='/Search'><p className="navHeader">Search</p></Link>
                </div>
            </div>
            <div className="search">
                
            </div>
            <Routes>
                <Route path="/Content/All" element={<All nobel={nobel} setNobel={setNobel} />} />
                <Route path="/Content/Literature" element={<Literature nobel={nobel} />} />
                <Route path="/Content/Peace" element={<Peace nobel={nobel} />} />
                <Route path="/Content/Physics" element={<Physics nobel={nobel} />} />
                <Route path="/Content/Chemistry" element={<Chemistry nobel={nobel} />} />
                <Route path="/Content/Economics" element={<Economics nobel={nobel} />} />
                <Route path="/Content/Medicine" element={<Medicine nobel={nobel} />} />
                <Route path='/about' element={<About />} />
                <Route path="/Search" element={<Search insert={insert} setInsert={setInsert} laureate={laureate} setLaureate={setLaureate}/>} />
            </Routes>
        </div>
    )
}

export default Nav