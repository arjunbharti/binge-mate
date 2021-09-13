import React, { useEffect } from 'react'
import { useState } from 'react/cjs/react.development';
import Movie from './Movie';
import styles from './Display.module.css'

const MOVIE_API=process.env.REACT_APP_MOVIE_API;
const SEARCH_API=process.env.REACT_APP_SEARCH_API;


const Display = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');  

    useEffect(() => {
      getMovies(MOVIE_API);
    },[]);  

    const handleOnSubmit = (event) => {
      event.preventDefault();
      if(searchTerm){
        getMovies(SEARCH_API + searchTerm);
        setSearchTerm("");
      }
    };  

    const handleOnChange = (event) => {
      setSearchTerm(event.target.value);
    }

    const getMovies = (API) => {
      fetch(API)
        .then((res) => res.json())
        .then((data) => {
          setMovies(data.results);
        });
    }
    
    return (
      <>
        <form onSubmit={handleOnSubmit}>
            <input 
              className={styles.search} 
              type="search" 
              placeholder="Search..."
              value={searchTerm}
              onChange={handleOnChange}
            />
        </form>
        <div className={styles.container}>
          {movies.length > 0 && 
            movies.map((movie) => 
              <Movie key={movie.id}{...movie} />
            )
          }
        </div>
      </>
    )
}

export default Display
