import React from 'react';
import { useState, useEffect } from 'react';
import VacancyCard from '../components/VacancyCard';
import VacancyModal from '../components/VacancyModal';
import { VACANCIES_API_URL } from '../constants';

const Vacancies = () => {
  const [vacancies, setVacancies] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedVacancy, setSelectedVacancy] = useState(null);

  useEffect(() => {
    const fetchVacancies = async () => {
      try {
        const query = search ? `?search=${search}` : ""; // If search is empty, fetch all vacancies
        const response = await fetch(`${VACANCIES_API_URL}${query}`);

        if (!response.ok) {
          throw new Error("Failed to fetch vacancies");
        }

        const data = await response.json();
        setVacancies(data);
      } catch (error) {
        console.error("Error fetching vacancies:", error);
      }
    };

    fetchVacancies();
  }, [search]);

  return (
    <section className="container-parent">
      <div className='container vacancies-container'>
        <h1 className='bg-text font-4'>Vacancies</h1>
        <input type="search" className='search' placeholder='Search for vacancies...' onChange={(e) => setSearch(e.target.value)} />
        <div className='vacancies'>
          {vacancies.map((vacancy, key) => (
            <VacancyCard key={key} vacancy={vacancy} onApply={() => setSelectedVacancy(vacancy)} />
          ))}
        </div>
        {selectedVacancy && (
          <VacancyModal vacancy={selectedVacancy} onClose={() => setSelectedVacancy(null)} />
        )}
      </div>
    </section>
  );
};

export default Vacancies;