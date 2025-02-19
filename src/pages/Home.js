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
    try{
      const {data} = await axios.delete(`/api/v1/tasks/delete-tasks/${id}`)
      if(data.success){
        getAllTasks()
      }else{
        alert("Error in deleting tasks")
      }
    } catch(error){
      console.log("Error in deleting tasks");
    }
  };

  return (
    <Layout >
          <div className='bg-gray-300 w-screen min-h-screen'>
          <div className="flex flex-col items-center  justify-center w-screen py-20">
          <div className='flex flex-col text-center mb-8 '>
            <h1 className="text-4xl font-bold text-gray-800">To-Do List</h1>
            <p className="text-gray-600 mt-2">Stay organized and productive</p>
          </div>

          <div>
            {
              task && task.map((item) => {
                return (
                  <div key={item.id}>
                    <div  className='bg-white shadow-md  px-4 py-2  rounded-md my-4'>
                        <div className='flex justify-between items-center w-[400px] rounded-lg px-6 py-2 bg-gray-100'>
                          <div className='flex flex-col '>
                          <span className='text-xl uppercase text-gray-800' >{item.title}</span>
                          <span className='text-sm text-gray-800'>{item.description}</span>
                            </div>                          
                          <button onClick={() => {deleteTask(item._id)}} className='text-red-500'>Delete</button>
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