import Image from 'next/image'
import Logo from '../public/assests/logo.png'

const login = () => {
  return (
    <div className='w-full h-full'>
<Image src='https://assets.nflxext.com/ffe/siteui/vlv3/5aecc44d-2a1f-4313-8399-98df20908b64/4d9d5abf-07d8-4dd6-9899-a96b902312ee/IN-en-20221114-popsignuptwoweeks-perspective_alpha_website_large.jpg' width={1640} height='800'  />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-screen '>
        </div>
        <Image src={Logo} width='250' height={100} className='absolute top-0 left-10'  />
        <div className='absolute bg-black/75  w-[450px] h-[600px] left-[36rem] top-40 mx-auto text-white'>
            <p className='ml-16 mt-8 text-3xl text-white'>Sign In</p>
            <div className='flex flex-col m-8 mb-4 '>

            <input type="text" placeholder='Email or phone number' className='mb-8 bg-gray-700 p-3 pr-8 mx-auto w-80 rounded-lg text-white' />
            <input type="text" placeholder='Password' className='mb-8 bg-gray-700 p-3 pr-8 text-white rounded-lg w-80 mx-auto' />
            </div>
            <button className='bg-red-500 text-white font-bold rounded-xl w-80 h-12 -pt-8 ml-16'>Sign In </button>
      <br/>
      <div className='flex justify-between p-4 '>
<div className='ml-12'>

        <input type='checkbox' />
        <label>Remember me</label>
</div>
        <p className='mr-14'>Need Help</p>
      </div>
      <p className='text-gray-500 ml-14'>New to Netflix ? <span className='text-white ml-1'>Sign up now.</span></p>
      <p className='text-gray-500 ml-14'>This page is protected by Google reCAPTCHA to <br/> ensure you're not a bot. <span className='text-blue-500'>Learn more.</span></p>
        </div>
    </div>
  )
}

export default login
