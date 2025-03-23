import React from 'react'
import NavBar from '../../components/NavBar'
import ControllerBox from './ControllerBox'
import TransactionTable from './TransactionTable'

const Home = () => {
  return (
    <>
      <div>
        <NavBar />
        <div className='mx-80 mt-10'>
          <ControllerBox />
          <TransactionTable />
        </div>
      </div>
    </>
  )
}

export default Home