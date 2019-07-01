import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home';
import Recipes from './pages/Recipes';
import SingleRecipe from './pages/SingleRecipe';
import Default from './pages/Default';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <Router>
        <nav>
          {/* navbar */}
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/recipes' exact component={Recipes} />
            <Route path='/recipes/:id' component={SingleRecipe} />
            <Route component={Default} />
          </Switch>
        </nav>
      </Router>
    );
  }
}

export default App;
