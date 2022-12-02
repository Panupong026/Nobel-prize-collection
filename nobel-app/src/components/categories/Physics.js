import React from "react";

const Physics = ({ nobel }) => {
    let nobels
    try {
        nobels = nobel.map((item, index) => {
            let data
            if (item.category.en === "Physics") {
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
            <h1>Physics Nobel prize laureates</h1>
            {nobels}
        </div>
    )
}

export default Physics