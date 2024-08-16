import React from 'react'
import LogoutButton from './Logout'

function Navbar() {
  return (

    <div className='w-full h-16 p-6 flex bg-zinc-900 '>
      
      <div className='flex justify-center items-center space-x-2 text-2xl text-center text-gray-100 '>
        <img src="../../../public/favicon.ico" alt="logo" className='w-10' />
        <h1>Online-Auction</h1>
      </div>

      <LogoutButton />
    </div>
  )
}

export default Navbar