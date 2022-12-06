import React from "react";

const Peace = ({ nobel }) => {
    let nobels
    try {
        nobels = nobel.map((item, index) => {
            if (item.category.en === "Peace") {
                if (item.laureates[0].fullName != undefined) {
                   return <li key={index}>{item.laureates[0].fullName.en}  :  {item.awardYear}</li>
                } else {
                    return <li key={index}>{item.laureates[0].orgName.en} (Organization)  :  {item.awardYear}</li> 
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
            <h1 className="listHeader">Peace Nobel prize laureates</h1>
            <p className="listNobel">{nobels}</p>
        </div>
    )
}


export default Peace