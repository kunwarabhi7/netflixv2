import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import MainPage from '../components/MainPage'
import NavBar from '../components/NavBar'


export default function Home() {
  return (
    <div className='w-full h-full'>
      <div className='responsive w-full h-full'>

    <Image alt='/' src='https://assets.nflxext.com/ffe/siteui/vlv3/5aecc44d-2a1f-4313-8399-98df20908b64/4d9d5abf-07d8-4dd6-9899-a96b902312ee/IN-en-20221114-popsignuptwoweeks-perspective_alpha_website_large.jpg' layout='fill'  />
      </div>
    <div className='bg-black/60 absolute top-0 left-0  w-full h-screen'>
<NavBar />        
<MainPage />    
        </div>    
      
    </div>
  )
}
