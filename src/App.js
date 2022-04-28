import React from 'react';
import {
  Start,
  Identification,
  CovidStatus,
  Vaccination,
  CovidPolitics,
  Thanks,
} from './pages';

const App = () => {
  return (
    <>
      <Start />
      <Identification />
      <CovidStatus />
      <Vaccination />
      <CovidPolitics />
      <Thanks />
    </>
  );
};

export default App;
