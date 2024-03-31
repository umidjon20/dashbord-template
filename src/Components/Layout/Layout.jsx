import React, {useEffect,useState} from 'react'
import {Outlet,useNavigate } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'
import Header from '../../pages/Header'

export default function Layout() {
  // const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  useEffect(()=>{
    if(!localStorage.getItem('accessToken')){
      navigate('/auth-login')
    }
    
  },[])

  return (
  <>
  <div className='flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden'>
  <Sidebar />
  <div className='flex-1                              '>
      <Header />
  <div>{<Outlet/>}</div>
  </div>
</div>
  </>
  )
}
