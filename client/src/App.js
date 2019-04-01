import React, { Component } from 'react';
import Navbar from './components/Navbar';
import AddTask from './components/AddTask';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
      return (
			<BrowserRouter>
				<div className="App">
					<Navbar />
					<Switch>
						<Route path="/add-task" component={ AddTask } exact />
					</Switch>
				</div>
			</BrowserRouter>
  		);
  }
}

export default App;
