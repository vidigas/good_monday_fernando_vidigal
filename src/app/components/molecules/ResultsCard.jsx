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
  
const Card = styled.div`
  width: 100%;
  margin: 24px;
  padding: 24px;
  display: flex;
`;

const Space = styled.div`
  width: 100%;
  heigth: 20px;
`;

const Label = styled.div`
  width: 60px;
  font-size: 18px;
  font-weight: 600;
  line-height: 20px;
  margin: 20px ;
`;

const Value = styled.div`
  width: 200px;
  font-size: 20px;
  margin: 20px ;
  line-height: 20px;
`;

const renderPairs = pairs => pairs.map(pair => {
  console.log(pair);
  return `  ( ${pair} )  `;
});

const ResultsCard = ({ pairs, sum }) => {
  console.log('iaeee', pairs)
  return (
  <Container>
    <Title>Results</Title>
    <Space />
    <Card>
      <Label>Pairs :</Label>
      <Value>{renderPairs(pairs)}</Value>
    </Card>
    <Card>
      <Label>Sum</Label>
      <Value>{sum}</Value>     
    </Card>  
  </Container>
)

};

ResultsCard.propTypes = {
  pairs: PropTypes.array,
  sum: PropTypes.number,
};

ResultsCard.defaultProps = {
  pairs: [],
  sum: 0,
};

export default ResultsCard;
