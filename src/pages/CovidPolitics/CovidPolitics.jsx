import QuestionnaireWrapper from 'components/QuestionnaireWrapper';
import Office from 'assets/images/Office.png';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import RadioInput from 'components/RadioInput';
import React, { useContext } from 'react';
import QuestionnaireContext from 'state/questionnaire-context';
import Textarea from './components/Textarea';

const CovidPolitics = () => {
  const navigate = useNavigate();
  const { addAnswer } = useContext(QuestionnaireContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nonFormalMeetings: localStorage.getItem('nonFormalMeetings'),
      numberOfDaysFromOffice: localStorage.getItem('numberOfDaysFromOffice'),
      whatAboutMeetingsInLive:
        localStorage.getItem('whatAboutMeetingsInLive') || '',
      tellYourOpinion: localStorage.getItem('tellYourOpinion') || '',
    },
    shouldUnregister: true,
  });

  return (
    <QuestionnaireWrapper image={Office}>
      <p className=' text-[22px] max-w-[50ch] mb-16'>
        რედბერის მთავარი ღირებულება ჩვენი გუნდის თითოეული წევრია. გარემო,
        რომელსაც ჩვენი თანამშრომლები ქმნით, ბევრისთვის არის და ყოფილა წლების
        განმავლობაში მიზნებისთვის ერთად ბრძოლის მიზეზი, ბევრისთვის კი — ჩვენთან
        გადმოსვლის.
        <br /> <br /> პანდემიის პერიოდში ერთმანეთსაც იშვიათად ვნახულობთ პირისპირ
        და ყოველდღიური კომუნიკაციაც გაიშვიათდა.
      </p>
      <form
        id='covidPoliticsForm'
        onSubmit={handleSubmit((data) => {
          addAnswer('nonFormalMeetings', data.nonFormalMeetings);
          addAnswer('numberOfDaysFromOffice', data.numberOfDaysFromOffice);
          addAnswer('whatAboutMeetingsInLive', data.whatAboutMeetingsInLive);
          addAnswer('tellYourOpinion', data.tellYourOpinion);
          navigate('/thanks');
        })}
        className=' space-y-10 mb-24'
      >
        <RadioInput
          name='nonFormalMeetings'
          topLabel='რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ შეხვედრები, სადაც ყველა სურვილისამებრ ჩაერთვება?**'
          register={register}
          required={1}
          errors={errors}
          inputs={[
            {
              id: 'nonFormalMeetings1',
              inputLabel: 'კვირაში ორჯერ',
              value: 'twice_a_week',
              key: 1,
            },
            {
              id: 'nonFormalMeetings2',
              inputLabel: 'კვირაში ერთხელ',
              value: 'once_a_week',
              key: 2,
            },
            {
              id: 'nonFormalMeetings3',
              inputLabel: 'ორ კვირაში ერთხელ',
              value: 'once_in_two_weeks',
              key: 3,
            },
            {
              id: 'nonFormalMeetings4',
              inputLabel: 'თვეში ერთხელ',
              value: 'once_a_month',
              key: 4,
            },
          ]}
        />
        <RadioInput
          name='numberOfDaysFromOffice'
          topLabel='კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*'
          register={register}
          required={1}
          errors={errors}
          inputs={[
            {
              id: 'numberOfDaysFromOffice1',
              inputLabel: '0',
              value: 0,
              key: 1,
            },
            {
              id: 'numberOfDaysFromOffice2',
              inputLabel: '1',
              value: 1,
              key: 2,
            },
            {
              id: 'numberOfDaysFromOffice3',
              inputLabel: '2',
              value: 2,
              key: 3,
            },
            {
              id: 'numberOfDaysFromOffice4',
              inputLabel: '3',
              value: 3,
              key: 4,
            },
            {
              id: 'numberOfDaysFromOffice5',
              inputLabel: '4',
              value: 4,
              key: 5,
            },
            {
              id: 'numberOfDaysFromOffice6',
              inputLabel: '5',
              value: 5,
              key: 6,
            },
          ]}
        />
        <Textarea
          label='რას ფიქრობ ფიზიკურ შეკრებებზე?'
          id='whatAboutMeetingsInLive'
          name='whatAboutMeetingsInLive'
          register={register}
          rows='4'
        />
        <Textarea
          label={[
            'რას ფიქრობ არსებულ გარემოზე:',
            <br key={10} />,
            'რა მოგწონს, რას დაამატებდი, რას შეცვლიდი?',
          ]}
          id='tellYourOpinion'
          rows='4'
          name='tellYourOpinion'
          register={register}
        />
        <div className='w-5/6 flex justify-end'>
          <button
            type='submit'
            className=' bg-[#208298] px-6 py-3 text-white rounded-3xl'
          >
            დასრულება
          </button>
        </div>
      </form>
    </QuestionnaireWrapper>
  );
};

export default CovidPolitics;
