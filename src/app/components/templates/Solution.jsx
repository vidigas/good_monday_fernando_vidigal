import React from 'react';
import styled from 'styled-components';

import Title from '../atoms/Title';
import Subtitle from '../atoms/Subtitle';
import Paragraph from '../atoms/Paragraph';
import solutionData from '../../../data/solution';

const Container = styled.div`
  width: 100%;
  margin-bottom: 15px;
`;

const Space = styled.div`
  width: 100%;
  height: 2px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  margin: 24px;
`;

const renderSubtitle = (article) => (article.subtitle ? <Subtitle>{article.subtitle}</Subtitle> : null);

const renderImage = (article) => (article.img ? <Image src={article.img} /> : null);

const renderParagraphs = (article) =>
  Object.keys(article.paragraphs).map((p) => <Paragraph>{article.paragraphs[p]}</Paragraph>);

const Solution = () =>
  Object.keys(solutionData.articles).map((a) => (
    <Container>
      <Space />
      <Title>{solutionData.articles[a].title}</Title>
      <Space />
      {renderSubtitle(solutionData.articles[a])}
      {renderImage(solutionData.articles[a])}
      {renderParagraphs(solutionData.articles[a])}
    </Container>
  ));

export default Solution;
