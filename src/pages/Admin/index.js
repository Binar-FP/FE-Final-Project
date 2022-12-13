import React from 'react'
import { Sidebar, NavbarAdmin, AirportAdmin, DestinationsAdmin } from '../../components'

const Admin = () => {
  return (
    <>
    <NavbarAdmin />
    <div className="container-fluid">
        <div className="row">
            <Sidebar />
            {/* <AirportAdmin /> */}
            <DestinationsAdmin />
        </div>
    </div>
    </>
  )
}

export default Admin
