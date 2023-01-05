import React from 'react'
import { useSelector } from 'react-redux'
import { Navbar, DestinationComponent, DetailDestination } from '../../components'

const Destination = () => {
  const pages = useSelector(state => state.destinations.pages)
  return (
    <>
      <Navbar />
      {pages === "destination" ?<DestinationComponent/>:''}
      {pages === "detail_destination" ?<DetailDestination/>:''}
    </>
  )
}

export default Destination
