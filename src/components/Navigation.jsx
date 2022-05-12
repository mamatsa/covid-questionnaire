import React from 'react';
import ArrowRight from 'assets/svgs/ArrowRight.svg';
import ArrowLeft from 'assets/svgs/ArrowLeft.svg';
import { Link } from 'react-router-dom';

const Navigation = ({ page, form, formIsValid = true }) => {
  return (
    <div className='flex justify-center space-x-32 absolute bottom-14 right-1/2 translate-x-1/2'>
      <Link
        to={`/questionnaire/${page - 1}`}
        className={page === 1 ? 'opacity-0 pointer-events-none' : ''}
      >
        <img src={ArrowLeft} alt='' />
      </Link>

      <button
        type='submit'
        form={form}
        id='navigation-next'
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
