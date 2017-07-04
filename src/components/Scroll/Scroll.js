import React from 'react';
import './Scroll.css';
import PropTypes from 'prop-types';

const Scroll = ({scrollFilm})=>{
  return(
    <section className='scroll'>
      <div className='scroll-data'>
      <h1 className= 'scroll-movie-text'>{scrollFilm.crawl}</h1>
      <h2 className ='scroll-movie-title'>{scrollFilm.movieTitle}</h2>
      <h3 className='scroll-movie-release-date'>{scrollFilm.releaseDate}</h3>
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
