import QuestionnaireContext from './questionnaire-context';
import { useState } from 'react';

const CartProvider = (props) => {
  const [answers, setAnswers] = useState(localStorage);
  console.log(answers);

  const addAnswerHandler = (key, value) => {
    localStorage.setItem(key, value);
    setAnswers((prevState) => {
      return { ...prevState, [key]: value };
    });
  };

  const resetContext = () => {
    setAnswers({});
    localStorage.clear();
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

export default CartProvider;
