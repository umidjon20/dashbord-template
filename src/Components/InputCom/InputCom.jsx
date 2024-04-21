import React from 'react'

export default function InputCom({
    label,
    name,
    type,
    placeholder,
    register}) {
  return (
    
       
            <div className='w-[40%]  '>
                <span className='text-xl font-semibold'>{label}</span>
                <label>
                    <input
                    className=' outline-none w-full  rounded py-2 px-2 border border-none border-b-[1px_solid_red] ' 
                    type={type}
                    name={name}
                    placeholder={placeholder} 
                    autoComplete='off'
                    {...register}/>
                </label>
            </div>
        
    
  )
}
