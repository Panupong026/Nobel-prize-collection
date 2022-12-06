import React from "react";

const Chemistry = ({ nobel }) => {
    let nobels
    try {
        nobels = nobel.map((item, index) => {

            if (item.category.en === "Chemistry") {
                return <li>{item.laureates[0].fullName.en}  :  {item.awardYear}</li>
            }
                return (
                    <div key={index}>
                        <ul>{nobels}</ul>
                    </div>
                )
        })
    } catch (error) {}

    return (
        <div>
            <h1 className="listHeader">Chemistry Nobel prize laureates</h1>
            <p className="listNobel">{nobels}</p>
        </div>
    )
}

export default Chemistry