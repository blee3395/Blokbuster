import React from "react";
import {useState, useEffect} from 'react';

import Poster from './Poster.jsx'

const Slider = ({type, qty}) => {
  const movieTemplate = {
    "id": "tt10648342",
    "rank": "1",
    "rankUpDown": "+3",
    "title": "Thor: Love and Thunder",
    "fullTitle": "Thor: Love and Thunder (2022)",
    "year": "2022",
    "image": "https://imdb-api.com/images/original/MV5BYmMxZWRiMTgtZjM0Ny00NDQxLWIxYWQtZDdlNDNkOTEzYTdlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio0.6716_AL_.jpg",
    "crew": "Taika Waititi (dir.), Chris Hemsworth, Natalie Portman",
    "imDbRating": "7.0",
    "imDbRatingCount": "71027"
  }

  const movieArr = [];

  for (let i = 0; i < qty; i++) {
    movieArr.push(movieTemplate)
  }

  const [movies, setMovies] = useState(movieArr);

  async function getMovies() {
    try {
      const data = await fetch('/imdb')
      const formattedData = await data.json()
      const popularMoviesList = formattedData
      // setMovies(movies.push(...popularMoviesList.slice(0,qty)))
      setMovies(arr => {
        for (let i = 0; i < arr.length; i++) {
          arr[i] = popularMoviesList[i]
        }
        return arr;
      })
      console.log('Aftre movies: ', movies)
    }
    catch(error) {
      console.log('Error in Slider UseEffect: ', error)
    }
  }
  
  useEffect(() => {
    getMovies()
  }, [])
  
  if (type === 'poster') {    
    const row = []
    console.log('Movies in poster ', movies)
    for (let i = 0; i < qty; i++) {
      row.push(<Poster 
                movie={movies} 
                id={i}
              />)
    }

    return <div className="slider">{row}</div>    
  }
}

export default Slider;