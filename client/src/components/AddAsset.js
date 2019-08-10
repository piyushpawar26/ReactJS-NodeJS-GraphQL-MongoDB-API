import React from 'react';
import { NavLink } from 'react-router-dom';
import { Modal } from 'react-materialize';

const trigger = <li><NavLink to="/" className="nav-link">Add Asset</NavLink></li>;

const AddAsset = () => {
    return (
        <Modal header="Add Asset" trigger={ trigger }>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Modal>
    );
}

export default AddAsset;
