import React from 'react'
import { Link } from 'react-router-dom'



const Navbar = () => {
  return (
    
    <>
    
    <nav className='w-full h-[80px] flex flex-wrap items-center justify-between py-6 px-16 max-sm:justify-center max-sm:py-4 max-sm:gap-2'>
      <ul className='text-3xl'>
        <li className='hover:cursor-pointer'>

          <Link to={'/'}>
          <span className='hover:text-blue-200'>Logo</span>
          <span className='hover:text-blue-200'>Here</span>
          .
          </Link>
          </li>
      </ul>
      <ul className='flex flex-wrap justify-center text-xl gap-8 max-sm:text-lg max-sm:gap-5'>
        <li className='hover:cursor-pointer hover:text-blue-300'>
          <Link to={'/'}>Home</Link></li>
        <li className='hover:cursor-pointer hover:text-blue-300'>
          <Link to={'/services'}>Services</Link></li>
        <li className='hover:cursor-pointer  hover:text-green-300'>
          <Link to={'/contact'}>Contact</Link></li>
      </ul>
    </nav>

    </>
    
  )
}

export default Navbar