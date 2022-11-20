import Link from 'next/link'
import React from 'react'

const MainPage = () => {
  return (
    <div className='text-white text-center'>
<p className='text-7xl mb-6'>Unlimited movies, TV <br /> shows and more.</p>
<p className='text-4xl my-6'>Watch anywhere. Cancel anytime.</p>
<p className='text-2xl my-4'>Ready to watch? Enter your email to create or restart your membership.
</p>
<div>
  <input type="text" placeholder='Email address' className='pr-36 pl-4 mt-4 w-[40rem]  py-6' />
  <Link href='/login'>
  <button className='text-white bg-red-600 px-5 rounded-lg rounded-l-none font-bold py-6'>Get Started </button>
  </Link>
</div>
      </div>
  )
}

export default MainPage
