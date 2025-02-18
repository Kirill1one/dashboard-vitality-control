import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FoodTracker from "./components/FoodTracker";
import WaterTracker from "./components/WaterTracker";
import Charts from "./components/Charts";


import "./styles/styles.css";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
      <div className="container">
        <h1>Дашборд здоровья ❤️ </h1>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/food" element={<FoodTracker />} />
          <Route path="/water" element={<WaterTracker />} />
          <Route path="/charts" element={<Charts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

