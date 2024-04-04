import React from 'react'
import { useState } from 'react';
import { MdNotificationsActive } from "react-icons/md";
import {HiOutlineSearch} from 'react-icons/hi'
import { BiSolidMessage } from "react-icons/bi";

function Header({showModal}) {

  return (
    <div className='h-14 flex justify-between items-center px-4  shadow-md border-b border-gray-200 '>
     
    <div className='relative ml-2'>
      <HiOutlineSearch fontSize={20} className='text-gray-400 absolute top-1/2 -translate-y-1/2 left-3'/>
      <input type="text" placeholder='Search... '
       className=' text-sm focus:outline-none active:outline-none h-10 w-[24rem] border border-gray-300 rounded-sm px-4 pl-11 pr-4' />
    </div>
    
  <div className='flex justify-between items-center gap-3 mr-2'>
  <div className='p-[10px_16px] bg-blue-600 rounded-lg cursor-pointer mr-6'
  onClick={showModal}>
          Add new
      </div>
  <BiSolidMessage fontSize={30} />
  <MdNotificationsActive fontSize={30} />
  </div>
  </div>

  )
}

export default Header