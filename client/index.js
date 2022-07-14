import React, {Component} from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx';
import Results from './components/Results.jsx';

import styles from './stylesheets/styles.css';

const search = document.querySelector('input')
search.addEventListener('focus', () => {
  search.style.color = 'black'
  if (search.value === 'Looking for a fine piece of art...') {
    search.value ='';
  } 
})
search.addEventListener('blur', () => {
  search.style.color = 'rgb(131, 131, 131)'
  if (search.value === '') {
    search.value = 'Looking for a fine piece of art...'
  } 
})

const blokbuster = document.querySelector('h1');
blokbuster.addEventListener('click', () => {
  if (window.location !== '/') window.open('/', '_self');
})

const logoBtn = document.querySelector('button.logoBtn');
logoBtn.addEventListener('click', () => {
  if (window.location !== '/') window.open('/', '_self');
})

let movieSearchResults;

const searchBtn = document.querySelector('.search');
searchBtn.addEventListener('click', () => {
  if (search.value !== 'Looking for a fine piece of art...') {
    const value = search.value;
    console.log('Searching for : ', value)
    fetch(`/imdb/search/${value}`)
      .then(data => data.json())
      .then(movieResults => {
        console.log('Search bar results: ', movieResults)
        movieSearchResults = movieResults;
        // if (window.location !== '/results') window.open('/results', '_self');
        render (
          <Results 
            movieResults={movieResults} 
            qty={5}
          />,
          document.getElementById('root')
        )
      })
      .catch(err => console.log('Error in search fetch request'))
  }

})

const profile = document.querySelector('button.profile')
profile.addEventListener('click', () => {
  if (window.location !== '/profile') window.open('/profile', '_self');
})

render(
  <App />, 
  document.getElementById('root')
);