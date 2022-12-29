import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Navbar, SettingBox } from '../../components'


const Profile = () => {
  const role = useSelector(state => state.auth.roleId)
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  const history = useNavigate()

  useEffect(() => {
    if (role === "admin" || !isLoggedIn ) {
      history('/login')
    }
  }, [role, history, isLoggedIn])
  
  return (
    <>
      <Navbar />
      <SettingBox />
    </>
  )
}

export default Profile
