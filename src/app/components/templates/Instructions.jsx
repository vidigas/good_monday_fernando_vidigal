import React from 'react';
import styled from 'styled-components';

import Title from '../atoms/Title';
import Paragraph from '../atoms/Paragraph';
import instructionData from '../../../data/instructions';

const Container = styled.div`
  width: 100%;
`;

const TextTitle = styled.div`
  text-align: center;
  margin: 50px auto 80px;
  font-size: 40px;
  line-height: 40px;
`;

const renderParagraphs = () =>
  Object.keys(instructionData.paragraphs).map((p) => <Paragraph key={p}>{instructionData.paragraphs[p]}</Paragraph>);

const Instructions = () => (
  <Container>
    <Title>{instructionData.title}</Title>
    {renderParagraphs()}
  </Container>
);

export default Instructions;
