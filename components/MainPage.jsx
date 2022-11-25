import Link from 'next/link'
import React from 'react'

const MainPage = () => {
  return (
    <div className='text-white text-center'>
<p className='md:text-7xl text-3xl mb-6'>Unlimited movies, TV  shows and more.</p>
<p className='md:text-4xl text-xl my-6'>Watch anywhere. Cancel anytime.</p>
<p className='md:text-2xl  my-4'>Ready to watch? Enter your email to create or restart your membership.
</p>
<div>
  <input type="text" placeholder='Email address' className='pr-32 pl-4 mt-4 md:w-[40rem] w-64 my-4 md:my-0  py-3 md:py-6' />
  
  <Link href='/login'>
  <button className='text-white bg-red-600 md:px-5 rounded-md rounded-l-none font-bold md:py-6 px-5 py-4   '>Get Started </button>
  </Link>
</div>
      </div>
  )
}

export default MainPage
