import React, { Component } from 'react';

const Movie = (props) => {

  return (
    <div className='router'>
      <h2>Top Movies</h2>
      <Slider 
        type = {'poster'} 
        qty = {5}
      />
    </div>
  )

}

export default Movie;