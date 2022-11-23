import axios from 'axios'
import Image from 'next/image'
import React, { useState,useEffect } from 'react'
import Logo from '../public/assests/logo.png'
import request from '../components/APIFILE'
import Slider from '../components/Slider'

const home = () => {
  const [header , setHeader] = useState({})
const movie = header[Math.floor(Math.random() * header.length)]
useEffect(()=>{
                axios.get(request.reqUpcoming).then((res)=>setHeader(res.data.results))
},[])

  return (
    <div className='bg-black h-screen w-full'>


      <div className='flex  absolute top-0 left-0 justify-between  w-full h-14'>
        <Image src={Logo} className='w-40 h-40 -mt-4'   />
        <button className='text-white  bg-red-600 mr-16 mt-12  mb-4 pt-2 pb-8  px-5 rounded-xl'>SignOut</button>
      </div>
      <div className='bg-gradient-to-r from-black/80 w-full h-[35rem]  absolute'>

</div>

<div className='absolute top-40 left-20'>

        <h1 className='text-white text-7xl font-bold '>{movie?.title}</h1>
        <div className='mt-8 '>
          <button className='bg-gray-300 rounded-md mr-4  text-black px-2 py-1 '>Play</button>
          <button className='border border-gray-500 text-white bg-transparent px-2 py-1 '>Watch Later</button>
        </div>
        <p className='text-gray-500 my-2'>Released {movie?.release_date}</p>
        <p className='text-white'>{movie?.overview}</p>
</div>
<img src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}` } className=' w-full h-[35rem] '   alt='/'  />

<div className='text-white'>
  <Slider />
</div>





    </div>
  )
}

export default home
