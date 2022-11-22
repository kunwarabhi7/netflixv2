import Image from 'next/image'
import Logo from '../public/assests/logo.png'
import {GiEarthAmerica} from 'react-icons/gi'
import {IoMdArrowDropdown} from 'react-icons/io'
import Link from 'next/link'

const NavBar = () => {
  return (
    <div className='h-[180px] m-4 w-full bg-transparent flex justify-between'>
        <div>

<Image alt='/' src={Logo} height='45' width='167' className='block cursor-pointer '/>
        </div>
<div className='text-white mt-5 mr-24'>
    
    <button className='bg-transparent border  border-white py-2 px-5 mr-8' >
       <div className='flex items-center'>
         <GiEarthAmerica/> English <IoMdArrowDropdown/>
        </div>
        </button>
        <Link href='login'>
    <button className='bg-red-700 text-white font-bold rounded-lg py-3 h-12 w-18  px-8 cursor-pointer'>Sign In</button>
        </Link>
</div>
    </div>
  )
}

export default NavBar
