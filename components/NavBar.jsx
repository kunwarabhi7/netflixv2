import Image from 'next/image'
import Logo from '../public/assests/logo.png'

const NavBar = () => {
  return (
    <div className='h-[180px] w-full flex justify-between'>
<Image src={Logo} height='45' width='167'/>
<div className='text-white'>
    <button>Language</button>
    <button>SignIN</button>
</div>
    </div>
  )
}

export default NavBar
