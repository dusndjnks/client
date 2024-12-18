import React from 'react'
import Navbar from './Navbar'

const Layout = ({children}) => {
  return (
    <div>
        <Navbar/>
        <main className='min-h-[70vh]'>{children}</main>
        
    </div>
  )
}

export default Layout