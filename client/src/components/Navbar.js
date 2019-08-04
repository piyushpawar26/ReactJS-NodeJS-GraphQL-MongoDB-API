import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar-fixed">
            <nav className="nav-wrapper white z-depth-0">
                <div className="container">
                    <Link to="/" className="brand-logo black-text">API</Link>
                    <ul className="right">
                        <li><NavLink to="/" className="nav-link">Add Worker</NavLink></li>
                        <li><NavLink to="/" className="nav-link">Add Task</NavLink></li>
                        <li><NavLink to="/" className="nav-link">Add Asset</NavLink></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
