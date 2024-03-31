import React from 'react'
import { FiUsers , FiUserPlus} from "react-icons/fi"
import { RxDashboard } from "react-icons/rx";
import { HiOutlineCog, HiOutlineQuestionMarkCircle } from "react-icons/hi";




export const DASHBOARD_SIDEBAR_LINKS =[
    {
        key:'dashboard',
        label:'Dashboard',
        path:'/dashboard',
        icon:<RxDashboard />
    },
    {
        key:'users',
        label:'Users',
        path:'/users',
        icon:<FiUsers />
    },
    {
        key:'customer',
        label:'Customer',
        path:'/customer',
        icon:<FiUserPlus />
    },
]
export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
    {
        key:'settings',
        label:'Settings',
        path:'/settings',
        icon:<HiOutlineCog />
    },
    {
        key:'support',
        label:'Help & Support',
        path:'/support',
        icon:<HiOutlineQuestionMarkCircle />
    },
]
