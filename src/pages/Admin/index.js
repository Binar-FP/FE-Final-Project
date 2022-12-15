import React, { useState } from 'react'
import { Sidebar, NavbarAdmin, AirportAdmin, DestinationsAdmin, FlightsAdmin, SchedulesAdmin } from '../../components'

const Admin = () => {
  const [componentOpen, setComponentOpen] = useState('airports')

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
        </div>
    </div>
    </>
  )
}

export default Admin
