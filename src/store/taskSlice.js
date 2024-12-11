import { createSlice } from "@reduxjs/toolkit";

const initialState = []; // Initial state for tasks

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newTask = { ...action.payload, id: Date.now().toString() };
      state.push(newTask); // Add a new task to the state
    },
    updateTaskStage: (state, action) => {
      const { taskId, stage } = action.payload;
      const task = state.find((task) => task.id === taskId);
      if (task && task.stage !== "Done") {
        task.stage = stage; // Update the stage of the task
      }
    },
  },
});

export const { addTask, updateTaskStage } = taskSlice.actions;
export default taskSlice.reducer;
