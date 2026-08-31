import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./tasksSlice";
import filteredReducer from "./filterSlice"

export const store = configureStore({
  reducer: {
        tasks: taskReducer,
      filters: filteredReducer
  },
});
