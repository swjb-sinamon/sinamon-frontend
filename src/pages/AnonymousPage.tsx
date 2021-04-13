import React from 'react';
import styled from 'styled-components';
import {
  MainSideBarContainer,
  BlankLine,
  Heading1,
  Heading2,
  Input,
  SCREEN_SIZE,
  Heading3
} from 'sinamon-sikhye';
import { Helmet } from 'react-helmet-async';
import MainSideBar from '../components/MainSideBar';

const StyledContent = styled.div`
  margin: 3rem;
`;
const StyledInput = styled(Input)`
  @media screen and (max-width: ${SCREEN_SIZE.SCREEN_MOBILE}) {
    width: 100%;
  }
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
          <Heading2>제목을 적어주세요</Heading2>
          <StyledInput
            type="title"
          />
          <BlankLine gap={10} />
          <Heading2>내용을 입력해주세요</Heading2>
          <StyledInput
            type="contents"
          />
        </StyledContent>
      </MainSideBarContainer>
    </>
  )

}
export default AnonymousPage