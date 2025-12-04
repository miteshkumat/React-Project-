import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className="bg-[#212529] flex items-center justify-between px-6 py-4">
        <h3 className='text-2xl uppercase '>Juhi</h3>
        <div className="flex justify-between w-[20%]  " >
         

          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/course'>Course</Link>
          <Link to='/product'>Product</Link>
          
        </div>
      </div>
    </div>
  )
}

export default Navbar