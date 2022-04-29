import QuestionnaireWrapper from 'components/QuestionnaireWrapper';
import People from 'assets/images/People.png';
import React, { useContext, useRef } from 'react';
import QuestionnaireContext from 'state/questionnaire-context';
import Input from './components/Input.jsx';

const Identification = () => {
  const questionnaireCtx = useContext(QuestionnaireContext);
  const nameInputRef = useRef();
  const lastNameInputRef = useRef();
  const mailInputRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    questionnaireCtx.addAnswer('name', nameInputRef.current.value);
    questionnaireCtx.addAnswer('lastName', lastNameInputRef.current.value);
    questionnaireCtx.addAnswer('mail', mailInputRef.current.value);
  };
  console.log(questionnaireCtx.answers);

  return (
    <QuestionnaireWrapper image={People}>
      <form action='' onSubmit={(e) => submitHandler(e)} className=' space-y-8'>
        <Input
          label='სახელი*'
          ref={nameInputRef}
          input={{
            defaultValue: questionnaireCtx.answers.name,
            type: 'text',
            minLength: '2',
            maxLength: '15',
            required: '1',
          }}
        />
        <Input
          label='გვარი*'
          ref={lastNameInputRef}
          input={{
            defaultValue: questionnaireCtx.answers.lastName,
            type: 'text',
            minLength: '2',
            maxLength: '15',
            required: '1',
          }}
        />
        <Input
          label='მეილი*'
          ref={mailInputRef}
          input={{
            defaultValue: questionnaireCtx.answers.mail,
            type: 'email',
            minLength: '2',
            required: '1',
          }}
        />
      </form>
      <div className=' mt-40 w-4/6 xl:w-1/2'>
        <div className='w-full bg-dark-brown h-[1px] mb-5'></div>
        <p>*-ით მონიშნული ველების შევსება სავალდებულოა</p>
      </div>
    </QuestionnaireWrapper>
  );
};

export default Identification;
