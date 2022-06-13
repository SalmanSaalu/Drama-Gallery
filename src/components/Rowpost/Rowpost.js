import axios from 'axios'
import React,{useEffect,useState} from 'react'
import { API_KEY } from '../../constants/constants'
import './RowPost.css'
// import Youtube from 'react-youtube'
function RowPost() {
    const [Id,Movies]=useState(['Stranger Things','Halo','Peaky Blinders','tvd'])
  const [genresId,genresMovies]=useState([18])
  const [movies,setMovies]=useState([])
  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&with_genres=${genresMovies(genresId)}`).then((response)=>{
    let data=response.data.results.map((e)=>e.original_name)
    { Id.map((obj)=>{
        // console.log(response.data.results[i])
        if(data.filter(p=>p.includes(obj)).includes(obj))
         {console.log(obj)}

    })
    }
    //   setMovies([movies,{id:response.data.results[0].id}])
    })
},[])

//   const [urlId,setUrlid]=useState('')
//   useEffect(()=>{
//     // axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_network=213`).then(response=>{
//       axios.get(props.url).then(response=>{
//       console.log(response.data)
//       setMovies(response.data.results)
//     }).catch(err=>{
//       // alert('netfork')
//     })
//   },[])
//   const opts = {
//     height: '390',
//     width: '100%',
//     playerVars: {
//       // https://developers.google.com/youtube/player_parameters
//       autoplay: 1,
//     },
//   };
//   const handleMovie=(id)=>{
//     console.log(id)
//     axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
//     // console.log(response.data)
//     if(response.data.results.length!==0){
//       setUrlid(response.data.results[0])
//     }
//     else{
//       console.log('not available')
//     }
//   })
//   }
  return (
    <div className='row'>
        <h2>title</h2>
        <div className='posters'>
          {/* {movies.map((obj)=>

          
            <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallPoster': 'poster'}  src={ `${'https://image.tmdb.org/t/p/original'+obj.backdrop_path}`} alt="" />
            )}
         */}
         <img className='poster' src='https://static.onecms.io/wp-content/uploads/sites/6/2019/04/sn1308a_0414b-2000.jpg' alt='series' />
        </div>
     {/* {urlId &&   <Youtube opts={opts} videoId={urlId.key}/> } */}
    </div>
  )
}

export default RowPost
