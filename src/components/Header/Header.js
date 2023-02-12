import React from 'react';
import styled from 'styled-components/macro';
import backgroundImage from '../../assets/bg-main-mobile.png';
import cardBackImage from '../../assets/bg-card-back.png';
import cardFrontImage from '../../assets/bg-card-front.png';

function Header() {
  return (
    <CardHeader>
      <CardBack src={cardBackImage} />
      <CardFront src={cardFrontImage} />
    </CardHeader>
  );
}

const CardHeader = styled.header`
  height: 240px;
  width: 100%;
  position: relative;
  background-image: url(${backgroundImage});
  background-size: cover;
`;

const CardBack = styled.img`
  width: 286px;
  position: absolute;
  right: 16px;
  top: 32px;
`;

const CardFront = styled.img`
  width: 286px;
  position: absolute;
  left: 16px;
  bottom: -44px;
`;

export default Header;
