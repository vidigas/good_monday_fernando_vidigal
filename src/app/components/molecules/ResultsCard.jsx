import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 24px;
`;

const Title = styled.div`
  width: 300px;
  margin: 0 auto;
  font-size: 18px;
  font-weight: 300;
  text-align: center;
`;

const Space = styled.div`
  width: 100%;
  heigth: 20px;
`;

const Label = styled.div`
  width: 120px;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  margin: 20px auto;
`;

const Value = styled.div`
  width: 120px;
  font-size: 16px;
  margin: 20px auto;
  line-height: 16px;
`;

const ResultsCard = ({ pairs, sum }) => (
  <Container>
    <Title>Results</Title>
    <Space />
    <Label>Pairs</Label>
    <Value>{pairs}</Value>
    <Label>Sum</Label>
    <Value>{sum}</Value>
  </Container>
);

ResultsCard.propTypes = {
  pairs: PropTypes.array,
  sum: PropTypes.number,
};

ResultsCard.defaultProps = {
  pairs: [[5, 4], [3, 2], [1]],
  sum: 27,
};

export default ResultsCard;
