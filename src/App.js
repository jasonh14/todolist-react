import {useState} from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Belajar",
      day: "Selasa",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting",
      day: "Rabu",
      reminder: true,
    },
    {
      id: 3,
      text: "Lomba",
      day: "Kamis",
      reminder: false,
    },
  ]);

  const deleteTask = (id) => {
    console.log("delete", id);
  };

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
