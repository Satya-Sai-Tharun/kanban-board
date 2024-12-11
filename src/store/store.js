import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./taskSlice";

const store = configureStore({
  reducer: {
    tasks: taskReducer, // Reducer to manage tasks
  },
});

export default store;
