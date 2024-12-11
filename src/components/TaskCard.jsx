import React from "react";
import { useDispatch } from "react-redux";
import { updateTaskStage } from "../store/taskSlice";

const TaskCard = ({ task }) => {
  const dispatch = useDispatch();

  // Function to handle stage transition
  const handleStageChange = () => {
    let nextStage;
    if (task.stage === "To Do") nextStage = "In Progress";
    else if (task.stage === "In Progress") nextStage = "Peer Review";
    else if (task.stage === "Peer Review") nextStage = "Done";

    if (nextStage) {
      dispatch(updateTaskStage({ taskId: task.id, stage: nextStage }));
    }
  };

  const getButtonLabel = () => {
    if (task.stage === "To Do") return "Start";
    if (task.stage === "In Progress") return "Move to Review";
    if (task.stage === "Peer Review") return "Reviewed";
    return null; // No button for "Done"
  };

  return (
    <div
      className={`p-4 rounded shadow mb-2 rounded-2xl ${
        task.stage === "Done" ? "bg-green-200" : "bg-gray-200"
      }`}
    >
      <h3 className="font-bold">{task.title}</h3>
      <p className="text-sm text-gray-600">{task.description}</p>
      {task.stage !== "Done" && (
        <button
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-xl"
          onClick={handleStageChange}
        >
          {getButtonLabel()}
        </button>
      )}
    </div>
  );
};

export default TaskCard;