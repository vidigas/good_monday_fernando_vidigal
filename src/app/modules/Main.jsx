import React, { useState } from 'react';
import styled from 'styled-components';

import Logo from '../components/atoms/Logo';
import Menu from '../components/molecules/Menu';

import Instructions from '../components/templates/Instructions';
import Solution from '../components/templates/Solution';
import Calculator from './Calculator';

const Container = styled.div`
  width: 100%;
  background-color: #fff;
  height: 100vh;
`;

const Header = styled.div`
  width: 100%;
  background-color: #eff1f2;
  height: 83px;
  display: flex;

  @media (max-width: 768px) {
    height: 122px;
  }
`;

const Content = styled.div`
  width: 740px;
  margin: 30px auto;
  background-color: white;
  height: auto;
  padding-bottom: 20px;
  color: #313c52;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
`;

const SideDiv = styled.div`
  width: 10%;
  height: 300px;
`;

const Bar = styled.form`
  width: 100%;
  height: 1px;
  background-color: #eff1f2;
`;

const renderContent = (selected) => {
  switch (selected) {
    case 'Instructions':
      return <Instructions />;
    case 'Solution':
      return <Solution />;
    case 'Calculator':
      return <Calculator />;
    default:
      break;
  }
};

const Main = () => {
  const [selected, selectMenuItem] = useState('Instructions');

  return (
    <Container>
      <Header>
        <Logo />
        <Menu selectMenuItem={selectMenuItem} selectedItem={selected} />
      </Header>
      <ContentWrapper>
        <SideDiv />
        <Content>
          <Bar />
          {renderContent(selected)}
        </Content>
        <SideDiv />
      </ContentWrapper>
    </Container>
  );
};

export default Main;
