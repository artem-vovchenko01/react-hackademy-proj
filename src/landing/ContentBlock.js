import React from 'react'
import ReactDOM from 'react-dom';
import FOSSpng from '../images/FOSS.png';

class ContentBlock extends React.Component {
  constructor(props) {
    super();
    this.props = props;
  }

  render() {
    const divClasses = "conten-block" + this.props.divClass;
    return (
      <div className={divClasses}>
        <div className="text-content">
          <h2>
            {this.props.mainText}
          </h2>
          <p>
            {this.props.pText}
          </p>
        </div>
        <img src={this.props.image} />
      </div>
    );
  }
}

export default ContentBlock;

