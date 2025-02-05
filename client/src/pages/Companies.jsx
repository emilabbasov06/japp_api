import React from 'react';
import { useState, useEffect } from 'react';
import CompanyCard from '../components/CompanyCard';

const Companies = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/companies/`);

        if (!response.ok) {
          throw new Error("Failed to fetch companies");
        }

        const data = await response.json();
        setCompanies(data);
      } catch (error) {
        console.error("Error fetching companies:", error);
      }
    };

    fetchCompanies();
  }, []);

  return (
    <div className='v_page'>
      <h1 className='heading-h1'>Companies</h1>
      <div className='companies'>
        {companies.map((company, key) => (
          <CompanyCard key={key} company={company} />
        ))}
      </div>
    </div>
  );
};

export default Companies;