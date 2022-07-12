import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Poster = ({movie}) => {
  return (
    <div className='poster'>
      <Link to={movie.image}>
        <img src={movie.image}></img>
      </Link>
    </div>
  )
}


export default Poster;