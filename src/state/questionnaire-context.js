import React from 'react';

const QuestionnaireContext = React.createContext({
  answers: {},
  addAnswer: (key, value) => {},
  resetContext: () => {},
});

export default QuestionnaireContext;
