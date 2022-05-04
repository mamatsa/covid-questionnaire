import ThanksStarUp from 'assets/svgs/ThanksStarUp.svg';
import ThanksStarDown from 'assets/svgs/ThanksStarDown.svg';
import { useContext } from 'react';
import QuestionnaireContext from 'state/questionnaire-context';

const Thanks = () => {
  const { answers, resetContext } = useContext(QuestionnaireContext);

  const sendData = async () => {
    const data = {
      first_name: answers.firstName,
      last_name: answers.email,
      had_covid: answers.hadCovid,
      had_antibody_test: answers.hadAntibodyTest === 'yes' ? true : false,
      antibodies: {
        test_date: answers.antibodyTestDate,
        number: +answers.antibodyNumber,
      },
      had_vaccine: answers.hadVaccine === 'yes' ? true : false,
      vaccination_stage: answers.vaccinationStage,
      non_formal_meetings: answers.nonFormalMeetings,
      number_of_days_from_office: +answers.numberOfDaysFromOffice,
    };

    if (answers.whatAboutMeetingsInLive) {
      data.what_about_meetings_in_live = answers.whatAboutMeetingsInLive;
    }

    if (answers.tellYourOpinion) {
      data.tell_us_your_opinion_about_us = answers.tellYourOpinion;
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
    resetContext();
  };

  sendData();

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
