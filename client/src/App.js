import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Router>
        <Toaster position="top-center" reverseOrder={false} />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
