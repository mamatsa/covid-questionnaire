import QuestionnaireContext from './questionnaire-context';
import { useState, useEffect } from 'react';

const CartProvider = (props) => {
  const [answers, setAnswers] = useState({});
  useEffect(() => {
    setAnswers(localStorage);
  }, []);

  const addAnswerHandler = (key, value) => {
    localStorage.setItem(key, value);
    setAnswers((prevState) => {
      return { ...prevState, [key]: value };
    });
  };

  const questionnaireContext = {
    answers: answers,
    addAnswer: addAnswerHandler,
  };

  return (
    <QuestionnaireContext.Provider value={questionnaireContext}>
      {props.children}
    </QuestionnaireContext.Provider>
  );
};

export default CartProvider;
