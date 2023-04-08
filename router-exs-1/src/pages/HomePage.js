import React from "react";
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div className="vending-machine-container">
            <h1 className="header">Vending Machine</h1>
            <h3 className="subheader">Make a selection!</h3>
            
            <div className="coke-div">
                <Link to='coke' className="coke-link">Coca Cola</Link>            
            </div>

            <br></br>

            <div className="drpepper-div">
                <Link to='drpepper' className="drpepper-link">Dr. Pepper</Link>   
            </div>

            <br></br>

            <div className="pepsi-div">
                <Link to='pepsi' className="pepsi-link">Pepsi</Link>            
            </div>

        </div>
    );
}

export default HomePage;