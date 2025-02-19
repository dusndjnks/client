import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";

const Update = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [id, setId] = useState(null); // Store selected task ID

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

  // Fetch a single task for editing
  const getSingleTask = async (taskId) => {
    try {
      const { data } = await axios.get(`/api/v1/tasks/get-singletask/${taskId}`);
      if (data.success) {
        setTitle(data.task.title);
        setDescription(data.task.description);
        setId(taskId);
      }
    } catch (error) {
      console.error("Error in Getting Single Task", error);
    }
  };

  // Update Task
  const updateTask = async (e) => {
    e.preventDefault();
    if (!id) {
      alert("No task selected for update!");
      return;
    }

    try {
      const updatedTask = { title, description };
      const { data } = await axios.put(`/api/v1/tasks/update-task/${id}`, updatedTask);

      if (data.success) {
        alert("Task Updated Successfully!");
        getAllTasks(); // Refresh tasks
        setTitle("");
        setDescription("");
        setId(null);
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.error("Error in updating task", error);
    }
  };

  return (
    <Layout>
      <div className="bg-gray-300 flex flex-col items-center pt-10 w-screen min-h-screen">
        <h1 className="text-4xl font-bold text-gray-800 pb-8">Edit the Task</h1>

        {/* Update Task Form */}
        <form onSubmit={updateTask} className="space-x-5 m-3 flex rounded-lg">
          <div className="flex flex-col rounded px-14 py-2 outline-none border-none gap-2 bg-white">
            <input
              className="outline-none border-none font-semibold tracking-wide text-lg"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              required
            />
            <input
              className="outline-none border-none font-semibold tracking-wide text-lg"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
              required
            />
          </div>
          <button type="submit" className="bg-black text-white px-3 py-1 rounded-lg w-28">
            Update
          </button>
        </form>

        {/* Display All Tasks */}
        <div>
          {tasks.length > 0 ? (
            tasks.map((item) => (
              <div key={item._id} className="bg-white shadow-md px-4 py-2 rounded-md my-4">
                <div className="flex justify-between items-center w-[400px] rounded-lg px-6 py-2 bg-gray-100">
                  <div className="flex flex-col">
                    <span className="text-xl uppercase text-gray-800">{item.title}</span>
                    <span className="text-sm text-gray-800">{item.description}</span>
                  </div>
                  <button onClick={() => getSingleTask(item._id)} className="text-gray-900">
                    Edit
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-700">No tasks available.</p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Update;
