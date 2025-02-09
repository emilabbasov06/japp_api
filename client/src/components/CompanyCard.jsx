import React from 'react';
import { motion } from 'framer-motion';

const CompanyCard = ({ company, onReadMore }) => {
  return (
    <motion.div
      className='card'
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className='card-info flex-center'>
        <h2 className="bg-text">{company.company_name}</h2>
        <div>
          <button onClick={() => onReadMore(company)} className='button'>Read More...</button>
        </div>
      </div>
    </motion.div >
  );
};

export default CompanyCard;

