import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { Sidebar, NavbarAdmin, AirportAdmin, DestinationsAdmin, FlightsAdmin, SchedulesAdmin, UsersManagement } from '../../components'

const Admin = () => {
  const history = useNavigate()
  const role = useSelector(state => state.auth.roleId)
  const [componentOpen, setComponentOpen] = useState('users')
  
  const handleComponent = (e) => {
    setComponentOpen(e)
  }
  
  useEffect(() => {
    if (role === "buyer") {
      history('/')
    }
  }, [role, history])

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
        </div>
    </div>
    </>
  )
}

export default Admin
