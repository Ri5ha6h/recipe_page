import React from 'react';
import dot from '../images/6dots.svg';
import cheeseCake from '../images/photo1.png';

const About = () => {
  return (
    <div>
      <h1 className='text-5xl font-bold'>
        Classic Cheesecake Recipe
      </h1>
      <div className='flex mt-4'>
        <img
          className='w-6 h-6'
          src={dot}
          alt='dot'
        />
        <p className='ml-3 text-lg italic text-gray-500 lg:w-2/3 xl:w-2/5'>
          Look no further for a creamy and ultra
          smooth classic cheesecake recipe! Paired
          with a buttery graham cracker crust, no
          one can deny its simple decadence. For
          the best results, bake in a water bath.
        </p>
      </div>
      <div className='mt-7'>
        <img src={cheeseCake} alt='cheese-cake' />
      </div>
    </div>
  );
};

export default About;
