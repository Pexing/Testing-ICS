import React from "react";
import './Header.css';
import { FiBell } from "react-icons/fi";
const Header = () => {
    return (
        <div className="header-container">
            <div className="header">
                <div className="logo-corpHeader">
                    <img src="/logoTest.png" style={{ width: '53px', height: '53px', borderRadius: '10px' }} />
                </div>
                <div className="noti-icon">
                    <FiBell />
                </div>
                <div className="avatar">
                    <img src="/avatar.jpg" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
                </div>
                <div className="user-name">
                    Suphanat
                </div>
            </div>
        </div>

    )
}

export default Header
