import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import QuestionnaireContext from 'state/QuestionnaireContext';
import { QuestionnaireWrapper, Input, RadioInput } from 'components/';
import { IllBoy } from 'assets/images/';

const CovidStatus = () => {
  const navigate = useNavigate();

  const { answers, addAnswer } = useContext(QuestionnaireContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      hadCovid: answers.hadCovid,
      hadAntibodyTest: answers.hadAntibodyTest,
      covidSicknessDate: answers.covidSicknessDate,
      antibodyTestDate: answers.antibodyTestDate,
      antibodyNumber: answers.antibodyNumber,
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

  useEffect(() => {
    return () => {
      if (answers.hadCovid !== watch('hadCovid')) {
        addAnswer('hadCovid', watch('hadCovid'));
      }
      if (answers.hadAntibodyTest !== watch('hadAntibodyTest')) {
        addAnswer('hadAntibodyTest', watch('hadAntibodyTest'));
      }
      if (answers.covidSicknessDate !== watch('covidSicknessDate')) {
        addAnswer('covidSicknessDate', watch('covidSicknessDate'));
      }
      if (answers.antibodyTestDate !== watch('antibodyTestDate')) {
        addAnswer('antibodyTestDate', watch('antibodyTestDate'));
      }
      if (answers.antibodyNumber !== watch('antibodyNumber')) {
        addAnswer('antibodyNumber', watch('antibodyNumber'));
      }
    };
  }, [watch, addAnswer, answers]);

  return (
    <QuestionnaireWrapper
      image={IllBoy}
      form={'covidStatusForm'}
      formIsValid={formIsValid}
    >
      <form
        id='covidStatusForm'
        required={1}
        onSubmit={handleSubmit(() => {
          navigate('/questionnaire/3');
        })}
        className=' space-y-8'
      >
        <RadioInput
          name='hadCovid'
          topLabel='გაქვს გადატანილი კოვიდ-19?*'
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
              value: 'have_right_now',
              key: 3,
            },
          ]}
        />
        {watch('hadCovid') === 'yes' && (
          <RadioInput
            name='hadAntibodyTest'
            topLabel='ანტისხეულების ტესტი გაქვს გაკეთებული?*'
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
            id='covidSicknessDate'
            type='date'
            name='covidSicknessDate'
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
