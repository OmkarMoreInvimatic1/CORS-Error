// AppRoutes.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import HomePage from "./HomePage";
import SignUp from "./SignUp"; // Assuming you have a SignUp component

export default function AppRoutes() {
  return (
    <Routes>
      {/* Default route */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* Pages */}
      <Route path="/login" element={<Login />} />
      <Route path="/homepage" element={<HomePage />} />
       <Route path="/signup" element={<SignUp />} />
      {/* <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} /> */}

      {/* 404 fallback */}
      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
  );
}