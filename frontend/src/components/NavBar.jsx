import React from 'react'

const NavBar = () => {
  return (
    <div className='p-5 flex justify-between items-center'>
        <h1 className='font-bold text-2xl'>Expense Management App</h1>
        <button className='bg-blue-500 p-2 rounded-lg cursor-pointer'>Logout</button>
    </div>
  )
}

export default NavBar