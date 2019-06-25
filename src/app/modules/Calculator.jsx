import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';

import Title from '../components/atoms/Title';
import TextInputGroup from '../components/molecules/TextInputGroup';
import ResultsCard from '../components/molecules/ResultsCard';

const Container = styled.div`
  width: 100%;
`;

const ErrorMessage = styled.div`
  font-size: 20px;
  color: red;
  line-height: 20px;
  heigth: 20px;
  width: 300px;
  display: none;

  ${(props) => props.customStyle}
`;

const Results = styled.div`
  width: 100%;
  margin-top: 10px;
  height: 300px;
  background-color: yellow;
`;

const Calculator = () => {
  const [textValue, setTextValue] = useState('[1,2,3,4,5]');
  const [isEditing, setEditing] = useState(false);
  const [result, setResults] = useState(27);
  const [pairs, setPairs] = useState([[5, 4], [3, 2], [1]]);
  const [inputError, setError] = useState(false);

  const inputRef = useRef();

  const handleEditClick = () => {
    setEditing(!isEditing);
  };

  const calculate = (array) => {
    console.log(array);
  };

  const handleNewValue = () => {
    try {
      const parsedString = JSON.parse(textValue);
      if (Array.isArray(parsedString)) {
        setError(false);
        return calculate(parsedString);
      } else {
        setError(true);
      }
    } catch (e) {
      setError(true);
    }
  };

  useEffect(() => {
    if (isEditing) inputRef.current.focus();
    else {
      handleNewValue();
    }
  }, [isEditing]);

  return (
    <Container>
      <Title>Calculator</Title>
      <TextInputGroup
        textValue={textValue}
        setTextValue={setTextValue}
        isEditing={isEditing}
        handleEditClick={handleEditClick}
        inputRef={inputRef}
      />
      <ErrorMessage customStyle={inputError ? { display: 'block' } : null}> * Invalid Input </ErrorMessage>
      <Results>
        <ResultsCard />
      </Results>
    </Container>
  );
};

export default Calculator;
