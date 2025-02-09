import React from 'react';
import human_one from '../assets/images/human_one.jpg';
import { motion } from 'framer-motion';

const HeroContentFirst = () => {
  return (
    <section className='container-parent'>
      <div className='container container-flex box-shadow-none'>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <img src={human_one} alt="Human" />
        </motion.div>

        <div className='steps-section'>
          <motion.h2
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.2 }}
            className='bg-text font-3'>
            Get Hired in 3 Easy Steps – No Forms, No Hassle!
          </motion.h2>

          <motion.ul whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: false, amount: 0.2 }}
            className='steps'>
            <li>
              <span>Step 1</span>: Find Your Dream Job
            </li>

            <li>
              <span>Step 2</span>: Get the Company’s Contact
            </li>

            <li>
              <span>Step 3</span>: Get Hired!
            </li>
          </motion.ul>
        </div>
      </div>
    </section>

  );
};

export default HeroContentFirst;