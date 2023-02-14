import React from 'react';
import styled from 'styled-components/macro';
import cardFrontImage from '../../assets/bg-card-front.png';

function CardFront({ number, name, month, year }) {
  return (
    <Wrapper>
      <FilledCircle />
      <BorderCircle />
      <CardNumber>{number}</CardNumber>
      <CardName>{name}</CardName>
      <CardDate>
        {month}/{year}
      </CardDate>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 286px;
  height: 157px;
  position: absolute;
  left: 0;
  bottom: -44px;
  background-image: url(${cardFrontImage});
  background-size: cover;
  padding: 18px;
`;

const FilledCircle = styled.div`
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: white;
  margin-right: 10px;
`;

const BorderCircle = styled.div`
  display: inline-block;
  width: 14px;
  height: 14px;
  border: 1px solid white;
  border-radius: 50%;
`;

const CardNumber = styled.p`
  color: white;
  font-size: 18px;
  margin-top: 26px;
  letter-spacing: 2.2px;
`;

const CardName = styled.p`
  display: inline-block;
  color: white;
  font-size: 9px;
  letter-spacing: 1.3px;
  text-transform: uppercase;
  margin-top: 16px;
  margin-right: 120px;
`;

const CardDate = styled.p`
  display: inline-block;
  font-size: 9px;
  letter-spacing: 1.3px;
  color: white;
`;

export default CardFront;
