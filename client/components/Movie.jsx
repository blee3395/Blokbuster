import React, { Component, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Movie = (state) => {
  const location = useLocation();
  const { id } = location.state
  
  const movieTemplate = {
    "id": "tt10648342",
    "title": "Thor: Love and Thunder",
    "year": "2022",
    "image": "https://imdb-api.com/images/original/MV5BYmMxZWRiMTgtZjM0Ny00NDQxLWIxYWQtZDdlNDNkOTEzYTdlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio0.6751_AL_.jpg",
    "genres": "Action, Adventure, Comedy",
    "genreList": [
      {
        "key": "Action",
        "value": "Action"
      },
      {
        "key": "Adventure",
        "value": "Adventure"
      },
      {
        "key": "Comedy",
        "value": "Comedy"
      }
    ],
    "posters": {
      "imDbId": "tt1375666",
      "title": "Inception",
      "fullTitle": "Inception (2010)",
      "type": "Movie",
      "year": "2010",
      "posters": [],
      "backdrops": [
        {
        "id": "ztZ4vw151mw04Bg6rqJLQGBAmvn.jpg",
        "link": "https://imdb-api.com/posters/original/ztZ4vw151mw04Bg6rqJLQGBAmvn.jpg",
        "aspectRatio": 1.7777777777777777,
        "language": "en",
        "width": 1920,
        "height": 1080
        },
        {
        "id": "s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
        "link": "https://imdb-api.com/posters/original/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
        "aspectRatio": 1.7777777777777777,
        "language": "en",
        "width": 1920,
        "height": 1080
        },
        {
        "id": "2HmLvOvu1rhfxK50WfJ4jFKy9zQ.jpg",
        "link": "https://imdb-api.com/posters/original/2HmLvOvu1rhfxK50WfJ4jFKy9zQ.jpg",
        "aspectRatio": 1.7777777777777777,
        "language": "en",
        "width": 3840,
        "height": 2160
        },
        {
        "id": "gqby0RhyehP3uRrzmdyUZ0CgPPe.jpg",
        "link": "https://imdb-api.com/posters/original/gqby0RhyehP3uRrzmdyUZ0CgPPe.jpg",
        "aspectRatio": 1.7777777777777777,
        "language": "en",
        "width": 1920,
        "height": 1080
        },
        {
        "id": "tnR3Og76RVIFUpb2mpi8Oi1GuAk.jpg",
        "link": "https://imdb-api.com/posters/original/tnR3Og76RVIFUpb2mpi8Oi1GuAk.jpg",
        "aspectRatio": 1.7777777777777777,
        "language": "en",
        "width": 1920,
        "height": 1080
        },
        {
        "id": "zlIBglEnHkxmPGVwEfywC7hXncb.jpg",
        "link": "https://imdb-api.com/posters/original/zlIBglEnHkxmPGVwEfywC7hXncb.jpg",
        "aspectRatio": 1.7777777777777777,
        "language": "en",
        "width": 1440,
        "height": 810
        },
        {
        "id": "koYANShm411GCCBwhm5lN96RfBs.jpg",
        "link": "https://imdb-api.com/posters/original/koYANShm411GCCBwhm5lN96RfBs.jpg",
        "aspectRatio": 1.7777777777777777,
        "language": "en",
        "width": 1920,
        "height": 1080
        },
        {
        "id": "56tSqd1kN6nU6sI1lfHO0p6mTS3.jpg",
        "link": "https://imdb-api.com/posters/original/56tSqd1kN6nU6sI1lfHO0p6mTS3.jpg",
        "aspectRatio": 1.7777777777777777,
        "language": "en",
        "width": 1920,
        "height": 1080
        },
        {
        "id": "lvHNQSGdjxyW2n0rYCqb40NuCh4.jpg",
        "link": "https://imdb-api.com/posters/original/lvHNQSGdjxyW2n0rYCqb40NuCh4.jpg",
        "aspectRatio": 1.7777777777777777,
        "language": "en",
        "width": 1920,
        "height": 1080
        },
        {
        "id": "ii8QGacT3MXESqBckQlyrATY0lT.jpg",
        "link": "https://imdb-api.com/posters/original/ii8QGacT3MXESqBckQlyrATY0lT.jpg",
        "aspectRatio": 1.7777777777777777,
        "language": "en",
        "width": 1920,
        "height": 1080
        },
        {
        "id": "DaNRMZskVejsye2msqqwDuyOjk.jpg",
        "link": "https://imdb-api.com/posters/original/DaNRMZskVejsye2msqqwDuyOjk.jpg",
        "aspectRatio": 1.7777777777777777,
        "language": "en",
        "width": 1920,
        "height": 1080
        },
        {
        "id": "uKc498Sa5V8UTfez75P7EM8Blxp.jpg",
        "link": "https://imdb-api.com/posters/original/uKc498Sa5V8UTfez75P7EM8Blxp.jpg",
        "aspectRatio": 1.778723404255319,
        "language": "en",
        "width": 2090,
        "height": 1175
        },
        {
        "id": "7dW4BobKP5ijWCLnbhxvcogVvHs.jpg",
        "link": "https://imdb-api.com/posters/original/7dW4BobKP5ijWCLnbhxvcogVvHs.jpg",
        "aspectRatio": 1.7777777777777777,
        "language": "en",
        "width": 1920,
        "height": 1080
        },
        {
        "id": "d7V2s3Xj49GdKgbQ714KGQy6eN3.jpg",
        "link": "https://imdb-api.com/posters/original/d7V2s3Xj49GdKgbQ714KGQy6eN3.jpg",
        "aspectRatio": 1.7777777777777777,
        "language": "en",
        "width": 1920,
        "height": 1080
        },
        {
        "id": "yBm3aFsxBZKQwQOCBgQmOUsFvBO.jpg",
        "link": "https://imdb-api.com/posters/original/yBm3aFsxBZKQwQOCBgQmOUsFvBO.jpg",
        "aspectRatio": 1.7777777777777777,
        "language": "en",
        "width": 3840,
        "height": 2160
        },
        {
        "id": "10gAiH8Cs8FpimMJhZTLMy829p6.jpg",
        "link": "https://imdb-api.com/posters/original/10gAiH8Cs8FpimMJhZTLMy829p6.jpg",
        "aspectRatio": 1.7777777777777777,
        "language": "en",
        "width": 2560,
        "height": 1440
        },
        {
        "id": "lQS7r7rl1zpQhYq1krKqQjwNFo1.jpg",
        "link": "https://imdb-api.com/posters/original/lQS7r7rl1zpQhYq1krKqQjwNFo1.jpg",
        "aspectRatio": 1.7777777777777777,
        "language": "en",
        "width": 1920,
        "height": 1080
        },
        {
        "id": "nkMvhad194v1sciF6b5pmGTr245.jpg",
        "link": "https://imdb-api.com/posters/original/nkMvhad194v1sciF6b5pmGTr245.jpg",
        "aspectRatio": 1.7777777777777777,
        "language": "en",
        "width": 1920,
        "height": 1080
        },
        {
        "id": "aCAInNkgP890b4ZAFCfAHb7uGZ9.jpg",
        "link": "https://imdb-api.com/posters/original/aCAInNkgP890b4ZAFCfAHb7uGZ9.jpg",
        "aspectRatio": 1.7777777777777777,
        "language": "en",
        "width": 1920,
        "height": 1080
        },
        {
        "id": "tc6i0p0uXPaOJWflYzV72xlhEyo.jpg",
        "link": "https://imdb-api.com/posters/original/tc6i0p0uXPaOJWflYzV72xlhEyo.jpg",
        "aspectRatio": 1.7777777777777777,
        "language": "en",
        "width": 1920,
        "height": 1080
        },
        {
        "id": "td7fdDkQhfTcaUmzsyETrWpckvZ.jpg",
        "link": "https://imdb-api.com/posters/original/td7fdDkQhfTcaUmzsyETrWpckvZ.jpg",
        "aspectRatio": 1.7777777777777777,
        "language": "en",
        "width": 1920,
        "height": 1080
        },
        {
        "id": "9p61V09nFtCFNK9rsIA1tibBPFw.jpg",
        "link": "https://imdb-api.com/posters/original/9p61V09nFtCFNK9rsIA1tibBPFw.jpg",
        "aspectRatio": 1.7777777777777777,
        "language": "en",
        "width": 1920,
        "height": 1080
        },
        {
        "id": "wQqBRG7sgoxnmUVhlwufIhng9R4.jpg",
        "link": "https://imdb-api.com/posters/original/wQqBRG7sgoxnmUVhlwufIhng9R4.jpg",
        "aspectRatio": 1.7777777777777777,
        "language": "en",
        "width": 1920,
        "height": 1080
        },
        {
        "id": "cPeny1AFySfq4BL9CKmY99wpRaO.jpg",
        "link": "https://imdb-api.com/posters/original/cPeny1AFySfq4BL9CKmY99wpRaO.jpg",
        "aspectRatio": 1.7777777777777777,
        "language": "en",
        "width": 1920,
        "height": 1080
        },
        {
        "id": "dg9UZZSrrKZ0SUcRnlaX1YZ4k8F.jpg",
        "link": "https://imdb-api.com/posters/original/dg9UZZSrrKZ0SUcRnlaX1YZ4k8F.jpg",
        "aspectRatio": 1.7777777777777777,
        "language": "en",
        "width": 3840,
        "height": 2160
        },
        {
        "id": "8ZTVqvKDQ8emSGUEMjsS4yHAwrp.jpg",
        "link": "https://imdb-api.com/posters/original/8ZTVqvKDQ8emSGUEMjsS4yHAwrp.jpg",
        "aspectRatio": 1.7777777777777777,
        "language": "en",
        "width": 3840,
        "height": 2160
        },
        {
        "id": "b5xAbWqVNsp14lCtR2vhaURWo7G.jpg",
        "link": "https://imdb-api.com/posters/original/b5xAbWqVNsp14lCtR2vhaURWo7G.jpg",
        "aspectRatio": 1.7777777777777777,
        "language": "en",
        "width": 3840,
        "height": 2160
        }
      ],
      "errorMessage": ""
    },
    "similars": [
      {
        "id": "tt3501632",
        "title": "Thor: Ragnarok",
        "image": "https://imdb-api.com/images/original/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_Ratio0.6763_AL_.jpg",
        "imDbRating": "7.9"
      },
      {
        "id": "tt9253284",
        "title": "Andor",
        "image": "https://imdb-api.com/images/original/MV5BYzFjN2JlMWMtMmU0ZC00ZjQ3LWJlZmYtMDg3YWFkN2MxYWZkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_Ratio0.6763_AL_.jpg",
        "imDbRating": ""
      },
      {
        "id": "tt9603212",
        "title": "Mission: Impossible - Dead Reckoning - Part One",
        "image": "https://imdb-api.com/images/original/MV5BZmM1MmI1MjctOTkyMi00MjZhLWEwN2MtYjEwNGRjNmUxZmVjXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_Ratio0.6763_AL_.jpg",
        "imDbRating": ""
      },
      {
        "id": "tt9114286",
        "title": "Black Panther: Wakanda Forever",
        "image": "https://imdb-api.com/images/original/MV5BYjJlMjBmYzUtY2E3MC00OWI1LWE1YmUtOTdmM2IyMTQyZDBjXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_Ratio0.6763_AL_.jpg",
        "imDbRating": ""
      },
      {
        "id": "tt0800369",
        "title": "Thor",
        "image": "https://imdb-api.com/images/original/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_Ratio0.6763_AL_.jpg",
        "imDbRating": "7.0"
      },
      {
        "id": "tt1981115",
        "title": "Thor: The Dark World",
        "image": "https://imdb-api.com/images/original/MV5BMTQyNzAwOTUxOF5BMl5BanBnXkFtZTcwMTE0OTc5OQ@@._V1_Ratio0.7053_AL_.jpg",
        "imDbRating": "6.8"
      },
      {
        "id": "tt1649418",
        "title": "The Gray Man",
        "image": "https://imdb-api.com/images/original/MV5BOWY4MmFiY2QtMzE1YS00NTg1LWIwOTQtYTI4ZGUzNWIxNTVmXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_Ratio0.6763_AL_.jpg",
        "imDbRating": ""
      },
      {
        "id": "tt6791350",
        "title": "Guardians of the Galaxy Vol. 3",
        "image": "https://imdb-api.com/images/original/MV5BMWM3ZWNlMjgtODZjMi00YTAwLWJhZTktMTM4NTgyMjE0NjMwXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_Ratio0.6763_AL_.jpg",
        "imDbRating": ""
      },
      {
        "id": "tt6710474",
        "title": "Everything Everywhere All at Once",
        "image": "https://imdb-api.com/images/original/MV5BYTdiOTIyZTQtNmQ1OS00NjZlLWIyMTgtYzk5Y2M3ZDVmMDk1XkEyXkFqcGdeQXVyMTAzMDg4NzU0._V1_Ratio0.6957_AL_.jpg",
        "imDbRating": "8.3"
      },
      {
        "id": "tt10278918",
        "title": "Willow",
        "image": "https://imdb-api.com/images/original/MV5BMjcwYjMwYTUtYjViNS00ODE1LTk3YmYtNjE0OGEwNTU0Zjk2XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_Ratio0.6763_AL_.jpg",
        "imDbRating": ""
      },
      {
        "id": "tt13833978",
        "title": "The Lincoln Lawyer",
        "image": "https://imdb-api.com/images/original/MV5BYmE0YjNkZjUtZmM5YS00NTFlLWJjOWUtODFiNzkwM2Q3OWJhXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio0.6763_AL_.jpg",
        "imDbRating": "7.7"
      },
      {
        "id": "tt9561862",
        "title": "Love, Death & Robots",
        "image": "https://imdb-api.com/images/original/MV5BYTNiYTNkNTAtYzE3ZS00ZDQ1LWEwZTYtZjI1NzYzMWJjY2U4XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_Ratio0.6763_AL_.jpg",
        "imDbRating": "8.4"
      }
    ],
  }

  const [movie, setMovie] = useState(movieTemplate)

  useEffect(() => {
    fetch(`/imdb/${id}`)
      .then(data => data.json())
      .then(formattedData => {
        console.log('this shoudl be inception: ', formattedData)
        setMovie(formattedData)
      })
  }, [])

  function handleClick() {
    fetch('/profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON'
      },
      body: JSON.stringify(movie)
    })
      .then(res => res.json())
      .then(data => console.log('Post movie to db:', data))
      .catch(err => {
        console.log('Error in posting movie to db: ', err)
      })
  }

  let banner = (movie.posters) ? movie.posters.backdrops[0].link : 'https://c.tenor.com/VMhUw2mOPEkAAAAd/nicole-kidman-theatre.gif';

  return (
    <div className='background'>
      <img 
        className='poster-background' 
        style={{width: '100%'}}
        src={banner}>
      </img>
      <h2 className='moviePage'>{movie.title}</h2>
      <h4 className='moviePage'>{movie.year}</h4>
      <h4 className='rating'>Rating: {movie.contentRating}</h4>
      <img className='poster' src={movie.image}/>
      <button className='add' onClick={() => handleClick()}>
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
        </svg>
      </button>
      <div className='info'>
        <p><span className='bold'>Genre:</span> {movie.genres}</p>
        <p><span className='bold'>Director:</span> {movie.directors}</p>
        <p><span className='bold'>Stars:</span> {movie.stars}</p>
        <p><span className='bold'>Plot:</span> {movie.plot}</p>
      </div>
    </div>
  )

}

export default Movie;