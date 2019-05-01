import React, { Component } from 'react';

import logo from './logo.svg';

import './App.css';

import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      response: '',
      users: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.callApi = this.callApi.bind(this);
  }
  

  componentWillMount = async () => {
    var data = await this.callApi();
    console.log(data)
    this.setState({users : data})
    this.setState({loaded: true})
  }

  callApi = async () => {
    let userData = await axios.get('/allUsers')
    return userData.data;
  };

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit = async (event) => {
    axios.post('/user', {
      firstName: `${this.state.value}`,
      lastName: 'Flintstone'
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    event.preventDefault();
  }

  /*

  <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>

  */

  render() {
    if(this.state.loaded) {
      return (
        <div className="App"> 
        {this.state.users.map(user =>
                (<div key={user.id}>
                  {`${user.firstName}` + ', ' +  `${user.lastName}`}
                  </div>))}
        </div>
      );
    }
    else {
      return (
        <div className="App">
           <div>loading</div>
        </div>
      );
    }
  }
}

export default App;
