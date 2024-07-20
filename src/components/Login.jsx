import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import "../styles/Login.css";
import Register from "./Register"; // Register bileşenini import edin

export default function Login({ onClose }) {
  const [showRegister, setShowRegister] = useState(false); // Yeni durum ekleyin

  const handleOutsideClick = (e) => {
    if (e.target.className === 'closeLogin') {
      onClose();
    }
  };

  const handleRegisterClick = () => {
    setShowRegister(true); // Register butonuna tıklayınca showRegister durumunu güncelleyin
  };

  if (showRegister) {
    return <Register onClose={onClose} />; // Eğer showRegister true ise Register bileşenini render edin
  }

  return (
    <div className="closeLogin" onClick={handleOutsideClick}>
      <div className="login-container">
        <div className="login">
          <h3 className="welcome">Welcome 👋</h3>
          <p className="here">Please login here</p>
          <form>
            <div className="Form-Group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" />
            </div>
            <div className="Form-Group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" autoComplete="off" />
            </div>
            <div className="checkforgot">
              <div className="check">
                <input type="checkbox" id="rem" name="rem" value="check" />
                <label htmlFor="rem"> Remember Me</label>
              </div>
              <p>Forgot Password?</p>
            </div>
            <button className="login">Login</button>
            <button type="button" className="register" onClick={handleRegisterClick}>Register</button>
            <div className="hrp">
              <div className="hr3"></div>
              <p>Or Login With</p>
              <div className="hr3"></div>
            </div>
            <div className="brauz">
              <FcGoogle className="brauzlogo" />
              <span>Login with Google</span>
            </div>
            <div className="brauz">
              <FaApple className="brauzlogo" />
              <span>Login with Apple</span>
            </div>
          </form>
        </div>
      </div>
      <div className="close" onClick={onClose}>X</div>
    </div>
  );
}




