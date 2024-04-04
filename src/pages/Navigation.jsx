import React from 'react'
import { FiUsers } from "react-icons/fi"
import { RxDashboard } from "react-icons/rx";
import { BsTable } from "react-icons/bs";
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
        key:'table',
        label:'Table',
        path:'/table',
        icon:<BsTable />
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
