import React, {useEffect,useState,useRef} from 'react'
import {Outlet,useNavigate } from 'react-router-dom'

import Sidebar from '../Sidebar/Sidebar'
import Header from '../../pages/Header'

// import Datas from '../../mock/students-data.json'
export default function Layout({handleResearch}) {
  
 
  // const [datas,setData] = useState(Datas)



  const navigate = useNavigate()
  useEffect(()=>{
    if(!localStorage.getItem('accessToken')){
      navigate('/auth-login')
    }
    
  },[])

  return (
  <>
  <div className='flex  bg-neutral-100 h-screen w-screen overflow-hidden'>
  <Sidebar />
  <div className=' flex-1 p-4'>
      <Header handleResearch={handleResearch} />
  <div className=' flex flex-wrap '>{<Outlet />}

  </div>
  </div>
</div>
  </>
  )
}
