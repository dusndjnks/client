import React, { useState, useEffect } from "react";
import axios from "axios";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  // Fetch all tasks
  const getAllTasks = async () => {
    try {
      const { data } = await axios.get("/api/v1/tasks/get-alltasks");
      setTasks(data.task);
    } catch (error) {
      console.log("Error in Getting All Tasks:", error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`/api/v1/tasks/delete-tasks/${id}`);
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    } catch (error) {
      console.log("Error in Deleting Task:", error);
    }
  };

  useEffect(() => {
    getAllTasks();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold my-4">Task List</h1>
      <ul className="w-full max-w-md">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <li
              key={task.id}
              className="flex justify-between items-center bg-white p-4 rounded shadow mb-2"
            >
              <div>
                <h2 className="font-semibold text-lg">{task.title}</h2>
                <p className="text-gray-600">{task.description}</p>
              </div>
              <button
                onClick={() => deleteTask(task.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </li>
          ))
        ) : (
          <p className="text-gray-600">No tasks available.</p>
        )}
      </ul>
    </div>
  );
};

export default TaskList;
