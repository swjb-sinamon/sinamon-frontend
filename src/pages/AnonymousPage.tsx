import React, { useState } from 'react';
import styled from 'styled-components';
import {
  MainSideBarContainer,
  BlankLine,
  HugeButton,
  Heading1,
  Heading2,
  Heading3,
  Input,
  Card,
  CardTitle,
  showToast
} from 'sinamon-sikhye';
import { Helmet } from 'react-helmet-async';
import MainSideBar from '../components/MainSideBar';

const StyledContent = styled.div`
  margin: 3rem;
`;

const StyledTextAreaContents = styled.textarea`
padding-left: 16px;
padding-top: 15px;

background-color: white;

border-radius: 3px;
border: 1px solid var(--color-gray);

font-size: 16px;
font-weight: bold;

:disabled {
  cursor: no-drop;
  background-color: #efefef;
}

:lang(ko) {
  word-break: keep-all;
}
`;
const StyledListCard = styled.div`
width: 800px;
height: 300px;
`;

const StyledNanumSquareRound = styled.div`
font-family: 'NanumSquareRound', sans-serif;
`
interface Anonymous {
  readonly title: string;
  readonly contents: string;
}

const AnonymousPage: React.FC = () => {
  const [written, setWritten] = useState<Anonymous>({
    title: '',
    contents: ''
  });
  
  const ontitleChange = (e: React.ChangeEvent<HTMLInputElement>, type: keyof Anonymous) => {
    e.persist();

    setWritten((current) => ({
      ...current,
      [type]: e.target.value
    }));
  };
  const onContentsChange = (e: React.ChangeEvent<HTMLTextAreaElement>, type: keyof Anonymous) => {
    e.persist();

    setWritten((current) => ({
      ...current,
      [type]: e.target.value
    }));
  };
  const onwrittenClick = async () => {
    if (written.title.trim() === '' || written.contents.trim() === '') {
      showToast('제목또는 내용이 빈칸입니다', 'danger');
      return;
    }
    try {
      showToast('제출완료!', 'success');
      window.location.reload();
    } catch (e) {
      showToast('제출실패', 'danger');
    }
  };
  return (
    <>
      <Helmet>
        <title>익명페이지 - 수정과</title>
      </Helmet>
      <MainSideBarContainer>
        <MainSideBar />
        <StyledContent>
          <Heading1>익명 건의함</Heading1>
          <Heading3>익명으로 글을 작성하실 수 있습니다</Heading3>
          <BlankLine gap={30} />
          <StyledNanumSquareRound>
            <Heading2>제목을 적어주세요</Heading2>
          </StyledNanumSquareRound>
          <Input
            placeholder="제목"
            value={written.title}
            type="text"
            onChange={(e) => ontitleChange(e, 'title')}
            width={480}
          />
          <BlankLine gap={10} />
          <StyledNanumSquareRound>
            <Heading2>내용을 입력해주세요</Heading2>
          </StyledNanumSquareRound>
          <StyledTextAreaContents
            placeholder="내용"
            value={written.contents}
            onChange={(e) => onContentsChange(e, 'contents')}
            cols={50}
            rows={30}
          />
          <BlankLine gap={30} />
          <HugeButton onClick={onwrittenClick} >제출하기</HugeButton>
          <BlankLine gap={30} />
          <StyledNanumSquareRound>
            <Heading2>익명리스트</Heading2>
          </StyledNanumSquareRound>
          <StyledListCard>
            <Card columnStart={1} columnEnd={4} rowStart={3} rowEnd={4}>
              <CardTitle>
                <span role="img" aria-label="Anonymouslist">
                  📧{' '}
                </span>
                {written.title}
              </CardTitle>
              {written.contents}
            </Card>
          </StyledListCard>
        </StyledContent>
      </MainSideBarContainer>
    </>
  )

}
export default AnonymousPage