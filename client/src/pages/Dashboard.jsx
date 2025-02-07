// import React from 'react';
// import { MdWork } from "react-icons/md";
// import { useAuth } from '../context/AuthContext';
// import { useState, useEffect } from 'react';
// import { LOGGED_IN_COMPANY_DASHBOARD_DATA } from '../constants';

// const Dashboard = () => {
//   const { auth } = useAuth();
//   const [companyData, setCompanyData] = useState(null);
//   const [categoryData, setCategoryData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchCompanyData = async () => {
//       if (!auth.companyId) return;

//       setLoading(true);
//       try {
//         const response = await fetch(`${LOGGED_IN_COMPANY_DASHBOARD_DATA}${auth.companyId}`, {
//           headers: {
//             Authorization: `Bearer ${auth.token}`,
//           },
//         });

//         if (!response.ok) throw new Error("Failed to fetch company data");

//         const data = await response.json();
//         setCompanyData(data);
//       } catch (error) {
//         console.error("Error fetching company data:", error.message);
//         setCompanyData(null);
//       } finally {
//         setLoading(false);
//       }
//     };

//     const fetchCategoryData = async () => {
//       try {
//         const response = await fetch('http://localhost:8000/api/categories/');
//         const data = response.json();
//         setCategoryData(data);
//       } catch (error) {
//         console.error("Error fetching categories data:", error.message);
//         setCategoryData(null);
//       }
//     };

//     fetchCategoryData();
//     fetchCompanyData();
//   }, [auth.companyId, auth.token]);

//   if (loading) return <p>Loading company data...</p>;

//   return (
//     <section className='dashboard'>
//       <div>
//         <div className='stats'>
//           <h2 className='heading-h2'>Application statistics</h2>
//           <div>
//             <div className="stat_one">
//               <MdWork size={50} color='#4f46e5' />
//               <div>
//                 <span className='count'>{companyData.vacancy_count}</span>
//                 <small>Posted Jobs</small>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className='categories'>
//           <h2 className='heading-h2'>Categories</h2>
//           <div>
//             <table>
//               <tr>
//                 <th>CID</th>
//                 <th>Category Name</th>
//               </tr>
//               {categoryData.map((category) => (
//                 <tr key={index}>
//                   <td>{category.category_id}</td>
//                   <td>{category.category_name}</td>
//                 </tr>
//               ))}
//             </table>
//           </div>
//         </div>
//       </div>

//       <div className='stats'>
//         <h2 className='heading-h2'>Posted Jobs</h2>
//         <div>
//           <table>
//             <tr>
//               <th>Vacancy ID</th>
//               <th>Title</th>
//               <th>Content</th>
//               <th>Location</th>
//               <th>Type</th>
//               <th>Salary</th>
//               <th>Start Date</th>
//               <th>End Date</th>
//               <th>CID</th>
//             </tr>
//             {companyData.vacancies.map((vacancy, index) => (
//               <tr key={index}>
//                 <td>{vacancy.vacancy_id}</td>
//                 <td>{vacancy.vacancy_title}</td>
//                 <td>{vacancy.vacancy_content}</td>
//                 <td>{vacancy.vacancy_location}</td>
//                 <td>{vacancy.vacancy_type}</td>
//                 <td>{vacancy.vacancy_salary} AZN</td>
//                 <td>{vacancy.vacancy_start_date}</td>
//                 <td>{vacancy.vacancy_end_date}</td>
//                 <td>{vacancy.category_id}</td>
//               </tr>
//             ))}
//           </table>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Dashboard;


import React, { useState, useEffect } from 'react';
import { MdWork } from "react-icons/md";
import { useAuth } from '../context/AuthContext';
import { LOGGED_IN_COMPANY_DASHBOARD_DATA } from '../constants';

const Dashboard = () => {
  const { auth } = useAuth();
  const [companyData, setCompanyData] = useState(null);
  const [categoryData, setCategoryData] = useState([]); // Fix: Use empty array
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCompanyData = async () => {
      if (!auth.companyId) return;

      setLoading(true);
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
        setCompanyData(null);
      } finally {
        setLoading(false);
      }
    };

    const fetchCategoryData = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/categories/');
        if (!response.ok) throw new Error("Failed to fetch categories");

        const data = await response.json(); // Fix: Await response.json()
        setCategoryData(data);
      } catch (error) {
        console.error("Error fetching categories data:", error.message);
        setCategoryData([]);
      }
    };

    fetchCategoryData();
    fetchCompanyData();
  }, [auth.companyId, auth.token]);

  if (loading) return <p>Loading company data...</p>;

  return (
    <section className='dashboard'>
      <div className='top'>
        <div className='stats'>
          <h2 className='heading-h2'>Application statistics</h2>
          <div className="stat_one">
            <MdWork size={50} color='#4f46e5' />
            <div>
              <span className='count'>{companyData?.vacancy_count || 0}</span>
              <small>Posted Jobs</small>
            </div>
          </div>
        </div>

        {/* Categories Section */}
        <div className='categories'>
          <h2 className='heading-h2'>Categories</h2>
          <div>
            <table>
              <thead>
                <tr>
                  <th>CID</th>
                  <th>Category Name</th>
                </tr>
              </thead>
              <tbody>
                {categoryData.map((category, index) => (
                  <tr key={index}>
                    <td>{category.category_id}</td>
                    <td>{category.category_name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Posted Jobs Section */}
      <div className='stats'>
        <h2 className='heading-h2'>Posted Jobs</h2>
        <div>
          <table>
            <thead>
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
            </thead>
            <tbody>
              {companyData?.vacancies?.map((vacancy, index) => ( // Fix: Ensure safe access
                <tr key={index}>
                  <td>{vacancy.vacancy_id}</td>
                  <td>{vacancy.vacancy_title}</td>
                  <td>{vacancy.vacancy_content}</td>
                  <td>{vacancy.vacancy_location}</td>
                  <td>{vacancy.vacancy_type}</td>
                  <td>{vacancy.vacancy_salary} AZN</td>
                  <td>{new Date(vacancy.vacancy_start_date).toLocaleDateString()}</td>
                  <td>{new Date(vacancy.vacancy_end_date).toLocaleDateString()}</td>
                  <td>{vacancy.category_id}</td>
                </tr>
              )) || <tr><td colSpan="9">No jobs posted yet.</td></tr>}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
