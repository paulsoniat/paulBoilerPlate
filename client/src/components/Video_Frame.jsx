import React, { Component } from 'react';
import { Player } from 'video-react';
import '../componentStyles/Picture_Frame.css'
import drive2 from '../assets/driveAssets/Drive2.PNG'


import '../componentStyles/Video_Frame.css'

import YouTube from '@u-wave/react-youtube';

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

          <div className={`${rightOrLeftText}HalfTextVideo`}>
              {this.props.asset.briefText}
          </div>
          <div className={`${rightOrLeftPic}HalfVideo`}>
            <YouTube 
            width={425}
            height={550}
            volume={0}
            video="h8jOsnGPHGs"
            autoplay
            />
          <div/>
        </div>
        </div>
      )
    }

    return (
      
      <div className={"pictureWrapper"}>

         <div className={`${rightOrLeftPic}HalfVideo`}>
            <YouTube 
            width={425}
            height={550}
            volume={0}
            video="h8jOsnGPHGs"
            autoplay
            />
          <div/>
        </div>
          <div className={`${rightOrLeftText}HalfTextVideo`}>
              {this.props.asset.briefText}
              
            </div>
        
      </div>
    )
    
  }
}

export default Picture_Frame;
