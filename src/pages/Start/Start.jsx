import CompanyLogo from 'assets/svgs/Logo.svg';
import { Link } from 'react-router-dom';

const Start = () => {
  return (
    <main className='min-h-screen flex flex-col justify-center items-center  gap-24 overflow-hidden'>
      <img
        src={CompanyLogo}
        alt='logo'
        className='animate-[shrink_0.5s_ease-in-out]'
      />
      <Link
        className='text-3xl font-semibold text-center font-TBC relative start-text-wrapper'
        to='/questionnaire/1'
      >
        <div className='relative z-10'>
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
