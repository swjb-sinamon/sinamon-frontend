import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  BlankLine,
  Card,
  CardTitle,
  Heading1,
  Heading2,
  Heading3,
  Input,
  MainSideBarContainer,
  MediumButton,
  showToast
} from 'sinamon-sikhye';
import styled from 'styled-components';
import Api from '../api';
import MainSideBar from '../components/MainSideBar';

const StyledContent = styled.div`
  margin: 3rem;
`;

const StyledTextAreaContents = styled.textarea`
  padding-left: 16px;
  padding-top: 15px;

  background-color: white;
  font-family: 'Noto Sans KR', sans-serif;

  border-radius: 3px;
  border: 1px solid var(--color-gray);

  font-size: 16px;
  font-weight: bold;
`;

const StyledNanumSquareRound = styled.div`
  font-family: 'NanumSquareRound', sans-serif;
`;

interface Anonymous {
  readonly title: string;
  readonly contents: string;
}

interface ApiAnonymous {
  readonly title: string;
  readonly content: string;
}

const AnonymousPage: React.FC = () => {
  const [apiWritten, setApiWritten] = useState<ApiAnonymous[]>([]);

  const [written, setWritten] = useState<Anonymous>({
    title: '',
    contents: ''
  });

  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWritten((current) => ({
      ...current,
      title: e.target.value
    }));
  };

  const onContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setWritten((current) => ({
      ...current,
      contents: e.target.value
    }));
  };

  const onWrittenClick = async () => {
    if (written.title.trim() === '' || written.contents.trim() === '') {
      showToast('제목또는 내용이 빈칸입니다', 'danger');
      return;
    }
    await Api.post('/anonymous', {
      title: written.title,
      content: written.contents
    });
    showToast('제출완료!', 'success');
    window.location.reload();
  };

  useEffect(() => {
    Api.get('/anonymous/').then((res) => {
      if (!res.data.success) {
        showToast('익명글을 불러오지 못했습니다', 'danger');
        return;
      }
      setApiWritten(res.data.data);
    });
  }, []);

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
            title={written.title}
            type="text"
            onChange={onTitleChange}
            width={480}
          />

          <BlankLine gap={10} />

          <StyledNanumSquareRound>
            <Heading2>내용을 입력해주세요</Heading2>
          </StyledNanumSquareRound>
          <StyledTextAreaContents
            placeholder="내용"
            value={written.contents}
            onChange={onContentChange}
            cols={50}
            rows={30}
          />

          <BlankLine gap={30} />

          <MediumButton onClick={onWrittenClick}>제출하기</MediumButton>

          <BlankLine gap={30} />

          <StyledNanumSquareRound>
            <Heading2>익명리스트</Heading2>
          </StyledNanumSquareRound>
          {apiWritten.map((item) => {
            return (
              <>
                <Card columnStart={1} columnEnd={1} rowStart={1} rowEnd={1}>
                  <CardTitle>
                    <span role="img" aria-label="Anonymouslist">
                      📧{' '}
                    </span>
                    {item.title}
                  </CardTitle>
                  {item.content}
                </Card>
                <BlankLine gap={30} />
              </>
            );
          })}
        </StyledContent>
      </MainSideBarContainer>
    </>
  );
};
export default AnonymousPage;
