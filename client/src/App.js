import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//component loads
import Login from './components/Login'
import Home from './components/Home'
import Portfolio from './components/Portfolio'
import Project from './components/Project'


//asset loading for props
import './assets/projectInfo.js'
import { dxcDrive } from "./assets/projectInfo.js";

//dxc Drive
const drive1 = require('../src/assets/driveAssets/Drive1.PNG');
const drive2 = require('../src/assets/driveAssets/Drive2.PNG');
const drive3 = require('../src/assets/driveAssets/Drive3.PNG');
const drive4 = require('../src/assets/driveAssets/Drive4.PNG');
const drive5 = require('../src/assets/driveAssets/Drive5.PNG');
const drive6 = require('../src/assets/driveAssets/Drive6.PNG');
const drive7 = require('../src/assets/driveAssets/Drive7.PNG');
const drive8 = require('../src/assets/driveAssets/Drive8.PNG');
const drive9 = require('../src/assets/driveAssets/Drive9.PNG');
const driveLogo = require('../src/assets/driveAssets/DriveLogo.PNG')

const drivePictures = [drive1, drive2, drive3, drive4, drive5, drive6, drive7, drive8, drive9, driveLogo]

export default function App() {
  console.log(dxcDrive)
  return (
    <Router>
        <Switch>
          <Route path="/home">
            < Home/>
          </Route>
          <Route path="/portfolio">
            < Portfolio />
          </Route>
          <Route path="/assets/Resume - Paul Soniat.pdf">
            <div>
            <a href="/assets/Resume - Paul Soniat.pdf" class="btn btn-default btn-lg" target="_blank">View Resume</a>
            </div>
          </Route>
          <Route path="/driveProject">
            <Project name={dxcDrive.name} assets={drivePictures}  />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}
