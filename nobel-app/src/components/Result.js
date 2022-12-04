import React from "react";

const Result = ({ laureate }) => {
    console.log(laureate)

    const display = laureate.map((item, index) => {
        console.log(item)
        if (item.hasOwnProperty('fullName')) {
            return (
                <div key={index}>
                    <li>Fullname: {item.fullName.en}</li>
                    <li>Gender: {item.gender}</li>
                    <li>Birth: {item.birth.date}</li>
                    <li>Place of birth: {item.birth.place.city.en}, {item.birth.place.country.en}</li>
                    <h3>Nobel prize detail</h3>
                    <li>Award year: {item.nobelPrizes[0].awardYear}</li>
                    <li>Category: {item.nobelPrizes[0].category.en}</li>
                    <li>Motivation: {item.nobelPrizes[0].motivation.en}</li>
                </div>
            )
        } else {
            return (
                <div key={index}>
                    <li>Fullname: {item.orgName.en}</li>
                    <li>Founded: {item.founded.date}</li>
                    <li>Founded place: {item.founded.place.city.en}, {item.founded.place.country.en}</li>
                    <h3>Nobel prize detail</h3>
                    <li>Award year: {item.nobelPrizes[0].awardYear}</li>
                    <li>Category: {item.nobelPrizes[0].category.en}</li>
                    <li>Motivation: {item.nobelPrizes[0].motivation.en}</li>
                </div>
            )
        }
    })
    return (
        <div>
            {display}
        </div>
    )
}

export default Result