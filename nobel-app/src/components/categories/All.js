import React, { useEffect, useState } from "react";

const All = ({ nobel }) => {

    const nobels = nobel.map((item, index) => {
        let data
        try {
            data = item.laureates[0].fullName.en
        } catch (error) {
            data = ""
        }
        return (
            <div key={index}>
                <li>{data}</li>
            </div>
        )
    })

    return (
        <div>
            <h1>The list of Nobel prize laureates</h1>
            {nobels}
        </div>
    )
}

export default All