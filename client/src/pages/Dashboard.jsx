import React from 'react';
import { MdWork } from "react-icons/md";

const Dashboard = () => {
  return (
    <section className='dashboard'>
      <div className='stats'>
        <h2 className='heading-h2'>Application statistics</h2>
        <div>
          <div className="stat_one">
            <MdWork size={50} color='#4f46e5' />
            <div>
              <span className='count'>844</span>
              <small>Posted Jobs</small>
            </div>
          </div>
        </div>
      </div>


      <div className='stats'>
        <h2 className='heading-h2'>Posted Jobs</h2>
        <div>
          <table>
            <tr>
              <th>Vacancy ID</th>
              <th>Title</th>
              <th>Content</th>
              <th>Location</th>
              <th>Type</th>
              <th>Salary</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>CID</th>
            </tr>
            <tr>
              <td>6</td>
              <td>Backend Developer</td>
              <td>We are looking for an experienced backend developer with expertise in FastAPI and SQLAlchemy.</td>
              <td>Berlin, Germany</td>
              <td>Full-Time</td>
              <td>$6000</td>
              <td>2025-02-03</td>
              <td>2025-02-03</td>
              <td>1</td>
            </tr>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;