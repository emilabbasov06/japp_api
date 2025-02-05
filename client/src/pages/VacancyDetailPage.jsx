import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const VacancyDetailPage = () => {
  const { id } = useParams();
  return (
    <div>
      VacancyDetailPage
    </div>
  );
};
export default VacancyDetailPage;
