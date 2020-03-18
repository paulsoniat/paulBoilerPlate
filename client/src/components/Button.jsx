import React, { Component } from 'react';
import '../componentStyles/Button.css'

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div id="wrapper">
      <a href={this.props.href} className="my-super-cool-btn">
        <div className="dots-container">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
        <span>{this.props.text}</span>
      </a>
    </div>
    )
  }
}

export default Button;
