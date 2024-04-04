import React from 'react'
import FakeData from '../../mock/students-data.json'
import { FiEdit } from "react-icons/fi";
console.log(FakeData);
const users = [
    {
        name:'Amirqulov Umid',
        region:'Qarshi',
        roll:'Dartuchi',
        time:'01/03/2024'
    },
    {
        name:'Amirqulov Umid',
        region:'Qarshi',
        roll:'Dartuchi',
        time:'01/04/2024'
    },
    {
        name:'Amirqulov Umid',
        region:'Qarshi',
        roll:'Dartuchi',
        time:'01/03/2024'
    },
    {
        name:'Amirqulov Umid',
        region:'Qarshi',
        roll:'Dartuchi',
        time:'01/03/2024'
    },
    {
        name:'Amirqulov Umid',
        region:'Qarshi',
        roll:'Dartuchi',
        time:'01/03/2024'
    },
    {
        name:'Amirqulov Umid',
        region:'Qarshi',
        roll:'Dartuchi',
        time:'01/03/2024'
    },
    {
        name:'Amirqulov Umid',
        region:'Qarshi',
        roll:'Dartuchi',
        time:'01/03/2024'
    },
    {
        name:'Amirqulov Umid',
        region:'Qarshi',
        roll:'Dartuchi',
        time:'01/03/2024'
    },
    {
        name:'Amirqulov Umid',
        region:'Qarshi',
        roll:'Dartuchi',
        time:'01/03/2024'
    },
    {
        name:'Amirqulov Umid',
        region:'Qarshi',
        roll:'Dartuchi',
        time:'01/03/2024'
    },
    {
        name:'Amirqulov Umid',
        region:'Qarshi',
        roll:'Dartuchi',
        time:'01/03/2024'
    },
    {
        name:'Amirqulov Umid',
        region:'Qarshi',
        roll:'Dartuchi',
        time:'01/03/2024'
    },
    {
        name:'Amirqulov Umid',
        region:'Qarshi',
        roll:'Dartuchi',
        time:'01/03/2024'
    },
    {
        name:'Amirqulov Umid',
        region:'Qarshi',
        roll:'Dartuchi',
        time:'01/03/2024'
    },
    {
        name:'Amirqulov Umid',
        region:'Qarshi',
        roll:'Dartuchi',
        time:'01/03/2024'
    },
    {
        name:'Amirqulov Umid',
        region:'Qarshi',
        roll:'Dartuchi',
        time:'01/03/2024'
    },
]


export default function TableCom() {
  return (
    <div className=' w-4/5 flex items-center justify-center py-4 border rounded-md shadow-2xl  '>
            <table className=' table w-[98%] '>
       <thead>
        <tr>
            <th>N#</th>
            <th>Full name</th>
            <th>Region</th>
            <th>Role</th>
            <th>Boshlangan vaqti</th>
            <th>Tugash vaqti</th>
            <th>Status</th>
            <th></th>
        </tr>
       </thead>
       <tbody>
            {
                FakeData.map((item)=>{
                    const {id, full_name, region, role, start_time,end_time,is_active} = item
                    return(
                        <tr key={id}>
                            <th>{id}</th>
                            <td>{full_name}</td>
                            <td>{region}</td>
                            <td>{role}</td>
                            <td>{start_time}</td>
                            <td>{end_time}</td>
                            <td className={is_active?'bg-red-500':'bg-green-500'}>{is_active?'Active':'Inactive'}</td>
                            <td className='w-4 rounded ml-3 cursor-pointer hover:bg-gray-300'><FiEdit /></td>
                            
                        </tr>
                    )
                })
            }
       </tbody>
    </table>
    </div>
  )
}
