import React, { useEffect, useState } from 'react'
import {API_KEY} from '../../constants/constants'
import './Banner.css'
import axios from '../../axios'
import YouTube from 'react-youtube'
function Banner(props) {

  const [movie,setMovie]=useState()
  useEffect(()=>{
      axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&with_genres=10765`).then((response)=>{
        // console.log(response.data.results)
        setMovie(response.data.results[17])
      })
  },[])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <div>
    {props.data ? 
        <YouTube opts={opts} videoId={props.data.key} className='bannervideo'/> : 
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
      </div>}
      
    </div>
  )
}

export default Banner
