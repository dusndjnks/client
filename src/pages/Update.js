import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";

const Update = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [id, setId] = useState("");

  // Fetch all tasks
  const getAllTasks = async () => {
    try {
      const { data } = await axios.get("/api/v1/tasks/get-alltasks");
      if (data.success) {
        setTasks(data.task);
      }
    } catch (error) {
      console.error("Error in Getting All Tasks", error);
    }
  };

  useEffect(() => {
    getAllTasks();
  }, []);

  const getSingleTasks = async (taskId) => {
    try {
      const { data } = await axios.get(`/api/v1/tasks/get-singletasks/${taskId}`);
      if (data.success) {
        setTitle(data.task.title);
        setDescription(data.task.description);
        setId(taskId);
      } 
    } catch (error) {
      console.error("Error in Getting Single Task", error);
    }
  };
  const updateTasks = async (e) => {
    e.preventDefault();
    try {
      const updatedTask = { title, description };
      const { data } = await axios.put(`/api/v1/tasks/update-tasks/${id}`, updatedTask);
      if (data.success) {
        alert("Task Updated Successfully!");
        getAllTasks(); 
        setTitle("");
        setDescription("");
        setId("");
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.error("Something went wrong in updating task", error);
    }
  };

  return (
    <Layout>
       <div className="bg-gray-300 flex flex-col items-center pt-10 w-screen min-h-screen">
        <h1 className="text-4xl font-bold text-gray-800 pb-8">Edit the Task</h1>
        <form onSubmit={updateTasks} className="space-x-5 m-3 flex items-center rounded-lg bg-white pl-16 text-black pr-8 py-2">
          <div className="flex flex-col rounded    py-2 outline-none border-none gap-">
            <input className="outline-none border-none font-semibold tracking-wide text-lg" type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
            <input className="outline-none border-none font-semibold tracking-wide text-lg" type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required/>
          </div>
          <button type="submit" className="bg-black text-white rounded-lg h-14 w-28">Submit</button>
        </form>
        <div>
          {tasks &&
            tasks.map((item) => (
              <div key={item._id} className="bg-white shadow-md px-4 py-2 rounded-md my-4">
                <div className="flex justify-between items-center w-[400px] rounded-lg px-6 py-2 bg-gray-100">
                  <div className="flex flex-col">
                    <span className="text-xl uppercase text-gray-800 font-semibold">{item.title}</span>
                    <span className="text-sm text-gray-800">{item.description}</span>
                  </div>
                  <button onClick={() => getSingleTasks(item._id)} className="text-red-600">Edit</button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </Layout>
  );
};

export default Update;
