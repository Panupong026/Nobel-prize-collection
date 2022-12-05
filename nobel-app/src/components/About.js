import React from "react";
import { Route, Routes, Link, Navigate } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <h3 className="listHeader">About</h3>
            <p className="listNobel">
                This website collects the data of the Nobel prize laureates. Nobelprize.org offers open data to developers in two ways: as API and as Linked Data. The data is free to use and contain information about the Nobel Prizes and the Nobel Laureates. The data is updated as the information on www.nobelprize.org is updated, including at the time of announcements of new Laureates.
                </p>
        </div>
    )
}

export default About