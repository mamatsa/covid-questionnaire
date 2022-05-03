import React from 'react';
import ArrowRight from 'assets/svgs/ArrowRight.svg';
import ArrowLeft from 'assets/svgs/ArrowLeft.svg';

const Navigation = ({ page, form, formIsValid = true }) => {
  return (
    <div className='flex justify-center space-x-32 '>
      <a
        href={`/questionnaire/${page - 1}`}
        className={page === 1 ? 'opacity-0 pointer-events-none' : ''}
      >
        <img src={ArrowLeft} alt='' />
      </a>

      <button
        type='submit'
        form={form}
        className={`${page === 4 ? 'opacity-0 pointer-events-none' : ''} ${
          formIsValid ? '' : ' opacity-50 pointer-events-none'
        }`}
      >
        <img src={ArrowRight} alt='' />
      </button>
    </div>
  );
};

export default Navigation;
