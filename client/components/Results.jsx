import React from "react";
import {useState, useEffect} from 'react';

import Poster from './Poster.jsx'

const Results = ({movieResults, qty}) => {
  // const movieTemplate = {
  //   "id": "tt10648342",
  //   "rank": "1",
  //   "rankUpDown": "+3",
  //   "title": "Thor: Love and Thunder",
  //   "fullTitle": "Thor: Love and Thunder (2022)",
  //   "year": "2022",
  //   "image": "https://imdb-api.com/images/original/MV5BYmMxZWRiMTgtZjM0Ny00NDQxLWIxYWQtZDdlNDNkOTEzYTdlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio0.6716_AL_.jpg",
  //   "crew": "Taika Waititi (dir.), Chris Hemsworth, Natalie Portman",
  //   "imDbRating": "7.0",
  //   "imDbRatingCount": "71027"
  // }

  // const movieArr = [];

  // for (let i = 0; i < qty; i++) {
  //   movieArr.push(movieTemplate)
  // }

  const [movies, setMovies] = useState(movieResults);

  // useEffect(() => {

  // }, [])
  
  const row = []
  for (let i = 0; i < qty; i++) {
    row.push(<Poster 
              movie={movies} 
              index={i}
            />)

    return (
      <div className="results">
        <h2>A fine list of search results &#128076</h2>
        <div className="slider">{row}</div> 
      </div>
    )   
  }
}

export default Results;