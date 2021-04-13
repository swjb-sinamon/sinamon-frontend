import React from 'react';
import styled from 'styled-components';
import {
  MainSideBarContainer,
  BlankLine,
  HugeButton,
  Heading1,
  Heading2,
  Heading3
} from 'sinamon-sikhye';
import { Helmet } from 'react-helmet-async';
import MainSideBar from '../components/MainSideBar';

const StyledContent = styled.div`
  margin: 3rem;
`;
const AnonymousList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  text-align: center;

  grid-gap: 2rem;

  width: 1000px;
  
  padding: 1rem;

  background-color: white;
  border-radius: 3px;
  border: 1px solid var(--color-gray);

  
`;

const AnonymousPage: React.FC = () => {

  return (
    <>
      <Helmet>
        <title>익명페이지 - 수정과</title>
      </Helmet>
      <MainSideBarContainer>
        <MainSideBar />
        <StyledContent>
          <Heading1>익명 페이지</Heading1>
          <Heading3>익명으로 글을 작성하실 수 있습니다</Heading3>
          <BlankLine gap={30} />
          <AnonymousList>

          </AnonymousList>
        </StyledContent>
      </MainSideBarContainer>
    </>
  )

}
export default AnonymousPage