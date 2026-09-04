import { statusFilters } from "./constants";
import { createSelector } from "@reduxjs/toolkit";

export const selectTasks = (state) => state.tasks.items;
export const selectStatusFilter = (state) => state.filters.status;

export const selectTaskCount = createSelector([selectTasks], (tasks) => {

  return tasks.reduce(
    (count, task) => {
      if (task.completed) {
        count.completed += 1;
      } else {
        count.active += 1;
      }

      return count;
    },
    {
      active: 0,
      completed: 0,
    }
  );
})  

export const selectVisiblesTasks = createSelector([selectTasks, selectStatusFilter],
  (tasks, statusFilter) => {

      if (statusFilter === statusFilters.active) {
        return tasks.filter((task) => !task.completed);
      } else if (statusFilter === statusFilters.completed) {
        return tasks.filter((task) => task.completed);
      } else {
        return tasks;
      }
  })