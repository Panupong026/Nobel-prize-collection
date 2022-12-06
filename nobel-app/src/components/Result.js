import React from "react";

const Result = ({ laureate, insert }) => {

    const display = laureate.map((item, index) => {
        console.log(item)
        if (item.hasOwnProperty('fullName')) {
            console.log(item);
            return (
                <div key={index}>
                    <h1 className="listHeader">{insert}</h1>
                    <div className="listNobel">

                        <li>Fullname: {item.fullName.en}</li>
                        <li>Gender: {item.gender}</li>
                        <li>Birth: {item.birth.date}</li>
                        <li>Place of birth: {item.birth.place.city.en}, {item.birth.place.country.en}</li>
                        <h3 className="listHeader">Nobel prize detail</h3>
                        <li>Award year: {item.nobelPrizes[0].awardYear}</li>
                        <li>Category: {item.nobelPrizes[0].category.en}</li>
                        <li>Motivation: {item.nobelPrizes[0].motivation.en}</li>
                    </div>
                </div>
            )
        } else {
            console.log("false");
            return (
                <div key={index}>
                    <h1 className="listHeader">{insert}</h1>
                    <div className="listNobel">
                        <li>Fullname: {item.orgName.en}</li>
                        <li>Founded: {item.founded.date}</li>
                        <li>Founded place: {item.founded.place.city.en}, {item.founded.place.country.en}</li>
                        <h3 className="listHeader">Nobel prize detail</h3>
                        <li>Award year: {item.nobelPrizes[0].awardYear}</li>
                        <li>Category: {item.nobelPrizes[0].category.en}</li>
                        <li>Motivation: {item.nobelPrizes[0].motivation.en}</li>
                    </div>
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