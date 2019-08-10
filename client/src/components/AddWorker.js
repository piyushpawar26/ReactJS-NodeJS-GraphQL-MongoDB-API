import React from 'react';
import { NavLink } from 'react-router-dom';
import { Modal } from 'react-materialize';

const trigger = <li><NavLink to="/" className="nav-link">Add Worker</NavLink></li>;

const AddWorker = () => {
    return (
        <Modal header="Add Worker" trigger={trigger}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Modal>
    );
}

export default AddWorker;
