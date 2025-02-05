import React from 'react';
import { useParams } from 'react-router-dom';

const CompanyDetailPage = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Company Details</h1>
      <p>Showing details for company ID: {id}</p>
    </div>
  );
};

export default CompanyDetailPage;
