import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Success from "./components/Success";
import "./App.css";

function App() {
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [isSuccessVisible, setIsSuccessVisible] = useState(false);

  const handleLoginClick = () => {
    setIsLoginVisible(true);
  };

  const handleCloseLogin = () => {
    setIsLoginVisible(false);
  };

  const handleRegisterSuccess = () => {
    setIsSuccessVisible(true);
  };

  const handleCloseSuccess = () => {
    setIsSuccessVisible(false);
  };

  return (
    <Router>
      <Header onLoginClick={handleLoginClick} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register onClose={handleCloseLogin} onRegisterSuccess={handleRegisterSuccess} />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      {isLoginVisible && <Login onClose={handleCloseLogin} />}
      {isSuccessVisible && <Success onClose={handleCloseSuccess} />}
    </Router>
  );
}

export default App;


