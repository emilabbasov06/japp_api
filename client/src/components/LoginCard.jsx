import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const LoginCard = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth(); // AuthContext-dən login funksiyasını alırıq

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const formData = new URLSearchParams();
      formData.append("username", email); // FastAPI expects "username"
      formData.append("password", password);

      const response = await fetch("http://127.0.0.1:8000/login", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" }, // Fix content type
        body: formData.toString(), // Convert to string
      });

      if (!response.ok) throw new Error("Login failed");

      const data = await response.json();
      const token = data.access_token;

      if (!token) throw new Error("No token received");

      login(token); // AuthContext-də login funksiyasını çağırırıq

      navigate("/dashboard"); // İstifadəçini yönləndiririk
    } catch (error) {
      console.error("Login error:", error.message);
      alert("Login failed! Check credentials.");
    }
  };

  return (
    <section>
      <div className='form_c'>
        <motion.div
          className="login-card"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.02 }}
        >
          <h2 className="login-title heading-h2">Welcome Back!</h2>
          <p className="login-subtitle">Log in to continue</p>

          <form onSubmit={handleSubmit} className="login-form">
            <motion.div className="input-group" whileFocus={{ scale: 1.05 }}>
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </motion.div>

            <motion.div className="input-group" whileFocus={{ scale: 1.05 }}>
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </motion.div>

            <motion.button
              type="submit"
              className="login-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Login
            </motion.button>
          </form>

          <p className="login-footer">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default LoginCard;
