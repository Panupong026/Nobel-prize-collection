import React, { useEffect, useState } from "react";

const All = ({ nobel }) => {

    const nobels = nobel.map((item, index) => {
        if (item.laureates[0].fullName != undefined) {
            return <li key={index}>{item.laureates[0].fullName.en} : {item.category.en} : {item.awardYear}</li>
        }
    })

    return (
        <div>
            <h1 className="listHeader">The list of Nobel prize laureates</h1>
            <p className="listNobel">{nobels}</p>
        </div>
    )
}

export default All