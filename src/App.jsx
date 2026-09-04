import { TaskFilter } from "./components/TaskFilter/TaskFilter";
import { TasckList } from "./components/TaskList/TaskList";
import "./App.css";
import { TaskCounter } from "./components/TaskCounter/TaskCounter";

function App() {

  return (
    <>
     <TaskFilter/>
    <TaskCounter/>
      <TasckList/>
    
    </>
  );
}

export default App;
