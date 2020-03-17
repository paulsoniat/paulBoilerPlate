import React, { Component } from 'react';
import Navbar from './Navbar'
import '../componentStyles/Portfolio.css'
import "react-awesome-button/dist/styles.css";

import Button from './Button'


import {
  AwesomeButton,
  AwesomeButtonProgress,
  AwesomeButtonSocial,
} from 'react-awesome-button';

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
                  <h1>Title of Project</h1>
                  <h2>Lorem ipsum aijdia i ka k akdhjksaj akjhwkja kjsdklj askldj wajdladkjwkljtkl jalk kdjs kdj aklwjd ajdkw jadakljwd aldkjaw dalkdjaw dklajwd alkdja kdjlkaj wkjd aldkja dlkajdwkaljd adkjad akjd j  j kljlkj lkj</h2>
                  <Button></Button>
                </div>
                <div className={"titleContainer"} >
                  <h1>Title of Project</h1>
                  <h2></h2>
                  <Button></Button>
                </div>
                <div className={"titleContainer"} >
                  <h1>Title of Project</h1>
                  <h2></h2>
                  <Button></Button>
                </div>
                <div className={"titleContainer"} >
                  <h1>Title of Project</h1>
                  <h2></h2>
                  <Button></Button>
                </div>
              </div>
            </div>  
          </div>
      </div>
      )
  }
}

export default Portfolio;
