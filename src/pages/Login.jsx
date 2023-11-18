import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  // const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

  const handleLogin = e => {
    e.preventDefault();
    setLoading(true);

      setTimeout(() => {
      // setIsAuthenticated(true);
      setLoading(false);
      navigate("/home");
    }, 1500);
  };

  return (
    <div>
      <h1>Login</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <form onSubmit={handleLogin}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
};

export default Login;
