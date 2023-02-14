import React from 'react';
import styled from 'styled-components/macro';
import backgroundImage from '../../assets/bg-main-mobile.png';

import CardFront from '../CardFront';
import CardBack from '../CardBack';

function Header({ number, name, month, year, cvc }) {
  return (
    <Wrapper>
      <CardGroup>
        <CardBack />
        <CardFront number={number} name={name} month={month} year={year} />
      </CardGroup>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  height: 240px;
  width: 100%;
  background-image: url(${backgroundImage});
  background-size: cover;
`;

const CardGroup = styled.div`
  position: relative;
  margin: 0 auto;
  height: 100%;
  width: 100%;
  max-width: 342px;
  top: 0px;
  box-shadow: 0px 60px 70px hsla(278, 68%, 11%, 0.25);
`;

export default Header;
