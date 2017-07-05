import React from 'react';
import './Scroll.css';
import PropTypes from 'prop-types';

const Scroll = (props)=>{
  console.log('debugg1', props)
  return(
    <section className='scroll'>
      <div className='scroll-data'>
      <h1 className= 'scroll-movie-text'>{props.scrollFilm.opening_crawl}</h1>
      <h2 className ='scroll-movie-title'>{props.scrollFilm.title}</h2>
      <h3 className='scroll-movie-release-date'>release date{props.scrollFilm.release_date}</h3>
      </div>
    </section>
  )
}


Scroll.propTypes = {
  scrollFilm: PropTypes.object

}


// Scroll.propTypes = {
//   {scroll.text}: 'string',
//   {scroll.movieTitle}: 'string',
//   {scroll.releaseDate}: 'string'
// }



export default Scroll;
