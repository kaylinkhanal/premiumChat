import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./containers/Login";
import Register from "./containers/Register";
import Chat from "./component/chat";
import './App.css';
function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/" element={<Register />}></Route>
            <Route path="/chat" element={<Chat />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
