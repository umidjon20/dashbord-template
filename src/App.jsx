import {Navigate , Route, Routes } from 'react-router-dom'

import Dashboard from './Components/Dashboard/Dashboard'
import Layout from './Components/Layout/Layout'
import Users from './Components/Users/Users'
import Customer from './Components/Customer/Customer'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import './App.css'

function App() {


  return (
    <Routes>
      <Route path={'/'} element={<Navigate to={'/dashboard'} />} ></Route>
      <Route path ='/' element= {<Layout/>} >
          <Route path='/dashboard' element ={<Dashboard/>} />
          <Route path='/users' element ={<Users/>} />
          <Route path='/customer' element ={<Customer/>} />
      </Route>
      <Route path={'*'} element={<NotFound/>} ></Route>
      <Route path='/auth-login' element = {<Login/>} />
    </Routes>

 
  )
}

export default App
