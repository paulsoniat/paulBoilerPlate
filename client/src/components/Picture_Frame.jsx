import React, { Component } from 'react';
import '../componentStyles/Picture_Frame.css'
import drive2 from '../assets/driveAssets/Drive2.PNG'

import '../componentStyles/Project.css'

class Picture_Frame extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    let rightOrLeftPic = this.props.directionPic === "right" ? "right" : "left";
    let rightOrLeftText = this.props.directionText === "right" ? "right" : "left";  
    if (rightOrLeftText === "left") {
      return (
      
        <div className={"pictureWrapper"}>
          
          <div className={`${rightOrLeftText}HalfText`}>
              {this.props.asset.briefText}
          </div>

            <img id={`${rightOrLeftPic}HalfPicture`} src={this.props.asset.picture} alt={"drive2"}></img>
          
        </div>
      )
    }

    return (
      
      <div className={"pictureWrapper"}>
        
          <img id={`${rightOrLeftPic}HalfPicture`} src={this.props.asset.picture} alt={"drive2"}></img>

          <div className={`${rightOrLeftText}HalfText`}>
              {this.props.asset.briefText}
              
            </div>
        
      </div>
    )
    
  }
}

export default Picture_Frame;
