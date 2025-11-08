import React from 'react'
import { Link } from 'react-router-dom'

const NavSignup = () => {
  return (
    <div>
      <nav className='navbar h-20 flex flex-wrap justify-around items-center shadow-xl'>
        <h1 className='h1 text-2xl font-medium'>EdTech</h1>
        <Link to='/signup' className='signupBtn bg-blue-500 text-white block p-2 pr-4 pl-4 rounded-xl'>SignUp</Link>
      </nav>
    </div>
  )
}

export default NavSignup
