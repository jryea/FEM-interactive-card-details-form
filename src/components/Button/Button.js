import React from 'react';

import styled from 'styled-components/macro';

function Button({ children, handleClick }) {
  return <Wrapper onClick={handleClick}>{children}</Wrapper>;
}

const Wrapper = styled.button`
  font-size: 18px;
  font-weight: 500;
  border: none;
  display: block;
  text-align: center;
  width: 100%;
  height: 53px;
  background: hsla(278, 68%, 11%, 1);
  color: white;
  margin-top: 28px;
  padding: 13px;
  border-radius: 8px;
  cursor: pointer;
`;

export default Button;
