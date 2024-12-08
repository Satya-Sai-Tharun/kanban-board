import { createSlice } from "@reduxjs/toolkit"; 

// Define initialState
const initialState = [
//   { id: "1", title: "Task 1", description: "Description for Task 1", stage: "To Do" },
//   { id: "2", title: "Task 2", description: "Description for Task 2", stage: "In Progress" },
];

const taskSlice = createSlice({
  name: "tasks",
  initialState, // Use the initialState here
  reducers: {
    addTask: (state, action) => {
      const newTask = { ...action.payload, id: Date.now().toString() };
      state.push(newTask);
    },
    editTask: (state, action) => {
      const { id, title, description } = action.payload;
      const task = state.find((task) => task.id === id);
      if (task) {
        task.title = title;
        task.description = description;
      }
    },
    updateTaskStage: (state, action) => {
      const { taskId, stage } = action.payload;
      const task = state.find((task) => task.id === taskId);
      if (task) task.stage = stage;
    },
  },
});

export const { addTask, editTask, updateTaskStage } = taskSlice.actions;
export default taskSlice.reducer;
