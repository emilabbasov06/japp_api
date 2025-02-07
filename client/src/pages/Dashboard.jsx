import React from 'react';
import { MdWork } from "react-icons/md";
import { useAuth } from '../context/AuthContext';
import { useState, useEffect } from 'react';
import { LOGGED_IN_COMPANY_DASHBOARD_DATA } from '../constants';

const Dashboard = () => {
  const { auth } = useAuth();
  const [companyData, setCompanyData] = useState(null);
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    const fetchCompanyData = async () => {
      if (!auth.companyId) return;

      setLoading(true); // Start loading
      try {
        const response = await fetch(`${LOGGED_IN_COMPANY_DASHBOARD_DATA}${auth.companyId}`, {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        });

        if (!response.ok) throw new Error("Failed to fetch company data");

        const data = await response.json();
        setCompanyData(data);
      } catch (error) {
        console.error("Error fetching company data:", error.message);
        setCompanyData(null); // Ensure it's explicitly set to avoid errors
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchCompanyData();
  }, [auth.companyId, auth.token]);

  if (loading) return <p>Loading company data...</p>;

  return (
    <section className='dashboard'>
      <div className='stats'>
        <h2 className='heading-h2'>Application statistics</h2>
        <div>
          <div className="stat_one">
            <MdWork size={50} color='#4f46e5' />
            <div>
              <span className='count'>{companyData.vacancy_count}</span>
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
            {companyData.vacancies.map((vacancy, index) => (
              <tr key={index}>
                <td>{vacancy.vacancy_id}</td>
                <td>{vacancy.vacancy_title}</td>
                <td>{vacancy.vacancy_content}</td>
                <td>{vacancy.vacancy_location}</td>
                <td>{vacancy.vacancy_type}</td>
                <td>{vacancy.vacancy_salary} AZN</td>
                <td>{vacancy.vacancy_start_date}</td>
                <td>{vacancy.vacancy_end_date}</td>
                <td>{vacancy.category_id}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;