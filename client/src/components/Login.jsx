import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      
      <div className={"mainContainer"}>
        <a href="http://localhost:5000/auth/google">Facebook Login</a>
      </div>

    )
  }
}

export default Login;
