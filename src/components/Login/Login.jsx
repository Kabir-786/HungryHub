import React, { useState } from "react";
import "./Login.css";
import { assets } from "../../assets/assets";

const Login = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Sign Up");

  return (
    <>
      <div className="login">
        <form className="login-container">
          <div className="login-title">
            <h2>{currentState}</h2>
            <img
              onClick={() => setShowLogin(false)}
              src={assets.cross_icon}
              alt="SignUp"
            />
          </div>

          <div className="login-input">
            {currentState === "Login" ? (
              <></>
            ) : (
              <input type="text" placeholder="Name" required />
            )}
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
          </div>

          <button>
            {currentState === "Sign Up" ? "Create account" : "Login"}
          </button>

          <div className="login-condition">
            <input type="checkbox" required />
            <p>
              I agree to the terms and conditions as set out by the user
              agreement.
            </p>
          </div>
          {currentState === "Login" ? (
            <p>
              Create a new account?{" "}
              <span onClick={() => setCurrentState("Sign Up")}>Click here</span>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <span onClick={() => setCurrentState("Login")}>Login here</span>
            </p>
          )}
        </form>
      </div>
    </>
  );
};

export default Login;
