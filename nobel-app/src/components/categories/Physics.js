import React from "react";

const Physics = ({ nobel }) => {
    let nobels
    try {
        nobels = nobel.map((item, index) => {

            if (item.category.en === "Physics") {
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
            <h1 className="listHeader">Physics Nobel prize laureates</h1>
            <p className="listNobel">{nobels}</p>
        </div>
    )
}

export default Physics