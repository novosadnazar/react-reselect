import { statusFilters } from "./constants";

export const selectTasks = (state) => state.tasks.items;
export const selectStatusFilter = (state) => state.filters.status;

export const selectTaskCount = (state) => {
  const tasks = selectTasks(state);
console.log("task count", );
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
};

export const selectVisiblesTasks = (state) => {
  const tasks = selectTasks(state);
    const statusFilter = selectStatusFilter(state);
    console.log("visible task");
  if (statusFilter === statusFilters.active) {
    return tasks.filter((task) => !task.completed);
  } else if (statusFilter === statusFilters.completed) {
    return tasks.filter((task) => task.completed);
  } else {
    return tasks;
  }
};
