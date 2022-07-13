import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Poster = ({movie, id}) => {
  console.log('Poster: ', movie[id])  
  return (
    <div className='poster'>
        <img src={movie[id].image}></img>
    </div>
  )
}

export default Poster;