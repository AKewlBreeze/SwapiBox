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
      isDevMode: false,
      currentData: []
    };
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(requestType){
    console.log('click', requestType);
    const apiUtils = new ApiUtils();
    const dataArray = apiUtils.getFromLocalStorage(requestType);
    if(dataArray.length === 0){
      apiUtils.fetchApiData(requestType, this.state.isDevMode).then(data =>{
        apiUtils.saveToLocalStorage(requestType, data)
        this.setState({currentData: data})
      })
    }
  }

  componentDidMount() {
    const apiUtils = new ApiUtils();
    const filmsArray = apiUtils.getFromLocalStorage('films');
    if (filmsArray.length === 0) {
      apiUtils.fetchApiData('films', this.state.isDevMode).then(films => {
        apiUtils.saveToLocalStorage('films', films);
        this.setState({ scrollFilm: this.getRandomFilm(films) });
      });
    } else {
      this.setState({ scrollFilm: this.getRandomFilm(filmsArray) });
    }
  }

  getRandomFilm(data) {
    return data.results[this.getRandomInt(0, data.results.length)];
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
      <Main favorites={this.state.favorites} currentData={this.state.currentData} handleClick={this.handleClick} />
    </div>
    );
  }
}

export default App;
