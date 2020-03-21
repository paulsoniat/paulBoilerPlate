import React, { Component } from 'react';
import Navbar from './Navbar';
import '../componentStyles/Project.css'
import '../assets/projectInfo.js'

import Picture_Frame from './Picture_Frame';
import Video_Frame from './Video_Frame';

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    if (this.props.video){
      return (
        <div >
          <Navbar/>
          <div className={"homeContainer"}>
            <div> 
              <img id="videoLogo" src={this.props.assets[0]} alt="DXC Drive "/>
              
            </div>
            <div classname={"textWrapper"}>
              <div id="problemTitle" className={"briefTitle"}>
                {this.props.title}
              </div>
              <div  className={"briefText"}>
                {this.props.briefTitle}
              </div>
            </div>
              
            <div className={"pictureWrapper"}>
              <Video_Frame directionPic="left" directionText="right" asset={this.props.assets[1]} />
            </div>
            <div className={"pictureWrapper"}>
              <Video_Frame directionPic="right" directionText="left" asset={this.props.assets[2]} />
            </div>
            <div className={"pictureWrapper"}>
              <Video_Frame directionPic="left" directionText="right" asset={this.props.assets[3]} />
            </div>
            <div className={"pictureWrapper"}>
              <Video_Frame directionPic="right" directionText="left" asset={this.props.assets[4]} />
            </div>
          </div>
      </div>
      )
    }
    
    
else {
return (
      <div >
        <Navbar/>
        <div className={"homeContainer"}>
          <div> 
            <img id="dxcDrive" src={this.props.assets[0]} alt="DXC Drive "/>
            
          </div>
          <div classname={"textWrapper"}>
            <div id="problemTitle" className={"briefTitle"}>
              {this.props.title}
            </div>
            <div  className={"briefText"}>
              {this.props.briefTitle}
            </div>
          </div>
            
          <div className={"pictureWrapper"}>
            <Picture_Frame directionPic="left" directionText="right" asset={this.props.assets[1]} />
          </div>
          <div className={"pictureWrapper"}>
            <Picture_Frame directionPic="right" directionText="left" asset={this.props.assets[2]} />
          </div>
          <div className={"pictureWrapper"}>
            <Picture_Frame directionPic="left" directionText="right" asset={this.props.assets[3]} />
          </div>
          <div className={"pictureWrapper"}>
            <Picture_Frame directionPic="right" directionText="left" asset={this.props.assets[4]} />
          </div>
        </div>
    </div>
    )
}
    
  }
}

export default Project;
