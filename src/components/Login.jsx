import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  // Use state to track which form is currently active
  const [isLoginActive, setIsLoginActive] = useState(true);

  // Toggle between login and signup forms
  const toggleForm = () => {
    setIsLoginActive(!isLoginActive);
  };

  return (
    <div>
      <div className={`form-structor ${isLoginActive ? '' : 'slide-up'}`}>
        <div className="signup">
          <h2 className="form-title " onClick={toggleForm}>
            <span>or</span> Sign up
          </h2>
          <div className="form-holder">
            <input type="text" className="input" placeholder="Name" />
            <input type="email" className="input" placeholder="Email" />
            <input type="password" className="input" placeholder="Password" />
          </div>
          <button className="submit-btn">Sign up</button>
        </div>
        <div className={`login ${isLoginActive ? 'slide-up' : ''}`}>
          <div className="center">
            <h2 className="form-title" onClick={toggleForm}>
              <span>or</span> Log in
            </h2>
            <div className="form-holder">
              <input type="email" className="input" placeholder="Email" />
              <input type="password" className="input" placeholder="Password" />
            </div>
            <button className="submit-btn">Log in</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
