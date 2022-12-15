import React, { useState } from 'react'
import { Sidebar, NavbarAdmin, AirportAdmin, DestinationsAdmin, FlightsAdmin, SchedulesAdmin, UsersManagement } from '../../components'

const Admin = () => {
  const [componentOpen, setComponentOpen] = useState('users')

  const handleComponent = (e) => {
    setComponentOpen(e)
  }
  
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
