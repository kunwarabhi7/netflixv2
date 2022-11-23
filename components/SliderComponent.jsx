import axios from 'axios';
import React, { useEffect, useState } from 'react'

const SliderComponent = (props) => {
    const [movies,setMovies]= useState([])
    const {title,fetchUrl} = props;

    useEffect(()=>{
axios.get(fetchUrl).then((res)=>setMovies(res.data.results))
    },[fetchUrl])



  return (
    <div className='bg-black'>
<h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
<div className='relative items-center overflow-x-scroll scroll-smooth scrollbar-hide whitespace-nowrap'>

{movies?.map((movie)=>{
    return (
        <div key={movie.id} className='w-40 sm:w-50 md:w-60 lg:w-70 cursor-pointer relative p-2 inline-block'>
<img src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}` }    alt='/'  />
        </div>
    )
})}
</div>
    </div>
  )
}

export default SliderComponent
