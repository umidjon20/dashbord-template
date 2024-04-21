import {Navigate , Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import Dashboard from './Components/Dashboard/Dashboard'
import Layout from './Components/Layout/Layout'
import Users from './Components/Users/Users'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import EditData from './Components/EditDataPage/EditDataPage'
import Support from './Components/Support/Support'
import './App.css'
import fakeData from './mock/students-data.json'

function App() {
const [datas,setData] = useState(fakeData)
const [edit,setEdit] = useState([])

const handleResearch=(e)=>{
let value = e.target.value
  const data = datas.filter((item)=> {

    const {full_name} = item
  if(full_name.toLowerCase().startsWith(value.toLowerCase())){
    return item
  }
})
console.log(data);
}

  return (
    <Routes>
      <Route path={'/'} element={<Navigate to={'/dashboard'} />} ></Route>
      <Route path ='/' element= {<Layout handleResearch={handleResearch}/>} >
          <Route path='/dashboard' element ={<Dashboard/>} />
          <Route path='/users' element ={<Users datas={datas} setData={setData} setEdit={setEdit}/>}></Route>
          <Route path='/users/edit/:id' element ={<EditData edit={edit} />} />
          <Route path='/support' element = {<Support/>}/>
      </Route>
      <Route path={'*'} element={<NotFound/>} ></Route>
      <Route path='/auth-login' element = {<Login/>} />
    </Routes>

 
  )
}

export default App
