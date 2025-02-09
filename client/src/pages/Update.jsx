import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { VACANCIES_API_URL } from '../constants';

const Update = () => {
  const navigate = useNavigate();
  const loc = useLocation();
  const vacancy = loc.state?.selectedJobForUpdate || {};

  const { auth } = useAuth();

  const [title, setTitle] = useState(vacancy.vacancy_title || '');
  const [content, setContent] = useState(vacancy.vacancy_content || '');
  const [location, setLocation] = useState(vacancy.vacancy_location || '');
  const [type, setType] = useState(vacancy.vacancy_type || '');
  const [salary, setSalary] = useState(vacancy.vacancy_salary || 0);

  const handleEditSubmit = async (e) => {
    e.preventDefault();

    const updatedVacancy = {
      vacancy_title: title,
      vacancy_content: content,
      vacancy_location: location,
      vacancy_type: type,
      vacancy_salary: salary,
      category_id: vacancy.category_id,
    };

    try {
      const response = await fetch(`${VACANCIES_API_URL}${vacancy.vacancy_id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${auth.token}`,
        },
        body: JSON.stringify(updatedVacancy),
      });

      if (!response.ok) {
        throw new Error('Failed to update vacancy');
      }

      const result = await response.json();
      console.log('Vacancy updated successfully:', result);
      navigate('/dashboard');
    } catch (error) {
      console.error('Error updating vacancy:', error.message);
    }
  };

  return (
    <section className="container-parent">
      <div className="container box-shadow-none container-center">
        <div className='card'>
          <div className='card-info'>
            <h1 className='bg-text'>Update the data</h1>
            <form onSubmit={handleEditSubmit}>

              <div className="input-group">
                <label>Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder='Front-End Developer, etc.'
                />
              </div>

              <div className="input-group">
                <label>Content</label>
                <textarea
                  name="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder='Vacancy info'
                />
              </div>

              <div className="input-group">
                <label>Location</label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder='Baku, Azerbaijan'
                />
              </div>

              <div className="input-group">
                <label>Type</label>
                <input
                  type="text"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  placeholder='Full-Time, Part-Time, etc.'
                />
              </div>

              <div className='input-group'>
                <label>Salary</label>
                <input
                  type="number"
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                  placeholder='Salary'
                />
              </div>

              <button
                type="submit"
                className="button"
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Update;
