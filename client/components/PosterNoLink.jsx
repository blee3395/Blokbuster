import React, { Component } from 'react';

const PosterNoLink = ({movie, index}) => {
  if (index > movie.length-1) return <div className='poster'></div>
  else {
    const film = movie[index]
    return (
      <div className='container'>
        <div className='poster'>
          <img src={film.image}></img>
          <div className='info'>
            <h3><span className='bold'>{film.title}, {film.year}</span> </h3>
            <p><span className='bold'>IMDB Rating:</span> {film.imDbRating}</p>
            <p><span className='bold'>Director:</span> {film.directors}</p>
            <p><span className='bold'>Stars:</span> {film.stars}</p>
            <p><span className='bold'>Plot:</span> {film.plot}</p>
        </div>
        </div>
        <div className="content">
          <div className="slidecontainer">
            <input type="range" min="1" max="5" value="2.5" class="slider" id="myRange" />
          </div>
          <label for="checkbox"> Recommend Shrek to a friend?</label>
          <input type="checkbox" id="checkbox" name="checkbox"></input>
          <label className='reviewLbl'>Drop a hot take in the box below</label>
          <textarea className='review' rows="24" cols="50">
            Shrek 2 is better Shrek. 
          </textarea>
          <div className='post'>
            <button className='post'>
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-postcard-heart" viewBox="0 0 16 16">
                <path d="M8 4.5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7Zm3.5.878c1.482-1.42 4.795 1.392 0 4.622-4.795-3.23-1.482-6.043 0-4.622ZM2.5 5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Z"/>
                <path fill-rule="evenodd" d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H2Z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default PosterNoLink;