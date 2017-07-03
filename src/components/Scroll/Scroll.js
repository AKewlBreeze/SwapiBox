import React from 'react';
import './Scroll.css';

const Scroll = ({ scrollFilm }) => {
  return (
    <div className='scroll-container'>
      <p className='scroll-crawl'>{scrollFilm.opening_crawl}</p>
      <p className='scroll-title'>{scrollFilm.title}</p>
      <p className='scroll-release-date'>{scrollFilm.release_date}</p>
    </div>
  );
};

export default Scroll;
