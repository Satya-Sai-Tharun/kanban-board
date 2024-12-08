import React from "react";

const TaskCard = ({ task }) => {
  const handleDragStart = (e) => {
    e.dataTransfer.setData("taskId", task.id);
  };

  return (
    <div
      className={`p-4 rounded shadow mb-2 ${
        task.stage === "Done" ? "bg-green-200" : "bg-gray-200"
      }`}
      draggable={task.stage !== "Done"} // Disable drag for "Done" tasks
      onDragStart={task.stage !== "Done" ? handleDragStart : undefined}
    >
      <h3 className="font-bold">{task.title}</h3>
      <p className="text-sm text-gray-600">{task.description}</p>
    </div>
  );
};

export default TaskCard;

