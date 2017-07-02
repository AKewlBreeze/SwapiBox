import React, { Component } from 'react';
import './App.css';
import Scroll from './components/Scroll/Scroll.js';
import Main from './components/Main/Main.js';
import ApiUtils from './helpers/helpers.js'


class App extends Component {
  constructor(){
    super()
    this.state = {
      favorites: [],
      scroll:{
        text: 'text',
        movieTitle: 'title',
        releaseDate: 'year'
      }
    }
  }

componentDidMount(){
  const apiUtils = new ApiUtils();
  const films = apiUtils.fetchApiData('films')
}
  render() {
    return (
    <div>
      <Scroll scroll={this.state.scroll} />
      <Main favorites={this.state.favorites} />
    </div>
    );
  }
}

export default App;
