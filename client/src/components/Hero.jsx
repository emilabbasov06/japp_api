import React from 'react';
import home_main from '../assets/images/home_main.png';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  const navigate = useNavigate();

  const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: delay },
    },
  });

  return (
    <main className='container-parent'>
      <div className='container hero'>
        <div className='hero-content'>
          <motion.h1 variants={container(0)}
            initial='hidden'
            animate='visible'
            className='bg-text font-5'>Your Next Career Move Starts Here!</motion.h1>
          <motion.p variants={container(0.2)}
            initial='hidden'
            animate='visible'>
            Why wait for the perfect job when you can find it today? Explore thousands of opportunities, connect with top companies, and take a step closer to success. Your future is in your hands—let’s make it happen!
          </motion.p>
          <motion.div
            variants={container(0.4)}
            initial='hidden'
            animate='visible'
            className='btn_div'>
            <button onClick={() => navigate('/vacancies')} className='button'>Go to vacancies</button>
          </motion.div>
        </div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="hero-image">
          <img src={home_main} alt="Welcome" />
        </motion.div>
      </div>
    </main>
  );
};

export default Hero;