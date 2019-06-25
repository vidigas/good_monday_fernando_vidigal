import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import TextInput from '../atoms/TextInput';
import Button from '../atoms/Button';

const Container = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  vertical-align: middle;
`;

const Name = styled.div`
  height: 50px;
  width: 110px;
  margin: 25px 0 0 14px;
  padding: 18px;
  font-size: 16px;
`;

const InputWrapper = styled.div`
  width: calc(80% - 100px);
  height: 100px;
  margin: 0px 10px;
  padding: 25px;
`;

const TextDiv = styled.div`
  width: 100%;
  height: 50px;
  background-color: white;
  font-size: 16px;
  text-align: center;
  padding-top: 20px;
`;

const handleChange = (setTextValue, e) => {
  setTextValue(e.target.value);
};

const renderTextInput = (isEditing, textValue, setTextValue, inputRef)  => {
  if (isEditing) return (<TextInput 
           type='text'
           value={textValue}
           ref={inputRef}
           customStyle={ isEditing ? {backgroundColor: 'yellow'} : null}
           onChange={(e) => handleChange(setTextValue, e)} />
        );
  else return <TextDiv> {textValue} </TextDiv>
}

const handleNewValue = (value, setResults, setPairs) => {
  setPairs([1,2],[3,4],[5,6]);
  setResults(12);
}

const TextInputGroup = () => {

  const inputRef = useRef();

  const handleEditingClick = () => {
    setEditing(!isEditing);
  }

  useEffect(() => {
    if (isEditing) inputRef.current.focus();
    else handleNewValue(textValue, setResults, setPairs);
  }, [isEditing]);


  return (
    <Container>
      <Name> INPUT : </Name>
      <InputWrapper>
        {renderTextInput(isEditing, textValue, setTextValue, inputRef)}
      </InputWrapper>
      <Button onClick={handleEditingClick}> {isEditing ? 'RUN' : 'EDIT'}</Button>
    </Container>
  );
};

export default TextInputGroup;
