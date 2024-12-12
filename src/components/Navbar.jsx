import React from 'react'

const Navbar = () => {
  return (
    <div className='h-24 bg-pink-300'>
        <div className='text-xl flex justify-center items-center h-24 justify-between px-56'>
            <h1>Home</h1>
            <h1>Create Task</h1>
            <h1>Delete Task</h1>
            <h1>Update Task</h1>
        </div>
    </div>
  )
}

export default Navbar