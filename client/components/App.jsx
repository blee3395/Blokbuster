import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Slider from './Slider.jsx'


const App = (props) => {

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

export default App;