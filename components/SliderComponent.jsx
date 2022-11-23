import axios from 'axios';
import React, { useEffect, useState } from 'react'
import MovieComponent from './MovieComponent';

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

{movies?.map((movie,id)=>{
    return (
       <MovieComponent movie={movie} id={id}/>
    )
})}
</div>
    </div>
  )
}

export default SliderComponent
