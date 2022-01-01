import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import Footer from "./components/Footer";
import About from "./components/About";
import TaskFinal from "./components/TaskFinal";
const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  return (
    <Router>
      <div className="container">
        <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
        <Routes>
          <Route path="/task-tracker-react" exact element={<TaskFinal taskAdd={showAddTask} />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
