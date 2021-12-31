import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([
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
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
};

export default App;
