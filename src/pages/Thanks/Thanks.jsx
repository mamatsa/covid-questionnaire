import { ReactComponent as ThanksStarUp } from 'pages/Thanks/components/ThanksStarUp.svg';
import { ReactComponent as ThanksStarDown } from 'pages/Thanks/components/ThanksStarDown.svg';
import { useContext, useEffect } from 'react';
import QuestionnaireContext from 'state/QuestionnaireContext';
import { useNavigate } from 'react-router-dom';

const Thanks = () => {
  const { answers, resetContext } = useContext(QuestionnaireContext);
  const navigate = useNavigate();

  useEffect(() => {
    const sendData = async () => {
      const data = {
        first_name: answers.firstName,
        last_name: answers.lastName,
        email: answers.email,
        had_covid: answers.hadCovid,
        had_antibody_test: true,
        had_vaccine: answers.hadVaccine === 'yes' ? true : false,
        non_formal_meetings: answers.nonFormalMeetings,
        number_of_days_from_office: +answers.numberOfDaysFromOffice,
      };

      if (answers.hadAntibodyTest === 'yes') {
        data.antibodies = {
          test_date: answers.antibodyTestDate,
          number: +answers.antibodyNumber,
        };
      }

      answers.hadVaccine === 'yes'
        ? (data.vaccination_stage = answers.vaccinationStage)
        : (data.i_am_waiting = answers.iAmWaiting);

      if (answers.whatAboutMeetingsInLive) {
        data.what_about_meetings_in_live = answers.whatAboutMeetingsInLive;
      }

      if (answers.tellYourOpinion) {
        data.tell_us_your_opinion_about_us = answers.tellYourOpinion;
      }

      await fetch('https://covid19.devtest.ge/api/create', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
    };
    sendData();
    resetContext();
  }, [answers, resetContext, navigate]);

  return (
    <main className='flex flex-col justify-center items-center bg-thanks-background h-screen'>
      <ThanksStarUp className=' mr-72 mb-3 animate-[moveUp_0.7s_ease-in-out]' />
      <h1 className='text-white text-[64px] font-TBC tracking-widest'>
        მადლობა
      </h1>
      <ThanksStarDown className=' ml-72 animate-[moveDown_0.7s_ease-in-out]' />
    </main>
  );
};

export default Thanks;
