import React, { useState, useEffect } from 'react';
import CompanyCard from '../components/CompanyCard';
import CompanyModal from '../components/CompanyModal';
import { COMPANIES_API_URL } from '../constants';

const Companies = () => {
  const [companies, setCompanies] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState(null);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await fetch(COMPANIES_API_URL);

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
    <section className='container-parent'>
      <div className="container companies-container">
        <h1 className='bg-text font-3'>Companies</h1>
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
    </section>
  );
};

export default Companies;
