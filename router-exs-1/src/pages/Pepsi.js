import React from "react";
import { Link } from "react-router-dom";

function Pepsi() {
    return (
        <div className="dispensed-container">
            <h1 className="dispensed-header">Pepsi Dispensed</h1>
            <div className="home-link-div">
                <Link to="/" className="home-link">HOME</Link>
            </div>
        </div>
    )
}

export default Pepsi;