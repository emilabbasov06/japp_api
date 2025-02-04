import React from 'react';

const CategoryCard = ({ category }) => {
  return (
    <div className='category'>
      <h2>{category.category_name}</h2>
    </div>
  );
};

export default CategoryCard;