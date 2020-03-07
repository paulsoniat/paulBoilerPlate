import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.loginUser.bind(this);
  }

  loginUser = () => {
    console.log('hey')
    axios.get('/auth/google').then(res => {
      console.log(res)
    })
  }

  render() {
    return (
      <button width='100px' onClick={this.loginUser}>Create User</button>
    )
  }
}

export default Login;
