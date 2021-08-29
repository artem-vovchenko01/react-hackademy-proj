import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import css from '../css/register.css';
import { Link } from 'react-router-dom';
import InpRow from './InpRow';
import axios from 'axios';
//const fetch = require("node-fetch");

class Signin extends React.Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      name: '',
      surname: '',
      email: '',
      password: '',
      gender: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.getWeather = this.getWeather.bind(this);
  }

  async getWeather() {
    let data = await axios
      .get("http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=036e24eb9094b4e8c5b38f2bd30320ae")
      .then(function(response) {
        return response;
      })
      .catch(function(error) {
        console.log(error);
      });

    this.setState({ weather: data.data });
    console.log("shit");
    console.log(this.state.weather.coords  );
  }

  handleFormSubmit(e) {
    e.preventDefault();
    this.setState({
      name: '',
      surname: '',
      email: '',
      password: '',
      gender: '',
    });
  }

  handleChange = (e) => {
    this.setState({[e.target.name]:e.target.value});
  }

  componentDidMount() {
    console.log('didMOOOOOOOOOOOOOOOOOunt');
    this.getWeather();
    this.userData = JSON.parse(localStorage.getItem('user'));

    if (localStorage.getItem('user')) {
        this.setState({
            name: this.userData.name,
            surname: this.userData.surname,
            email: this.userData.email,
            password: this.userData.password,
            gender: this.userData.gender,
        });
    } else {
        this.setState({
            name: '',
            surname: '',
            email: '',
            password: '',
            gender: '',
        });
    }
}

componentWillUpdate(nextProps, nextState) {
  localStorage.setItem('user', JSON.stringify(nextState));
}

// someFunction() {
//     return new Promise(resolve => {
//         fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=036e24eb9094b4e8c5b38f2bd30320ae')
//     .then(res => {
//         return res.json();
//     })
//     .then(res => resolve(res));
//         }
//     );
// }

  render() {
    const { weather } = this.state;
    console.log(this.state.weather);
      // fetch("api.openweathermap.org/data/2.5/weather?q=London,uk&appid=036e24eb9094b4e8c5b38f2bd30320ae")
      // .then(response => {
      //   console.log(response)
      //   return response.json()
      // } 
      //   )
      // .then(data => console.log(data));

      // let data = fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=036e24eb9094b4e8c5b38f2bd30320ae')
      //   .then (resp => resp.json());

    // console.log(data);

    return (
      <div>
        <h1>Registration</h1>

        {/* <h2>{this.state.weather.coord}</h2> */}
        <InpRow inpId="inp-name" inpLabel="Name" inpName="name" placeholder="Your name" type="text" onChange={this.handleChange} value={this.state.name} />
        <InpRow inpId="inp-name" inpLabel="Surname" inpName="surname" placeholder="Your surname" type="text" onChange={this.handleChange} value={this.state.surname}/>
        <InpRow inpId="inp-email" inpLabel="Email" inpName="email" placeholder="Your email" type="text" onChange={this.handleChange} value={this.state.email}/>
        <InpRow inpId="inp-passwd" inpLabel="Password" inpName="password" placeholder="Your password" type="password" onChange={this.handleChange} value={this.state.password}/>

      <label for="sel-gender">Gender</label>
        <select value={this.state.gender} name="gender" id="sel-gender" id="sel-gender" onChange={this.handleChange}>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
        <Link to='/login'>
          <input onSubmit={this.handleFormSubmit} id="submit-btn" type="submit" value="Submit"/>
        </Link>
      </div>
    );

  }
}

export default Signin;
