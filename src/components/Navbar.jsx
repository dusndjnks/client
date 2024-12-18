import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='h-24 bg-gray-700'>
        <div className='text-3xl flex justify-center text-white items-center h-24 justify-between px-56'>
            <Link className='cursor-pointer font-semibold' to="/">Home</Link>
            <Link className='cursor-pointer font-semibold' to="/create">Add Task</Link>
            <Link className='cursor-pointer font-semibold' to="/update">Edit Task</Link>
        </div>
    </div>
  )
}

export default Navbar