import React from 'react'
import { Navbar, Footer, SearchHelp, CommonQuestion, AllTopics, SendQuestion } from '../../components'

const Help = () => {
  return (
    <div>
        <Navbar/>
        <SearchHelp/>
        <CommonQuestion/>
        <AllTopics/>
        <SendQuestion/>
        <Footer/>
    </div>
  )
}

export default Help
