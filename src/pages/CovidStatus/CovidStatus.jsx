import QuestionnaireWrapper from 'components/QuestionnaireWrapper';
import IllBoy from 'assets/images/IllBoy.png';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import RadioInput from 'components/RadioInput';
import Input from 'components/Input';
import React, { useContext } from 'react';
import QuestionnaireContext from 'state/questionnaire-context';

const CovidStatus = () => {
  const { addAnswer } = useContext(QuestionnaireContext);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      hadCovid: localStorage.getItem('hadCovid'),
      hadAntibodyTest: localStorage.getItem('hadAntibodyTest'),
      covidDate: localStorage.getItem('covidDate'),
      antibodyTestDate: localStorage.getItem('antibodyTestDate'),
      antibodyNumber: localStorage.getItem('antibodyNumber'),
    },
    shouldUnregister: true,
  });

  // Checks if user can continue
  let formIsValid = false;
  if (
    (watch('hadCovid') && watch('hadCovid') !== 'yes') ||
    watch('hadAntibodyTest')
  ) {
    formIsValid = true;
  }

  return (
    <QuestionnaireWrapper
      image={IllBoy}
      form={'covidStatusForm'}
      formIsValid={formIsValid}
    >
      <form
        id='covidStatusForm'
        action=''
        required={1}
        onSubmit={handleSubmit((data) => {
          addAnswer('hadCovid', data.hadCovid);
          addAnswer('hadAntibodyTest', data.hadAntibodyTest);
          addAnswer('covidDate', data.covidDate);
          addAnswer('antibodyTestDate', data.antibodyTestDate);
          addAnswer('antibodyNumber', data.antibodyNumber);
          navigate('/questionnaire/3');
        })}
        className=' space-y-8'
      >
        <RadioInput
          name='hadCovid'
          topLabel='გაქვს გადატანილი კოვიდ-19?'
          register={register}
          inputs={[
            {
              id: 'hadCovid1',
              inputLabel: 'კი',
              value: 'yes',
              key: 1,
            },
            {
              id: 'hadCovid2',
              inputLabel: 'არა',
              value: 'no',
              key: 2,
            },
            {
              id: 'hadCovid3',
              inputLabel: 'ახლა მაქვს',
              value: 'currently_have',
              key: 3,
            },
          ]}
        />
        {watch('hadCovid') === 'yes' && (
          <RadioInput
            name='hadAntibodyTest'
            topLabel='ანტისხეულების ტესტი გაქვს გაკეთებული?'
            register={register}
            inputs={[
              {
                id: 'hadAntibodyTest1',
                inputLabel: 'კი',
                value: 'yes',
                key: 1,
              },
              {
                id: 'hadAntibodyTest2',
                inputLabel: 'არა',
                value: 'no',
                key: 2,
              },
            ]}
          />
        )}
        {watch('hadAntibodyTest') === 'no' && (
          <Input
            label='მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა Covid-19*'
            id='covidDate'
            type='date'
            name='covidDate'
            register={register}
            errors={errors}
            required={1}
          />
        )}
        {watch('hadAntibodyTest') === 'yes' && (
          <div>
            <Input
              label='თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და ანტისხეულების რაოდენობა*'
              id='antibodyTestDate'
              type='date'
              name='antibodyTestDate'
              register={register}
              errors={errors}
              required={1}
            />
            <Input
              id='antibodyNumber'
              type='number'
              name='antibodyNumber'
              placeholder='ანტისხეულების რაოდენობა'
              register={register}
              errors={errors}
              required={1}
            />
          </div>
        )}
      </form>
    </QuestionnaireWrapper>
  );
};

export default CovidStatus;
