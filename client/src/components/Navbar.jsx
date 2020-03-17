import '../componentStyles/Navbar.css'
import React, { Component } from 'react';

class Navbar extends React.Component {
    render() {
      return (

        <nav className="navbar">
                
                    <a href="/home" className="nav-link">
                        <i className="fas fa-home"></i>
                        <span className= {"link-text"}></span>
                    </a>

                    <a href="/portfolio" className="nav-link">
                        <i className="fas fa-infinity"></i>
                        <span className= {"link-text"}>Portfolio</span>
                    </a>

                    <a href="/home" className="nav-link">
                        <i className="fas fa-gem"></i>
                        <span className= {"link-text"}>About</span>
                    </a>

                    <a href="/blog" className="nav-link">
                        <i className="fas fa-user-astronaut"></i>
                        <span className= {"link-text"}>Blog</span>
                    </a>

                    <a href="/Resume%20-%20Paul%20Soniat.pdf" className="nav-link" >
                        <i className="fas fa-meteor"></i>
                        <span className= {"link-text"}>Resume</span>
                    </a>

                    <a href="mailto:paulmsoniat@gmail.com?Subject=Paulsoniat.com Contact" className="nav-link" >
                        <i className="fas fa-envelope-open-text"></i>
                        <span className={"link-text"}>Email Me</span>
                    </a>

        </nav>
      )
    }
  }

export default Navbar;