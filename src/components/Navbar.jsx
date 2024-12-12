import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='h-24 bg-gray-500'>
        <div className='text-3xl flex justify-center items-center h-24 justify-between px-56'>
            <Link to="/">Home</Link>
            <Link to="/create">Create Task</Link>
            <Link to="/update">Update Task</Link>
        </div>
    </div>
  )
}

export default Navbar