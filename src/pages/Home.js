import React from 'react'
import Layout from '../components/Layout'

const Home = () => {
  return (
    <Layout>
          <div>
          <div class="pt-40 flex flex-col items-center justify-center">

          <div className='flex flex-col text-center mb-8'>
            <h1 class="text-4xl font-bold text-gray-800">To-Do List</h1>
            <p class="text-gray-600 mt-2">Stay organized and productive</p>
          </div>

            <main class="bg-white shadow-md rounded-lg w-full max-w-lg p-6">
              <form id="todo-form" class="mb-4">
                <div class="flex items-center">
                  <input 
                    type="text" 
                    
                    id="new-task" 
                    placeholder="Add a new task" 
                    class="flex-1 border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <button 
                    type="submit" 
                    class="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600"
                  >
                    Add
                  </button>
                </div>
              </form>

              <ul id="task-list" class="space-y-3">
                <li class="flex items-center justify-between bg-gray-100 p-4 rounded-md shadow-sm">
                  <span class="text-gray-800">Example Task</span>
                  <button class="text-red-500 hover:text-red-600">Delete</button>
                </li>
              </ul>
            </main>
          </div>
        </div>
    </Layout>
  )
}

export default Home