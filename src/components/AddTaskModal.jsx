import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../store/taskSlice";

const AddTaskModal = ({ onClose }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleSaveTask = () => {
    // Dispatch only the addTask action
    dispatch(addTask({ title, description, stage: "To Do" }));
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-lg font-bold mb-4">Add Task</h2>
        <input
          type="text"
          className="w-full p-2 border rounded mb-2"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="w-full p-2 border rounded mb-4"
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
          onClick={handleSaveTask}
        >
          Save
        </button>
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddTaskModal;
