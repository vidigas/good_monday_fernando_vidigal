import React from 'react';
import styled from 'styled-components';

import Title from '../atoms/Title';
import TextInputGroup from '../molecules/TextInputGroup';

const Container = styled.div`
  width: 100%;
`;

const Tests = () => {
	console.log('ia')
  return (
    <Container>
      <Title>Calculator</Title>
      <TextInputGroup />
    </Container>
  );
};

export default Tests;
