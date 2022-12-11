import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Error404, Error500, Home, Login, Register, Help, Profile, LoginAdmin } from '../../pages'

const index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/error404" element={<Error404 />} />
        <Route path="/error500" element={<Error500 />} />
        <Route path="/" element={<Home />} />
        <Route path="/help" element={<Help />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login/admin" element={<LoginAdmin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default index
