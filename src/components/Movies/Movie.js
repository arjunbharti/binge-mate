import React from 'react'
import styles from './Movie.module.css'

const IMG_API="https://image.tmdb.org/t/p/w1280";

const Movie = ({ title, poster_path, overview, vote_average }) => {
    return (
        <div className={styles.movie}>
            <img 
                src={poster_path ? IMG_API + poster_path : "https://italianculturalcentre.ca/wp-content/uploads/2018/08/DHbaSYYv_400x400.jpg"} 
                alt={title} 
            />
            <div className={styles.movie__info}>
                <h3>{title}</h3>
            </div>
            <div className={styles.movie__overview}>
                <h2>Overview:</h2>
                <p>{overview}</p>
            </div>
        </div>
    )
}

export default Movie
