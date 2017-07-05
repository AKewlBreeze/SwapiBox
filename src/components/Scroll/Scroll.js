import React from 'react';
import './Scroll.css';
import PropTypes, { shape, object, string} from 'prop-types';

const Scroll = ({ scrollFilm }) => {
  return (
    <div className='scroll-container'>
      <p className='scroll-crawl'>{scrollFilm.opening_crawl}</p>
      <p className='scroll-title'>{scrollFilm.title}</p>
      <p className='scroll-release-date'>{scrollFilm.release_date}</p>
    </div>
  );
};

Scroll.propTypes = {
  scrollFilm: PropTypes.object

}

const scrollFilm = shape({
  opening_crawl: 'string',
  title: 'string',
  release_date: 'string'
})

export default Scroll;
