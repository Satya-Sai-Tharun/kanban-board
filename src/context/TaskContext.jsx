import React, { createContext, useState, useContext } from "react";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const addTask = (task) => setTasks([...tasks, task]);

  const updateTaskStage = (id, newStage) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, stage: newStage } : task
      )
    );
  };

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, updateTaskStage, searchTerm, setSearchTerm }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => useContext(TaskContext);
