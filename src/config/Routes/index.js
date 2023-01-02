import React from 'react'
import { 
   BrowserRouter,
   Routes,
   Route 
} from 'react-router-dom'
import { 
   Error404,
   Error500,
   Home,
   Login,
   Register,
   Help,
   Profile,
   LoginAdmin,
   Admin,
   Booking,
   ResetPassword,
   NotificationsPage,
   ForgotPassword,
   Destination,
} from '../../pages'

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
        <Route path="/admin" element={<Admin />} />
        <Route path="/booking" element={<Booking/>} />
        <Route path="/reset" element={<ResetPassword/>} />
        <Route path="/reset" element={<ResetPassword/>} />
        <Route path="/forgot" element={<ForgotPassword/>} />
        <Route path="/notification" element={<NotificationsPage/>} />
        <Route path="/destination" element={<Destination/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default index
