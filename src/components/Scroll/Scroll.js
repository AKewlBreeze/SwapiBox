import React from 'react';
import { shape, string } from 'prop-types';
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

const scrollFilm = shape({
  opening_crawl: string,
  title: string,
  release_date: string,
});

Scroll.propTypes = {
  scrollFilm,
};

export default Scroll;
