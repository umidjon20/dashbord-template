import React from 'react'
import { useState } from 'react'

export default function Support() {
    const [message,setMessage] = useState('')
    console.log(message);
  return (
    <div className='w-full  flex justify-center items-center'>
        <div className='container flex flex-col items-center  mt-6'>
            <h1 className='text-3xl font-semibold'>Qo`llab quvvatlash markazi</h1>
            <div>
                <h4 className='mt-5 text-xl text-center tracking-wide font-semibold '>Shikoyat va talablaringizni qoldiring!</h4>
                <textarea 
                className='mt-7 border rounded-lg p-3 outline-none shadow-lg'
                 id="" cols="50" rows="15"
                 onChange={(e)=> setMessage(e.target.value)}></textarea>
            </div>
            <button className='mt-5 w-[500px] bg-blue-900  py-3 rounded-md cursor-pointer text-white  font-medium tracking-wider hover:bg-blue-600'>Yuborish</button>
        </div>
    </div>
  )
}
