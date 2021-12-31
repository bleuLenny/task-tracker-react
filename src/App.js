import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import "./App.css";
import AddTask from "./components/AddTask";

const App = () => {
  const [tasks, setTasks] = useState([
  ]);

  const [showAddTask, setShowAddTask] = useState(false);

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

  const addTask = (task) => {
    const id = tasks.length + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No tasks available. Get started by adding a task with the Add button. "
      )}
    </div>
  );
};

export default App;
