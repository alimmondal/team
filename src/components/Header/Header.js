
import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div className="header">
            <h1>Bangladesh Cricket Team</h1>
            <nav>
                <a href="/Player">Find Player</a>
                <a href="/profile"> Player's Profile</a>
                <a href="/review">Review</a>
            </nav>
        </div>
    );
};

export default Header;