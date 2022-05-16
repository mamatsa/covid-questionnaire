import React from 'react';

/* istanbul ignore next */
const QuestionnaireContext = React.createContext({
  answers: {},
  addAnswer: (key, value) => {},
  resetContext: () => {},
});

export default QuestionnaireContext;
