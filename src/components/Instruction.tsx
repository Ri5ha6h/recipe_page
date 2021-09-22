import React, { FC } from 'react';

interface InstructProps {
  count: number;
  instruct: string;
}

const Instruction: FC<InstructProps> = ({
  count,
  instruct,
}) => {
  return (
    <div className='flex w-full mt-4'>
      <div className='flex items-center justify-center w-10 h-10 text-xl text-white bg-yellow-500 rounded-md'>
        {count}
      </div>
      <p className='ml-5 text-lg w-72 sm:w-3/5'>
        {instruct}
      </p>
    </div>
  );
};

export default Instruction;
