import React from 'react';
import './Scroll.css';

const Scroll = ({ scrollFilm }) => {
  return (
    <div>
      {scrollFilm.opening_crawl}
      {scrollFilm.title}
      {scrollFilm.release_date}
    </div>
  );
};

export default Scroll;
