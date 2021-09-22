import React, { FC, ReactNode } from 'react';

interface PrepProps {
  icon: ReactNode;
  title: string;
  num: string;
  numName?: string;
  className?: string;
}

const Prep: FC<PrepProps> = ({
  icon,
  title,
  num,
  numName,
  className,
}) => {
  return (
    <div className={'flex ' + className}>
      <span>{icon}</span>
      <div className='ml-2'>
        <h3 className='text-xs font-semibold text-gray-400 lg:text-base'>
          {title}
        </h3>
        <span
          className={
            'text-sm lg:text-lg' + numName
          }
        >
          {num}
        </span>
      </div>
    </div>
  );
};

export default Prep;
