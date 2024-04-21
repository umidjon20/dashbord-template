import React, { useEffect,useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import EditCom from '../EditCom/EditCom'
import { inputData } from '../../mock/inputData'

export default function EditData({edit}) {
 const [values,setValues] = useState(null)
    const {id} = useParams()
    useEffect(() => {
        axios.get(`https://reqres.in/api/users/${id}`)
        .then(res => { 
            const {data} = res
            setValues(data)})
        .catch(err => console.log(err))
        
    },[])
    console.log(values);
const navigate = useNavigate()
    const handleSubmit = (e)=>{
        e.preventDefault()
       axios.put(`https://reqres.in/api/users/${id}`,values)
       .then(res => 
        {
            navigate('/users')
        })
       .catch(err => console.log(err))
    }
  return (
    <div className='flex flex-col justify-center w-full h-screen bg-slate-200'>

    <h1 className='text-3xl font-semibold text-center pb-6'>Edit Data</h1>
    <div className='container-handle flex gap-10 justify-between items-center flex-wrap bg-gray-300 shadow-md rounded-md'>
        <div className='flex flex-col gap-2 py-2'>
            <h1 className='text-2xl font-semibold'>User information</h1>
            <div className=''>
                <span className='text-xl text-emerald-900'>Ism familiya</span>
                <h3 className='text-2xl capitalize'>{edit?.full_name}</h3>
            </div>
            <div className=''>
                <span className='text-xl text-emerald-900'>Hudud</span>
                <h3 className='text-2xl capitalize'>{edit?.region}</h3>
            </div>
            <div className=''>
                <span className='text-xl text-emerald-900'>Ish joyi</span>
                <h3 className='text-2xl capitalize'>Qarshi tumani UTR</h3>
            </div>
            <div className=''>
                <span className='text-xl text-emerald-900'>Vazifasi</span>
                <h3 className='text-2xl capitalize'>{edit?.role}</h3>
            </div>
            <div className=''>
                <span className='text-xl text-emerald-900'>Tugash vaqti</span>
                <h3 className='text-2xl capitalize'>{edit?.end_time}</h3>
            </div>
            <div className=''>
                <span className='text-xl text-emerald-900'>Aloqa uchun</span>
                <h3 className='text-2xl capitalize'>{edit?.phone ? '' : '+9987867655'}</h3>
            </div>
        </div>
        <form 
        className='relative flex flex-col w-[50%] h-[60%]  flex-wrap gap-4 '
        onSubmit={handleSubmit}>
        
        {inputData.map((item)=>(
            <EditCom key={item.id} {...item} />
        ))}
        
        <button className='absolute -bottom-10 right-[60px] bg-blue-900 w-[100px] py-3 rounded-md cursor-pointer text-white  font-medium tracking-wider hover:bg-gray-600'>Save</button>
        </form>
        
    </div>
    </div>
  )
}
