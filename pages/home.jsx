import axios from 'axios'
import Image from 'next/image'
import React, { useState,useEffect } from 'react'
import Logo from '../public/assests/logo.png'
import request from '../components/APIFILE'

const home = () => {
  const [header , setHeader] = useState({})

useEffect(()=>{
                axios.get(request.reqUpcoming).then((res)=>setHeader(res.data.results[0]))
},[])
console.log(header)

  return (
    <div className='bg-black h-screen w-full'>


      <div className='flex  absolute top-0 left-0 justify-between  w-full h-14'>
        <Image src={Logo} className='w-40 h-40'   />
        <button className='text-white  bg-red-600 mr-16 mt-12  mb-4 pt-2 pb-8  px-5 rounded-xl'>SignOut</button>
      </div>
<img src={`https://image.tmdb.org/t/p/w500/${header.backdrop_path}` } className=' w-full h-80 '   alt='/'  />





    </div>
  )
}

export default home
