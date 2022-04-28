import CompanyLogo from 'assets/svgs/Logo.svg';

const Start = () => {
  return (
    <main className='min-h-screen flex flex-col justify-center items-center  gap-24 '>
      <img src={CompanyLogo} alt='logo' />
      <a
        className='text-3xl font-semibold text-center font-TBC relative start-text-wrapper'
        href='/questionnaire/1'
      >
        <div className='relative z-10'>
          <p>კითხვარის</p>
          <p>დაწყება</p>
        </div>
        <div className='hover:block absolute left-0.5 top-0 start-text'>
          <p>კითხვარის</p>
          <p>დაწყება</p>
        </div>
      </a>
    </main>
  );
};

export default Start;
