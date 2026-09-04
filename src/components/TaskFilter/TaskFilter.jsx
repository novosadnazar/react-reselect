import { useSelector, useDispatch } from "react-redux";
import { setStatusFilter } from "../../redux/filterSlice";
import { selectStatusFilter } from "../../redux/selectors";
import { statusFilters } from "../../redux/constants";
export const TaskFilter = () => {

    const dispatch = useDispatch() 
    const statusFilter = useSelector(selectStatusFilter)


  return (
    <>
      <div>
        <button
          type="button"
          onClick={() => dispatch(setStatusFilter(statusFilters.all))}
          disabled={statusFilter === statusFilters.all}
        >
          Всі
        </button>
        <button
          type="button"
          onClick={() => dispatch(setStatusFilter(statusFilters.active))}
          disabled={statusFilter === statusFilters.active}
        >
          Активні
        </button>
        <button
          type="button"
          onClick={() => dispatch(setStatusFilter(statusFilters.completed))}
          disabled={statusFilter === statusFilters.completed}
        >
          Виконані
        </button>
      </div>
    </>
  );
};
