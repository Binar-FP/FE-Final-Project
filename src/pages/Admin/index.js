import React from 'react'
import { Sidebar, NavbarAdmin, AirportAdmin, DestinationsAdmin, FlightsAdmin } from '../../components'

const Admin = () => {
  return (
    <>
    <NavbarAdmin />
    <div className="container-fluid">
        <div className="row">
            <Sidebar />
            <AirportAdmin />
            <DestinationsAdmin />
            <FlightsAdmin />
        </div>
    </div>
    </>
  )
}

export default Admin
