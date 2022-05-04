import QuestionnaireContext from './questionnaire-context';
import { useState } from 'react';

const QuestionnaireProvider = (props) => {
  const [answers, setAnswers] = useState(localStorage);

  const addAnswerHandler = (key, value) => {
    localStorage.setItem(key, value);
    setAnswers((prevState) => {
      return { ...prevState, [key]: value };
    });
  };

  const resetContext = () => {
    localStorage.clear();
    questionnaireContext.answers = {};
  };

  const questionnaireContext = {
    answers: answers,
    addAnswer: addAnswerHandler,
    resetContext: resetContext,
  };

  return (
    <QuestionnaireContext.Provider value={questionnaireContext}>
      {props.children}
    </QuestionnaireContext.Provider>
  );
};

export default QuestionnaireProvider;
