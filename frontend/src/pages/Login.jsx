import React, { useState } from 'react'
import { data, Link, useNavigate } from 'react-router-dom'
const backendUrl=import.meta.env.VITE_BACKEND_URL
import {toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
      const [email,setEmail]= useState("");
      const [psw,setPsw]= useState("");

      const navigate=useNavigate()

      const handleSubmit=async(e)=>{
        e.preventDefault();
        const response = await fetch(`${backendUrl}/user/login`, {
         method: "POST",
         headers: {
          "Content-Type": "application/json",
           },
         body: JSON.stringify({
          email: email,
          password: psw
         })
        });

        if (response.ok) {
          const data = await response.json();
         if(data.token){
            sessionStorage.setItem("token",data.token)
            toast.success(data.message)
            navigate('/')
         }
          } else {
            const data = await response.json();
        console.log("Request Failed:", response.status);
        toast.error(data.message)
         }
        
      }


  return (
    <div>
      
      <section className='section w-full h-full flex flex-col md:flex-row md:items-center'>
        <img src="./login-image.jpg" alt="" className='img h-70 m-auto md:w-[50%] md:h-140 md:mt-10 md:ml-5 md:mr-5'/>
        <div>
          <h1 className='h1 text-center font-medium text-xl mb-5'>Login to continue your learning journey</h1>
            <form onSubmit={handleSubmit} className='form w-full flex flex-col items-center'>
                  <input type="email" placeholder='Email' 
                    onChange={(e)=>{setEmail(e.target.value)}} 
                    className='mail w-[70%] md:w-full border-2 p-3 mb-5 rounded-sm' />
                  <input type="password" placeholder='password' 
                    onChange={(e)=>{setPsw(e.target.value)}} 
                    className='pass w-[70%] md:w-full border-2 p-3 mb-5 rounded-sm' />
                  <input type="submit" value="Continue" className='btn w-[70%] md:w-full h-10 bg-blue-500 rounded-xs text-white text-xl' />
            </form>
            <h2 className='h2 text-center mt-5 md:text-xl'>Don't have an account?
              <span className='span underline ml-1 text-blue-500'><Link to='/signup'>Sign Up</Link></span>
            </h2>
        </div>
      </section>
    </div>
  )
}

export default Login
