import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { LoginAdminComponent } from '../../components'

const LoginAdmin = () => {
  const history = useNavigate()
  const checkLogin = useSelector(state => state.auth.isLoggedIn)

  useEffect(() => {
    if (checkLogin === true) {
      history('/admin')
    }
  }, [checkLogin, history])


  return (
    <div>
      <LoginAdminComponent />
    </div>
  )
}

export default LoginAdmin
