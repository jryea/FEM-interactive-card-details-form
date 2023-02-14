import React from 'react';
import styled from 'styled-components/macro';
import Button from '../Button';
import { Check } from 'react-feather';

function SubmitMessage({ handleContinue }) {
  return (
    <Wrapper>
      <CheckCircle>
        <CheckWrapper>
          <Check color='white' size={40} />
        </CheckWrapper>
      </CheckCircle>
      <SubmissionTitle>Thank You!</SubmissionTitle>
      <SubmissionText>We've added your card details</SubmissionText>
      <Button handleClick={handleContinue}>Continue</Button>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  padding: 24px;
  margin-top: 60px;
`;

const CheckCircle = styled.main`
  position: relative;
  margin: 10px auto;
  margin-bottom: 30px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(
    to bottom,
    hsl(249deg, 99%, 64%),
    hsl(278deg, 94%, 30%)
  );
`;

const CheckWrapper = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  top: 1px;
  left: 1px;
  right: 0px;
  bottom: 0px;
  margin: auto;
`;

const SubmissionTitle = styled.h1`
  font-size: 28px;
  font-weight: 500;
  letter-spacing: 3.42px;
  text-align: center;
  color: hsla(278, 68%, 11%, 1);
  text-transform: uppercase;
  margin-bottom: 10px;
`;

const SubmissionText = styled.h2`
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  color: hsla(278, 6%, 55%, 1);
  margin-bottom: 40px;
`;

export default SubmitMessage;
