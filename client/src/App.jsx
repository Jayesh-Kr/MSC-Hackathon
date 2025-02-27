import Login from "./components/Login"
import Signup from "./components/Signup"
import FloorForm from "./components/FloorForm";
import ClassBooking from "./components/ClassBooking";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  return (
<Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<FloorForm />} />
        <Route path="/timetable" element={<ClassBooking />} />
        {/* Redirect root path to login */}
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  )
}

export default App