import { ReactComponent as RedberrySVG } from 'components/svgs/Redberry.svg';
import { useLocation } from 'react-router-dom';
import { useMemo } from 'react';
import Navigation from 'components/Navigation';

const QuestionnaireWrapper = (props) => {
  let location = useLocation();
  const page = useMemo(() => +location.pathname.split('/').pop(), [location]);

  return (
    <div className=' min-h-screen relative'>
      <main className='flex flex-col justify-center px-16 py-16 md:px-32 md:py-20 xl:px-48 relative'>
        <div>
          <div className=' flex justify-between'>
            <RedberrySVG />
            <p className=' text-4xl font-Anonymous'>{page}/4</p>
          </div>
          <div className=' w-full h-0.5 bg-dark-brown my-6 mb-11'></div>
        </div>
        <div className='flex'>
          <div className=' md:w-1/2'>{props.children}</div>
          <div className='hidden md:block md:w-1/2'>
            <img src={props.image} alt='' className=' none h-min max-w-[80%]' />
          </div>
        </div>
      </main>
      <Navigation
        page={page}
        form={props.form}
        formIsValid={props.formIsValid}
      />
    </div>
  );
};

export default QuestionnaireWrapper;
