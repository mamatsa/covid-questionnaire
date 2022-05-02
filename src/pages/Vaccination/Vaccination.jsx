import QuestionnaireWrapper from 'components/QuestionnaireWrapper';
import Doctor from 'assets/images/Doctor.png';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import RadioInput from 'components/RadioInput';
import React, { useContext } from 'react';
import QuestionnaireContext from 'state/questionnaire-context';

const Vaccination = () => {
  const navigate = useNavigate();
  const { addAnswer } = useContext(QuestionnaireContext);

  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      hadVaccine: localStorage.getItem('hadVaccine'),
      vaccinationStage: localStorage.getItem('vaccinationStage'),
      waitWhat: localStorage.getItem('waitWhat'),
    },
    shouldUnregister: true,
  });

  // Checks if user can continue
  let formIsValid = false;
  if (watch('vaccinationStage') || watch('waitWhat')) {
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
          addAnswer('waitWhat', data.waitWhat);
          console.log(data);
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
                value: 'firstDoseAndRegisteredOnSecond',
                key: 1,
              },
              {
                id: 'vaccinationStage2',
                inputLabel: 'სრულად აცრილი ვარ',
                value: 'fullyVaccinated',
                key: 2,
              },
              {
                id: 'vaccinationStage3',
                inputLabel: 'პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე',
                value: 'firstDoseAndNotRegisteredOnSecond',
                key: 3,
              },
            ]}
          />
        )}
        {watch('vaccinationStage') === 'firstDoseAndNotRegisteredOnSecond' && (
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
            name='waitWhat'
            topLabel='რას ელოდები?*'
            register={register}
            inputs={[
              {
                id: 'waitWhat1',
                inputLabel: 'დარეგისტრირებული ვარ და ველოდები რიცხვს',
                value: 'waitDate',
                key: 1,
              },
              {
                id: 'waitWhat2',
                inputLabel: 'არ ვგეგმავ',
                value: 'notPlanToVaccinate',
                key: 2,
              },
              {
                id: 'waitWhat3',
                inputLabel: 'გადატანილი მაქვს და ვგეგმავ აცრას',
                value: 'planningToVaccinate',
                key: 3,
              },
            ]}
          />
        )}
        {watch('waitWhat') === 'planningToVaccinate' && (
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
