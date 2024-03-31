import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BiSolidUserDetail } from "react-icons/bi";

import AuthService from '../services/AuthService';


export default function Login() {

    const [email , setEmail] =useState('')
    const [password , setPassword] =useState('')
    const [errorMessage,setErrorMessage] = useState('')

    

    const navigate = useNavigate()

    const handleSubmit =(e)=>{
      e.preventDefault()
      AuthService.login(email,password).then((data)=>{
        if(data){
          navigate('/')
        }else{
         
          setErrorMessage('Email or password incorrect!')
        }
      })

    } 



  return (
    <div className='flex justify-center items-center h-screen bg-indigo-600'>
        <div className='w-96 p-6 shadow-lg bg-white rounded-md' >
            <div className='flex justify-center items-center gap-2'>
            <BiSolidUserDetail fontSize={35} />
            <h1 className='text-3xl font-semibold'>Login</h1>
            </div>
            <hr className='mt-3'/>
            <form action="#"
            autoComplete='off'
            onSubmit={handleSubmit}>
              <div className='mt-3'>
                  <label htmlFor="email" className='block text-base mb-2' >Email</label>
                  <input type="text" 
                  id='email' 
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                  }}
                  placeholder='example@gmail.com'
                  className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600' 
                  />
              </div>
              <div className='mt-3'>
                  <label htmlFor="password" className='block text-base mb-2 ' >Password</label>
                  <input type="password" 
                  id='password' 
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                  }}
                  placeholder='Enter password'
                  className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600'
                  autoComplete='off'/>
              </div>
              {errorMessage && (<p className='text-red-600 mt-3 text-center'>{errorMessage}</p>)}
               <div className='mt-5'>
                <button 
                    type='submit'
                    className='border-2 border-indigo-700 bg-indigo-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold transition-colors'
                    >
                      Login
                    </button>
              </div>   
            </form>
        </div>
    </div>
  )
}
