import React, { Component } from 'react';
import Navbar from './Navbar';
import '../componentStyles/Project.css'
import '../assets/projectInfo.js'

import Picture_Frame from './Picture_Frame';

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div >
        <Navbar/>
        <div className={"homeContainer"}>
          <div className={"projectTitle"}> 
            DXC Drive {this.props.title}
            <div className={"descriptionText"}>
            Partnering with the Indy Car racing team of Penske to create a fan engagement tool for end users to race Penske drivers in real time during the DXC 600 Indy Car Race.
            {this.props.description}
            </div>
          </div>
          <div classname={"textWrapper"}>
            <div className={"briefTitle"}>
              {this.props.briefText}
              The Solution 
            </div>
            <div className={"briefText"}>
              {this.props.briefText}
              Partnering with the Indy Car racing team of Penske to create a fan engagement tool for end users to race Penske drivers in real time during the DXC 600 Indy Car 
            </div>
          </div>
          <div className={"pictureWrapper"}>
            <Picture_Frame directionPic="left" directionText="right" asset={this.props.assets[7]} />
          </div>
          <div className={"pictureWrapper"}>
            <Picture_Frame directionPic="right" directionText="left" asset={this.props.assets[4]} />
          </div>
          <div className={"pictureWrapper"}>
            <Picture_Frame directionPic="left" directionText="right" asset={this.props.assets[1]} />
          </div>
          <div className={"pictureWrapper"}>
            <Picture_Frame directionPic="right" directionText="left" asset={this.props.assets[6]} />
          </div>
        </div>
    </div>
    )
  }
}

export default Project;
