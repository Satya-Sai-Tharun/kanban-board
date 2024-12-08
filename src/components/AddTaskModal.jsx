import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../store/taskSlice";

const AddTaskModal = ({ onClose }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleSaveTask = () => {
    // Validate inputs
    if (!title.trim() || !description.trim()) {
      setError("Task title and description cannot be empty.");
      return;
    }

    // Dispatch the addTask action
    dispatch(addTask({ title, description, stage: "To Do" }));
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow rounded-lg">
        <h2 className="text-lg font-bold mb-4">Add Task</h2>
        {error && (
          <p className="text-red-500 text-sm mb-2">{error}</p>
        )}
        <input
          type="text"
          className="w-full p-2 border rounded mb-2 rounded-2xl"
          placeholder="Task Title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            setError("");
          }}
        />
        <textarea
          className="w-full p-2 border rounded mb-4 rounded-2xl"
          placeholder="Task Description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
            setError("");
          }}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-sky-900"
          onClick={handleSaveTask}
        >
          Save
        </button>
        <button
          className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddTaskModal;
