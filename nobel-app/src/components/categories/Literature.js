import React from "react";

const Literature = ({ nobel }) => {
    let nobels
    try {
        nobels = nobel.map((item, index) => {
            let data
            if (item.category.en === "Literature") {
                data = item.laureates[0].fullName.en
                return (
                    <div key={index}>
                        <li>{data}</li>
                    </div>
                )
            }
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