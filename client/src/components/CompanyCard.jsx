import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const CompanyCard = ({ company }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="login-card v_card"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className='v_info'>
        <h2 className="login-title heading-h2">{company.company_name}</h2>
        <div className='btn_div'>
          <button onClick={() => navigate(`/companies/${company.company_id}`)} className='button'>Read More...</button>
        </div>
      </div>
    </motion.div >
  );
};

export default CompanyCard;
