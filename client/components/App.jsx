import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Slider from './Slider.jsx'


const App = (props) => {

  return (
    <div className='router'>
        <Slider 
          type = {'poster'} 
          qty = {5}
        />
    </div>
  )

}

export default App;