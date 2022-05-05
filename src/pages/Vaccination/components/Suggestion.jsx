import React from 'react';

const Suggestion = ({ text }) => {
  return (
    <div className=' ml-7 text-xl'>
      <p>{text}</p>
      <p className='mt-3'>&#x1F447; რეგისტრაციის ბმული</p>
      <a href='https://booking.moh.gov.ge/' className=' text-blue-500'>
        https://booking.moh.gov.ge/
      </a>
    </div>
  );
};

export default Suggestion;
