import {useState} from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

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
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? {...task, reminder: !task.reminder} : task
      )
    );
  };

  const addTask = (task) => {
    console.log(task);
  };

  return (
    <div className="container">
      <Header />
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        <p>No Task To Show</p>
      )}
    </div>
  );
}

export default App;
