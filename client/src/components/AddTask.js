import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {

    handleChange = () => {

    }

    handleSubmit = () => {

    }

    render() {
        console.log(this.props);
        return (
            <div className="card main-container form">
                <h4 className="form-title center">AddTask</h4>
                <form onSubmit={ this.handleSubmit }>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={ this.handleChange } />
                    </div>
                    <div className="input-field">
                        <label htmlFor="description">Description</label>
                        <input type="text" id="description" onChange={ this.handleChange } />
                    </div>
                    <button className="btn waves-effect waves-light" type="submit" name="action">Submit</button>
                </form>
            </div>
        );
    }

}

export default Login;
