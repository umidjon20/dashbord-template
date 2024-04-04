import React from 'react'
import { useState } from 'react';
import { RxCross2 } from "react-icons/rx";
export default function Modal({hideModal}) {

  return (
    <>
    <div className=' py-10 flex h-screen justify-center items-center bg-gradient-to-b from-slate-200 to-slate-300 backdrop-blur-md'>
        <form  
        className=' w-[60%]  flex flex-col rounded-md items-center  bg-gradient-to-b from-blue-500 to-cyan-600 z-10'>
            <div className='flex w-full justify-end  cursor-pointer mt-1 -ml-2'
            onClick={hideModal}>
            <RxCross2 fontSize={25}/>
            </div>
            <div className='flex flex-col gap-5 w-[90%]' >
                <div className='pt-4'>
                    <div className='flex flex-col pt-4 '>
                        <span className='py-3 font-semibold tracking-wider'>Fullname</span>
                        <label>
                            <input type="text"
                            className=' outline-none w-full rounded py-2 px-2' />
                        </label>
                    </div>
                    <div className='flex flex-col pt-4'>
                        <span className='py-3 font-semibold tracking-wider'>Region</span>
                        <label>
                            <input type="text" 
                            className=' outline-none w-full rounded py-2 px-2' />
                        </label>
                    </div>
                </div>
                <div>
                    <div className='flex flex-col'>
                        <span className='py-3 font-semibold tracking-wider'>Role</span>
                        <label>
                            <input type="text"
                            className=' outline-none w-full rounded py-2 px-2' />
                        </label>
                    </div>
                    <div className='flex flex-col'>
                        <span className='py-3 font-semibold tracking-wider'>Created AT</span>
                        <label>
                            <input type="text"
                            className=' outline-none w-full rounded py-2 px-2' />
                        </label>
                    </div>

                </div>

            </div>
            <div className='flex gap-6 pt-4 pb-4'>
                <button 
                className='bg-blue-700  w-[100px] py-3 rounded-md cursor-pointer text-white  font-medium tracking-wider hover:bg-blue-600' >Cancel</button>
                <button
                className='bg-blue-700 w-[100px] py-3 rounded-md cursor-pointer text-white  font-medium tracking-wider hover:bg-blue-600'>Add</button>
            </div>
        </form>
    </div>
    
    
  </>
  )
}
