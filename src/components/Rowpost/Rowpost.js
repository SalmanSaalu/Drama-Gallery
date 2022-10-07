import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { API_KEY } from '../../constants/constants'
import './RowPost.css'
import Youtube from 'react-youtube'

function RowPost(props) {
  const [Id, Movies] = useState(['Locke & Key','스위트홈','Supernaturals','Game of Thrones', 'Lost', 'The Walking Dead', 'Fear the Walking Dead', 'Prison Break', 'Stranger Things', '12 Monkeys', 'Lost in Space', 'The Last Kingdom', 'The 100', 'Vikings', 'Banshee', 'The Vampire Diaries', 'The Originals', 'Legacies', '13 Reasons Why', 'Teen Wolf', '오징어 게임', 'All of Us Are Dead', '해피니스', 'The Haunting of Hill House', 'Attack on Titan', 'Death Note', '킹덤', 'Alice in Borderland', 'Money Heist'])
  const [movies, setMovies] = useState([])
  const [seasons, setSeasons] = useState([])
  const [cond,setCond]=useState(false)
  const [urlId,setUrlid]=useState('')

  useEffect(() => {


            {
              Id.map((obj)=>{
                axios.get(`https://api.themoviedb.org/3/search/tv?query=${obj}&api_key=${API_KEY}`).then((response) => {
                      let t=response.data.results.filter(t=>t.original_name===obj)[0]
                      setMovies(w=>[...w,t?t:response.data.results[0] ])
                })
              })
              
            }


  }, [])

    const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        autoplay: 1,
      },
    };
    const handleMovie=(id)=>{
          
          axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}`).then((response) => {
            let k=response.data.seasons.filter((ob)=>ob.name!=='Specials')
            setSeasons(k)
            setCond(true)
          axios.get(`https://api.themoviedb.org/3/tv/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
            if(response.data.results.length!==0){
              setUrlid(response.data.results[0])
             
              props.data(response.data.results[0])
            }
            else{
              console.log('not available')
            }
          })
  
          })
          
        }

  // console.log(seasons)

  return (
    <div>
    <div className='row'>
      <h2>Watched</h2>
      <div className='posters'>

         { movies.map((obj)=>
         <div>
          <h5>{obj.name}</h5>
          <img className='poster' onClick={()=>handleMovie(obj.id)}  src={ `${'https://image.tmdb.org/t/p/original'+obj.backdrop_path}`}  alt='series' />
        </div>
         )}

          


      </div>
    </div>
    {cond &&
    <div className='row'>
      {/* <Youtube opts={opts} videoId={urlId.key}/> */}
      <h2>Seasons</h2>
      <div className='posters'>

         {seasons.map((obj)=>
         <div>
            <h5>{obj.name}</h5>
            <img className='poster'  src={ `${'https://image.tmdb.org/t/p/original'+obj.poster_path}`}  alt='series' />
          </div>
         )}
        
         

          


      </div>
    </div>
    }
    </div>
  )
}

export default RowPost
