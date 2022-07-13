import React, {Component} from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx'

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

render(
  <App />, 
  document.getElementById('root')
);