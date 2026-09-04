import { useSelector } from "react-redux";
import { selectVisiblesTasks } from "../../redux/selectors";
export const TasckList = () => {
    const tasks = useSelector(selectVisiblesTasks)

    return (
      <ul>{tasks.map((task) => {
          return (
            <li key={task.id}>
              {task.title}-{task.completed ? "виконано" : "невиконано"}
            </li>
          );
        })}
      </ul>
    );
}