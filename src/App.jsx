import { useSelector, useDispatch } from "react-redux";
import { setStatusFilter } from "./redux/filterSlice";
import {
  selectTasks,
  selectTaskCount,
  selectStatusFilter,
  selectVisiblesTasks,
} from "./redux/selectors";
import "./App.css";

function App() {
  const tasks = useSelector(selectTasks);
  const count = useSelector(selectTaskCount);
  const statusFilter = useSelector(selectStatusFilter);
  const visibleTask = useSelector(selectVisiblesTasks);
  const dispatch = useDispatch();
  // console.log("поточний статус ", statusFilter);
  // console.log("видимі таски", visibleTask);
  return (
    <>
      <div>
        <button type="button" onClick={()=>dispatch(setStatusFilter("all"))}>Всі</button>
        <button type="button" onClick={()=>dispatch(setStatusFilter("active"))}>Активні</button>
        <button type="button" onClick={()=>dispatch(setStatusFilter("completed"))}>Виконані</button>
      </div>
      <p>Не виконані {count.active}</p>
      <p>Виконані {count.completed}</p>
      <ul>
        {tasks.map((task) => {
          return (
            <li key={task.id}>
              {task.title}-{task.completed ? "виконано" : "невиконано"}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
