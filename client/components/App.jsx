import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Home from './Home.jsx';
import Movie from './Movie.jsx';
import Profile from './Profile.jsx';
import Results from './Results.jsx';

const App = (props) => {

  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/movie' component={Movie}/>
        <Route path='/profile' component={Profile}/>
        <Route path='/results' component={Results}/>

        <Redirect to='/' />  
      </Switch>
    </Router>

    // <div className='router'>
    //   <h2>Top Movies</h2>
    //   <Slider 
    //     type = {'poster'} 
    //     qty = {5}
    //   />
    // </div>
  )

}

export default App;