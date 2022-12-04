import React, { useEffect, useState } from "react";

const All = ({ nobel }) => {

    const nobels = nobel.map((item, index) => {
        if (item.laureates[0].fullName != undefined) {
            return <li key={index}>{item.laureates[0].fullName.en}</li>
        }
    })

    return (
        <div>
            <h1>The list of Nobel prize laureates</h1>
            {nobels}
        </div>
    )
}

export default All