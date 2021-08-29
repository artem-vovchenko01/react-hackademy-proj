import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import Signin from './signin/Signin';
import Nav from './Nav';
import Landing from './landing/Landing';
import Weather from './weather/Weather';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Nav/>
        <Route path='/' exact component={Landing} />
        <Route path='/login' component={Signin} />
        <Route path='/forecast' component={Weather} />
      </Router>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

