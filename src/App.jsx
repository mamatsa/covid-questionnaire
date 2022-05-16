import React from 'react';
import {
  Start,
  Identification,
  CovidStatus,
  Vaccination,
  CovidPolitics,
  Thanks,
} from 'pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/questionnaire/1' element={<Identification />} />
        <Route path='/questionnaire/2' element={<CovidStatus />} />
        <Route path='/questionnaire/3' element={<Vaccination />} />
        <Route path='/questionnaire/4' element={<CovidPolitics />} />
        <Route path='/thanks' element={<Thanks />} />
        <Route path='*' element={<Start />} />
      </Routes>
    </Router>
  );
};

export default App;
