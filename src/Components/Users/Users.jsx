import React from 'react'
import { useState } from 'react';
import { useForm } from "react-hook-form"
import TableCom from '../TableCom/TableCom'
import Modal from '../../pages/Modal'

export default function Users({datas,setData,setEdit}) {
  const {register,handleSubmit}=useForm()

  const [open,setOpen] = useState(false)
  const editData = (id) => {
    datas.map((item) => {
    if (item.id === id) {
      setEdit(item)
    }  
    })
  }
  const onSubmit=(data)=>{
    setData([data,...datas])
    setOpen(false)  
  }
  const showModal = () =>{
    setOpen(true)
}
const hideModal=()=>{
  setOpen(false)
}
  return (
    <div className='relative w-full container-handle flex flex-col justify-center items-center gap-2'>
       <div className='flex justify-between items-center w-[80%] h-16 mt-4 bg-slate-300 rounded '>
        <h2 className='text-2xl font-semibold ml-4'>Foydalanuvchi ma`lumotlari</h2>
       <div className='p-[10px_16px] bg-blue-700 rounded-lg cursor-pointer mr-6 hover:bg-green-500'
        onClick={showModal}>
              Qo'shish
          </div>
       </div>
      <TableCom data={datas}
      editData={editData}/>
            {
        open && (
          <div className='w-[100%] absolute top-0 left-0 right-0 bottom-0'>
            <Modal 
            hideModal={hideModal} 
            onSubmit={onSubmit}
            register={register}
            handleSubmit={handleSubmit}

            />
          </div>
        )
      }
    </div>
  )
}
