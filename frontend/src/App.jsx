import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import Blog from './components/pages/Blog'
import Detail from './components/pages/Detail'
import Login from './components/pages/Login'
import Register from './components/pages/Register'


function App() {
 

  return (
    <>
      <BrowserRouter>
        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/blogs' element={<Blog />} />
          <Route path='/detail' element={<Detail />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
