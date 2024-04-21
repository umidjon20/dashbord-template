import React from 'react'
import ReactPaginate from 'react-paginate';
import { useState } from 'react';
import { FiEdit } from "react-icons/fi";

import {Link} from'react-router-dom';

export default function TableCom({data,editData}) {

const [currentPage,setCurrentPage] = useState(1)

const postPerPage = 10
const lastIndex = currentPage * postPerPage
const firstIndex = lastIndex - postPerPage
const currentPost = data.slice(firstIndex,lastIndex)
const totalPage = Math.ceil(data.length / postPerPage)

const pageNumbers = [...Array(totalPage+1).keys()].slice(1,4) 

const ChangePages = (e)=>{
 
    setCurrentPage(e)
}
const nextPage = ()=>{
    if(currentPage !== totalPage){
        setCurrentPage(currentPage+1)
}
}
const prePage = ()=>{
if(currentPage !== 1){
    setCurrentPage(currentPage-1)

}
}
return (
    <div className= ' flex flex-col items-center justify-center   border rounded-md shadow-2xl mt-7'>
            <table >
       <thead>
        <tr>
            <th>N#</th>
            <th>Ism Familiya</th>
            <th>Hudud</th>
            <th>Vazifasi</th>
            <th>Boshlangan vaqti</th>
            <th>Tugash vaqti</th>
            <th>Holati</th>
            <th></th>
        </tr>
       </thead>
       <tbody>
       
            {
                currentPost.map((item,i)=>{
                    const { id,full_name, region, role, start_time,end_time,is_active} = item
                    return(
                        <tr key={id}>
                            
                            <th>{i+1}</th>
                            <td>{full_name}</td>
                            <td>{region}</td>
                            <td>{role}</td>
                            <td>{start_time}</td>
                            <td>{end_time}</td>
                            <td className={is_active?
                                'bg-green-500':'bg-red-500'}>
                                {is_active?'Active':'Inactive'}
                            </td>
                            <Link to={`/users/edit/${id}`}>
                            <td
                             onClick={()=>editData(id)
                            }

                            className='w-4 rounded ml-3 
                            cursor-pointer hover:bg-gray-300'>

                                <FiEdit />
                            </td>
                                </Link>
                            
                        </tr>
                        
                    )
                })
            }
       </tbody>
    </table>
    <nav>

        <ul className='flex gap-4 my-4'>
            <li 
            onClick={prePage} 
            className='cursor-pointer border px-4 py-2 rounded-md hover:bg-blue-500'>
                <span>Orqaga</span>
            </li> 
            <li className='text-xl'>...</li>
                {pageNumbers.map((number,i)=>(
                    <li className = {`cursor-pointer border px-4 py-2 rounded-md  ${currentPage === number ? 'bg-blue-500 text-white' : ''}`} key={i}
                    onClick={()=>ChangePages(number)}>
                        <a href="#" 
                        >{number}</a>
                    </li>
                )
                    
                )} 

                <li className='text-xl'>...</li>
            <li onClick={nextPage}
             className='cursor-pointer border px-4 py-2 rounded-md hover:bg-blue-500'>
                <span> Keyingisi </span>
            </li>           
        </ul>
          
    </nav>
   
    </div>
  )

 
}
