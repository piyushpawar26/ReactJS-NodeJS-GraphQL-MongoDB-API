import React from 'react';
import { Link } from 'react-router-dom';
import AddWorker from './AddWorker';
import AddTask from './AddTask';
import AddAsset from './AddAsset';

const Navbar = (props) => {
    return (
        <div className="navbar-fixed">
            <nav className="nav-wrapper white z-depth-1">
                <div className="container">
                    <Link to="/" className="brand-logo black-text">API</Link>
                    <ul className="right">
                        <AddWorker />
                        <AddTask />
                        <AddAsset />
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
