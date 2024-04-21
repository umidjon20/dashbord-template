import React from 'react'
import classNames from 'classnames'
import { Link, useLocation } from 'react-router-dom'
import AuthService from '../../services/AuthService'
import { HiDocumentReport ,HiOutlineLogout } from 'react-icons/hi' 
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS } from '../../pages/Navigation'


const  linkClasses = 'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 rounded-sm text-base'

export default function Sidebar() {
  return (
    <div className=' bg-neutral-900 w-60 p-3 flex flex-col text-white shrink-0'>
        
        <div className='flex items-center gap-2 px-1 py-3'>
        <HiDocumentReport 
        style={
            {width:'30px',height:'26px'}
        } />
        <span className='text-neutral-100 text-lg '>Admin panel</span>
        </div>

        <div className='flex-1 py-8 flex flex-col gap-0.5' >
            {/* bu Navigation dan arrayni olib quymoqda link qilib */}
            {DASHBOARD_SIDEBAR_LINKS.map((item)=>(
            <SidebarLink  key={item.key} item={item}/>
            ))}
        </div>

        {/* bu bottom qismi */}
        <div className='flex flex-col gap-0.5 pt-2 border-t border-neutral-700'>
            {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item)=>(
                <SidebarLink  key={item.key} item={item}/>
            ))}
            <div  className={classNames('text-red-500',linkClasses)}>
                <span className='text-xl'>
                    <HiOutlineLogout />
                </span>
                
                {/* bu dashboard dan logout qiladi  */}
                <Link to='/auth-login'
                onClick={()=>{AuthService.logout()}}>
                    Chiqish.
                </Link>
            </div>
        </div>
    </div>
  )
}
// bu funksiya linklarni qaytaradi
function SidebarLink({item}){
    const {path, icon, label}=item

    const {pathname} =useLocation()

    return(
        <Link to={path} className={classNames( pathname === path?'text-white bg-neutral-500':'text-sky-200' ,linkClasses)}>
            <span className='text-xl'>
                {icon}
            </span>
            {label}
        </Link>
    )
}
