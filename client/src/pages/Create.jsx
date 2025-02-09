import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { VACANCIES_API_URL } from '../constants';
import { useNavigate } from 'react-router-dom';

const Update = () => {
  const { auth } = useAuth();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [location, setLocation] = useState('');
  const [salary, setSalary] = useState('');
  const [type, setType] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [categoryID, setCategoryID] = useState(1);


  const handleCreateSubmit = async (e) => {
    e.preventDefault();

    const createdVacancy = {
      vacancy_title: title,
      vacancy_content: content,
      vacancy_location: location,
      vacancy_type: type,
      vacancy_salary: parseFloat(salary),
      vacancy_start_date: startDate,
      vacancy_end_date: endDate,
      category_id: parseInt(categoryID, 10),
      company_id: auth.companyId,
    };

    console.log(createdVacancy);

    try {
      const response = await fetch(`${VACANCIES_API_URL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${auth.token}`,
        },
        body: JSON.stringify(createdVacancy),
      });

      if (!response.ok) {
        throw new Error('Failed to create vacancy');
      }

      const result = await response.json();
      console.log('Vacancy created successfully:', result);
      navigate('/dashboard');
    } catch (error) {
      console.error('Error creating vacancy:', error.message);
    }
  };


  return (
    <section className="container-parent">
      <div className="container box-shadow-none container-center">
        <div className='card'>
          <div className='card-info'>
            <h1 className='bg-text'>Create the vacancy</h1>
            <form onSubmit={handleCreateSubmit}>

              <div className="input-group">
                <label>Title</label>
                <input
                  type="text"
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder='Front-End Developer, etc.'
                />
              </div>

              <div className="input-group">
                <label>Content</label>
                <textarea
                  name="content"
                  onChange={(e) => setContent(e.target.value)}
                  placeholder='Vacancy info'
                />
              </div>

              <div className="input-group">
                <label>Location</label>
                <input
                  type="text"
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder='Baku, Azerbaijan'
                />
              </div>

              <div className="input-group">
                <label>Type</label>
                <input
                  type="text"
                  onChange={(e) => setType(e.target.value)}
                  placeholder='Full-Time, Part-Time, etc.'
                />
              </div>

              <div className='input-group'>
                <label>Salary</label>
                <input
                  type="number"
                  onChange={(e) => setSalary(e.target.value)}
                  placeholder='Salary'
                />
              </div>

              <div className='input-group'>
                <label>Start Date</label>
                <input
                  type="text"
                  onChange={(e) => setStartDate(e.target.value)}
                  placeholder='Year-Month-Day'
                />
              </div>

              <div className='input-group'>
                <label>End Date</label>
                <input
                  type="text"
                  onChange={(e) => setEndDate(e.target.value)}
                  placeholder='Year-Month-Day'
                />
              </div>

              <div className='input-group'>
                <label>Category ID</label>
                <input
                  type="number"
                  onChange={(e) => setCategoryID(e.target.value)}
                  placeholder='For example: 1'
                />
              </div>

              <button
                type="submit"
                className="button"
              >
                Post
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Update;
