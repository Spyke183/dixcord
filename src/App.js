import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import NotFound from "./components/NotFound";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import "./styles.css";
import Register from "./pages/Register";

export default function App() {
    const [username, setUsername] = useState("");
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route
                        index
                        element={
                            <Login
                                username={username}
                                setUsername={setUsername}
                            />
                        }
                    />
                    <Route path="register" element={<Register />} />
                    <Route
                        path="dashboard/*"
                        element={
                            username ? (
                                <Dashboard username={username} />
                            ) : (
                                <Login
                                    username={username}
                                    setUsername={setUsername}
                                />
                            )
                        }
                    />
                    <Route
                        path="*"
                        element={<NotFound>Sélectionner un serveur</NotFound>}
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
