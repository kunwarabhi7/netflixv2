import Image from 'next/image'
import React from 'react'
import Logo from '../public/assests/logo.png'
const home = () => {
  return (
    <div className='bg-black h-screen w-full'>
      <div className='flex justify-between w-full h-14'>
        <Image src={Logo} className='w-40 h-40'  />
        <button className='text-white  bg-red-600 mr-16 mt-12  mb-4 pt-2 pb-8  px-5 rounded-xl'>SignOut</button>
      </div>

    </div>
  )
}

export default home
