import ThanksStarUp from 'assets/svgs/ThanksStarUp.svg';
import ThanksStarDown from 'assets/svgs/ThanksStarDown.svg';
import { useEffect } from 'react';

const Thanks = () => {
  const sendData = async () => {
    const data = {
      first_name: localStorage.getItem('firstName'),
      last_name: localStorage.getItem('lastName'),
      email: localStorage.getItem('email'),
      had_covid: localStorage.getItem('hadCovid'),
      had_antibody_test:
        localStorage.getItem('hadAntibodyTest') === 'yes' ? true : false,
      antibodies: {
        test_date: localStorage.getItem('antibodyTestDate') || '2000-01-01',
        number: +localStorage.getItem('antibodyNumber') || 0,
      },
      had_vaccine: localStorage.getItem('hadVaccine') === 'yes' ? true : false,
      vaccination_stage: localStorage.getItem('vaccinationStage'),
      non_formal_meetings: localStorage.getItem('nonFormalMeetings'),
      number_of_days_from_office: +localStorage.getItem(
        'numberOfDaysFromOffice'
      ),
    };

    if (localStorage.getItem('whatAboutMeetingsInLive')) {
      data.what_about_meetings_in_live = localStorage.getItem(
        'whatAboutMeetingsInLive'
      );
    }

    if (localStorage.getItem('tellYourOpinion')) {
      data.tell_us_your_opinion_about_us =
        localStorage.getItem('tellYourOpinion');
    }

    const response = await fetch('https://covid19.devtest.ge/api/create', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    console.log(response);
    localStorage.clear();
  };

  useEffect(() => {
    // sendData();
  }, []);

  return (
    <main className='flex flex-col justify-center items-center bg-thanks-background h-screen'>
      <img
        src={ThanksStarUp}
        alt=''
        className=' mr-72 mb-3 animate-[moveUp_0.7s_ease-in-out]'
      />
      <h1 className='text-white text-[64px] font-TBC tracking-widest'>
        მადლობა
      </h1>
      <img
        src={ThanksStarDown}
        alt=''
        className=' ml-72 animate-[moveDown_0.7s_ease-in-out]'
      />
    </main>
  );
};

export default Thanks;
