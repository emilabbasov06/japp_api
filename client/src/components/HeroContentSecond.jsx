import React from 'react';
import human_two from '../assets/images/human_two.jpg';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { container } from '../constants';

const HeroContentSecond = () => {
  const navigate = useNavigate();

  return (
    <section className='container-parent hero-section'>
      <div className='container container-flex box-shadow-none'>
        <div className='second-content'>
          <motion.h2
            variants={container(0)}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: false, amount: 0.2 }}
            className='bg-text font-3'>
            Getting Applied by an Expert Talent
          </motion.h2>

          <motion.p
            variants={container(0.2)}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: false, amount: 0.2 }}>
            In today’s fast-paced job market, companies seek top talent without unnecessary hurdles.
            Our platform makes hiring seamless by allowing businesses to post job openings effortlessly
            while enabling candidates to apply without creating an account. Unlike traditional job boards
            filled with lengthy forms, we simplify the process—each job listing includes a direct company
            email, allowing skilled professionals to reach out instantly. This streamlined approach ensures
            that only motivated and expert candidates take the initiative, resulting in higher-quality applications.
            Whether you're a company looking for the best talent or a candidate searching for the perfect opportunity,
            our hassle-free system connects the right people in the easiest way possible. 🚀
          </motion.p>

          <motion.div
            variants={container(0.4)}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: false, amount: 0.2 }}
          >
            <button onClick={() => navigate('/vacancies')} className='button'>
              Go to vacancies
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: false, amount: 0.2 }}
          className="human_two">
          <img src={human_two} alt="Human" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroContentSecond;
