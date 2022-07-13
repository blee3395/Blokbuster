import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//
function handleClick() {
  //do something
}

const Poster = ({movie, id}) => {
  console.log('Poster: ', movie[id])  
  return (
    <div className='poster'>
      <Link to='/movie'>
        <img src={movie[id].image} onClick={() => handleClick}></img>
      </Link>
    </div>
  )
}

export default Poster;