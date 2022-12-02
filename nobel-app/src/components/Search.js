import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = ({ insert, setInsert, laureates, setLaureates }) => {
    let urls = "https://api.nobelprize.org/2.1/laureates"

    const [data, setData] = useState([])

    useEffect(() => {
        axios
            .get(urls)
            .then((res) => {
                // console.log(res.data)
                setData(res.data)

            })
            .catch((err) => {
                console.log(err)
            })

    }, [])

    let handleChange = (e) => {
        setInsert(e.target.value)
    }
    let get = () => {

    }
    let handleClick = () => {
        for (let i = 0; i < data.laureates.length; i++) {
            if (insert === data.laureates[i].fullName.en) {
                console.log("1234")
                axios
                    .get(`https://api.nobelprize.org/2.1/laureate/${data.laureates[i].id}`)
                    .then((res) => {
                        console.log(`https://api.nobelprize.org/2.1/laureate/${data.laureates[i].id}`);
                        console.log(res.data);

                    })
                    .catch((err) => {
                        console.log(err)
                    })
            }
        }
        console.log(insert)
    }

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
                onClick={() => {
                    handleClick()
                    get()
                }
                }
            />
            
        </div>
    )
}

export default Search