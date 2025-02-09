import React from 'react';
import { IoLocationSharp } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import { IoTime } from "react-icons/io5";

const VacancyModal = ({ vacancy, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className='bg-text'>{vacancy.vacancy_title}</h2>
        <div className='job-particles'>
          <p><span><MdWork size={25} color='orange' /></span> {vacancy.vacancy_type}</p>
          <p><span><IoLocationSharp size={25} color='dodgerblue' /></span> {vacancy.vacancy_location}</p>
          <p><span><IoTime size={25} color='darkorchid' /></span> {vacancy.vacancy_end_date}</p>
        </div>
        <h3>Detailed information</h3>
        <p>{vacancy.vacancy_content}</p>
        <button className='button' onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default VacancyModal;
