import React from 'react';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Update = () => {
  const navigate = useNavigate();

  const loc = useLocation();
  const vacancy = loc.state?.vacancy || {};

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [location, setLocation] = useState('');
  const [type, setType] = useState('');
  const [salary, setSalary] = useState(0);

  const handleSubmit = () => {
    console.log(title);
    console.log(location);
    console.log(content);
    console.log(type);
    console.log(salary);
  };

  return (
    <main>
      <div className='update'>
        <h1 className='heading'>Update the data</h1>
        <form onSubmit={handleSubmit} action='/edit'>
          <div className="input-group">
            <label>Title</label>
            <input type="text" value={vacancy.vacancy_title} onChange={(e) => setTitle(e.target.value)} placeholder='Front-End Developer, etc.' />
          </div>

          <div className="input-group">
            <label>Content</label>
            <textarea name="content" value={vacancy.vacancy_content} onChange={(e) => setContent(e.target.value)} placeholder='Vacancy info' id=""></textarea>
          </div>

          <div className="input-group">
            <label>Location</label>
            <input type="text" value={vacancy.vacancy_location} onChange={(e) => setLocation(e.target.value)} placeholder='Baku, Azerbaijan' />
          </div>

          <div className="input-group">
            <label>Type</label>
            <input type="text" value={vacancy.vacancy_type} onChange={(e) => setType(e.target.value)} placeholder='Full-Time, Part-Time, etc.' />
          </div>

          <div className='input-group'>
            <label>Salary</label>
            <input type="number" value={vacancy.vacancy_salary} onChange={(e) => setSalary(e.target.value)} placeholder='Salary' />
          </div>

          <button
            type="submit"
            className="signup-button"
          >
            Save
          </button>
        </form>
      </div>
    </main>
  );
};

export default Update;