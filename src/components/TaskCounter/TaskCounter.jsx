import { useSelector } from "react-redux";
import { selectTaskCount } from "../../redux/selectors";
export const TaskCounter = () => {
    const count = useSelector(selectTaskCount)

    return (
      <>
        <p>Не виконані {count.active}</p>
        <p>Виконані {count.completed}</p>
      </>
    );
}