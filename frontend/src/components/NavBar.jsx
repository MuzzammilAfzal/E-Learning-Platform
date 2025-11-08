import React  from 'react'
import {Sidebar, X} from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const NavLogin = () => {
        const Navigate = useNavigate();
        const location=useLocation()

        // function loginBtn=()=>{
        //   Navigate("/")
        // }
        


  return (
    // <div>
    //   <nav className='navbar w-full h-20 md:h-15 flex justify-around flex-wrap gap-5 items-center shadow-xl'>
    //     <div className="logo w-[40%]">
    //       <h1 className='h1 text-2xl'>EdTech</h1>
    //     </div>
    //     <div className="loginBtn w-[30%] flex justify-around items-center">
    //       <button className='login bg-blue-500 w-18 h-8 rounded-xl text-white' >Login</button>
    //       <button to='/signin' className='signin bg-blue-500 w-18 h-8 rounded-xl text-white'>SignIn</button>
    //     </div>
    //   </nav>
    // </div>
    <div>
      <nav className='navbar h-20 flex flex-wrap justify-around items-center shadow-xl'>
        <h1 className='h1 text-2xl font-medium'>EdTech</h1>
        {
          location.pathname!="/login" &&  <Link to='/login' className='loginBtn bg-blue-500 text-white block p-2 pr-4 pl-4 rounded-xl'>Login</Link>
        }
        {
          location.pathname=="/login" &&  <Link to='/signup' className='loginBtn bg-blue-500 text-white block p-2 pr-4 pl-4 rounded-xl'>SignUp</Link>
        }
      </nav>
    </div>
  )
}

export default NavLogin
