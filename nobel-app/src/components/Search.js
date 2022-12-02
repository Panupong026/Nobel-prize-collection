import React, { useState, useEffect } from "react";
import Dropdown from "react-dropdown";

const Search = ({ insert, setInsert }) => {
    // const options = ["name", "year", "country"]
    // const defaultOption = options[0]

    let handleChange = (e) => {
        setInsert(e.target.value)
    }

    console.log(insert)

    let handleClick = (e) => {
        e.preventDefault()
        console.log(insert)
    }

    return (
        <div>
            {/* <Dropdown options={options} value={defaultOption} placeholder="Select an option"/> */}
            <form onSubmit={handleClick}>
                <input
                    type="text"
                    placeholder="insert"
                    onChange={(e) => handleChange(e)}
                    value={insert}
                />
                <input type="submit" />
            </form>
        </div>
    )
}

export default Search