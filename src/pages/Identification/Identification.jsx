import QuestionnaireWrapper from 'components/QuestionnaireWrapper';
import People from 'assets/images/People.png';
import React, { useContext, useRef } from 'react';
import QuestionnaireContext from 'state/questionnaire-context';

const Identification = () => {
  const questionnaireCtx = useContext(QuestionnaireContext);
  const nameInputRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    questionnaireCtx.addAnswer('name', nameInputRef.current.value);
  };
  console.log(questionnaireCtx.answers);

  return (
    <QuestionnaireWrapper image={People}>
      <form action='' onSubmit={submitHandler} className=' space-y-8'>
        <div className='flex flex-col space-y-2'>
          <label htmlFor='name' className=' text-[22px]'>
            სახელი*
          </label>
          <input
            defaultValue={questionnaireCtx.answers.name}
            ref={nameInputRef}
            type='text'
            className='px-5 py-3 w-5/6 bg-main-background border-dark-brown border-[1px] text-[18px] outline-none'
            minLength='3'
            maxLength='15'
            required
          />
        </div>
        <button type='submit'>Submit</button>
      </form>
      <div className=' my-40 w-4/6 xl:w-1/2'>
        <div className='w-full bg-dark-brown h-[1px] mb-5'></div>
        <p>*-ით მონიშნული ველების შევსება სავალდებულოა</p>
      </div>
    </QuestionnaireWrapper>
  );
};

export default Identification;
