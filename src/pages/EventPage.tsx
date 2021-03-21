import React from 'react';
import styled from 'styled-components';
import {
  BlankLine,
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
import { Helmet } from 'react-helmet';
import MainSideBar from '../components/MainSideBar';

const StyledContent = styled.div`
  margin: 3rem;
`;

const StyledParagraph = styled.p`
  margin-bottom: 10px;
  font-weight: bold;

  &:before {
    content: '- ';
  }
`;

const StyledInput = styled(Input)`
  @media screen and (max-width: ${SCREEN_SIZE.SCREEN_MOBILE}) {
    width: 100%;
  }
`;

const Highlight = styled.span`
  color: var(--color-button-hover);
`;

const EventPage: React.FC = () => {
  const onParticipateButton = () => {
    showToast('3월 29일부터 확인할 수 있습니다.', 'info');
  };

  return (
    <>
      <Helmet>
        <title>이벤트 - 수정과</title>
      </Helmet>

      <MainSideBarContainer>
        <MainSideBar />

        <StyledContent>
          <Heading1>이벤트</Heading1>
          <Heading3>런칭이벤트 당쳠 여부를 확인할 수 있습니다.</Heading3>

          <BlankLine gap={30} />

          <Heading2>수정과에 가입하고 보조배터리와 간식을 받아가세요!</Heading2>
          <b>
            추첨을 통해 <Highlight>간식(92명)</Highlight>과 <Highlight>보조배터리(1명)</Highlight>를
            드립니다.
          </b>

          <BlankLine gap={30} />

          <StyledParagraph>
            3월 26일(금)까지 가입한 사람은 자동으로 이벤트에 참여가 됩니다.
          </StyledParagraph>
          <StyledParagraph>1월 가입자는 당첨 확률이 상승합니다.</StyledParagraph>
          <StyledParagraph>
            3월 29일에 당첨 여부가 발표되며 아래에서 수동으로 확인할 수 있습니다.
            <br />
            이후 상품을 지급합니다. (지급 방법 추후 안내)
          </StyledParagraph>

          <BlankLine gap={30} />

          <Label htmlFor="e_number">학번을 입력하여 당첨 여부를 확인하세요.</Label>
          <StyledInput id="e_number" type="text" placeholder="ex. 30925" disabled />

          <BlankLine gap={10} />

          <MediumButton onClick={onParticipateButton}>확인하기</MediumButton>
        </StyledContent>
      </MainSideBarContainer>
    </>
  );
};

export default EventPage;
