import React from 'react';
import './Scroll.css';

const Scroll = ({scroll})=>{
  return(
    <div>
      {scroll.text}
      {scroll.movieTitle}
      {scroll.releaseDate}
    </div>
  )
}

export default Scroll;
