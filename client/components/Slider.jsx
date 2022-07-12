import React from "react";
import {useState, useEffect} from 'react';
import { javascript } from "webpack";

import Poster from './Poster.jsx'

const Slider = ({type, qty}) => {
  const [movies, setMovies] = useState([]);

  // async function getMovies() {
  //   try {
  //     const data = await fetch('/imdb')
  //     const formattedData = await data.json()
  //     const popularMoviesList = formattedData.items
  //     setMovies(popularMoviesList.slice(0,qty))
  //   }
  //   catch(error) {
  //    console.log('Error in Slider UseEffect: ', error)
  //   }
  // }

  useEffect(() => {
    // getMovies()
  }, [])
  // fetch('/imdb')
  //   .then(data => data.json())
  //   .then(formattedData => {
  //     popularMoviesList = formattedData.items
  //     setMovies(movies = popularMoviesList.slice(0,qty))
  //   })
  
  if (type === 'poster') {
    const row = []
    for (let i = 0; i < qty.length; i++) {
      let poster= <Poster key={movies[i].id} movie={movies[i]}/>
      row.push(poster)
    }
    return <div className="slider">{row}</div>
    
  }
}

export default Slider;