import React, { FC, ReactNode } from 'react';

interface ListProps {
  item: string;
}

const Ingredient: FC<ListProps> = ({ item }) => {
  return (
    <li className='mt-3'>
      <input
        className='cursor-pointer'
        type='checkbox'
      />{' '}
      {item}
    </li>
  );
};

export default Ingredient;
