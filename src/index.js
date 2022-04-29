import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import QuestionnaireProvider from 'state/QuestionnaireProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QuestionnaireProvider>
    <App />
  </QuestionnaireProvider>
);
