import Image from 'next/image'
import Logo from '../public/assests/logo.png'

const NavBar = () => {
  return (
    <div className='h-[180px] m-4 w-full flex justify-between'>
        <div>

<Image src={Logo} height='45' width='167'/>
        </div>
<div className='text-white mr-16'>
    <button className='bg-transparent border  border-white py-2 px-5 mr-8' >Language</button>
    <button className='bg-red-700 text-white rounded-xl py-3 h-12 w-18  px-6 cursor-pointer'>Sign In</button>
</div>
    </div>
  )
}

export default NavBar
