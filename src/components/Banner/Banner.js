import React, { useEffect, useState } from 'react'
import {API_KEY} from '../../constants/constants'
import './Banner.css'
import axios from '../../axios'
function Banner() {

  const [movie,setMovie]=useState()
  useEffect(()=>{
      axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&with_genres=10765`).then((response)=>{
        // console.log(response.data.results[19])
        setMovie(response.data.results[19])
      })
  },[])
  return (

    <div    style={{backgroundImage:`url(${movie ? 'https://image.tmdb.org/t/p/original'+movie.backdrop_path : ""})`}} className='banner'>

      <div className='content'>
        {movie ? <h1 className='title'>{movie.original_name}</h1> : <h1>Series name</h1>}

        {movie ? <h4 className='description'>{movie.overview}</h4> : <h4>overview</h4>}

            
        </div>
        <div className='banner_buttons'>
            <button className='button'>Watch Trailer</button>
      </div>
      <div className="fade_bottom">
          
      </div>
    </div>
  )
}

export default Banner
