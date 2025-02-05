import React, { useState, useEffect } from 'react';
import CompanyCard from '../components/CompanyCard';
import CompanyModal from '../components/CompanyModal';

const Companies = () => {
  const [companies, setCompanies] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState(null);

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
        {companies.map((company, index) => (
          <CompanyCard
            key={index}
            company={company}
            onReadMore={() => setSelectedCompany(company)}
          />
        ))}
      </div>
      {selectedCompany && (
        <CompanyModal company={selectedCompany} onClose={() => setSelectedCompany(null)} />
      )}
    </div>
  );
};

export default Companies;
