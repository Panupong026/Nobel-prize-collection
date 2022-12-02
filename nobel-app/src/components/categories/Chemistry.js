import React from "react";

const Chemistry = ({ nobel }) => {
    let nobels
    try {
        nobels = nobel.map((item, index) => {

            if (item.category.en === "Chemistry") {
                return <li>{item.laureates[0].fullName.en}</li>
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
            <h1>Chemistry Nobel prize laureates</h1>
            {nobels}
        </div>
    )
}

export default Chemistry