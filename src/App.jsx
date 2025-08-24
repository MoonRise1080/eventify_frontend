import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminDashboard from "./Components/ui/AdminDashboard";
import StudentDashboard from "./Components/ui/StudentDashboard"; // This one not in ui
import AdminSideBar from "./Components/ui/AdminSideBar";
import AppSidebar from "./Components/ui/Appsidebar";
import Home from "./pages/HomePage";

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        {/* Sidebar routing */}
        <Routes>
          <Route path="/admin/*" element={<AdminSideBar />} />
          <Route path="*" element={<AppSidebar />} />
        </Routes>

        {/* Main content */}
        <div className="flex-1 overflow-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/student" element={<StudentDashboard />} />
            <Route path="/student/dashboard" element={<StudentDashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;