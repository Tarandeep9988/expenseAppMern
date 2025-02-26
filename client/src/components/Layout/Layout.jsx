import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <>
      <div className='h-full flex flex-col'>
        <Header />
        <div className='flex-1 min-h-100'>
            {children}
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Layout