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

//Venari Assets

const venariLogo = require('../src/assets/venariAssets/venariLogo.png')
const venari1 = require('../src/assets/venariAssets/venari1.mov');

const venariAssets = [venariLogo, {video: venari1, briefText: "The login page I coded and was the first merged pull request on the project. Simon Pagenaud was Penske's featured driver, who won the race the prior year. Users would begin their racing journey here."}, {video: venari1, briefText: "The login page I coded and was the first merged pull request on the project. Simon Pagenaud was Penske's featured driver, who won the race the prior year. Users would begin their racing journey here."}, {video: venari1, briefText: "The login page I coded and was the first merged pull request on the project. Simon Pagenaud was Penske's featured driver, who won the race the prior year. Users would begin their racing journey here."}, {video: venari1, briefText: "The login page I coded and was the first merged pull request on the project. Simon Pagenaud was Penske's featured driver, who won the race the prior year. Users would begin their racing journey here."}, {video: venari1, briefText: "The login page I coded and was the first merged pull request on the project. Simon Pagenaud was Penske's featured driver, who won the race the prior year. Users would begin their racing journey here."}]

const drivePictures = [driveLogo, {picture: drive8, briefText: "The login page I coded and was the first merged pull request on the project. Simon Pagenaud was Penske's featured driver, who won the race the prior year. Users would begin their racing journey here."}, {picture: drive5, briefText: "Members created a team and gave their phone number for notifications/race link the day of. I created the front end page and a cron job for twilio on a flask server to send sign up notifications and a link to the individual(s) 30 minutes before the race. "}, {picture: drive2, briefText: "The next page I implemented, racers could then choose their car color, through a reactive scroll bar, and once they were ready could move on to the race. They were also displayed stats about their car hardware.  "}, {picture: drive7, briefText: "This is the view that fans saw during the race, we tracked positioning from our flask server and traced 1st place, the fan, and Penske drivers during the race by positioning the dots along an outline of the actual track. We automated Pit stops and Fuel levels during the race."}]

export default function App() {
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
            <Project video={false} title={"The Idea"} briefTitle={"Penske wanted to increase fan engagement, brand awareness, and Indy Car driver personalities through an application during the DXC 600 Indy Car race"} name={dxcDrive.name} assets={drivePictures}  />
          </Route>
          <Route path="/venariProject">
            <Project video={true} title={"The Idea"} briefTitle={"Venari test"} name={"Venari"} assets={venariAssets}  />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}
