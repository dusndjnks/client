import { useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addTask = async (e) => {
    e.preventDefault();
    if (!title || !description) {
      console.log("Title and description are required");
      
    }
    try {
      const { data } = await axios.post("/api/v1/tasks/create-tasks", {title,description});
      console.log("Task added successfully");            
      setTitle("");
      setDescription("");
    } catch (error) {
      console.error("Error in adding tasks:", error);
    }
  };

  return (
   <Layout>
  <div className="bg-gray-300">
  <div className="flex h-screen w-screen justify-center items-center">
  <form onSubmit={addTask} className="bg-white p-6 rounded shadow-lg w-full max-w-md">
    <h2 className="text-2xl font-semibold mb-4">Add a Task</h2>
    <div className="mb-4">
     <label htmlFor="title" className="block text-gray-700 font-medium mb-1">Title:</label>
     <input  id="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)}   placeholder="Enter task title" className="w-full px-3 py-2 border rounded-md text-gray-800"/>
    </div>
    <div className="mb-4"><label   htmlFor="description"   className="block text-gray-700 font-medium mb-1">Description:</label>  <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter task description" className="w-full px-3 py-2 border rounded-md text-gray-800"></textarea></div>
    <button type="submit" className="w-full bg-gray-700 text-white py-2 rounded ">Add Task</button>
  </form>
</div>

  </div>
   </Layout>
  );
};

export default TaskForm;
