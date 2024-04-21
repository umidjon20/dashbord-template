import React from 'react'
import { useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import InputCom from '../Components/InputCom/InputCom';
import { inputData } from '../mock/inputData';
export default function Modal({hideModal,
    onSubmit,register,handleSubmit}) {
    
        const textInput = React.useRef();
        console.log(textInput.current);
  return (
    <>
    <div className=' py-10 flex h-full justify-center  bg-gradient-to-b from-slate-400 to-slate-300 backdrop-blur-md opacity-90'>
        <div>
            <RxCross2 fontSize={26}
            className='absolute top-4 right-4 cursor-pointer' onClick={hideModal}/>
        </div>
        <form  
        className=' w-[50%] h-[70%] flex flex-wrap rounded-md justify-center items-center bg-blue-600 gap-5 mt-7'
        onSubmit={handleSubmit(onSubmit)}>

          {inputData.map((input)=>(
            <InputCom 
            key={input.id}
             {...input} 
             register={{...register(input.name)}} />
          ))}
            <div className='flex w-full justify-center gap-6 pt-4 pb-4'>
                <button 
                onClick={hideModal}
                className='bg-blue-900  w-[100px] py-3 rounded-md cursor-pointer text-white  font-medium tracking-wider hover:bg-gray-600' >Cancel</button>
                <button
                className='bg-blue-900 w-[100px] py-3 rounded-md cursor-pointer text-white  font-medium tracking-wider hover:bg-gray-600'
                type='submit'>Add</button>
            </div>
        </form>
          
    </div>
    
    
  </>
  )
}
