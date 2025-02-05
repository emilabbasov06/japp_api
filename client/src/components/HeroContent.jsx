import React from 'react';
import human_one from '../assets/images/human_one.jpg';
import human_two from '../assets/images/human_two.jpg';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const HeroContent = () => {
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
    <div className='heros'>
      <section>
        <div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.2 }} // Triggers every time in view
            className="human_one">
            <img src={human_one} alt="Human" />
          </motion.div>

          <div className="content_one">
            <motion.h2
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false, amount: 0.2 }}
              className='heading-h2'>
              Get Hired in 3 Easy Steps – No Forms, No Hassle!
            </motion.h2>

            <motion.ul whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: false, amount: 0.2 }}>
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

      <section>
        <div>
          <div className="content_two">
            <motion.h2
              variants={container(0)}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: false, amount: 0.2 }}
              className='heading-h2'>
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
              className='btn_div'>
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
    </div>
  );
};

export default HeroContent;
