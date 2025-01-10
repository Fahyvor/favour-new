import { useState } from 'react'
import ElreyLogo  from '../assets/elreyLogo.png'
import { FaBars } from 'react-icons/fa'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi'
import { MdOutlineCancel } from "react-icons/md";
import { useNavigate } from 'react-router-dom'
// import { RiServiceLine } from 'react-icons/ri'

const Nav = () => {
  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useState('#')
  const [showNav, setShowNav] = useState(false)

  const handleNavClick = () => {
    setShowNav(!showNav);
  }
  return (
    <div className='w-full flex px-11 my-5 backdrop-blur bg-black text-white md:px-8 items-center drop-shadow-lg
    lg:justify-normal md:justify-normal justify-between lg:py-1 lg:mb-4 py-3 fixed mt-0 z-50 '>
     <a href='/' className='cursor-pointer w-[35%] md:w-[25%]'>
      <div className='nav_left_logo flex gap-4 lg:m-3 md:m-3 m-0 lg:my-0 md:my-0 my-4 cursor-pointer items-center justify-center' onClick={() => navigate('/')}>
        <img src={ElreyLogo} alt='Elrey' className='lg:w-[20%] w-[30%] md:w-[25%] filter invert'/>
        {/* <h2 className='text-xl tracking-wider'>Elrey</h2> */}
      </div>
     </a>

     <div className='nav_right_links lg:flex md:flex gap-11 m-3 lg:justify-end w-[65%] md:w-[55%] items-center hidden'>
      <a href="/" className='# hover:font-bold'
          >Home</a>
      <a href="/about" className='#about hover:font-bold'>About</a>
      <a href="/portfolio" className="hover:font-bold">Portfolio</a>
      <a href="/contact" className="hover:font-bold" >Contact</a>

      <div className='bg-dark-favour text-white p-3 whitespace-nowrap px-5 rounded-lg cursor-pointer hover:bg-white hover:text-black' onClick={() => navigate('/contact')}>
        <p>Let&apos;s Talk</p>
      </div>
     </div>

     <div className='mobile_nav_sectionlg:hidden md:hidden flex'>
      {showNav ? <MdOutlineCancel size={35} onClick={handleNavClick} /> : <FaBars size={35} onClick={handleNavClick} /> }
      {
        showNav ? (
          <div className='flex flex-col gap-6 items-center absolute backdrop-blur bg-black bg-opacity-90 px-4 right-4 py-12 border-[1px] border-dark-favour rounded-full top-24'>
          <a href="/"
           className={activeNav === '#' ? 'active  text-white p-2 rounded-full' : ''}><AiOutlineHome size={30}/></a>
          <a href="/portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active  text-white p-2 rounded-full' : ''}><AiOutlineUser size={30}/></a>
          <a href="/about" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active  text-white p-2 rounded-full' : ''}><BiBook size={30}/></a>
          <a href="/contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active  text-white p-2 rounded-full' : ''}><BiMessageSquareDetail size={30}/></a>
          </div>
        ) : null
      }
     </div>
    </div>
  )
}

export default Nav