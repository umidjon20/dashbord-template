import React from 'react'

export default function NotFound() {
  return (
    <div className='bg-gray-900 h-screen max-w-screen-md flex flex-col justify-center items-center gap-9 m-[0_10px]'>
      <div className=' w-[100%] m-[0_auto] text-8xl font-bold flex justify-center items-center gap-3'>
        <p className='text-white first-of-type:animate-[fall_1s_linear] -rotate-[20deg]'>4</p>
        <p className=' text-blue-300 opacity-0 even:animate-[bounce_1.2s_1.8s_linear_forwards]'>0</p>
        <p className='text-white last-of-type:animate-[fall_1.8s_linear] rotate-[8deg] pt-10 '>4</p>
      </div>
      <div className=' text-2xl font-bold p-[0_30px]'>Page Not Found </div>
    </div>
  )
}
