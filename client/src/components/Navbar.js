import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar-fixed">
            <nav className="nav-wrapper white">
                <div className="container">
                    <Link to="/" className="brand-logo black-text">UDAAN</Link>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
