import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AddWorker from './AddWorker';
import AddTask from './AddTask';
import AddAsset from './AddAsset';
import M from 'materialize-css';

class Navbar extends Component {

    componentDidMount() {
        var elems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(elems);
    }

    render() {
        return (
            <div className="navbar-fixed">
                <nav className="nav-wrapper white z-depth-1">
                    <div className="container">
                        <Link to="/" className="brand-logo black-text">API</Link>
                        <NavLink to="/" data-target="side-navigation" className="sidenav-trigger"><i className="material-icons">menu</i></NavLink>
                        <ul className="right hide-on-med-and-down">
                            <AddWorker />
                            <AddTask />
                            <AddAsset />
                        </ul>
                    </div>
                </nav>
                <div className="sidenav" id="side-navigation">
                    <h5 className="sidenav-logo">API</h5>
                    <hr />
                    <ul>
                        <li href="#modal-add-worker" className="modal-trigger sidenav-close"><Link to="/">Add Worker</Link></li>
                        <li href="#modal-add-task" className="modal-trigger sidenav-close"><Link to="/">Add Task</Link></li>
                        <li href="#modal-add-asset" className="modal-trigger sidenav-close"><Link to="/">Add Asset</Link></li>
                    </ul>
                </div>
            </div>
        );
    }

}

export default Navbar;
