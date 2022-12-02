import React from "react"

const Medicine = ({ nobel }) => {
    let nobels
    try {
        nobels = nobel.map((item, index) => {
            if (item.category.en === "Physiology or Medicine") {
                if (item.laureates[0].fullName != undefined) {
                   return <li key={index}>{item.laureates[0].fullName.en}</li>
                } else {
                    return <li key={index}>{item.laureates[0].orgName.en}</li> 
                }
            }
            return (
                <div key={index}>
                    <ul>{nobels}</ul>
                </div>
            )
        })
    } catch (error) {
        console.log(error);
    }
 
    return (
        <div>
            <h1>Physiology or Medicine Nobel prize laureates</h1>
            {nobels}
        </div>
    )
}

export default Medicine