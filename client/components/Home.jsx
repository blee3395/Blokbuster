import React, { Component } from 'react';
import Slider from './Slider.jsx'
import FavSlider from './FavSlider.jsx';

const Home = (props) => {

  return (
    <div className='router'>
      <h2>Top Movies</h2>
      <Slider 
        type = {'poster'} 
        qty = {5}
      />
      <h2>My Favorites</h2>
      <FavSlider 
        qty = {10}
      />


    </div>
  )

}

export default Home;