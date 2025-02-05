import React, { useState } from 'react';
import { motion } from 'framer-motion';

const LoginCard = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logging in with:', { email, password });
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
            Don't have an account? <a href="/signup">Sign up</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default LoginCard;
