import React from 'react'
import ReactDOM from 'react-dom';
import css from './css/landingCommon.css';
import Logo from './images/hackopenLogo.png';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <Link to='/'>
              <li className="logo-li">
                <img src={Logo} className="logo"/>
              </li>
            </Link>
            <NavLink to='/login' text='register' nameOfClass='nav-start'/>
            <NavLink to='#' text='login'/> 
            <NavLink to='#' text='contact'/> 
            <NavLink to='/forecast' text='weather'/> 
          </ul>
        </nav>
      </header>
    );
  }
}

class NavLink extends React.Component {
  constructor(props) {
    super();
    this.props = props;
  }

  render() {
    return (
        <Link to={this.props.to}>
          <li className={this.props.nameOfClass}>
              <a href="#"> {this.props.text} </a>
          </li>
        </Link>
    );
  }
}

export default Nav;
