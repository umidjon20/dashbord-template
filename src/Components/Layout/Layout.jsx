import React, {useEffect,useState} from 'react'
import {Outlet,useNavigate } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'
import Header from '../../pages/Header'
import Modal from '../../pages/Modal'
export default function Layout() {
  // const [loading, setLoading] = useState(true)
  const [open,setOpen] = useState(false)

const showModal = () =>{
    setOpen(true)
}
const hideModal=()=>{
  setOpen(false)
}
  const navigate = useNavigate()
  useEffect(()=>{
    if(!localStorage.getItem('accessToken')){
      navigate('/auth-login')
    }
    
  },[])

  return (
  <>
  <div className='flex flex-row  bg-neutral-100 h-screen w-screen overflow-hidden'>
  <Sidebar />
  <div className=' flex-1 p-4'>
      <Header showModal={showModal} />
  <div className='relative flex  h-full'>{<Outlet/>}
      {
        open && (
          <div className='absolute top-0 left-0 right-0 bottom-0'>
            <Modal hideModal={hideModal} />
          </div>
        )
      }
  </div>
  </div>
</div>
  </>
  )
}
