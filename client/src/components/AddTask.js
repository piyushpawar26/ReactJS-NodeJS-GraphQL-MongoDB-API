import React from 'react';
import { NavLink } from 'react-router-dom';
import { Modal } from 'react-materialize';

const trigger = <li><NavLink to="/" className="nav-link">Add Task</NavLink></li>;

const AddTask = () => {
    return (
        <Modal header="Add Task" trigger={ trigger }>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Modal>
    );
}

export default AddTask;
