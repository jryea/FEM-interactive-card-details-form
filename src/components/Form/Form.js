import React from 'react';
import Button from '../Button';

import styled from 'styled-components/macro';

function Form({
  name = '',
  handleNameChange,
  number = '',
  handleNumberChange,
  month,
  handleMonthChange,
  year,
  handleYearChange,
  cvc,
  handleCvcChange,
  handleSubmit,
}) {
  return (
    <Wrapper>
      <FormWrapper>
        <Label htmlFor='name-input'>Cardholder Name</Label>
        <TextInput
          type='text'
          id='name-input'
          placeholder='e.g. Jane Appleseed'
          value={name}
          onChange={handleNameChange}
        />
        <Label htmlFor='number-input'>Card Number</Label>
        <TextInput
          type='text'
          id='number-input'
          placeholder='e.g. 1234 5678 9123 0000'
          value={number}
          onChange={handleNumberChange}
        />
        <Column2>
          <Label htmlFor='month-input'>Exp. date (mm/yy)</Label>
          <DateInput
            type='text'
            id='month-input'
            placeholder='MM'
            value={month}
            onChange={handleMonthChange}
          />
          <DateInput
            type='text'
            id='year-input'
            placeholder='YY'
            value={year}
            onChange={handleYearChange}
          />
        </Column2>
        <Column2>
          <Label htmlFor='cvc-input'>cvc</Label>
          <CVCInput
            type='text'
            id='cvc-input'
            placeholder='MM'
            value={cvc}
            onChange={handleCvcChange}
          />
        </Column2>
      </FormWrapper>
      <Button handleClick={handleSubmit}>Confirm</Button>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  padding: 24px;
  margin-top: 60px;
`;

const FormWrapper = styled.form``;

const Label = styled.label`
  display: block;
  color: hsla(278, 68%, 11%, 1);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 2px;
  margin-bottom: 8px;
  text-transform: uppercase;
`;

const TextInput = styled.input`
  width: 100%;
  padding: 11px 16px;
  font-size: 18px;
  color: hsla(278, 68%, 11%, 1);
  margin-bottom: 20px;
  border: 1px solid hsla(278, 3%, 87%, 1);
  border-radius: 8px;
  &::placeholder {
    color: inherit;
    opacity: 25%;
  }
`;

const Column2 = styled.section`
  display: inline-block;
  width: 50%;
`;

const DateInput = styled.input`
  width: 45%;
  padding: 11px 16px;
  font-size: 18px;
  color: hsla(278, 68%, 11%, 1);
  margin-right: 5px;
  border: 1px solid hsla(278, 3%, 87%, 1);
  border-radius: 8px;
  &::placeholder {
    color: inherit;
    opacity: 25%;
  }
`;

const CVCInput = styled.input`
  width: 95%;
  padding: 11px 16px;
  font-size: 18px;
  color: hsla(278, 68%, 11%, 1);
  margin-right: 5px;
  border: 1px solid hsla(278, 3%, 87%, 1);
  border-radius: 8px;
  &::placeholder {
    color: inherit;
    opacity: 25%;
  }
`;

export default Form;
