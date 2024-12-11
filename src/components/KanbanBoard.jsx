import React, { useState } from "react";
import TaskCard from "./TaskCard";
import AddTaskModal from "./AddTaskModal";
import { useDispatch, useSelector } from "react-redux";
import { updateTaskStage } from "../store/taskSlice";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const stages = ["To Do", "In Progress", "Peer Review", "Done"];

const KanbanBoard = () => {
  const [search, setSearch] = useState(""); // State for search input
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const tasks = useSelector((state) => state.tasks); // Get tasks from Redux store
  const dispatch = useDispatch();

  // Function to handle drag-and-drop events
  const handleDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) return; // If the task is dropped outside a droppable area, do nothing

    // Only update the task stage if the task is moved to a new column
    if (destination.droppableId !== source.droppableId) {
      dispatch(updateTaskStage({ taskId: draggableId, stage: destination.droppableId }));
    }
  };

  // Filter tasks based on search input
  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <input
        type="text"
        className="mb-4 w-full p-2 border rounded-2xl"
        placeholder="Search tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 rounded-2xl">
          {stages.map((stage) => (
            <Droppable key={stage} droppableId={stage}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="p-4 bg-white rounded shadow-md rounded-2xl"
                >
                  <h2 className="text-lg font-bold mb-2 rounded-2xl">{stage}</h2>
                  {filteredTasks
                    .filter((task) => task.stage === stage)
                    .map((task, index) => (
                      <Draggable key={task.id} draggableId={task.id} index={index}>
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <TaskCard
                              task={task}
                              isEditable={stage !== "Done"}
                            />
                          </div>
                        )}
                      </Draggable>
                    ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
      <button
        className="fixed bottom-8 right-8 bg-blue-500 text-white p-4 rounded-full shadow-lg rounded-2xl"
        onClick={() => setShowModal(true)}
      >
        Add Task
      </button>
      {showModal && (
        <AddTaskModal onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default KanbanBoard;