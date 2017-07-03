import React, { Component } from 'react';
import './App.css';
import Scroll from './components/Scroll/Scroll';
import Main from './components/Main/Main';
import ApiUtils from './helpers/helpers';

class App extends Component {
  constructor() {
    super();
    this.state = {
      favorites: [],
      scrollFilm: {},
      isDevMode: true,
    };
  }

  componentDidMount() {
    const apiUtils = new ApiUtils();
    const films = apiUtils.fetchApiData('films', this.state.isDevMode);
    const randomFilm = films.results[this.getRandomInt(0, films.results.length + 1)];
    this.setState({ scrollFilm: randomFilm });
  }

  getRandomInt(min, max) {
    const minVal = Math.ceil(min);
    const maxVal = Math.floor(max);
    return Math.floor(Math.random() * (maxVal - minVal)) + minVal;
  }

  render() {
    return (
    <div className='app-container'>
      <Scroll scrollFilm={this.state.scrollFilm} />
      <Main favorites={this.state.favorites} />
    </div>
    );
  }
}

export default App;
