import React from 'react';
import styled from 'styled-components/macro';
import cardBackImage from '../../assets/bg-card-back.png';

function CardBack({ cvc }) {
  return (
    <Wrapper>
      <CardBackImage src={cardBackImage} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  right: 0;
  top: 32px;
`;

const CardBackImage = styled.img`
  width: 286px;
`;

export default CardBack;
