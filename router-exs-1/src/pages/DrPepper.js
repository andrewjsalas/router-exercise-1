import React from "react";
import { Link } from "react-router-dom";

function DrPepper() {
    return (
        <div className="dispensed-container"> 
            <h1 className="dispensed-header">Dr. Pepper Dispensed</h1>
            <div className="home-link-div">
                <Link to="/" className="home-link">HOME</Link>
            </div>
        </div>
    )
}

export default DrPepper;