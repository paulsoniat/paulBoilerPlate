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
          <div> 
            <img id="dxcDrive" src={this.props.assets[9]} alt="DXC Drive "/>
            
          </div>
          <div classname={"textWrapper"}>
            <div id="problemTitle" className={"briefTitle"}>
              {this.props.briefTitle}
              The Problem
            </div>
            <div  className={"briefText"}>
              {this.props.briefText}
              Penske wanted to increase fan engagement, brand awareness, and Indy Car driver personalities through an application during the DXC 600 Indy Car race
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
