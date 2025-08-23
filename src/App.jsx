import { useState } from "react";
import Home from "./pages/HomePage";
//import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard } from "./components/Dashboard.jsx";
import { MyCalendar } from "./components/MyCalendar.jsx";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Routes>
          
          <Route path="/" element={<Dashboard />} />
          <Route path="/my-calendar" element={<MyCalendar />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
