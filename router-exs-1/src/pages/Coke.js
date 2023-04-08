import React from "react";
import { Link } from "react-router-dom";

function Coke() {
    return (
        <div className="dispensed-container">
            <h1 className="dispensed-header">Coke Dispensed</h1>
            <div className="home-link-div">
                <Link to="/" className="home-link">HOME</Link>
            </div>
        </div>
            
    )
}

export default Coke;