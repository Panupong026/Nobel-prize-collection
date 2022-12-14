import React, { useState, useEffect } from "react";
import axios from "axios";
import Result from "./Result";

const Search = ({ insert, setInsert, laureate, setLaureate }) => {
    let urls = "https://api.nobelprize.org/2.1/nobelPrizes"

    const [data, setData] = useState([])

    useEffect(() => {
        axios
            .get(urls)
            .then((res) => {
                setData(res.data.nobelPrizes)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    let handleChange = (e) => {
        setInsert(e.target.value)
    }

    let handleClick = () => {
        for (let i = 0; i < data.length; i++) {
            if (data[i].laureates[0].hasOwnProperty('fullName') && insert === data[i].laureates[0].fullName.en) {
                axios
                    .get(`https://api.nobelprize.org/2.1/laureate/${data[i].laureates[0].id}`)
                    .then((res) => {
                        setLaureate([res.data[0]])
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            } else if (data[i].laureates[0].hasOwnProperty('orgName') && insert === data[i].laureates[0].orgName.en) {
                    axios
                        .get(`https://api.nobelprize.org/2.1/laureate/${data[i].laureates[0].id}`)
                        .then((res) => {
                            setLaureate([res.data[0]])
                        })
                        .catch((err) => {
                            console.log(err)
                        })
                
            }
        }
    }

    return (
        <div className="search">
            <div className="inline">
                <input
                    className="textBox"
                    type="text"
                    placeholder="insert"
                    onChange={(e) => handleChange(e)}
                    value={insert}
                />
                <input
                    className="searchButton"
                    type="submit"
                    onClick={(e) => { 
                        e.preventDefault()
                        handleClick() }}
                />
            </div>
            <Result laureate={laureate} insert={insert} />
        </div>
    )
}

export default Search