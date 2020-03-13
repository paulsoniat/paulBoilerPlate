import '../componentStyles/Navbar.css'
import React, { Component } from 'react';

class Navbar extends React.Component {
    render() {
      return (

        <nav className="navbar">
                
                    <a href="/home" className="nav-link">
                        <i className="fas fa-home"></i>
                        <span className= {"link-text"}>Home</span>
                    </a>

                    <a href="/test1" className="nav-link">
                        <i className="fas fa-infinity"></i>
                        <span className= {"link-text"}>Shop</span>
                    </a>

                    <a href="/home" className="nav-link">
                        <i className="fas fa-gem"></i>
                        <span className= {"link-text"}>Cart</span>
                    </a>

                    <a href="/home" className="nav-link">
                        <i className="fas fa-user-astronaut"></i>
                        <span className= {"link-text"}>Settings</span>
                    </a>

                    <a href="/home" className="nav-link" >
                        <i className="fas fa-meteor"></i>
                        <span className= {"link-text"}>Other</span>
                    </a>


        </nav>
      )
    }
  }

export default Navbar;