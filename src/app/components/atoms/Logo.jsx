import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 132px;
  height: 83px;
  padding: 24px;
`;

const Image = styled.img`
  width: 71px;
  height: 34px;
`;

const Logo = () => (
  <Container>
    <Image src='images/brand-logo.svg' />
  </Container>
);

export default Logo;
