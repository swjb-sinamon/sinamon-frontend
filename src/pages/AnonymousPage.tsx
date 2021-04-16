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
const StyledInputTitle = styled.input<{ width?: number }>`
width: ${(props) => props.width || 400}px;
height: 40px;

background-color: white;
padding-left: 16px;

border-radius: 3px;
border: 1px solid var(--color-gray);

font-weight: bold;

:disabled {
  cursor: no-drop;
  background-color: #efefef;
}
`;
const StyledInputContents = styled.input<{ width?: number }>`
width: ${(props) => props.width || 700}px;
height: 1000px;

background-color: white;
padding-left: 16px;

border-radius: 3px;
border: 1px solid var(--color-gray);

text-align:left;
font-weight: bold;

:disabled {
  cursor: no-drop;
  background-color: #efefef;
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
          <StyledInputTitle
            type="text"
          />
          <BlankLine gap={10} />
          <Heading2>내용을 입력해주세요</Heading2>
          <StyledInputContents
            type="text"
          />
          <BlankLine gap={30} />
          <HugeButton >제출하기</HugeButton>
        </StyledContent>
      </MainSideBarContainer>
    </>
  )

}
export default AnonymousPage