import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      id: 1,
      title: "Вивчити Redux",
      completed: false,
    },
    {
      id: 2,
      title: "Вивчити селектори",
      completed: true,
    },
    {
      id: 3,
      title: "Створити React компонент",
      completed: false,
    },
    {
      id: 4,
      title: "Попрактикуватися",
      completed: true,
    },
    {
      id: 5,
      title: "Вивчити Reselect",
      completed: false,
    },
  ],
};

const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {},
})


export default tasksSlice.reducer