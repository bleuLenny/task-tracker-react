import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([
    //Mock up database
    {
      id: 1,
      text: "Meta Interview",
      date: "Dec 23, 2021",
      reminder: true,
    },
    {
      id: 2,
      text: "Statistics Final",
      date: "Dec 25, 2021",
      reminder: true,
    },
    {
      id: 3,
      text: "Microsoft Technical Interview",
      date: "Jan 4, 2022",
      reminder: true,
    },
  ]);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No tasks available"
      )}
    </div>
  );
};

export default App;
