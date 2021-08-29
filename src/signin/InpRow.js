import React from 'react'
import ReactDOM from 'react-dom';

class InpRow extends React.Component {
    constructor(props) {
        super();
        this.props = props;
    }

    render() {
        return (
            <div class="inp-row">
                <label for={this.props.inpId}>{this.props.inpLabel}</label>
                <input required type={this.props.type} placeholder={this.props.placeholder} name={this.props.inpName} id={this.props.inpId} onChange={this.props.onChange} value={this.props.value}/>
            </div>
        );
    }
}

export default InpRow;
