import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

class Weather extends React.Component {
  constructor(props) {
    super();
    this.props = props;
  }

  render() {
    const data = fetch("api.openweathermap.org/data/2.5/weather?q=London,uk&appid={036e24eb9094b4e8c5b38f2bd30320ae}");
    console.log(data);
    return null;

  }
}

export default Weather;
