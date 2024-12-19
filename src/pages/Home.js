import React from 'react'
import Layout from '../components/Layout'
import axios from 'axios'
import { useState , useEffect } from 'react' 


const Home = () => {

  const [task,setTasks] = useState([])

	const getAllTasks = async () => {
		try{
			const {data} = await axios.get("/api/v1/tasks/get-alltasks")
			setTasks(data.task)
		}catch(error){
			console.log("Error in Getting All Products");
		}
	}
	useEffect(() => {
		getAllTasks()
	},[])

  const deleteTask = async (id) => {
    try {
      await axios.delete("/api/v1/tasks/delete-task/${id}");
      // const delete = await axios.delete()
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    } catch (error) {
      console.log("Error in Deleting Task:");
    }
  };

  return (
    <Layout >
          <div className='bg-gray-300 w-screen'>
          <div class="flex flex-col items-center  justify-center w-screen py-20">
          <div className='flex flex-col text-center mb-8 '>
            <h1 class="text-4xl font-bold text-gray-800">To-Do List</h1>
            <p class="text-gray-600 mt-2">Stay organized and productive</p>
          </div>

          <div>
            {
              task && task.map((item) => {
                return (
                  <div>
                    <div className='bg-white shadow-md  px-4 py-2  rounded-md my-4'>
                        <div className='flex justify-between items-center w-[400px] rounded-lg px-6 py-2 bg-gray-100'>
                          <div className='flex flex-col '>
                          <span className='text-xl uppercase text-gray-800' >{item.title}</span>
                          <span className='text-sm text-gray-800'>{item.description}</span>
                            </div>                          
                          <button onClick={() => deleteTask(task.id)} className='text-red-500'>Delete</button>
                        </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
            </div>
          </div>
    </Layout>
  )
}

export default Home