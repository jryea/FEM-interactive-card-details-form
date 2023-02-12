import React from 'react';
import { useState } from 'react';

import styled from 'styled-components/macro';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [CVC, setCVC] = useState('');

  return (
    <Wrapper>
      <FormWrapper>
        <Label htmlFor='name-input'>Cardholder Name</Label>
        <TextInput
          type='text'
          id='name-input'
          placeholder='e.g. Jane Appleseed'
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <Label htmlFor='name-input'>Card Number</Label>
        <TextInput
          type='email'
          id='email-input'
          placeholder='e.g. 1234 5678 9123 0000'
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </FormWrapper>
      <SubmitButton>Confirm</SubmitButton>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  padding: 24px;
  margin-top: 80px;
`;

const FormWrapper = styled.form``;

const Label = styled.label`
  display: block;
  font-size: 12px;
  margin-bottom: 8px;
  text-transform: uppercase;
`;

const SubmitButton = styled.label`
  display: block;
  text-align: center;
  width: 100%;
  height: 53px;
  background: hsla(278, 68%, 11%, 1);
  color: white;
  margin-top: 28px;
  padding: 13px;
  border-radius: 8px;
`;

const TextInput = styled.input`
  width: 100%;
`;

export default Form;
