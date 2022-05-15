import QuestionnaireWrapper from 'components/QuestionnaireWrapper';
import Doctor from 'assets/images/Doctor.png';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import RadioInput from 'components/RadioInput';
import React, { useContext, useEffect } from 'react';
import QuestionnaireContext from 'state/questionnaire-context';
import Suggestion from 'pages/Vaccination/components/Suggestion';

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

  useEffect(() => {
    return () => {
      if (answers.hadVaccine !== watch('hadVaccine')) {
        addAnswer('hadVaccine', watch('hadVaccine'));
      }
      if (answers.vaccinationStage !== watch('vaccinationStage')) {
        addAnswer('vaccinationStage', watch('vaccinationStage'));
      }
      if (answers.iAmWaiting !== watch('iAmWaiting')) {
        addAnswer('iAmWaiting', watch('iAmWaiting'));
      }
    };
  }, [watch, addAnswer, answers]);

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
          <Suggestion text='რომ არ გადადო, ბარემ ახლავე დარეგისტრირდი' />
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
          <Suggestion
            text='ახალი პროტოკოლით კოვიდის გადატანიდან 1 თვის შემდეგ შეგიძლიათ ვაქცინის
          გაკეთება.'
          />
        )}
      </form>
    </QuestionnaireWrapper>
  );
};

export default Vaccination;
