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
          
        </StyledContent>
      </MainSideBarContainer>
    </>
  )

}
export default AnonymousPage