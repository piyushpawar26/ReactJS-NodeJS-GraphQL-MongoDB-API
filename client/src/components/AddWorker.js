import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Modal, Button } from 'react-materialize';

class AddWorker extends Component {

    state = {
        name: "",
        skillset: "",
        adding: false,
        open: false
    }

    onChange = (e) => {
        this.setState({
            ...this.state,
            [e.target.id]: e.target.value
        });
    }

    onClick = (e) => {
        e.preventDefault();
        this.setState({
            ...this.state,
            adding: true,
            open: true
        });
        setTimeout(() => {
            this.setState({
                ...this.state,
                adding: false,
                open: false
            });
            console.log(this.state);
        }, 4000);
    }

    render() {
        const trigger = <li href="#modal-add-worker" className="modal-trigger"><NavLink to="/" className="nav-link">Add Worker</NavLink></li>;

        const actions = <div>
            <Button onClick={ (e) => this.onClick(e) } disabled={ this.state.adding }>
                { !this.state.adding && <span>Add</span> }
                { this.state.adding && <span>Adding...</span> }
            </Button>
            <Button modal="close">Close</Button>
        </div>;

        const options = {
            dismissible: false
        };

        return (
            <Modal id="modal-add-worker" header="Add Worker" actions={ actions } open={ this.state.open } trigger={ trigger } options={ options }>
                <form>
                    <label>Name:</label>
                    <input type="text" id="name" value={ this.state.name } onChange={ this.onChange } />
                    <label>Skillset: (Fill in skills seperated by a ',')</label>
                    <input type="text" id="skillset" value={ this.state.skillset } onChange={ this.onChange } />
                </form>
            </Modal>
        );
    }

}

export default AddWorker;
