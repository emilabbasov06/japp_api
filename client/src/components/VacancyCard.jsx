import React, { useState } from 'react';
import { motion } from 'framer-motion';

const VacancyCard = ({ vacancy, onApply }) => {
  return (
    <motion.div
      className="card card-bigger"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className='card-info flex-center'>
        <h2 className="bg-text">{vacancy.vacancy_title}</h2>
        <div className='btn_div'>
          <button onClick={() => onApply(vacancy)} className='button'>Apply</button>
        </div>
      </div>
    </motion.div >
  );
};

export default VacancyCard;
