import React, { Component } from 'react';
import '../componentStyles/Button.css'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div id="wrapper">
      <a href="#" class="my-super-cool-btn">
        <div class="dots-container">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
        <span>Go!</span>
      </a>
    </div>
    )
  }
}

export default Login;
