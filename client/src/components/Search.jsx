import React, { Component } from 'react'
import axios from 'axios'
import Suggestions from './Suggestions'

const { API_KEY } = process.env
const API_URL = 'http://api.musicgraph.com/api/v2/artist/suggest'

class Search extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            query: '',
            results: []
            }       
        this.getInfo.bind(this)
    }


  getInfo = () => {
    //axios.get(`${API_URL}?api_key=${API_KEY}&prefix=${this.state.query}&limit=7`)
    /*let payload = {
        token: "CfdD9cml4xbioXqAleCchw",
        data: {
            stringShort: 'stringShort',
            stringLong: 'stringLong',
            stringCharacters: 'stringCharacters',
            stringDigits: 'stringDigits',
            stringAlphaNum: 'stringAlphaNum',
            stringWords: 'stringWords',
            "_repeat": 10
        }
    };
    
    axios({
      method: "post",
      url: "https://app.fakejson.com/q",
      data: payload
    }).then((resp) => {
      console.log(resp.data, this)
        this.setState({
            results: resp.data
          })
    });
    */

    const search = { search: this.state.query}
   axios.post('/search', {search})
   .then (res => {
     console.log(res, "this is res from search")
   })
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.getInfo()
        }
      } else if (!this.state.query) {
      }
    })
  }

  render() {
    return (
      <form>
        <input
          placeholder="Search for..."
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
        <Suggestions results={this.state.results} />
      </form>
    )
  }
}

export default Search

