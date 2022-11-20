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
            <p>Sign In</p>
            <div className='flex flex-col m-8  '>

            <input type="text" placeholder='Email or phone number' className='mb-8 bg-gray-500 p-3 pr-8 rounded-lg text-white' />
            <input type="text" placeholder='Password' className='mb-8 bg-gray-500 p-3 pr-8 text-white rounded-lg' />
            </div>
        </div>
    </div>
  )
}

export default login
