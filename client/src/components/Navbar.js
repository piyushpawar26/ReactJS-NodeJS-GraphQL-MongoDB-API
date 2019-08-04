import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar-fixed">
            <nav className="nav-wrapper white">
                <div className="container">
                    <Link to="/" className="brand-logo black-text">API</Link>
                    <ul className="right">
                        <li><NavLink to="/add-worker" className="nav-link">Add Worker</NavLink></li>
                        <li><NavLink to="/add-task" className="nav-link">Add Task</NavLink></li>
                        <li><NavLink to="/add-task" className="nav-link">Add Room</NavLink></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
