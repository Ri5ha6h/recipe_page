import React from 'react';
import Ingredient from './Ingredient';

const IngredientsList = () => {
  return (
    <div className='mt-8 lg:flex-1 lg:order-1'>
      <h2 className='text-2xl font-bold'>
        Ingredients
      </h2>
      <div className='mt-5'>
        <h3 className='text-lg italic'>
          Graham Cracker Crust
        </h3>
        <ul className='mt-5'>
          <Ingredient item='1 and 1/2 cups (150g) graham cracker crumbs (about 10 full sheet graham crackers)' />
          <Ingredient item='5 Tablespoons (70g) unsalted butter, melted ' />
          <Ingredient item='1/4 cup (50g) granulated sugar' />
        </ul>
      </div>
      <div className='mt-5'>
        <h3 className='text-lg italic'>
          Cheesecake
        </h3>
        <ul className='mt-5'>
          <Ingredient item='four 8-ounce blocks (904g) full-fat cream cheese, softened to room temperature' />
          <Ingredient item='1 cup (200g) granulated sugar' />
          <Ingredient item='1 cup (240g) full-fat sour cream, at room temperature' />
          <Ingredient item='1 teaspoon pure vanilla extract' />
          <Ingredient item='2 teaspoons fresh lemon juice (optional, but recommended)' />
          <Ingredient item='3 large eggs, at room temperature' />
          <Ingredient item='topping suggestions: salted caramel, lemon curd, strawberry topping, chocolate ganache, red wine chocolate ganache, fresh fruit, whipped cream, or raspberry sauce (recipe in notes)' />
        </ul>
      </div>
    </div>
  );
};

export default IngredientsList;
