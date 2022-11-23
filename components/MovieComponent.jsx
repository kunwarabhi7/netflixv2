import React, { useState } from 'react'
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai'

const MovieComponent = ({movie,id}) => {
    const [like , setLiked] = useState(false)

    const movieLike = () => [
        setLiked(!like)
    ]

  return (
    <div key={id} className='w-40  sm:w-50 md:w-60 lg:w-70 cursor-pointer relative p-2 inline-block'>
<img src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}` } className=''   alt='/'  />
<div className='w-full h-full bg-black/80 absolute top-0 left-0 opacity-0 hover:opacity-100 '>
    <p className='text-white absolute flex justify-center items-center h-full w-full  white-space-normal text-xs md:text-sm font-bold  text-center '>{movie?.title}</p>
    <p className='top-4 left-4 absolute' onClick={movieLike}>
        {like ? <AiFillHeart size={20}/> :  <AiOutlineHeart size={20}  />}
        
        </p>
</div>
        </div>
  )
}

export default MovieComponent;