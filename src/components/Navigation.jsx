import React from 'react';
import ArrowRight from 'assets/svgs/ArrowRight.svg';
import ArrowLeft from 'assets/svgs/ArrowLeft.svg';

const Navigation = ({ page, form }) => {
  return (
    <div className='flex justify-center space-x-32'>
      <a
        href={`/questionnaire/${page - 1}`}
        className={page === 1 ? 'opacity-0 pointer-events-none' : ''}
      >
        <img src={ArrowLeft} alt='' />
      </a>

      <button
        type='submit'
        form={form}
        className={page === 4 ? 'opacity-0' : ''}
      >
        <img src={ArrowRight} alt='' />
      </button>
    </div>
  );
};

export default Navigation;
