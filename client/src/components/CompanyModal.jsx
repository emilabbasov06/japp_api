import React from 'react';

const CompanyModal = ({ company, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className='bg-text'>{company.company_name}</h2>
        <p>{company.company_info}</p>
        <p><span>Email</span>: <a href={"mailto:" + company.company_email}>{company.company_name}</a></p>
        <button className='button' onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default CompanyModal;
