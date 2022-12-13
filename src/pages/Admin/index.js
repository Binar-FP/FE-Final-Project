import React from 'react'
import { Sidebar, NavbarAdmin, AirportAdmin } from '../../components'

const Admin = () => {
  return (
    <>
    <NavbarAdmin />
    <div className="container-fluid">
        <div className="row">
            <Sidebar />
            <AirportAdmin />
        </div>
    </div>
    </>
  )
}

export default Admin
