import React, { useState } from 'react';
import styled from 'styled-components/macro';
import GlobalStyles from './GlobalStyles';
import Header from '../Header';
import Form from '../Form';
import SubmitMessage from '../SubmitMessage';

function App() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [cvc, setCvc] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit(event) {
    setIsSubmitted((prevValue) => !prevValue);
  }

  // handleContinue={setIsSubmitted((prevValue) => !prevValue)

  return (
    <div className='App'>
      <Header
        number={isSubmitted ? number : '0000 0000 0000 0000'}
        name={isSubmitted ? name : 'Jane Appleseed'}
        month={isSubmitted ? month : '00'}
        year={isSubmitted ? year : '00'}
      />
      {isSubmitted ? (
        <SubmitMessage />
      ) : (
        <Form
          name={name}
          number={number}
          month={month}
          year={year}
          cvc={cvc}
          handleNameChange={(event) => setName(event.target.value)}
          handleNumberChange={(event) => setNumber(event.target.value)}
          handleMonthChange={(event) => setMonth(event.target.value)}
          handleYearChange={(event) => setYear(event.target.value)}
          handleSubmit={handleSubmit}
        />
      )}

      <GlobalStyles />
    </div>
  );
}

export default App;
