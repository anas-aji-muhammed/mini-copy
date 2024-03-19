import React from 'react'
import Navbar from '../components/Navbar'
import MainContent from '../components/MainContent'
import Footer from '../components/Footer'

function Homnepage() {
  return (
    <div className='flex flex-col items-center justify-start h-full pt-6 divide-y divide-solid pb-6'>
        <Navbar/>
        {/* <div className="h-1 w-screen bg-gray-100"></div> */}
        <MainContent/>
        <Footer/>
    </div>
    
  )
}

export default Homnepage