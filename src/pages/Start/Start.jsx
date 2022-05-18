import { Link } from 'react-router-dom';
import { RedberryLogo } from 'pages/Start/components/';

const Start = () => {
  return (
    <main className='min-h-screen flex flex-col justify-center items-center  gap-24 overflow-hidden'>
      <RedberryLogo className='animate-[shrink_0.6s_ease-in-out] relative z-20' />
      <Link
        className='text-3xl font-semibold text-center font-TBC relative start-text-wrapper'
        to='/questionnaire/1'
        id='start-button'
      >
        <div className='relative z-10 animate-[drop_1s_ease-in-out]'>
          <p>კითხვარის</p>
          <p>დაწყება</p>
        </div>
        <div className='hover:block absolute left-0.5 top-0 start-text'>
          <p>კითხვარის</p>
          <p>დაწყება</p>
        </div>
      </Link>
    </main>
  );
};

export default Start;
