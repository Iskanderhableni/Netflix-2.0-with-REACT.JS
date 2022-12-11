import React, { useEffect, useState } from 'react'
import "./Banner.css";
import axios from "./axios";
import requests from './Requests';

function Banner() {
const [movie, setmovie]=useState([]); 
useEffect(() => {
     async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);
            setmovie(
                 request.data.results[Math.floor(Math.random() * request.data.results.length-1)

                 ]
                );
               return request;
     }
             fetchData();
},[]);console.log(movie);
     



    function minimize(string , n){
            return string?.length>n? string.substring(0,n-1)+'...' : string;
    }
  return (
    <div className="banner" style={{
        backgroundSize:"cover",
        backgroundImage: `URL("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center"
    }}>

    <div className='banner_content'>
        <h1 className='banner_title'>{movie?.name}</h1>
    
    <div className='buttons'>
        <button className='banner_button'>Play</button>
        <button className='banner_button'>My List</button>
    </div>
    <h1 className='banner_description'> {minimize(movie?.overview,150)}</h1>  
    </div>
    <div className='banner_effect'></div>
    </div>
  )
}

export default Banner