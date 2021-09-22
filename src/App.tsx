import React, { memo } from 'react';
import About from './components/About';
import InstructionsList from './components/InstructionsList';
import Preparation from './components/Preparation';

const App = () => {
  return (
    <div className='px-4 pt-12 pb-5 font-mono sm:px-14 md:px-24 lg:px-36 xl:px-60'>
      <About />
      <Preparation />
      <InstructionsList />
      <div className='mt-14'>
        <a
          className='text-xl italic text-gray-300'
          href='https://sallysbakingaddiction.com/classic-cheesecake/'
          target='_blank'
        >
          Source:
          https://sallysbakingaddiction.com/classic-cheesecake/
        </a>
      </div>
      <div className='flex justify-center mt-10'>
        <p className='text-gray-400'>
          created by{' '}
          <a
            className='border-b-2 '
            href='https://devchallenges.io/portfolio/Ri5ha6h'
          >
            Rishabh Malik
          </a>{' '}
          - devChallenges.io
        </p>
      </div>
    </div>
  );
};

export default memo(App);
