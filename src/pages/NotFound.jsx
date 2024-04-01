import React from 'react'
import { Link } from 'react-router-dom'
export default function NotFound() {
  return (
    <div className='bg-gray-900 h-screen max-w-screen flex flex-col justify-center items-center gap-[60px] '>
      <div className=' w-[100%] m-[0_auto] text-8xl font-bold flex justify-center items-center gap-3'>
        <p className='text-white first-of-type:animate-[fall_1s_linear] -rotate-[20deg]'>4</p>
        <p className=' text-blue-300 opacity-0 even:animate-[bounce_1.2s_1.8s_linear_forwards]'>0</p>
        <p className='text-white last-of-type:animate-[fall_1.8s_linear] rotate-[8deg]  '>4</p>
      </div>
      <div className=' text-2xl font-bold p-[0_30px] text-white'>Page Not Found </div>
      <p className=' text-xl text-center text-gray-500'
      >We can't seem to find that page.It might have benn removed or doesn't exist anymore</p>
      <Link to='/dashboard'>
      <button className='p-[10px_30px] border-none outline-none rounded-2xl bg-blue-500 text-white'>Go Home</button>
      </Link>
    </div>
  )
}
