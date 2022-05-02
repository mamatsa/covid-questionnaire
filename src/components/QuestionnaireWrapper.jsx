import RedberrySVG from 'assets/svgs/Redberry.svg';
import { useLocation } from 'react-router-dom';
import { useMemo } from 'react';
import Navigation from './Navigation';

const QuestionnaireWrapper = (props) => {
  let location = useLocation();
  const page = useMemo(() => +location.pathname.split('/').pop(), [location]);

  return (
    <main className='flex flex-col justify-center px-16 py-16 md:px-32 md:py-20 xl:px-48 '>
      <div>
        <div className=' flex justify-between'>
          <img src={RedberrySVG} alt='Redberry' />
          <p className=' text-4xl font-Anonymous'>{page}/4</p>
        </div>
        <div className=' w-full h-0.5 bg-dark-brown my-6 mb-11'></div>
      </div>
      <div className='flex'>
        <div className=' w-1/2'>{props.children}</div>
        <div className=' w-1/2'>
          <img src={props.image} alt='' className='h-min' />
        </div>
      </div>
      <Navigation page={page} form={props.form} />
    </main>
  );
};

export default QuestionnaireWrapper;
