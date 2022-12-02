import React from "react";
import Dropdown from "react-dropdown";

const Search = () => {
    const options = ["name", "year", "country"]
    const defaultOption = options[0]
    return (
        <div>
            <Dropdown options={options} value={defaultOption} placeholder="Select an option"  />
            <input type="text" placeholder="insert" />
            <input type="submit" />
        </div>
    )
}

export default Search