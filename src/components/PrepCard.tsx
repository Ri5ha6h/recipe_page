import React from 'react';
import Prep from './Prep';
import { GiKnifeFork } from 'react-icons/gi';
import { BiTimeFive } from 'react-icons/bi';

const PrepCard = () => {
  return (
    <div className='lg:flex-1 lg:order-2 lg:mt-8 lg:flex lg:justify-center'>
      <div className=' lg:shadow-xl lg:flex lg:flex-col lg:justify-center lg:items-center lg:h-96 lg:w-72 lg:rounded-xl'>
        <div className=''>
          <Prep
            icon={
              <GiKnifeFork className='w-6 h-6 text-yellow-500 lg:w-8 lg:h-8'></GiKnifeFork>
            }
            title='YIELDS'
            num='12 Servings'
            numName='text-yellow-500'
          />
        </div>
        <div className='flex mt-6 space-x-4 lg:flex-col lg:space-y-9 lg:space-x-0 lg:mb-10 lg:mt-10'>
          <Prep
            icon={
              <BiTimeFive className='w-7 h-7 lg:w-9 lg:h-9'></BiTimeFive>
            }
            title='PREP TIME'
            num='45 minutes'
          />
          <Prep
            icon={
              <BiTimeFive className='w-7 h-7 lg:w-9 lg:h-9'></BiTimeFive>
            }
            title='COOK TIME'
            num='1 hour'
          />
          <Prep
            icon={
              <BiTimeFive className='w-7 h-7 lg:w-9 lg:h-9'></BiTimeFive>
            }
            title='TOTAL TIME'
            num='1.45 hours'
          />
        </div>
      </div>
    </div>
  );
};

export default PrepCard;
