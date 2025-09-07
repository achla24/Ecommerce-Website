// // src/pages/Login.js
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { login } from '../services/api';   // ✅ import API service

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await login({ email, password });   // ✅ use service function

//       // Save token & user ID in localStorage
//       localStorage.setItem("token", res.data.token);
//       localStorage.setItem("userId", res.data.user.id || res.data.user._id);

//       navigate("/");
//     } catch (err) {
//       alert("Invalid login credentials");
//     }
//   };

//   return (
//     <div className="container mt-4">
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label>Email</label>
//           <input
//             type="email"
//             className="form-control"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label>Password</label>
//           <input
//             type="password"
//             className="form-control"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button className="btn btn-success" type="submit">Login</button>
//       </form>
//     </div>
//   );
// }

// export default Login;



// src/pages/Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/api";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userId", res.data.user.id || res.data.user._id);
      navigate("/");
    } catch (err) {
      alert("Invalid login credentials");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-lg p-4" style={{ width: "380px", borderRadius: "15px" }}>
        <h2 className="text-center mb-4 text-primary">Welcome Back</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Email Address</label>
            <input
              type="email"
              className="form-control rounded-pill"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="form-label fw-semibold">Password</label>
            <input
              type="password"
              className="form-control rounded-pill"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className="btn btn-primary w-100 rounded-pill fw-semibold" type="submit">
            Login
          </button>
        </form>
        <p className="text-center mt-3 mb-0">
          Don’t have an account?{" "}
          <span
            className="text-primary fw-semibold"
            role="button"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;

