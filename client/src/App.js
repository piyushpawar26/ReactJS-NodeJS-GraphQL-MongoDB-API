import React, { Component } from 'react';
import Navbar from './components/Navbar';
import AddTask from './components/AddTask';
import AssignedTasks from './components/AssignedTasks';
import UnassignedTasks from './components/UnassignedTasks';
import Workers from './components/Workers';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Navbar />
                    <AssignedTasks />
                    <UnassignedTasks />
                    <Workers />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
