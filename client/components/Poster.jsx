import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//
function handleClick(movie, index) {
  //do something
  // console.log('id ', movie[index].id)
}

const Poster = ({movie, index}) => {
  const movieID = movie[index].id

  return (
    <div className='poster'>
      <Link to={{
        pathname:'/movie',
        state: {
          id: movieID
        }
      }}>
        <img src={movie[index].image} onClick={() => handleClick(movie, index)}></img>
      </Link>
    </div>
  )
}

export default Poster;