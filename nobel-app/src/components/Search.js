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
                // console.log(res.data)
                setData(res.data.nobelPrizes)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    let handleChange = (e) => {
        setInsert(e.target.value)
    }

    // console.log(data)

    let handleClick = () => {
        for (let i = 0; i < data.length; i++) {
            if (data[i].laureates[0].hasOwnProperty('fullName') ? insert === data[i].laureates[0].fullName.en : data[i]) {
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
    console.log(insert)
    

    return (
        <div>
            <input
                type="text"
                placeholder="insert"
                onChange={(e) => handleChange(e)}
                value={insert}
            />
            <input
                type="submit"
                onClick={() => {handleClick()}}
            />
            <Result laureate={laureate} />
        </div>
    )
}

export default Search