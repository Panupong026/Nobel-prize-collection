import React, { useEffect, useState } from "react";
import axios from "axios";

const Content = ({ nobel, setNobel }) => {
    const url = "https://api.nobelprize.org/2.1/nobelPrizes"

    useEffect(() => {
        axios
            .get(url)
            .then((res) => {                
                const nobelArr = res.data.nobelPrizes
                setNobel(nobelArr)
            })
            .catch((err) => {
                console.log(err)
            })
        }, [])
    
    const categories = nobel.map((item) => {
        return (
            item.category.en
        )
    })

    console.log(categories)
    const nobels = nobel.map((item) => {
        let data
        try {
            data = item.laureates[0].fullName.en
        } catch (error) {
             data = ""
        }
        return (
            <div>
                <li>{data}</li>
            </div>
        )
    })

    return (
        <div>
            {nobels}
        </div>
    )
}

export default Content