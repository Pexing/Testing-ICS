import React from "react";
import './NavBar.css';
import { FiList } from "react-icons/fi";

const NavBar = () => {
    return (
        <div className="nav-container">
            <div className="logo-corp">
                <img src="/logoTest.png" style={{ width: '53px', height: '53px' }} />

            </div>
            <div className="line" />
            <div className="button">
                <button className="button-content">
                    <FiList />
                </button>
            </div>
            <div className="text-bottom">
                Place
            </div>
            <div className="line" />
        </div>
    )
}

export default NavBar
