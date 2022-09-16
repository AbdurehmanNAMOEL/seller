import React from 'react'
import NavBar from '../components/NavBar'

const DashBoard = () => {
  return (
    <div className='w-full h-[100vh] flex flex-col bg-gray-600'>
   
    <NavBar
     path={'/'}
     buttonLabel={'Home'}
     />
    </div>
  )
}

export default DashBoard