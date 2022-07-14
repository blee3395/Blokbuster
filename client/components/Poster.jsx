import React, { Component } from 'react';
import { Link } from 'react-router-dom';


function handleClick() {
  fetch('/profile', {
    method: 'POST',
    headers: {
      'Content-Type': 'Application/JSON'
    },
    body: JSON.stringify(movie)
  })
    .then(res => res.json())
    .then(data => console.log('Post movie to db:', data))
    .catch(err => {
      console.log('Error in posting movie to db: ', err)
    })
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
        <img src={movie[index].image}></img>
      </Link>
      <button className='add poster' onClick={() => handleClick()}>
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
        </svg>
      </button>
    </div>
  )
}

export default Poster;