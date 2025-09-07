// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { register } from "../services/api";

// function Signup() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await register({ name, email, password });
//       // Auto-login after signup
//       localStorage.setItem("token", res.data.token);
//       localStorage.setItem("userId", res.data.user.id || res.data.user._id);
//       navigate("/");
//     } catch (err) {
//       alert("Signup failed!");
//     }
//   };

//   return (
//     <div className="container mt-4">
//       <h2>Signup</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label>Name</label>
//           <input
//             type="text"
//             className="form-control"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </div>
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
//         <button className="btn btn-primary" type="submit">
//           Signup
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Signup;




import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../services/api";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await register({ name, email, password });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userId", res.data.user.id || res.data.user._id);
      navigate("/");
    } catch (err) {
      alert("Signup failed!");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-lg p-4" style={{ width: "380px", borderRadius: "15px" }}>
        <h2 className="text-center mb-4 text-primary">Create Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Full Name</label>
            <input
              type="text"
              className="form-control rounded-pill"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
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
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className="btn btn-primary w-100 rounded-pill fw-semibold" type="submit">
            Sign Up
          </button>
        </form>
        <p className="text-center mt-3 mb-0">
          Already have an account?{" "}
          <span
            className="text-primary fw-semibold"
            role="button"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

export default Signup;
