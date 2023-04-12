import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import "./styles.css";
import Register from "./pages/Register";

export default function App() {
  const [username, setUsername] = useState("");
  function ProtectedRoute({ children }) {
    if (!username) {
      return <Navigate to="/" replace />;
    }
    return children;
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={<Login username={username} setUsername={setUsername} />}
          />
          <Route path="register" element={<Register />} />
          <Route
            path="dashboard/*"
            element={
              <ProtectedRoute>
                <Dashboard username={username} />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
