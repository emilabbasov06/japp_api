import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SignupCard = () => {
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [info, setInfo] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signing up with:', { companyName, email, password });
  };

  return (
    <section>
      <div className='form_c'>
        <motion.div
          className="signup-card"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.02 }}
        >
          <h2 className="signup-title heading-h2">Join Us Today!</h2>
          <p className="signup-subtitle">Create your company account</p>

          <form onSubmit={handleSubmit} className="signup-form">
            <motion.div className="input-group" whileFocus={{ scale: 1.05 }}>
              <label>Company Name</label>
              <input
                type="text"
                placeholder="Enter your company name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                required
              />
            </motion.div>

            <motion.div className="input-group" whileFocus={{ scale: 1.05 }}>
              <label>Company Email</label>
              <input
                type="email"
                placeholder="Enter your company email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </motion.div>

            <motion.div className="input-group" whileFocus={{ scale: 1.05 }}>
              <label>Company Info</label>
              <textarea
                placeholder="Tell us about your company..."
                required
                onChange={(e) => setInfo(e.target.value)}
              ></textarea>
            </motion.div>

            <motion.div className="input-group" whileFocus={{ scale: 1.05 }}>
              <label>Password</label>
              <input
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </motion.div>

            <motion.button
              type="submit"
              className="signup-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Sign Up
            </motion.button>
          </form>

          <p className="signup-footer">
            Already have an account? <a href="/login">Log in</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SignupCard;
