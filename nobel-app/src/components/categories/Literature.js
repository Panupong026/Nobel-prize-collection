import React from "react";

const Literature = ({ nobel }) => {
    let nobels
    try {
        nobels = nobel.map((item, index) => {
            if (item.category.en === "Literature") {
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
            <h1 className="listHeader">Literature Nobel prize laureates</h1>
            <p className="listNobel">{nobels}</p>
        </div>
    )
}

export default Literature