import React, { Component } from 'react';
import Navbar from './Navbar'
import '../componentStyles/Portfolio.css'
import "react-awesome-button/dist/styles.css";
import Button from './Button'

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
      return (
        <div>
        <Navbar/>
          <div className={"portfolioContainer"}>
            <div className={"rowContainer"}>
              <div className={"textContainer"} >          
                <div className={"titleContainer"} >
                    <h1>DXC Drive</h1>
                      <div className={"descriptionText"}>Partnering with the Indy Car racing team of Penske to create a fan engagement tool for end users to race Penske drivers in real time during the DXC 600 Indy Car Race. </div>
                    <div className={"descriptionColumn"}></div>
                        <Button href="/driveProject" text="Learn More"></Button>
                    <div className={"descriptionColumn"}></div>
                </div>
                <div className={"titleContainer"} >
                    <h1>Venari</h1>
                      <div className={"descriptionText"}>Location and visual picture recognition scavenger hunt progressive web application. Users can create and complete challenges across the world to earn points towards unlockable badges.</div>
                    <div className={"descriptionColumn"}></div>
                        <Button href="/venariProject" text="Learn More"></Button>
                    <div className={"descriptionColumn"}></div>
                </div>
                <div className={"titleContainer"} >
                  <h1>Title of Project</h1>
                  <h2></h2>
                  <Button text="Learn More"></Button>
                </div>
                <div className={"titleContainer"} >
                  <h1>Title of Project</h1>
                  <h2></h2>
                  <Button text="Learn More"></Button>
                </div>
              </div>
            </div>  
          </div>
      </div>
      )
  }
}

export default Portfolio;
