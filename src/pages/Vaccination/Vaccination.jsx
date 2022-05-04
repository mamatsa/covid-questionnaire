import QuestionnaireWrapper from 'components/QuestionnaireWrapper';
import Doctor from 'assets/images/Doctor.png';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import RadioInput from 'components/RadioInput';
import React, { useContext } from 'react';
import QuestionnaireContext from 'state/questionnaire-context';

const Vaccination = () => {
  const navigate = useNavigate();
  const { answers, addAnswer } = useContext(QuestionnaireContext);

  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      hadVaccine: answers.hadVaccine,
      vaccinationStage: answers.vaccinationStage,
      iAmWaiting: answers.iAmWaiting,
    },
    shouldUnregister: true,
  });

  // Checks if user can continue
  let formIsValid = false;
  if (watch('vaccinationStage') || watch('iAmWaiting')) {
    formIsValid = true;
  }

  return (
    <QuestionnaireWrapper
      image={Doctor}
      form={'vaccinationForm'}
      formIsValid={formIsValid}
    >
      <form
        id='vaccinationForm'
        action=''
        required={1}
        onSubmit={handleSubmit((data) => {
          addAnswer('hadVaccine', data.hadVaccine);
          addAnswer('vaccinationStage', data.vaccinationStage);
          addAnswer('iAmWaiting', data.iAmWaiting);
          navigate('/questionnaire/4');
        })}
        className=' space-y-10'
      >
        <RadioInput
          name='hadVaccine'
          topLabel='უკვე აცრილი ხარ?*'
          register={register}
          inputs={[
            {
              id: 'hadVaccine1',
              inputLabel: 'კი',
              value: 'yes',
              key: 1,
            },
            {
              id: 'hadVaccine2',
              inputLabel: 'არა',
              value: 'no',
              key: 2,
            },
          ]}
        />
        {watch('hadVaccine') === 'yes' && (
          <RadioInput
            name='vaccinationStage'
            topLabel='აირჩიე რა ეტაპზე ხარ*'
            register={register}
            inputs={[
              {
                id: 'vaccinationStage1',
                inputLabel: 'პირველი დოზა და დარეგისტრირებული ვარ მეორეზე',
                value: 'first_dosage_and_registered_on_the_second',
                key: 1,
              },
              {
                id: 'vaccinationStage2',
                inputLabel: 'სრულად აცრილი ვარ',
                value: 'fully_vaccinated',
                key: 2,
              },
              {
                id: 'vaccinationStage3',
                inputLabel: 'პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე',
                value: 'first_dosage_and_not_registered_yet',
                key: 3,
              },
            ]}
          />
        )}
        {watch('vaccinationStage') ===
          'first_dosage_and_not_registered_yet' && (
          <div className=' ml-7 text-xl'>
            <p>რომ არ გადადო,</p>
            <p>ბარემ ახლავე დარეგისტრირდი</p>
            <a href='https://booking.moh.gov.ge/' className=' text-blue-500'>
              https://booking.moh.gov.ge/
            </a>
          </div>
        )}
        {watch('hadVaccine') === 'no' && (
          <RadioInput
            name='iAmWaiting'
            topLabel='რას ელოდები?*'
            register={register}
            inputs={[
              {
                id: 'waiting',
                inputLabel: 'დარეგისტრირებული ვარ და ველოდები რიცხვს',
                value: 'registered_and_waiting',
                key: 1,
              },
              {
                id: 'waiting2',
                inputLabel: 'არ ვგეგმავ',
                value: 'not_planning',
                key: 2,
              },
              {
                id: 'waiting3',
                inputLabel: 'გადატანილი მაქვს და ვგეგმავ აცრას',
                value: 'had_covid_and_planning_to_be_vaccinated',
                key: 3,
              },
            ]}
          />
        )}
        {watch('iAmWaiting') === 'had_covid_and_planning_to_be_vaccinated' && (
          <div className=' ml-7 text-xl'>
            <p>
              ახალი პროტოკოლით კოვიდის გადატანიდან 1 თვის შემდეგ შეგიძლიათ
              ვაქცინის გაკეთება.
            </p>
            <p className='mt-3'>&#x1F447; რეგისტრაციის ბმული</p>
            <a href='https://booking.moh.gov.ge/' className=' text-blue-500'>
              https://booking.moh.gov.ge/
            </a>
          </div>
        )}
      </form>
    </QuestionnaireWrapper>
  );
};

export default Vaccination;
