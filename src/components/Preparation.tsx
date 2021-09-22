import React from 'react';
import IngredientsList from './IngredientsList';
import PrepCard from './PrepCard';

const Preparation = () => {
  return (
    <div className='mt-10 lg:flex'>
      <PrepCard />
      <IngredientsList />
    </div>
  );
};

export default Preparation;
