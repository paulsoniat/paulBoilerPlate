import React, { Component } from 'react';
import NavBar from './Navbar'
import Navbar from './Navbar';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
      return (
        <div>
          <Navbar/>
          <div className={"mainContainer"}>Home</div>
        </div>
      )
  }
}

export default Home;
