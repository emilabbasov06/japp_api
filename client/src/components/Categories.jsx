import React from 'react';
import { useState, useEffect } from 'react';

import CategoryCard from './CategoryCard';


const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesResponse = await fetch("http://127.0.0.1:8000/categories/");
        const categoriesData = await categoriesResponse.json();
        setCategories(categoriesData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);


  return (
    <div className='cate'>
      <div className="categories">
        <h1>Kateqoriyalar</h1>
        <div>
          {categories.map((category, index) => (
            <CategoryCard key={index} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;