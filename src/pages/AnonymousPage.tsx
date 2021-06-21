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
  Label,
  MainSideBarContainer,
  MediumButton,
  SCREEN_SIZE,
  showToast
} from 'sinamon-sikhye';
import styled from 'styled-components';
import Api from '../api';
import MainSideBar from '../components/MainSideBar';

const StyledContent = styled.div`
  margin: 3rem;
`;

const StyledInput = styled(Input)`
  @media screen and (max-width: ${SCREEN_SIZE.SCREEN_MOBILE}) {
    width: 100%;
  }
`;

const StyledTextAreaContents = styled.textarea`
  padding-left: 16px;
  padding-top: 15px;

  background-color: white;
  font-family: 'Noto Sans KR', sans-serif;

  border-radius: 3px;
  border: 1px solid var(--color-gray);

  font-size: 14px;

  resize: none;

  @media screen and (max-width: ${SCREEN_SIZE.SCREEN_MOBILE}) {
    width: 100%;
  }
`;

const StyledNanumSquareRound = styled.div`
  font-family: 'NanumSquareRound', sans-serif;
  font-weight: bold;
`;

const CardWrapper = styled.div`
  width: 600px;

  @media screen and (max-width: ${SCREEN_SIZE.SCREEN_MOBILE}) {
    & > div:first-child {
      width: 70vw;
    }
  }
`;

const ReplyText = styled.span<{ isExists: boolean }>`
  color: ${(props) => (props.isExists ? 'inherit' : 'var(--color-subtext)')};
  font-weight: ${(props) => (props.isExists ? 'bold' : 'normal')};
`;

interface Anonymous {
  readonly title: string;
  readonly contents: string;
}

interface ApiAnonymous {
  readonly id: number;
  readonly title: string;
  readonly content: string;
  readonly reply: {
    readonly content: string;
  }[];
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

          <Label>제목을 입력해주세요.</Label>
          <StyledInput
            placeholder="제목"
            title={written.title}
            type="text"
            onChange={onTitleChange}
            width={480}
          />

          <BlankLine gap={10} />

          <Label>내용을 입력해주세요</Label>
          <StyledTextAreaContents
            placeholder="내용"
            value={written.contents}
            onChange={onContentChange}
            maxLength={400}
            cols={64}
            rows={10}
          />

          <BlankLine gap={30} />

          <MediumButton onClick={onWrittenClick}>제출하기</MediumButton>

          <BlankLine gap={30} />

          <StyledNanumSquareRound>
            <Heading2>올라온 익명 건의를 확인해보세요!</Heading2>
          </StyledNanumSquareRound>

          <BlankLine gap={10} />

          {apiWritten.map((item) => {
            return (
              <CardWrapper key={item.id}>
                <Card columnStart={1} columnEnd={1} rowStart={1} rowEnd={1}>
                  <CardTitle>
                    <span role="img" aria-label="Anonymouslist">
                      📧{' '}
                    </span>
                    {item.title}
                  </CardTitle>
                  {item.content}
                  <BlankLine gap={10} />
                  <p>
                    →{' '}
                    <ReplyText isExists={!!item.reply[0]}>
                      {item.reply[0] ? item.reply[0].content : '답변대기중'}
                    </ReplyText>
                  </p>
                </Card>
                <BlankLine gap={30} />
              </CardWrapper>
            );
          })}
        </StyledContent>
      </MainSideBarContainer>
    </>
  );
};
export default AnonymousPage;
