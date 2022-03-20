import React, { useContext } from "react";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Profile from "./pages/Profile/Profile";
import Chat from "./pages/Chat/Chat";
import Notification from "./pages/Notification/Notification";
import Forum from "./pages/Forum/Forum";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Navigate to="/login" />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/chat" element={<Chat />}></Route>
        <Route path="/notification" element={<Notification />}></Route>
        {/* <Route path="/forum" element={<Forum />}></Route> */}

      </Routes>
    </Router>
  )
}

export default App;
