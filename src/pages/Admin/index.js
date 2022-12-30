import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { Sidebar, NavbarAdmin, AirportAdmin, DestinationsAdmin, FlightsAdmin, SchedulesAdmin, UsersManagement,HistoryAdmin } from '../../components'

const Admin = () => {
  const history = useNavigate()
  const role = useSelector(state => state.auth.roleId)
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  const [componentOpen, setComponentOpen] = useState('users')
  
  const handleComponent = (e) => {
    setComponentOpen(e)
  }
  
  useEffect(() => {
    if (role === "buyer" || !isLoggedIn ) {
      history('/')
    }
  }, [role, history, isLoggedIn])

  return (
    <>
    <NavbarAdmin />
    <div className="container-fluid">
        <div className="row">
            <Sidebar page={handleComponent} />
            {componentOpen === 'airports' && <AirportAdmin />}
            {componentOpen === 'destinations' && <DestinationsAdmin />}
            {componentOpen === 'flights' && <FlightsAdmin />}
            {componentOpen === 'schedules' && <SchedulesAdmin />}
            {componentOpen === 'users' && <UsersManagement />}
            {componentOpen === 'history' && <HistoryAdmin />}
        </div>
    </div>
    </>
  )
}

export default Admin
