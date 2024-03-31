import React from 'react'
import { MdNotificationsActive } from "react-icons/md";
import {HiOutlineSearch} from 'react-icons/hi'
function Header() {
  return (
    <div className='flex justify-between items-center py-2 sticky top-0  z-10 shadow-md border-b border-gray-200 '>
    <div className='relative ml-2'>
      <HiOutlineSearch fontSize={20} className='text-gray-400 absolute top-1/2 -translate-y-1/2 left-3'/>
      <input type="text" placeholder='Search... '
       className=' text-sm focus:outline-none active:outline-none h-10 w-[24rem] border border-gray-300 rounded-sm px-4 pl-11 pr-4' />
    </div>
  <div className='flex justify-between items-center gap-3 mr-2'>
  <MdNotificationsActive fontSize={30} />

  </div>
  </div>

  )
}

export default Header